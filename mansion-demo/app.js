(()=>{var nt={x:-17.7,z:-11.7,x1:-18.35,x2:-17.05,z1:-12.4,z2:-11,exitX:-16.6},Bi=[{y:-3.6,name:"\u5730\u4E0B\u4E00\u5C42"},{y:0,name:"\u4E00\u697C"},{y:3.6,name:"\u4E8C\u697C"},{y:7.2,name:"\u5929\u53F0"}];function Eh(i,e,t=0){return i>nt.x1-t&&i<nt.x2+t&&e>nt.z1-t&&e<nt.z2+t}function _d(i,e,t,n){let s=i-t/2,r=i+t/2,o=e-n/2,a=e+n/2;if(r<=nt.x1||s>=nt.x2||a<=nt.z1||o>=nt.z2)return[{x:i,z:e,w:t,d:n}];let c=Math.max(s,nt.x1),l=Math.min(r,nt.x2),h=Math.max(o,nt.z1),u=Math.min(a,nt.z2),d=[];for(let[f,g,v,m]of[[s,c,o,a],[l,r,o,a],[c,l,o,h],[c,l,u,a]])g-f>.001&&m-v>.001&&d.push({x:(f+g)/2,z:(v+m)/2,w:g-f,d:m-v});return d}var Wa=class{constructor(){this.y=0,this.phase="idle",this.door=1,this.target=0,this.origin=0,this.passenger=!1,this.boarding=0,this.exiting=0}request(e,t){return this.phase!=="idle"||!Bi.some(n=>n.y===e)||!Bi.some(n=>n.y===t)||e===t?!1:(this.origin=e,this.target=t,this.boarding=this.exiting=0,this.phase=Math.abs(this.y-e)<.001?this.door===1?"board":"pickupOpen":"recallClose",this.passenger=this.phase==="board",!0)}update(e){e=Math.min(.1,Math.max(0,e));let t=(n,s,r)=>n+Math.sign(s-n)*Math.min(Math.abs(s-n),r);if(this.phase==="recallClose"||this.phase==="close")this.door=t(this.door,0,e*2),this.door||(this.phase=this.phase==="close"?"travel":"recall");else if(this.phase==="recall"||this.phase==="travel"){let n=this.phase==="recall"?this.origin:this.target;this.y=t(this.y,n,e*1.8),this.y===n&&(this.phase=this.phase==="recall"?"pickupOpen":"open")}else if(this.phase==="pickupOpen")this.door=t(this.door,1,e*2),this.door===1&&(this.passenger=!0,this.phase="board");else if(this.phase==="board")this.passenger=!0,this.boarding=Math.min(1,this.boarding+e/.65),this.boarding===1&&(this.phase="close");else if(this.phase==="open")this.door=t(this.door,1,e*2),this.door===1&&(this.phase="exit");else if(this.phase==="exit"&&(this.exiting=Math.min(1,this.exiting+e/.65),this.exiting===1))return this.phase="idle",this.passenger=!1,"arrived";return null}};function vd(i,e,t){for(let n of[.55,.85,1.15])for(let s of[Math.PI/2,-Math.PI/2,Math.PI,0]){let r={x:i.x+Math.sin(e+s)*n,y:i.y,z:i.z+Math.cos(e+s)*n};if(t(r.x,r.z,r.y))return r}return null}var Xa=class{constructor(e){this.members=e,this.index=0,this.visited=new Set([0])}switchTo(e,t){return!Number.isInteger(e)||!this.members[e]?null:(this.members[this.index].position={...t},this.index=e,this.visited.add(e),{...this.members[e].position})}};var hp=0,Mu=1,up=2;var ea=1,nc=2,Hr=3,Wn=0,fn=1,Un=2,qt=0,Bs=1,ta=2,Su=3,bu=4,ic=5;var Xn=100,fp=101,dp=102,pp=103,mp=104,Qs=200,gp=201,xp=202,_p=203,Ml=204,Sl=205,na=206,vp=207,ia=208,yp=209,Mp=210,Sp=211,bp=212,Tp=213,wp=214,bl=0,Tl=1,wl=2,zs=3,Al=4,El=5,Cl=6,Rl=7,Tu=0,Ap=1,Ep=2,fi=0,sa=1,ra=2,oa=3,er=4,aa=5,la=6,ca=7,iu="attached",Cp="detached",wu=300,ys=301,tr=302,Wr=303,sc=304,ha=306,Kt=1e3,In=1001,Rr=1002,Ft=1003,rc=1004;var nr=1005;var vt=1006,Xr=1007;var yn=1008;var Mn=1009,Au=1010,Eu=1011,qr=1012,oc=1013,di=1014,Sn=1015,Dt=1016,ac=1017,lc=1018,Ms=1020,Cu=35902,Ru=35899,Pu=1021,Iu=1022,dn=1023,bi=1026,Pi=1027,cc=1028,hc=1029,Ss=1030,uc=1031;var fc=1033,ua=33776,fa=33777,da=33778,pa=33779,dc=35840,pc=35841,mc=35842,gc=35843,xc=36196,_c=37492,vc=37496,yc=37488,Mc=37489,ma=37490,Sc=37491,bc=37808,Tc=37809,wc=37810,Ac=37811,Ec=37812,Cc=37813,Rc=37814,Pc=37815,Ic=37816,Lc=37817,Dc=37818,Nc=37819,Uc=37820,Fc=37821,Oc=36492,Bc=36494,zc=36495,kc=36283,Vc=36284,ga=36285,Gc=36286;var ks=2300,Vs=2301,yl=2302,su=2303,ru=2400,ou=2401,au=2402,Rp=2500;var Lu=0,xa=1,Yr=2,Pp=3200;var _a=0,Ip=1,ts="",pt="srgb",ln="srgb-linear",Mo="linear",gt="srgb";var Us=7680;var lu=519,Lp=512,Dp=513,Np=514,Hc=515,Up=516,Fp=517,Wc=518,Op=519,Pl=35044;var Du="300 es",li=2e3,Pr=2001;function tg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ng(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bp(){let i=Ir("canvas");return i.style.display="block",i}var yd={},Lr=null;function So(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}function zp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=zp(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=zp(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Os(...i){let e=i.join(" ");e in yd||(yd[e]=!0,Be(...i))}function kp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Vp={[bl]:Tl,[wl]:Cl,[Al]:Rl,[zs]:El,[Tl]:bl,[Cl]:wl,[Rl]:Al,[El]:zs},Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,xo=Math.PI/180,Gs=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Nu(i,e){return(i%e+e)%e}function ig(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sg(i,e,t){return i!==e?(t-i)/(e-i):0}function _o(i,e,t){return(1-t)*i+t*e}function rg(i,e,t,n){return _o(i,e,1-Math.exp(-t*n))}function og(i,e=1){return e-Math.abs(Nu(i,e*2)-e)}function ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hg(i,e){return i+Math.random()*(e-i)}function ug(i){return i*(.5-Math.random())}function fg(i){i!==void 0&&(Md=i);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(i){return i*xo}function pg(i){return i*Gs}function mg(i){return(i&i-1)===0&&i!==0}function gg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _g(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bn={DEG2RAD:xo,RAD2DEG:Gs,generateUUID:Qn,clamp:at,euclideanModulo:Nu,mapLinear:ig,inverseLerp:sg,lerp:_o,damp:rg,pingpong:og,smoothstep:ag,smootherstep:lg,randInt:cg,randFloat:hg,randFloatSpread:ug,seededRandom:fg,degToRad:dg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:xg,setQuaternionFromProperEuler:_g,normalize:St,denormalize:ai},ku=class ku{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ku.prototype.isVector2=!0;var le=ku,sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+v*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+v*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vu=class Vu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vu.prototype.isVector3=!0;var N=Vu,Ch=new N,Sd=new sn,Gu=class Gu{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],b=s[4],M=s[7],w=s[2],A=s[5],_=s[8];return r[0]=o*v+a*y+c*w,r[3]=o*m+a*b+c*A,r[6]=o*p+a*M+c*_,r[1]=l*v+h*y+u*w,r[4]=l*m+h*b+u*A,r[7]=l*p+h*M+u*_,r[2]=d*v+f*y+g*w,r[5]=d*m+f*b+g*A,r[8]=d*p+f*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rh.makeScale(e,t)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rh.makeRotation(-e)),this}translate(e,t){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gu.prototype.isMatrix3=!0;var it=Gu,Rh=new it,bd=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){let i={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?Mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ln]:{primaries:e,whitePoint:n,transfer:Mo,toXYZ:bd,fromXYZ:Td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:bd,fromXYZ:Td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}var ot=vg();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pr,Il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=Ir("canvas")),pr.width=e.width,pr.height=e.height;let s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yg=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ph(s[o].image)):r.push(Ph(s[o]))}else r=Ph(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Mg=0,Ih=new N,jt=class i extends Ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=vt,o=yn,a=dn,c=Mn,l=i.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Qn(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kt:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kt:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=wu;jt.DEFAULT_ANISOTROPY=1;var Hu=class Hu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(f+1)/2,w=(p+1)/2,A=(h+d)/4,_=(u+v)/4,x=(g+m)/4;return b>M&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=_/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hu.prototype.isVector4=!0;var xt=Hu,Ll=class extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new jt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bo=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dl=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tc=class tc{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sg,e,bg)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),as.crossVectors(n,Gn),as.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),as.crossVectors(n,Gn)),as.normalize(),qa.crossVectors(Gn,as),s[0]=as.x,s[4]=qa.x,s[8]=Gn.x,s[1]=as.y,s[5]=qa.y,s[9]=Gn.y,s[2]=as.z,s[6]=qa.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],b=n[7],M=n[11],w=n[15],A=s[0],_=s[4],x=s[8],T=s[12],E=s[1],I=s[5],O=s[9],z=s[13],P=s[2],U=s[6],D=s[10],B=s[14],X=s[3],L=s[7],V=s[11],Y=s[15];return r[0]=o*A+a*E+c*P+l*X,r[4]=o*_+a*I+c*U+l*L,r[8]=o*x+a*O+c*D+l*V,r[12]=o*T+a*z+c*B+l*Y,r[1]=h*A+u*E+d*P+f*X,r[5]=h*_+u*I+d*U+f*L,r[9]=h*x+u*O+d*D+f*V,r[13]=h*T+u*z+d*B+f*Y,r[2]=g*A+v*E+m*P+p*X,r[6]=g*_+v*I+m*U+p*L,r[10]=g*x+v*O+m*D+p*V,r[14]=g*T+v*z+m*B+p*Y,r[3]=y*A+b*E+M*P+w*X,r[7]=y*_+b*I+M*U+w*L,r[11]=y*x+b*O+M*D+w*V,r[15]=y*T+b*z+M*B+w*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=c*f-l*d,b=a*f-l*u,M=a*d-c*u,w=o*f-l*h,A=o*d-c*h,_=o*u-a*h;return t*(v*y-m*b+p*M)-n*(g*y-m*w+p*A)+s*(g*b-v*w+p*_)-r*(g*M-v*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=t*a-n*o,b=t*c-s*o,M=t*l-r*o,w=n*c-s*a,A=n*l-r*a,_=s*l-r*c,x=h*v-u*g,T=h*m-d*g,E=h*p-f*g,I=u*m-d*v,O=u*p-f*v,z=d*p-f*m,P=y*z-b*O+M*I+w*E-A*T+_*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(a*z-c*O+l*I)*U,e[1]=(s*O-n*z-r*I)*U,e[2]=(v*_-m*A+p*w)*U,e[3]=(d*A-u*_-f*w)*U,e[4]=(c*E-o*z-l*T)*U,e[5]=(t*z-s*E+r*T)*U,e[6]=(m*M-g*_-p*b)*U,e[7]=(h*_-d*M+f*b)*U,e[8]=(o*O-a*E+l*x)*U,e[9]=(n*E-t*O-r*x)*U,e[10]=(g*A-v*M+p*y)*U,e[11]=(u*M-h*A-f*y)*U,e[12]=(a*T-o*I-c*x)*U,e[13]=(t*I-n*T+s*x)*U,e[14]=(v*b-g*w-m*y)*U,e[15]=(h*w-u*b+d*y)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,y=c*l,b=c*h,M=c*u,w=n.x,A=n.y,_=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+M)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+b)*_,s[9]=(m-y)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=mr.set(s[0],s[1],s[2]).length(),a=mr.set(s[4],s[5],s[6]).length(),c=mr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let l=1/o,h=1/a,u=1/c;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,t.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=li,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===li)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Pr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=li,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===li)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Pr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};tc.prototype.isMatrix4=!0;var Ve=tc,mr=new N,si=new Ve,Sg=new N(0,0,0),bg=new N(1,1,1),as=new N,qa=new N,Gn=new N,wd=new Ve,Ad=new sn,Yi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tg=0,Ed=new N,gr=new sn,zi=new Ve,Ya=new N,ao=new N,wg=new N,Ag=new sn,Cd=new N(1,0,0),Rd=new N(0,1,0),Pd=new N(0,0,1),Id={type:"added"},Eg={type:"removed"},xr={type:"childadded",child:null},Lh={type:"childremoved",child:null},Bt=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Yi,n=new sn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new it}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ao,Ya,this.up):zi.lookAt(Ya,ao,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(zi),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Id),xr.child=e,this.dispatchEvent(xr),xr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Id),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,Ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new N(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var et=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cg={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Nu(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Dh(o,r,e+1/3),this.g=Dh(o,r,e),this.b=Dh(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ot.workingToColorSpace(_n.copy(this),e),Math.round(at(_n.r*255,0,255))*65536+Math.round(at(_n.g*255,0,255))*256+Math.round(at(_n.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(_n.copy(this),t);let n=_n.r,s=_n.g,r=_n.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=pt){ot.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,s=_n.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Za);let n=_o(ls.h,Za.h,t),s=_o(ls.s,Za.s,t),r=_o(ls.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Ie;Ie.NAMES=Gp;var To=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Hs=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new N,ki=new N,Nh=new N,Vi=new N,_r=new N,vr=new N,Ld=new N,Uh=new N,Fh=new N,Oh=new N,Bh=new xt,zh=new xt,kh=new xt,ds=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),ki.subVectors(n,t),Nh.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(ki),c=ri.dot(Nh),l=ki.dot(ki),h=ki.dot(Nh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Bh.setScalar(0),zh.setScalar(0),kh.setScalar(0),Bh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,n),kh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bh,r.x),o.addScaledVector(zh,r.y),o.addScaledVector(kh,r.z),o}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),ki.subVectors(e,t),ri.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ri.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;_r.subVectors(s,n),vr.subVectors(r,n),Uh.subVectors(e,n);let c=_r.dot(Uh),l=vr.dot(Uh);if(c<=0&&l<=0)return t.copy(n);Fh.subVectors(e,s);let h=_r.dot(Fh),u=vr.dot(Fh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(_r,o);Oh.subVectors(e,r);let f=_r.dot(Oh),g=vr.dot(Oh);if(g>=0&&f<=g)return t.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(vr,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ld.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ld,a);let p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(_r,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ja.subVectors(this.max,lo),yr.subVectors(e.a,lo),Mr.subVectors(e.b,lo),Sr.subVectors(e.c,lo),cs.subVectors(Mr,yr),hs.subVectors(Sr,Mr),Is.subVectors(yr,Sr);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Is.z,Is.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Is.z,0,-Is.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Is.y,Is.x,0];return!Vh(t,yr,Mr,Sr,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Vh(t,yr,Mr,Sr,Ja))?!1:($a.crossVectors(cs,hs),t=[$a.x,$a.y,$a.z],Vh(t,yr,Mr,Sr,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new N,new N,new N,new N,new N,new N,new N,new N],oi=new N,Ka=new cn,yr=new N,Mr=new N,Sr=new N,cs=new N,hs=new N,Is=new N,lo=new N,Ja=new N,$a=new N,Ls=new N;function Vh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ls.fromArray(i,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=e.dot(Ls),l=t.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Xi=Rg();function Rg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Pg(i){Math.abs(i)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),Xi.floatView[0]=i;let e=Xi.uint32View[0],t=e>>23&511;return Xi.baseTable[t]+((e&8388607)>>Xi.shiftTable[t])}function Ig(i){let e=i>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(i&1023)]+Xi.exponentTable[e],Xi.floatView[0]}var ps=class{static toHalfFloat(e){return Pg(e)}static fromHalfFloat(e){return Ig(e)}},Zt=new N,ja=new le,Lg=0,Ct=class extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var wo=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ao=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dg=new cn,co=new N,Gh=new N,Ln=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(co,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Gh)),this.expandByPoint(co.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ng=0,$n=new Ve,Hh=new Bt,br=new N,Hn=new cn,ho=new cn,nn=new N,Mt=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?Ao:wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Hn.min,ho.min),Hn.expandByPoint(nn),nn.addVectors(Hn.max,ho.max),Hn.expandByPoint(nn)):(Hn.expandByPoint(ho.min),Hn.expandByPoint(ho.max))}Hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)nn.fromBufferAttribute(a,l),c&&(br.fromBufferAttribute(e,l),nn.add(br)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new N,c[x]=new N;let l=new N,h=new N,u=new N,d=new le,f=new le,g=new le,v=new N,m=new N;function p(x,T,E){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[x].add(v),a[T].add(v),a[E].add(v),c[x].add(m),c[T].add(m),c[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let E=y[x],I=E.start,O=E.count;for(let z=I,P=I+O;z<P;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let b=new N,M=new N,w=new N,A=new N;function _(x){w.fromBufferAttribute(s,x),A.copy(w);let T=a[x];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(A,T);let I=M.dot(c[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,T=y.length;x<T;++x){let E=y[x],I=E.start,O=E.count;for(let z=I,P=I+O;z<P;z+=3)_(e.getX(z+0)),_(e.getX(z+1)),_(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ct(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new N,Or=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ug=0,Cn=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Bs,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Hi=new N,Wh=new N,Qa=new N,us=new N,Xh=new N,el=new N,qh=new N,wi=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wh.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Wh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qa),a=us.dot(this.direction),c=-us.dot(Qa),l=us.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wh).addScaledVector(Qa,d),f}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){Xh.subVectors(t,e),el.subVectors(n,e),qh.crossVectors(Xh,el);let o=this.direction.dot(qh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);let c=a*this.direction.dot(el.crossVectors(us,el));if(c<0)return null;let l=a*this.direction.dot(Xh.cross(us));if(l<0||c+l>o)return null;let h=-a*us.dot(qh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dd=new Ve,Ds=new wi,tl=new Ln,Nd=new N,nl=new N,il=new N,sl=new N,Yh=new N,rl=new N,Ud=new N,ol=new N,Ue=class extends Bt{constructor(e=new Mt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){rl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Yh.fromBufferAttribute(u,e),o?rl.addScaledVector(Yh,h):rl.addScaledVector(Yh.sub(t),h))}t.add(rl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(tl.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(tl,Nd)===null||Ds.origin.distanceToSquared(Nd)>(e.far-e.near)**2))&&(Dd.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let A=a.getX(M),_=a.getX(M+1),x=a.getX(M+2);s=al(this,p,e,n,l,h,u,A,_,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=al(this,o,e,n,l,h,u,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let A=M,_=M+1,x=M+2;s=al(this,p,e,n,l,h,u,A,_,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=m,b=m+1,M=m+2;s=al(this,o,e,n,l,h,u,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fg(i,e,t,n,s,r,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Wn,a),c===null)return null;ol.copy(a),ol.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ol);return l<t.near||l>t.far?null:{distance:l,point:ol.clone(),object:i}}function al(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,nl),i.getVertexPosition(c,il),i.getVertexPosition(l,sl);let h=Fg(i,e,t,n,nl,il,sl,Ud);if(h){let u=new N;ds.getBarycoord(Ud,nl,il,sl,u),s&&(h.uv=ds.getInterpolatedAttribute(s,a,c,l,u,new le)),r&&(h.uv1=ds.getInterpolatedAttribute(r,a,c,l,u,new le)),o&&(h.normal=ds.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};ds.getNormal(nl,il,sl,d.normal),h.face=d,h.barycoord=u}return h}var uo=new xt,Fd=new xt,Od=new xt,Og=new xt,Bd=new Ve,ll=new N,Zh=new Ln,zd=new Ve,Kh=new wi,Eo=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=iu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingBox.expandByPoint(ll)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingSphere.expandByPoint(ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zh.copy(this.boundingSphere),Zh.applyMatrix4(s),e.ray.intersectsSphere(Zh)!==!1&&(zd.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(zd),!(this.boundingBox!==null&&Kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Fd.fromBufferAttribute(s.attributes.skinIndex,e),Od.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(uo.copy(t),t.set(0,0,0,0)):(uo.set(...t,1),t.set(0,0,0)),uo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Od.getComponent(r);if(o!==0){let a=Fd.getComponent(r);Bd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Og.copy(uo).applyMatrix4(Bd),o)}}return t.isVector4&&(t.w=uo.w),t.applyMatrix4(this.bindMatrixInverse)}},Br=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},hn=class extends jt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ft,h=Ft,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new Ve,Bg=new Ve,Co=class i{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Bg;kd.multiplyMatrices(a,t[r]),kd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new hn(t,e,e,dn,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Be("Skeleton: No bone found with UUID:",r),o=new Br),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ms=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Tr=new Ve,Vd=new Ve,cl=[],Gd=new cn,zg=new Ve,fo=new Ue,po=new Ln,Ai=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Gd.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),po.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(n),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),Vd.multiplyMatrices(n,Tr),fo.matrixWorld=Vd,fo.raycast(e,cl);for(let o=0,a=cl.length;o<a;o++){let c=cl[o];c.instanceId=r,c.object=this,t.push(c)}cl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hn(new Float32Array(s*this.count),s,this.count,cc,Sn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jh=new N,kg=new N,Vg=new it,jn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Jh.subVectors(n,t).cross(kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Jh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vg.getNormalMatrix(e),s=this.coplanarPoint(Jh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ns=new Ln,Gg=new le(.5,.5),hl=new N,gs=class{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,p-g,w-y).normalize(),s[1].setComponents(l+o,f+h,p+g,w+y).normalize(),s[2].setComponents(l+a,f+u,p+v,w+b).normalize(),s[3].setComponents(l-a,f-u,p-v,w-b).normalize(),n)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,f-d,p-m,w-M).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-M).normalize(),t===li)s[5].setComponents(l+c,f+d,p+m,w+M).normalize();else if(t===Pr)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);let t=Gg.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(hl.x=s.normal.x>0?e.max.x:e.min.x,hl.y=s.normal.y>0?e.max.y:e.min.y,hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xs=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nl=new N,Ul=new N,Hd=new Ve,mo=new wi,ul=new Ln,$h=new N,Wd=new N,Ws=class extends Bt{constructor(e=new Mt,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nl.fromBufferAttribute(t,s-1),Ul.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nl.distanceTo(Ul);e.setAttribute("lineDistance",new lt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Hd.copy(s).invert(),mo.copy(e.ray).applyMatrix4(Hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){let p=h.getX(v),y=h.getX(v+1),b=fl(this,e,mo,c,p,y,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=fl(this,e,mo,c,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){let p=fl(this,e,mo,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=fl(this,e,mo,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Nl.fromBufferAttribute(a,s),Ul.fromBufferAttribute(a,r),t.distanceSqToSegment(Nl,Ul,$h,Wd)>n)return;$h.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo($h);if(!(l<e.near||l>e.far))return{distance:l,point:Wd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Xd=new N,qd=new N,Xs=class extends Ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xd.distanceTo(qd);e.setAttribute("lineDistance",new lt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ro=class extends Ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_s=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new Ve,cu=new wi,dl=new Ln,pl=new N,qs=class extends Bt{constructor(e=new Mt,t=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;Yd.copy(s).invert(),cu.copy(e.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let m=l.getX(g);pl.fromBufferAttribute(u,m),Zd(pl,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)pl.fromBufferAttribute(u,g),Zd(pl,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zd(i,e,t,n,s,r,o){let a=cu.distanceSqToPoint(i);if(a<t){let c=new N;cu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Po=class extends jt{constructor(e=[],t=ys,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qn=class extends jt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends jt{constructor(e,t,n=di,s,r,o,a=Ft,c=Ft,l,h=bi,u=1){if(h!==bi&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fl=class extends ci{constructor(e,t=di,n=ys,s,r,o=Ft,a=Ft,c,l=bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Io=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jt=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(v,m,p,y,b,M,w,A,_,x,T){let E=M/_,I=w/x,O=M/2,z=w/2,P=A/2,U=_+1,D=x+1,B=0,X=0,L=new N;for(let V=0;V<D;V++){let Y=V*I-z;for(let $=0;$<U;$++){let ae=$*E-O;L[v]=ae*y,L[m]=Y*b,L[p]=P,l.push(L.x,L.y,L.z),L[v]=0,L[m]=0,L[p]=A>0?1:-1,h.push(L.x,L.y,L.z),u.push($/_),u.push(1-V/x),B+=1}}for(let V=0;V<x;V++)for(let Y=0;Y<_;Y++){let $=d+Y+U*V,ae=d+Y+U*(V+1),Se=d+(Y+1)+U*(V+1),Ee=d+(Y+1)+U*V;c.push($,ae,Ee),c.push(ae,Se,Ee),X+=6}a.addGroup(f,X,T),f+=X,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Lo=class i extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,v=s+1,m=new N,p=new N;for(let y=0;y<=g;y++){let b=0,M=0,w=0,A=0;if(y<=n){let T=y/n,E=T*Math.PI/2;M=-h-e*Math.cos(E),w=e*Math.sin(E),A=-e*Math.cos(E),b=T*u}else if(y<=n+r){let T=(y-n)/r;M=-h+T*t,w=e,A=0,b=u+T*d}else{let T=(y-n-r)/n,E=T*Math.PI/2;M=h+e*Math.sin(E),w=e*Math.cos(E),A=e*Math.sin(E),b=u+d+T*u}let _=Math.max(0,Math.min(1,b/f)),x=0;y===0?x=.5/s:y===g&&(x=-.5/s);for(let T=0;T<=s;T++){let E=T/s,I=E*Math.PI*2,O=Math.sin(I),z=Math.cos(I);p.x=-w*z,p.y=M,p.z=w*O,a.push(p.x,p.y,p.z),m.set(-w*z,A,w*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(E+x,_)}if(y>0){let T=(y-1)*v;for(let E=0;E<s;E++){let I=T+E,O=T+E+1,z=y*v+E,P=y*v+E+1;o.push(I,O,z),o.push(O,P,z)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Do=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new N,h=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vn=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){let M=new N,w=new N,A=0,_=(t-e)/n;for(let x=0;x<=r;x++){let T=[],E=x/r,I=E*(t-e)+e;for(let O=0;O<=s;O++){let z=O/s,P=z*c+a,U=Math.sin(P),D=Math.cos(P);w.x=I*U,w.y=-E*n+m,w.z=I*D,u.push(w.x,w.y,w.z),M.set(U,_,D).normalize(),d.push(M.x,M.y,M.z),f.push(z,1-E),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let E=v[T][x],I=v[T+1][x],O=v[T+1][x+1],z=v[T][x+1];(e>0||T!==0)&&(h.push(E,I,z),A+=3),(t>0||T!==r-1)&&(h.push(I,O,z),A+=3)}l.addGroup(p,A,0),p+=A}function b(M){let w=g,A=new le,_=new N,x=0,T=M===!0?e:t,E=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let I=g;for(let O=0;O<=s;O++){let P=O/s*c+a,U=Math.cos(P),D=Math.sin(P);_.x=T*D,_.y=m*E,_.z=T*U,u.push(_.x,_.y,_.z),d.push(0,E,0),A.x=U*.5+.5,A.y=D*.5*E+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let z=w+O,P=I+O;M===!0?h.push(P,P+1,z):h.push(P+1,P,z),x+=3}l.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hi=class i extends vn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ol=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new N,M=new N,w=new N;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],M),f(t[A+2],w),c(b,M,w,y)}function c(y,b,M,w){let A=w+1,_=[];for(let x=0;x<=A;x++){_[x]=[];let T=y.clone().lerp(M,x/A),E=b.clone().lerp(M,x/A),I=A-x;for(let O=0;O<=I;O++)O===0&&x===A?_[x][O]=T:_[x][O]=T.clone().lerp(E,O/I)}for(let x=0;x<A;x++)for(let T=0;T<2*(A-x)-1;T++){let E=Math.floor(T/2);T%2===0?(d(_[x][E+1]),d(_[x+1][E]),d(_[x][E])):(d(_[x][E+1]),d(_[x+1][E+1]),d(_[x+1][E]))}}function l(y){let b=new N;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new N;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(M,1-w)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],w=o[y+4],A=Math.max(b,M,w),_=Math.min(b,M,w);A>.9&&_<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){let y=new N,b=new N,M=new N,w=new N,A=new le,_=new le,x=new le;for(let T=0,E=0;T<r.length;T+=9,E+=6){y.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),A.set(o[E+0],o[E+1]),_.set(o[E+2],o[E+3]),x.set(o[E+4],o[E+5]),w.copy(y).add(b).add(M).divideScalar(3);let I=m(w);v(A,E+0,y,I),v(_,E+2,b,I),v(x,E+4,M,I)}}function v(y,b,M,w){w<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new Ve;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bl=class extends zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Kd=new N,Jd=new N,jh=new Uu,Qh=new Uu,eu=new Uu,zl=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Jd.subVectors(s[0],s[1]).add(s[0]),l=Jd);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Kd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),jh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Qh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),eu.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Qh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),eu.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(jh.calc(c),Qh.calc(c),eu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $d(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Hg(i,e){let t=1-i;return t*t*e}function Wg(i,e){return 2*(1-i)*i*e}function Xg(i,e){return i*i*e}function vo(i,e,t,n){return Hg(i,e)+Wg(i,t)+Xg(i,n)}function qg(i,e){let t=1-i;return t*t*t*e}function Yg(i,e){let t=1-i;return 3*t*t*i*e}function Zg(i,e){return 3*(1-i)*i*i*e}function Kg(i,e){return i*i*i*e}function yo(i,e,t,n,s){return qg(i,e)+Yg(i,t)+Zg(i,n)+Kg(i,s)}var No=class extends Yn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kl=class extends Yn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,s.x,r.x,o.x,a.x),yo(e,s.y,r.y,o.y,a.y),yo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uo=class extends Yn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends Yn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Yn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gl=class extends Yn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,s.x,r.x,o.x),vo(e,s.y,r.y,o.y),vo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set($d(a,c.x,l.x,h.x,u.x),$d(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},hu=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:zl,CubicBezierCurve:No,CubicBezierCurve3:kl,EllipseCurve:zr,LineCurve:Uo,LineCurve3:Vl,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:Gl,SplineCurve:Oo}),Hl=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new hu[s.type]().fromJSON(s))}return this}},Bo=class extends Hl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Uo(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fo(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new No(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new zr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kr=class extends Bo{constructor(e){super(e),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Bo().fromJSON(s))}return this}};function Jg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tx(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return zo(r,o,t,a,c,l,0),o}function Hp(i,e,t,n,s){let r;if(s===fx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=jd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=jd(o/n|0,i[o],i[o+1],r);return r&&Vr(r,r.next)&&(Vo(r),r=r.next),r}function Ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vr(t,t.next)||kt(t.prev,t,t.next)===0)){if(Vo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ox(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?jg(i,n,s,r):$g(i)){e.push(c.i,i.i,l.i),Vo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Qg(Ys(i),e),zo(i,e,t,n,s,r,2)):o===2&&ex(i,e,t,n,s,r):zo(Ys(i),e,t,n,s,r,1);break}}}function $g(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&go(s,a,r,c,o,l,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(kt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),v=Math.max(a,c,l),m=Math.max(h,u,d),p=uu(f,g,e,t,n),y=uu(v,m,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=y;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&go(a,h,c,u,l,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&go(a,h,c,u,l,d,M.x,M.y)&&kt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&go(a,h,c,u,l,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&go(a,h,c,u,l,d,M.x,M.y)&&kt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Qg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Vr(n,s)&&Xp(n,t,t.next,s)&&ko(n,s)&&ko(s,n)&&(e.push(n.i,t.i,s.i),Vo(t),Vo(t.next),t=i=s),t=t.next}while(t!==i);return Ys(t)}function ex(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cx(o,a)){let c=qp(o,a);o=Ys(o,o.next),c=Ys(c,c.next),zo(o,e,t,n,s,r,0),zo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Hp(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(lx(l))}s.sort(nx);for(let r=0;r<s.length;r++)t=ix(s[r],t);return t}function nx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ix(i,e){let t=sx(i,e);if(!t)return e;let n=qp(t,i);return Ys(n,n.next),Ys(t,t.next)}function sx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Vr(i,t))return t;do{if(Vr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Wp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ko(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&rx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function rx(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function ox(i,e,t,n){let s=i;do s.z===0&&(s.z=uu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ax(s)}function ax(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function uu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function go(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Wp(i,e,t,n,s,r,o,a)}function cx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hx(i,e)&&(ko(i,e)&&ko(e,i)&&ux(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||Vr(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vr(i,e){return i.x===e.x&&i.y===e.y}function Xp(i,e,t,n){let s=gl(kt(i,e,t)),r=gl(kt(i,e,n)),o=gl(kt(t,n,i)),a=gl(kt(t,n,e));return!!(s!==r&&o!==a||s===0&&ml(i,t,e)||r===0&&ml(i,n,e)||o===0&&ml(t,i,n)||a===0&&ml(t,e,n))}function ml(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gl(i){return i>0?1:i<0?-1:0}function hx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ko(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function ux(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qp(i,e){let t=fu(i.i,i.x,i.y),n=fu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jd(i,e,t,n){let s=fu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var du=class{static triangulate(e,t,n=2){return Jg(e,t,n)}},Fs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Qd(e),ep(n,e);let o=e.length;t.forEach(Qd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ep(n,t[c]);let a=du.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Qd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ep(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Go=class i extends Mt{constructor(e=new kr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:dx,b,M=!1,w,A,_,x;if(p){b=p.getSpacedPoints(h),M=!0,d=!1;let R=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,R),A=new N,_=new N,x=new N}d||(m=0,f=0,g=0,v=0);let T=a.extractPoints(l),E=T.shape,I=T.holes;if(!Fs.isClockWise(E)){E=E.reverse();for(let R=0,k=I.length;R<k;R++){let H=I[R];Fs.isClockWise(H)&&(I[R]=H.reverse())}}function z(R){let H=10000000000000001e-36,J=R[0];for(let K=1;K<=R.length;K++){let ue=K%R.length,he=R[ue],me=he.x-J.x,de=he.y-J.y,G=me*me+de*de,We=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(J.x),Math.abs(J.y)),$e=H*We*We;if(G<=$e){R.splice(ue,1),K--;continue}J=he}}z(E),I.forEach(z);let P=I.length,U=E;for(let R=0;R<P;R++){let k=I[R];E=E.concat(k)}function D(R,k,H){return k||je("ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(k,H)}let B=E.length;function X(R,k,H){let J,K,ue,he=R.x-k.x,me=R.y-k.y,de=H.x-R.x,G=H.y-R.y,We=he*he+me*me,$e=he*G-me*de;if(Math.abs($e)>Number.EPSILON){let F=Math.sqrt(We),S=Math.sqrt(de*de+G*G),Z=k.x-me/F,j=k.y+he/F,ie=H.x-G/S,xe=H.y+de/S,_e=((ie-Z)*G-(xe-j)*de)/(he*G-me*de);J=Z+he*_e-R.x,K=j+me*_e-R.y;let se=J*J+K*K;if(se<=2)return new le(J,K);ue=Math.sqrt(se/2)}else{let F=!1;he>Number.EPSILON?de>Number.EPSILON&&(F=!0):he<-Number.EPSILON?de<-Number.EPSILON&&(F=!0):Math.sign(me)===Math.sign(G)&&(F=!0),F?(J=-me,K=he,ue=Math.sqrt(We)):(J=he,K=me,ue=Math.sqrt(We/2))}return new le(J/ue,K/ue)}let L=[];for(let R=0,k=U.length,H=k-1,J=R+1;R<k;R++,H++,J++)H===k&&(H=0),J===k&&(J=0),L[R]=X(U[R],U[H],U[J]);let V=[],Y,$=L.concat();for(let R=0,k=P;R<k;R++){let H=I[R];Y=[];for(let J=0,K=H.length,ue=K-1,he=J+1;J<K;J++,ue++,he++)ue===K&&(ue=0),he===K&&(he=0),Y[J]=X(H[J],H[ue],H[he]);V.push(Y),$=$.concat(Y)}let ae;if(m===0)ae=Fs.triangulateShape(U,I);else{let R=[],k=[];for(let H=0;H<m;H++){let J=H/m,K=f*Math.cos(J*Math.PI/2),ue=g*Math.sin(J*Math.PI/2)+v;for(let he=0,me=U.length;he<me;he++){let de=D(U[he],L[he],ue);Le(de.x,de.y,-K),J===0&&R.push(de)}for(let he=0,me=P;he<me;he++){let de=I[he];Y=V[he];let G=[];for(let We=0,$e=de.length;We<$e;We++){let F=D(de[We],Y[We],ue);Le(F.x,F.y,-K),J===0&&G.push(F)}J===0&&k.push(G)}}ae=Fs.triangulateShape(R,k)}let Se=ae.length,Ee=g+v;for(let R=0;R<B;R++){let k=d?D(E[R],$[R],Ee):E[R];M?(_.copy(w.normals[0]).multiplyScalar(k.x),A.copy(w.binormals[0]).multiplyScalar(k.y),x.copy(b[0]).add(_).add(A),Le(x.x,x.y,x.z)):Le(k.x,k.y,0)}for(let R=1;R<=h;R++)for(let k=0;k<B;k++){let H=d?D(E[k],$[k],Ee):E[k];M?(_.copy(w.normals[R]).multiplyScalar(H.x),A.copy(w.binormals[R]).multiplyScalar(H.y),x.copy(b[R]).add(_).add(A),Le(x.x,x.y,x.z)):Le(H.x,H.y,u/h*R)}for(let R=m-1;R>=0;R--){let k=R/m,H=f*Math.cos(k*Math.PI/2),J=g*Math.sin(k*Math.PI/2)+v;for(let K=0,ue=U.length;K<ue;K++){let he=D(U[K],L[K],J);Le(he.x,he.y,u+H)}for(let K=0,ue=I.length;K<ue;K++){let he=I[K];Y=V[K];for(let me=0,de=he.length;me<de;me++){let G=D(he[me],Y[me],J);M?Le(G.x,G.y+b[h-1].y,b[h-1].x+H):Le(G.x,G.y,u+H)}}}ne(),ge();function ne(){let R=s.length/3;if(d){let k=0,H=B*k;for(let J=0;J<Se;J++){let K=ae[J];Fe(K[2]+H,K[1]+H,K[0]+H)}k=h+m*2,H=B*k;for(let J=0;J<Se;J++){let K=ae[J];Fe(K[0]+H,K[1]+H,K[2]+H)}}else{for(let k=0;k<Se;k++){let H=ae[k];Fe(H[2],H[1],H[0])}for(let k=0;k<Se;k++){let H=ae[k];Fe(H[0]+B*h,H[1]+B*h,H[2]+B*h)}}n.addGroup(R,s.length/3-R,0)}function ge(){let R=s.length/3,k=0;fe(U,k),k+=U.length;for(let H=0,J=I.length;H<J;H++){let K=I[H];fe(K,k),k+=K.length}n.addGroup(R,s.length/3-R,1)}function fe(R,k){let H=R.length;for(;--H>=0;){let J=H,K=H-1;K<0&&(K=R.length-1);for(let ue=0,he=h+m*2;ue<he;ue++){let me=B*ue,de=B*(ue+1),G=k+J+me,We=k+K+me,$e=k+K+de,F=k+J+de;Ge(G,We,$e,F)}}}function Le(R,k,H){c.push(R),c.push(k),c.push(H)}function Fe(R,k,H){ht(R),ht(k),ht(H);let J=s.length/3,K=y.generateTopUV(n,s,J-3,J-2,J-1);Ke(K[0]),Ke(K[1]),Ke(K[2])}function Ge(R,k,H,J){ht(R),ht(k),ht(J),ht(k),ht(H),ht(J);let K=s.length/3,ue=y.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);Ke(ue[0]),Ke(ue[1]),Ke(ue[3]),Ke(ue[1]),Ke(ue[2]),Ke(ue[3])}function ht(R){s.push(c[R*3+0]),s.push(c[R*3+1]),s.push(c[R*3+2])}function Ke(R){r.push(R.x),r.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return px(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hu[s.type]().fromJSON(s)),new i(n,e.options)}},dx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,c),new le(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-u),new le(d,1-g),new le(v,1-p)]:[new le(a,1-c),new le(h,1-u),new le(f,1-g),new le(m,1-p)]}};function px(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zs=class i extends Ol{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ho=class i extends Mt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new N,d=new le,f=new N,g=new N,v=new N,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){let b=n+y*h*s,M=Math.sin(b),w=Math.cos(b);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*w,o.push(u.x,u.y,u.z),d.x=y/t,d.y=A/(e.length-1),a.push(d.x,d.y);let _=c[3*A+0]*M,x=c[3*A+1],T=c[3*A+0]*w;l.push(_,x,T)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let M=b+y*e.length,w=M,A=M+e.length,_=M+e.length+1,x=M+1;r.push(w,A,x),r.push(_,x,A)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Zi=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let b=0;b<l;b++){let M=b*u-r;g.push(M,-y,0),v.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let b=y+l*p,M=y+l*(p+1),w=y+1+l*(p+1),A=y+1+l*p;f.push(b,M,A),f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var un=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,d=new N,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,M=o+b*a,w=e*Math.cos(M),A=Math.sqrt(e*e-w*w),_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let x=0;x<=t;x++){let T=x/t,E=s+T*r;u.x=-A*Math.cos(E),u.y=w,u.z=A*Math.sin(E),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+_,1-b),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let b=h[p][y+1],M=h[p][y],w=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&f.push(b,M,A),(p!==n-1||c<Math.PI)&&f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ei=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new N,f=new N,g=new N;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,b=(s+1)*(v-1)+m,M=(s+1)*v+m;c.push(p,y,M),c.push(y,b,M)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(tp(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(tp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=ir(i[t]);for(let s in n)e[s]=n[s]}return e}function tp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var on={clone:ir,merge:Tn},gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gr=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},st=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dn=class extends st{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wo=class extends Cn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Wl=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _x(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function np(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function vx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ql=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,c=2*n-t;break;case au:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+y*o[l+w]+b*o[c+w]+M*o[u+w];return r}},Yl=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Zl=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kl=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*v+o[c+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let v=o[l+g],m=o[c+g],p=f*d+g*2,y=u[p],b=u[p+1],M=e*d+g*2,w=h[M],A=h[M+1],_=(n-t)/(s-t),x,T,E,I,O;for(let z=0;z<8;z++){x=_*_,T=x*_,E=1-_,I=E*E,O=I*E;let U=O*t+3*I*_*y+3*E*x*w+T*s-n;if(Math.abs(U)<1e-10)break;let D=3*I*(y-t)+6*E*_*(w-y)+3*x*(s-w);if(Math.abs(D)<1e-10)break;_=_-U/D,_=Math.max(0,Math.min(1,_))}r[g]=O*v+3*I*_*b+3*E*x*A+T*m}return r}},Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xl(t,this.TimeBufferType),this.values=xl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xl(e.times,Array),values:xl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break;case su:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return yl;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){je("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ng(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Vs;var Ki=class extends Nn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ks;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Xo.prototype.ValueTypeName="color";var Ji=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Ji.prototype.ValueTypeName="number";var Jl=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},$i=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Nn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=ks;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};vs.prototype.ValueTypeName="vector";var qo=class{constructor(e="",t=-1,n=[],s=Rp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mx(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=_x(c);c=np(c,1,h),l=np(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ji(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function yx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Xo;case"quaternion":return $i;case"bool":case"boolean":return Ki;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Mx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yx(i.type);if(i.times===void 0){let t=[],n=[];vx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ip(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ip(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ip(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var $l=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yp=new $l,ui=class{constructor(e){this.manager=e!==void 0?e:Yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},pu=class extends Error{constructor(e,t){super(e),this.response=t}},Ks=class extends ui{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:s});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Wi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{v+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let A=0,_=h.length;A<_;A++){let x=h[A];x.onProgress&&x.onProgress(w)}p.enqueue(M),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new pu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Si.add(`file:${e}`,l);let h=Wi[e];delete Wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wr=new WeakMap,jl=class extends ui{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=wr.get(o);u===void 0&&(u=[],wr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Ir("img");function c(){h(),t&&t(this);let u=wr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}wr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Si.remove(`image:${e}`);let d=wr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}wr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Yo=class extends ui{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new hn,a=new Ks(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):je(h);return}r._applyTexData(o,l),t&&t(o,l)},n,s),o}createDataTexture(e){let t=new hn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:In,e.wrapT=t.wrapT!==void 0?t.wrapT:In,e.magFilter=t.magFilter!==void 0?t.magFilter:vt,e.minFilter=t.minFilter!==void 0?t.minFilter:vt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=yn),t.mipmapCount===1&&(e.minFilter=vt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Js=class extends ui{constructor(e){super(e)}load(e,t,n,s){let r=new jt,o=new jl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},$s=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},js=class extends $s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tu=new Ve,sp=new N,rp=new N,Zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(sp),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_l=new N,vl=new sn,Mi=new N,Ko=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_l,vl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,vl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_l,vl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,vl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new N,op=new le,ap=new le,Ut=class extends Ko{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,op,ap),t.subVectors(ap,op)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mu=class extends Zo{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Jo=class extends $s{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},gu=class extends Zo{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},Zn=class extends $s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ri=class extends Ko{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xu=class extends Zo{constructor(){super(new Ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new xu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nu=new WeakMap,$o=class extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{nu.has(o)===!0?(s&&s(nu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Si.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),nu.set(c,l),Si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=-90,Er=1,Ql=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Ar,Er,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Ar,Er,e,t);r.layers=this.layers,this.add(r);let o=new Ut(Ar,Er,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Ar,Er,e,t);a.layers=this.layers,this.add(a);let c=new Ut(Ar,Er,e,t);c.layers=this.layers,this.add(c);let l=new Ut(Ar,Er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ec=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Sx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Sx(){this._document.hidden===!1&&this.reset()}var Ou="\\[\\]\\.:\\/",bx=new RegExp("["+Ou+"]","g"),Bu="[^"+Ou+"]",Tx="[^"+Ou.replace("\\.","")+"]",wx=/((?:WC+[\/:])*)/.source.replace("WC",Bu),Ax=/(WCOD+)?/.source.replace("WCOD",Tx),Ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),Cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),Rx=new RegExp("^"+wx+Ax+Ex+Cx+"$"),Px=["material","materials","bones","map"],_u=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bx,"")}static parseTrackName(e){let t=Rx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=_u;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sS=new Float32Array(1);var lp=new Ve,Qo=class{constructor(e,t,n=0,s=1/0){this.ray=new wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lp),this}intersectObject(e,t=!0,n=[]){return vu(e,this,n,t),n.sort(cp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vu(e[s],this,n,t);return n.sort(cp),n}};function cp(i,e){return i.distance-e.distance}function vu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)vu(r[o],e,t,!0)}}var Wu=class Wu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Wu.prototype.isMatrix2=!0;var yu=Wu;function zu(i,e,t,n){let s=Ix(n);switch(t){case Pu:return i*e;case cc:return i*e/s.components*s.byteLength;case hc:return i*e/s.components*s.byteLength;case Ss:return i*e*2/s.components*s.byteLength;case uc:return i*e*2/s.components*s.byteLength;case Iu:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case fc:return i*e*4/s.components*s.byteLength;case ua:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:case gc:return Math.max(i,16)*Math.max(e,8)/4;case dc:case mc:return Math.max(i,8)*Math.max(e,8)/2;case xc:case _c:case yc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vc:case ma:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Bc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ga:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(i){switch(i){case Mn:case Au:return{byteLength:1,components:1};case qr:case Eu:case Dt:return{byteLength:2,components:1};case ac:case lc:return{byteLength:2,components:4};case di:case oc:case Sn:return{byteLength:4,components:1};case Cu:case Ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function gm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
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
#endif`,Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kx=`#ifdef USE_AOMAP
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
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
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
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yx=`#ifdef USE_IRIDESCENCE
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
#endif`,Zx=`#ifdef USE_BUMPMAP
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,i_=`#define PI 3.141592653589793
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
} // validated`,s_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r_=`vec3 transformedNormal = objectNormal;
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
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h_="gl_FragColor = linearToOutputTexel( gl_FragColor );",u_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,__=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
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
}`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,A_=`#ifdef USE_ENVMAP
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
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I_=`PhysicalMaterial material;
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
#endif`,L_=`uniform sampler2D dfgLUT;
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
}`,D_=`
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
#endif`,N_=`#if defined( RE_IndirectDiffuse )
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
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W_=`#if defined( USE_POINTS_UV )
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
#endif`,X_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,$_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
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
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v1=`float getShadowMask() {
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
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
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
}`,V1=`#if DEPTH_PACKING == 3200
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
}`,G1=`#define DISTANCE
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
}`,H1=`#define DISTANCE
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,K1=`uniform vec3 diffuse;
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
}`,J1=`#define LAMBERT
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
}`,$1=`#define LAMBERT
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
}`,j1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,ev=`#define NORMAL
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
}`,tv=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,av=`#define TOON
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
}`,lv=`uniform float size;
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
}`,cv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,uv=`uniform vec3 color;
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
}`,fv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Nx,alphahash_pars_fragment:Ux,alphamap_fragment:Fx,alphamap_pars_fragment:Ox,alphatest_fragment:Bx,alphatest_pars_fragment:zx,aomap_fragment:kx,aomap_pars_fragment:Vx,batching_pars_vertex:Gx,batching_vertex:Hx,begin_vertex:Wx,beginnormal_vertex:Xx,bsdfs:qx,iridescence_fragment:Yx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:$x,clipping_planes_vertex:jx,color_fragment:Qx,color_pars_fragment:e_,color_pars_vertex:t_,color_vertex:n_,common:i_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:r_,displacementmap_pars_vertex:o_,displacementmap_vertex:a_,emissivemap_fragment:l_,emissivemap_pars_fragment:c_,colorspace_fragment:h_,colorspace_pars_fragment:u_,envmap_fragment:f_,envmap_common_pars_fragment:d_,envmap_pars_fragment:p_,envmap_pars_vertex:m_,envmap_physical_pars_fragment:A_,envmap_vertex:g_,fog_vertex:x_,fog_pars_vertex:__,fog_fragment:v_,fog_pars_fragment:y_,gradientmap_pars_fragment:M_,lightmap_pars_fragment:S_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:T_,lights_pars_begin:w_,lights_toon_fragment:E_,lights_toon_pars_fragment:C_,lights_phong_fragment:R_,lights_phong_pars_fragment:P_,lights_physical_fragment:I_,lights_physical_pars_fragment:L_,lights_fragment_begin:D_,lights_fragment_maps:N_,lights_fragment_end:U_,lightprobes_pars_fragment:F_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:z_,logdepthbuf_vertex:k_,map_fragment:V_,map_pars_fragment:G_,map_particle_fragment:H_,map_particle_pars_fragment:W_,metalnessmap_fragment:X_,metalnessmap_pars_fragment:q_,morphinstance_vertex:Y_,morphcolor_vertex:Z_,morphnormal_vertex:K_,morphtarget_pars_vertex:J_,morphtarget_vertex:$_,normal_fragment_begin:j_,normal_fragment_maps:Q_,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:a1,opaque_fragment:l1,packing:c1,premultiplied_alpha_fragment:h1,project_vertex:u1,dithering_fragment:f1,dithering_pars_fragment:d1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:x1,shadowmap_vertex:_1,shadowmask_pars_fragment:v1,skinbase_vertex:y1,skinning_pars_vertex:M1,skinning_vertex:S1,skinnormal_vertex:b1,specularmap_fragment:T1,specularmap_pars_fragment:w1,tonemapping_fragment:A1,tonemapping_pars_fragment:E1,transmission_fragment:C1,transmission_pars_fragment:R1,uv_pars_fragment:P1,uv_pars_vertex:I1,uv_vertex:L1,worldpos_vertex:D1,background_vert:N1,background_frag:U1,backgroundCube_vert:F1,backgroundCube_frag:O1,cube_vert:B1,cube_frag:z1,depth_vert:k1,depth_frag:V1,distance_vert:G1,distance_frag:H1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:q1,linedashed_frag:Y1,meshbasic_vert:Z1,meshbasic_frag:K1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:j1,meshmatcap_frag:Q1,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:lv,points_frag:cv,shadow_vert:hv,shadow_frag:uv,sprite_vert:fv,sprite_frag:dv},we={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Li={basic:{uniforms:Tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Tn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Tn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Tn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Tn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Tn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Tn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Tn([we.common,we.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Tn([we.lights,we.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Li.physical={uniforms:Tn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Xc={r:0,b:0,g:0},pv=new Ve,xm=new it;xm.set(-1,0,0,0,1,0,0,0,1);function mv(i,e,t,n,s,r){let o=new Ie(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(y){let b=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===ha)?(l===void 0&&(l=new Ue(new Jt(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:ir(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xm),l.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ue(new Zi(2,2),new yt({name:"BackgroundMaterial",uniforms:ir(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(Xc,Fu(i)),t.buffers.color.setClear(Xc.r,Xc.g,Xc.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:v,dispose:p}}function gv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,O,z,P,U){let D=!1,B=u(I,P,z,O);r!==B&&(r=B,l(r.object)),D=f(I,P,z,U),D&&g(I,P,z,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,M(I,O,z,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,O,z,P){let U=P.wireframe===!0,D=n[O.id];D===void 0&&(D={},n[O.id]=D);let B=I.isInstancedMesh===!0?I.id:0,X=D[B];X===void 0&&(X={},D[B]=X);let L=X[z.id];L===void 0&&(L={},X[z.id]=L);let V=L[U];return V===void 0&&(V=d(c()),L[U]=V),V}function d(I){let O=[],z=[],P=[];for(let U=0;U<t;U++)O[U]=0,z[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,O,z,P){let U=r.attributes,D=O.attributes,B=0,X=z.getAttributes();for(let L in X)if(X[L].location>=0){let Y=U[L],$=D[L];if($===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),Y===void 0||Y.attribute!==$||$&&Y.data!==$.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function g(I,O,z,P){let U={},D=O.attributes,B=0,X=z.getAttributes();for(let L in X)if(X[L].location>=0){let Y=D[L];Y===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let $={};$.attribute=Y,Y&&Y.data&&($.data=Y.data),U[L]=$,B++}r.attributes=U,r.attributesNum=B,r.index=P}function v(){let I=r.newAttributes;for(let O=0,z=I.length;O<z;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){let z=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;z[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),U[I]!==O&&(i.vertexAttribDivisor(I,O),U[I]=O)}function y(){let I=r.newAttributes,O=r.enabledAttributes;for(let z=0,P=O.length;z<P;z++)O[z]!==I[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function b(I,O,z,P,U,D,B){B===!0?i.vertexAttribIPointer(I,O,z,U,D):i.vertexAttribPointer(I,O,z,P,U,D)}function M(I,O,z,P){v();let U=P.attributes,D=z.getAttributes(),B=O.defaultAttributeValues;for(let X in D){let L=D[X];if(L.location>=0){let V=U[X];if(V===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let Y=V.normalized,$=V.itemSize,ae=e.get(V);if(ae===void 0)continue;let Se=ae.buffer,Ee=ae.type,ne=ae.bytesPerElement,ge=Ee===i.INT||Ee===i.UNSIGNED_INT||V.gpuType===oc;if(V.isInterleavedBufferAttribute){let fe=V.data,Le=fe.stride,Fe=V.offset;if(fe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<L.locationSize;Ge++)p(L.location+Ge,fe.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ge=0;Ge<L.locationSize;Ge++)m(L.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ge=0;Ge<L.locationSize;Ge++)b(L.location+Ge,$/L.locationSize,Ee,Y,Le*ne,(Fe+$/L.locationSize*Ge)*ne,ge)}else{if(V.isInstancedBufferAttribute){for(let fe=0;fe<L.locationSize;fe++)p(L.location+fe,V.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let fe=0;fe<L.locationSize;fe++)m(L.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let fe=0;fe<L.locationSize;fe++)b(L.location+fe,$/L.locationSize,Ee,Y,$*ne,$/L.locationSize*fe*ne,ge)}}else if(B!==void 0){let Y=B[X];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(L.location,Y);break;case 3:i.vertexAttrib3fv(L.location,Y);break;case 4:i.vertexAttrib4fv(L.location,Y);break;default:i.vertexAttrib1fv(L.location,Y)}}}}y()}function w(){T();for(let I in n){let O=n[I];for(let z in O){let P=O[z];for(let U in P){let D=P[U];for(let B in D)h(D[B].object),delete D[B];delete P[U]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;let O=n[I.id];for(let z in O){let P=O[z];for(let U in P){let D=P[U];for(let B in D)h(D[B].object),delete D[B];delete P[U]}}delete n[I.id]}function _(I){for(let O in n){let z=n[O];for(let P in z){let U=z[P];if(U[I.id]===void 0)continue;let D=U[I.id];for(let B in D)h(D[B].object),delete D[B];delete U[I.id]}}}function x(I){for(let O in n){let z=n[O],P=I.isInstancedMesh===!0?I.id:0,U=z[P];if(U!==void 0){for(let D in U){let B=U[D];for(let X in B)h(B[X].object),delete B[X];delete U[D]}delete z[P],Object.keys(z).length===0&&delete n[O]}}}function T(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function xv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _v(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==dn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let x=_===Dt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Mn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==Sn&&!x)}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Be("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:A}}function vv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new jn,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,b=y*4,M=p.clippingState||null;c.value=M,M=h(g,d,b,f);for(let w=0;w!==b;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==v;++b,M+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var bs=4,Zp=[.125,.215,.35,.446,.526,.582],sr=20,yv=256,va=new Ri,Kp=new Ie,Xu=null,qu=0,Yu=0,Zu=!1,Mv=new N,Yc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Mv}=r;Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Dt,format:dn,colorSpace:ln,depthBuffer:!1},s=Jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=Tv(r,e,t),this._ggxMaterial=bv(r,e,t)}return s}_compileMaterial(e){let t=new Ue(new Mt,e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,s,r){let c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Kp),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Jt,new rn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Kp),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;Zr(s,M*w,b>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(v,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ys||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,va)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-bs?n-g+bs:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Zr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,va),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Zr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,va)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*sr-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):sr;m>sr&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);let p=[],y=0;for(let _=0;_<sr;++_){let x=_/v,T=Math.exp(-x*x/2);p.push(T),_===0?y+=T:_<m&&(y+=2*T)}for(let _=0;_<p.length;_++)p[_]=p[_]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let M=this._sizeLods[s],w=3*M*(s>b-bs?s-b+bs:0),A=4*(this._cubeSize-M);Zr(t,w,A,3*M,2*M),c.setRenderTarget(t),c.render(u,va)}};function Sv(i){let e=[],t=[],n=[],s=i,r=i-bs+1+Zp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-bs?c=Zp[o-i+bs-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){let _=A%3*2/3-1,x=A>2?0:-1,T=[_,x,0,_+2/3,x,0,_+2/3,x+1,0,_,x,0,_+2/3,x+1,0,_,x+1,0];y.set(T,v*g*A),b.set(d,m*g*A);let E=[A,A,A,A,A,A];M.set(E,p*g*A)}let w=new Mt;w.setAttribute("position",new Ct(y,v)),w.setAttribute("uv",new Ct(b,m)),w.setAttribute("faceIndex",new Ct(M,p)),n.push(new Ue(w,null)),s>bs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Jp(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bv(i,e,t){return new yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Tv(i,e,t){let n=new Float32Array(sr),s=new N(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function $p(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:qt,depthTest:!1,depthWrite:!1})}function jp(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}var Zc=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:qt});r.uniforms.tEquirect.value=t;let o=new Ue(s,r),a=t.minFilter;return t.minFilter===yn&&(t.minFilter=vt),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function wv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Wr||f===sc)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Zc(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Wr||f===sc,v=f===ys||f===tr;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Yc(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||v&&y&&c(y)?(n===null&&(n=new Yc(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Wr?d.mapping=ys:f===sc&&(d.mapping=tr),d}function c(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Av(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function Ev(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let y=f.array;v=f.version;for(let b=0,M=y.length;b<M;b+=3){let w=y[b+0],A=y[b+1],_=y[b+2];d.push(w,A,A,_,_,w)}}else{let y=g.array;v=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){let w=b+0,A=b+1,_=b+2;d.push(w,A,A,_,_,w)}}let m=new(g.count>=65535?Ao:wo)(d,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Cv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Rv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pv(i,e,t){let n=new WeakMap,s=new xt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let M=a.attributes.position.count*b,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*w*4*u),_=new bo(A,M,w,u);_.type=Sn,_.needsUpdate=!0;let x=b*4;for(let E=0;E<u;E++){let I=m[E],O=p[E],z=y[E],P=M*w*4*E;for(let U=0;U<I.count;U++){let D=U*x;f===!0&&(s.fromBufferAttribute(I,U),A[P+D+0]=s.x,A[P+D+1]=s.y,A[P+D+2]=s.z,A[P+D+3]=0),g===!0&&(s.fromBufferAttribute(O,U),A[P+D+4]=s.x,A[P+D+5]=s.y,A[P+D+6]=s.z,A[P+D+7]=0),v===!0&&(s.fromBufferAttribute(z,U),A[P+D+8]=s.x,A[P+D+9]=s.y,A[P+D+10]=s.z,A[P+D+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new le(M,w)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Iv(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Lv={[sa]:"LINEAR_TONE_MAPPING",[ra]:"REINHARD_TONE_MAPPING",[oa]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[la]:"AGX_TONE_MAPPING",[ca]:"NEUTRAL_TONE_MAPPING",[aa]:"CUSTOM_TONE_MAPPING"};function Dv(i,e,t,n,s,r){let o=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ci(e,t):void 0}),a=new Ot(e,t,{type:Dt,depthBuffer:!1,stencilBuffer:!1}),c=new Mt;c.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ue(c,l),u=new Ri(-1,1,1,-1,0,1),d=null,f=null,g=!1,v,m=null,p=[],y=!1;this.setSize=function(b,M){o.setSize(b,M),a.setSize(b,M);for(let w=0;w<p.length;w++){let A=p[w];A.setSize&&A.setSize(b,M)}},this.setEffects=function(b){p=b,y=p.length>0&&p[0].isRenderPass===!0;let M=o.width,w=o.height;for(let A=0;A<p.length;A++){let _=p[A];_.setSize&&_.setSize(M,w)}},this.begin=function(b,M){if(g||b.toneMapping===fi&&p.length===0)return!1;if(m=M,M!==null){let w=M.width,A=M.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return y===!1&&b.setRenderTarget(o),v=b.toneMapping,b.toneMapping=fi,!0},this.hasRenderPass=function(){return y},this.end=function(b,M){b.toneMapping=v,g=!0;let w=o,A=a;for(let _=0;_<p.length;_++){let x=p[_];if(x.enabled!==!1&&(x.render(b,A,w,M),x.needsSwap!==!1)){let T=w;w=A,A=T}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},ot.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");let _=Lv[f];_&&(l.defines[_]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(m),b.render(h,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var _m=new jt,$u=new ci(1,1),vm=new bo,ym=new Dl,Mm=new Po,Qp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function $r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qp[s];if(r===void 0&&(r=new Float32Array(s),Qp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jc(i,e){let t=em[e];t===void 0&&(t=new Int32Array(e),em[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function Bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;im.set(n),i.uniformMatrix2fv(this.addr,!1,im),en(t,n)}}function zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;nm.set(n),i.uniformMatrix3fv(this.addr,!1,nm),en(t,n)}}function kv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;tm.set(n),i.uniformMatrix4fv(this.addr,!1,tm),en(t,n)}}function Vv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function Xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($u.compareFunction=t.isReversedDepthBuffer()?Wc:Hc,r=$u):r=_m,t.setTexture2D(e||r,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ym,s)}function $v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mm,s)}function jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vm,s)}function Qv(i){switch(i){case 5126:return Nv;case 35664:return Uv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return zv;case 35676:return kv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Hv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return jv}}function ey(i,e){i.uniform1fv(this.addr,e)}function ty(i,e){let t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function ny(i,e){let t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function iy(i,e){let t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function sy(i,e){let t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ry(i,e){let t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function oy(i,e){let t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ay(i,e){i.uniform1iv(this.addr,e)}function ly(i,e){i.uniform2iv(this.addr,e)}function cy(i,e){i.uniform3iv(this.addr,e)}function hy(i,e){i.uniform4iv(this.addr,e)}function uy(i,e){i.uniform1uiv(this.addr,e)}function fy(i,e){i.uniform2uiv(this.addr,e)}function dy(i,e){i.uniform3uiv(this.addr,e)}function py(i,e){i.uniform4uiv(this.addr,e)}function my(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=$u:o=_m;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function gy(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ym,r[o])}function xy(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mm,r[o])}function _y(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vm,r[o])}function vy(i){switch(i){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return fy;case 36295:return dy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return _y}}var ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qv(t.type)}},Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}},ef=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ku=/(\w+)(\])?(\[|\.)?/g;function sm(i,e){i.seq.push(e),i.map[e.id]=e}function yy(i,e,t){let n=i.name,s=n.length;for(Ku.lastIndex=0;;){let r=Ku.exec(n),o=Ku.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sm(t,l===void 0?new ju(a,i,e):new Qu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ef(a),sm(t,u)),t=u}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);yy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function rm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var My=37297,Sy=0;function by(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var om=new it;function Ty(i){ot._getMatrix(om,ot.workingColorSpace,i);let e=`mat3( ${om.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Mo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function am(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+by(i.getShaderSource(e),a)}else return r}function wy(i,e){let t=Ty(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ay={[sa]:"Linear",[ra]:"Reinhard",[oa]:"Cineon",[er]:"ACESFilmic",[la]:"AgX",[ca]:"Neutral",[aa]:"Custom"};function Ey(i,e){let t=Ay[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qc=new N;function Cy(){ot.getLuminanceCoefficients(qc);let i=qc.x.toFixed(4),e=qc.y.toFixed(4),t=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Py(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Iy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ma(i){return i!==""}function lm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(i){return i.replace(Ly,Ny)}var Dy=new Map;function Ny(i,e){let t=ct[e];if(t===void 0){let n=Dy.get(e);if(n!==void 0)t=ct[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tf(t)}var Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(i){return i.replace(Uy,Fy)}function Fy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function um(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Oy={[ea]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function By(i){return Oy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zy={[ys]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function ky(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Vy={[tr]:"ENVMAP_MODE_REFRACTION"};function Gy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Vy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hy={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[Ap]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function Wy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Hy[i.combine]||"ENVMAP_BLENDING_NONE"}function Xy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=By(t),l=ky(t),h=Gy(t),u=Wy(t),d=Xy(t),f=Ry(t),g=Py(r),v=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(m=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?ct.tonemapping_pars_fragment:"",t.toneMapping!==fi?Ey("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,wy("linearToOutputTexel",t.outputColorSpace),Cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),o=tf(o),o=lm(o,t),o=cm(o,t),a=tf(a),a=lm(a,t),a=cm(a,t),o=hm(o),a=hm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+o,M=y+p+a,w=rm(s,s.VERTEX_SHADER,b),A=rm(s,s.FRAGMENT_SHADER,M);s.attachShader(v,w),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function _(I){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(w)||"",P=s.getShaderInfoLog(A)||"",U=O.trim(),D=z.trim(),B=P.trim(),X=!0,L=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,A);else{let V=am(s,w,"vertex"),Y=am(s,A,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+V+`
`+Y)}else U!==""?Be("WebGLProgram: Program Info Log:",U):(D===""||B==="")&&(L=!1);L&&(I.diagnostics={runnable:X,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(w),s.deleteShader(A),x=new Kr(s,v),T=Iy(s,v)}let x;this.getUniforms=function(){return x===void 0&&_(this),x};let T;this.getAttributes=function(){return T===void 0&&_(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,My)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}var Yy=0,nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sf(e),t.set(e,n)),n}},sf=class{constructor(e){this.id=Yy++,this.code=e,this.usedTimes=0}};function Zy(i){return i===Ss||i===ma||i===ga}function Ky(i,e,t,n,s,r){let o=new Nr,a=new nf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,E,I,O,z){let P=I.fog,U=O.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||D,B),L=X&&X.mapping===ha?X.image.height:null,V=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$=Y!==void 0?Y.length:0,ae=0;U.morphAttributes.position!==void 0&&(ae=1),U.morphAttributes.normal!==void 0&&(ae=2),U.morphAttributes.color!==void 0&&(ae=3);let Se,Ee,ne,ge;if(V){let Oe=Li[V];Se=Oe.vertexShader,Ee=Oe.fragmentShader}else{Se=x.vertexShader,Ee=x.fragmentShader;let Oe=a.getVertexShaderStage(x),Gt=a.getFragmentShaderStage(x);a.update(x,Oe,Gt),ne=Oe.id,ge=Gt.id}let fe=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ge=O.isBatchedMesh===!0,ht=!!x.map,Ke=!!x.matcap,R=!!X,k=!!x.aoMap,H=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,K=!!x.normalMap,ue=!!x.displacementMap,he=!!x.emissiveMap,me=!!x.metalnessMap,de=!!x.roughnessMap,G=x.anisotropy>0,We=x.clearcoat>0,$e=x.dispersion>0,F=x.iridescence>0,S=x.sheen>0,Z=x.transmission>0,j=G&&!!x.anisotropyMap,ie=We&&!!x.clearcoatMap,xe=We&&!!x.clearcoatNormalMap,_e=We&&!!x.clearcoatRoughnessMap,se=F&&!!x.iridescenceMap,re=F&&!!x.iridescenceThicknessMap,be=S&&!!x.sheenColorMap,He=S&&!!x.sheenRoughnessMap,Me=!!x.specularMap,ve=!!x.specularColorMap,ze=!!x.specularIntensityMap,Ye=Z&&!!x.transmissionMap,tt=Z&&!!x.thicknessMap,W=!!x.gradientMap,Te=!!x.alphaMap,oe=x.alphaTest>0,Ae=!!x.alphaHash,Pe=!!x.extensions,pe=fi;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Xe={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:Se,fragmentShader:Ee,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ge,batchingColor:Ge&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:Ke,envMap:R,envMapMode:R&&X.mapping,envMapCubeUVHeight:L,aoMap:k,lightMap:H,bumpMap:J,normalMap:K,displacementMap:ue,emissiveMap:he,normalMapObjectSpace:K&&x.normalMapType===Ip,normalMapTangentSpace:K&&x.normalMapType===_a,packedNormalMap:K&&x.normalMapType===_a&&Zy(x.normalMap.format),metalnessMap:me,roughnessMap:de,anisotropy:G,anisotropyMap:j,clearcoat:We,clearcoatMap:ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:_e,dispersion:$e,iridescence:F,iridescenceMap:se,iridescenceThicknessMap:re,sheen:S,sheenColorMap:be,sheenRoughnessMap:He,specularMap:Me,specularColorMap:ve,specularIntensityMap:ze,transmission:Z,transmissionMap:Ye,thicknessMap:tt,gradientMap:W,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:Te,alphaTest:oe,alphaHash:Ae,combine:x.combine,mapUv:ht&&g(x.map.channel),aoMapUv:k&&g(x.aoMap.channel),lightMapUv:H&&g(x.lightMap.channel),bumpMapUv:J&&g(x.bumpMap.channel),normalMapUv:K&&g(x.normalMap.channel),displacementMapUv:ue&&g(x.displacementMap.channel),emissiveMapUv:he&&g(x.emissiveMap.channel),metalnessMapUv:me&&g(x.metalnessMap.channel),roughnessMapUv:de&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ie&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:ve&&g(x.specularColorMap.channel),specularIntensityMapUv:ze&&g(x.specularIntensityMap.channel),transmissionMapUv:Ye&&g(x.transmissionMap.channel),thicknessMapUv:tt&&g(x.thicknessMap.channel),alphaMapUv:Te&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(K||G),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(ht||Te),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&K===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Le,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let E in x.defines)T.push(E),T.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){let T=f[x.type],E;if(T){let I=Li[T];E=on.clone(I.uniforms)}else E=x.uniforms;return E}function M(x,T){let E=h.get(T);return E!==void 0?++E.usedTimes:(E=new qy(i,T,x,s),l.push(E),h.set(T,E)),E}function w(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function _(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:_}}function Jy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $y(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,v,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=o(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function c(d,f,g,v,m,p){let y=a(d,f,g,v,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(d,f,g,v,m,p){let y=a(d,f,g,v,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f,g){t.length>1&&t.sort(d||$y),n.length>1&&n.sort(f||fm),s.length>1&&s.sort(f||fm),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function jy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new dm,i.set(n,[o])):s>=r.length?(o=new dm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ie};break;case"SpotLight":t={position:new N,direction:new N,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function eM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tM=0;function nM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iM(i){let e=new Qy,t=eM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new Ve,o=new Ve;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,b=0,M=0,w=0,A=0,_=0;l.sort(nM);for(let T=0,E=l.length;T<E;T++){let I=l[T],O=I.color,z=I.intensity,P=I.distance,U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ss?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],z);_++}else if(I.isDirectionalLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let B=I.shadow,X=t.get(I);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=D,f++}else if(I.isSpotLight){let D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(O).multiplyScalar(z),D.distance=P,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[v]=D;let B=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,B.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[v]=B.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=U,M++}v++}else if(I.isRectAreaLight){let D=e.get(I);D.color.copy(O).multiplyScalar(z),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=D,m++}else if(I.isPointLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let B=I.shadow,X=t.get(I);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=D,g++}else if(I.isHemisphereLight){let D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(z),D.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==w||x.numLightProbes!==_)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=_,x.directionalLength=f,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=w,x.numLightProbes=_,n.version=tM++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let b=l[p];if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function pm(i){let e=new iM(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function sM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new pm(i),e.set(s,[a])):r>=o.length?(a=new pm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`,aM=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],lM=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],mm=new Ve,ya=new N,Ju=new N;function cM(i,e,t){let n=new gs,s=new le,r=new le,o=new xt,a=new Wl,c=new Xl,l={},h=t.maxTextureSize,u={[Wn]:fn,[fn]:Wn,[Un]:Un},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:rM,fragmentShader:oM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let p=this.type;this.render=function(A,_,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===nc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ea);let T=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(qt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=p!==this.type;z&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=A.length;P<U;P++){let D=A[P],B=D.shadow;if(B===void 0){Be("WebGLShadowMap:",D,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let X=B.getFrameExtents();s.multiply(X),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,B.mapSize.y=r.y));let L=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=L,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Hr){if(D.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ot(s.x,s.y,{format:Ss,type:Dt,minFilter:vt,magFilter:vt,generateMipmaps:!1}),B.map.texture.name=D.name+".shadowMap",B.map.depthTexture=new ci(s.x,s.y,Sn),B.map.depthTexture.name=D.name+".shadowMapDepth",B.map.depthTexture.format=bi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft}else D.isPointLight?(B.map=new Zc(s.x),B.map.depthTexture=new Fl(s.x,di)):(B.map=new Ot(s.x,s.y),B.map.depthTexture=new ci(s.x,s.y,di)),B.map.depthTexture.name=D.name+".shadowMap",B.map.depthTexture.format=bi,this.type===ea?(B.map.depthTexture.compareFunction=L?Wc:Hc,B.map.depthTexture.minFilter=vt,B.map.depthTexture.magFilter=vt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft);B.camera.updateProjectionMatrix()}let V=B.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<V;Y++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(B.map),i.clear());let $=B.getViewport(Y);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),O.viewport(o)}if(D.isPointLight){let $=B.camera,ae=B.matrix,Se=D.distance||$.far;Se!==$.far&&($.far=Se,$.updateProjectionMatrix()),ya.setFromMatrixPosition(D.matrixWorld),$.position.copy(ya),Ju.copy($.position),Ju.add(aM[Y]),$.up.copy(lM[Y]),$.lookAt(Ju),$.updateMatrixWorld(),ae.makeTranslation(-ya.x,-ya.y,-ya.z),mm.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(mm,$.coordinateSystem,$.reversedDepth)}else B.updateMatrices(D);n=B.getFrustum(),M(_,x,B.camera,D,this.type)}B.isPointLightShadow!==!0&&this.type===Hr&&y(B,x),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,I)};function y(A,_){let x=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ot(s.x,s.y,{format:Ss,type:Dt})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,x,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,x,f,v,null)}function b(A,_,x,T){let E=null,I=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)E=I;else if(E=x.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=E.uuid,z=_.uuid,P=l[O];P===void 0&&(P={},l[O]=P);let U=P[z];U===void 0&&(U=E.clone(),P[z]=U,_.addEventListener("dispose",w)),E=U}if(E.visible=_.visible,E.wireframe=_.wireframe,T===Hr?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:u[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,x.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=x}return E}function M(A,_,x,T,E){if(A.visible===!1)return;if(A.layers.test(_.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Hr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let z=e.update(A),P=A.material;if(Array.isArray(P)){let U=z.groups;for(let D=0,B=U.length;D<B;D++){let X=U[D],L=P[X.materialIndex];if(L&&L.visible){let V=b(A,L,T,E);A.onBeforeShadow(i,A,_,x,z,V,X),i.renderBufferDirect(x,null,z,V,A,X),A.onAfterShadow(i,A,_,x,z,V,X)}}}else if(P.visible){let U=b(A,P,T,E);A.onBeforeShadow(i,A,_,x,z,U,null),i.renderBufferDirect(x,null,z,U,A,null),A.onAfterShadow(i,A,_,x,z,U,null)}}let O=A.children;for(let z=0,P=O.length;z<P;z++)M(O[z],_,x,T,E)}function w(A){A.target.removeEventListener("dispose",w);for(let x in l){let T=l[x],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function hM(i,e){function t(){let W=!1,Te=new xt,oe=null,Ae=new xt(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!W&&(i.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,pe,Xe,Oe,Gt){Gt===!0&&(Pe*=Oe,pe*=Oe,Xe*=Oe),Te.set(Pe,pe,Xe,Oe),Ae.equals(Te)===!1&&(i.clearColor(Pe,pe,Xe,Oe),Ae.copy(Te))},reset:function(){W=!1,oe=null,Ae.set(-1,0,0,0)}}}function n(){let W=!1,Te=!1,oe=null,Ae=null,Pe=null;return{setReversed:function(pe){if(Te!==pe){let Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Te=pe;let Oe=Pe;Pe=null,this.setClear(Oe)}},getReversed:function(){return Te},setTest:function(pe){pe?fe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(pe){oe!==pe&&!W&&(i.depthMask(pe),oe=pe)},setFunc:function(pe){if(Te&&(pe=Vp[pe]),Ae!==pe){switch(pe){case bl:i.depthFunc(i.NEVER);break;case Tl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Al:i.depthFunc(i.EQUAL);break;case El:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=pe}},setLocked:function(pe){W=pe},setClear:function(pe){Pe!==pe&&(Pe=pe,Te&&(pe=1-pe),i.clearDepth(pe))},reset:function(){W=!1,oe=null,Ae=null,Pe=null,Te=!1}}}function s(){let W=!1,Te=null,oe=null,Ae=null,Pe=null,pe=null,Xe=null,Oe=null,Gt=null;return{setTest:function(Pt){W||(Pt?fe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Pt){Te!==Pt&&!W&&(i.stencilMask(Pt),Te=Pt)},setFunc:function(Pt,_i,vi){(oe!==Pt||Ae!==_i||Pe!==vi)&&(i.stencilFunc(Pt,_i,vi),oe=Pt,Ae=_i,Pe=vi)},setOp:function(Pt,_i,vi){(pe!==Pt||Xe!==_i||Oe!==vi)&&(i.stencilOp(Pt,_i,vi),pe=Pt,Xe=_i,Oe=vi)},setLocked:function(Pt){W=Pt},setClear:function(Pt){Gt!==Pt&&(i.clearStencil(Pt),Gt=Pt)},reset:function(){W=!1,Te=null,oe=null,Ae=null,Pe=null,pe=null,Xe=null,Oe=null,Gt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,b=null,M=null,w=null,A=null,_=null,x=new Ie(0,0,0),T=0,E=!1,I=null,O=null,z=null,P=null,U=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(L)[1]),B=X>=1):L.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),B=X>=2);let V=null,Y={},$=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Se=new xt().fromArray($),Ee=new xt().fromArray(ae);function ne(W,Te,oe,Ae){let Pe=new Uint8Array(4),pe=i.createTexture();i.bindTexture(W,pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<oe;Xe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Te+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return pe}let ge={};ge[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(zs),J(!1),K(Mu),fe(i.CULL_FACE),k(qt);function fe(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function Le(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Fe(W,Te){return d[W]!==Te?(i.bindFramebuffer(W,Te),d[W]=Te,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Te),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ge(W,Te){let oe=g,Ae=!1;if(W){oe=f.get(Te),oe===void 0&&(oe=[],f.set(Te,oe));let Pe=W.textures;if(oe.length!==Pe.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Xe=Pe.length;pe<Xe;pe++)oe[pe]=i.COLOR_ATTACHMENT0+pe;oe.length=Pe.length,Ae=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(oe)}function ht(W){return v!==W?(i.useProgram(W),v=W,!0):!1}let Ke={[Xn]:i.FUNC_ADD,[fp]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};Ke[pp]=i.MIN,Ke[mp]=i.MAX;let R={[Qs]:i.ZERO,[gp]:i.ONE,[xp]:i.SRC_COLOR,[Ml]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[ia]:i.DST_COLOR,[na]:i.DST_ALPHA,[_p]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[yp]:i.ONE_MINUS_DST_COLOR,[vp]:i.ONE_MINUS_DST_ALPHA,[Sp]:i.CONSTANT_COLOR,[bp]:i.ONE_MINUS_CONSTANT_COLOR,[Tp]:i.CONSTANT_ALPHA,[wp]:i.ONE_MINUS_CONSTANT_ALPHA};function k(W,Te,oe,Ae,Pe,pe,Xe,Oe,Gt,Pt){if(W===qt){m===!0&&(Le(i.BLEND),m=!1);return}if(m===!1&&(fe(i.BLEND),m=!0),W!==ic){if(W!==p||Pt!==E){if((y!==Xn||w!==Xn)&&(i.blendEquation(i.FUNC_ADD),y=Xn,w=Xn),Pt)switch(W){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.ONE,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",W);break}else switch(W){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Su:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",W);break}b=null,M=null,A=null,_=null,x.set(0,0,0),T=0,p=W,E=Pt}return}Pe=Pe||Te,pe=pe||oe,Xe=Xe||Ae,(Te!==y||Pe!==w)&&(i.blendEquationSeparate(Ke[Te],Ke[Pe]),y=Te,w=Pe),(oe!==b||Ae!==M||pe!==A||Xe!==_)&&(i.blendFuncSeparate(R[oe],R[Ae],R[pe],R[Xe]),b=oe,M=Ae,A=pe,_=Xe),(Oe.equals(x)===!1||Gt!==T)&&(i.blendColor(Oe.r,Oe.g,Oe.b,Gt),x.copy(Oe),T=Gt),p=W,E=!1}function H(W,Te){W.side===Un?Le(i.CULL_FACE):fe(i.CULL_FACE);let oe=W.side===fn;Te&&(oe=!oe),J(oe),W.blending===Bs&&W.transparent===!1?k(qt):k(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ae=W.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),he(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(W){I!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),I=W)}function K(W){W!==hp?(fe(i.CULL_FACE),W!==O&&(W===Mu?i.cullFace(i.BACK):W===up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),O=W}function ue(W){W!==z&&(B&&i.lineWidth(W),z=W)}function he(W,Te,oe){W?(fe(i.POLYGON_OFFSET_FILL),(P!==Te||U!==oe)&&(P=Te,U=oe,o.getReversed()&&(Te=-Te),i.polygonOffset(Te,oe))):Le(i.POLYGON_OFFSET_FILL)}function me(W){W?fe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function de(W){W===void 0&&(W=i.TEXTURE0+D-1),V!==W&&(i.activeTexture(W),V=W)}function G(W,Te,oe){oe===void 0&&(V===null?oe=i.TEXTURE0+D-1:oe=V);let Ae=Y[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},Y[oe]=Ae),(Ae.type!==W||Ae.texture!==Te)&&(V!==oe&&(i.activeTexture(oe),V=oe),i.bindTexture(W,Te||ge[W]),Ae.type=W,Ae.texture=Te)}function We(){let W=Y[V];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(W){je("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){je("WebGLState:",W)}}function S(){try{i.texSubImage2D(...arguments)}catch(W){je("WebGLState:",W)}}function Z(){try{i.texSubImage3D(...arguments)}catch(W){je("WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){je("WebGLState:",W)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(W){je("WebGLState:",W)}}function xe(){try{i.texStorage2D(...arguments)}catch(W){je("WebGLState:",W)}}function _e(){try{i.texStorage3D(...arguments)}catch(W){je("WebGLState:",W)}}function se(){try{i.texImage2D(...arguments)}catch(W){je("WebGLState:",W)}}function re(){try{i.texImage3D(...arguments)}catch(W){je("WebGLState:",W)}}function be(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function He(W,Te){u[W]!==Te&&(i.pixelStorei(W,Te),u[W]=Te)}function Me(W){Se.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function ve(W){Ee.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ee.copy(W))}function ze(W,Te){let oe=l.get(Te);oe===void 0&&(oe=new WeakMap,l.set(Te,oe));let Ae=oe.get(W);Ae===void 0&&(Ae=i.getUniformBlockIndex(Te,W.name),oe.set(W,Ae))}function Ye(W,Te){let Ae=l.get(Te).get(W);c.get(Te)!==Ae&&(i.uniformBlockBinding(Te,Ae,W.__bindingPointIndex),c.set(Te,Ae))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,Y={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,b=null,M=null,w=null,A=null,_=null,x=new Ie(0,0,0),T=0,E=!1,I=null,O=null,z=null,P=null,U=null,Se.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Le,bindFramebuffer:Fe,drawBuffers:Ge,useProgram:ht,setBlending:k,setMaterial:H,setFlipSided:J,setCullFace:K,setLineWidth:ue,setPolygonOffset:he,setScissorTest:me,activeTexture:de,bindTexture:G,unbindTexture:We,compressedTexImage2D:$e,compressedTexImage3D:F,texImage2D:se,texImage3D:re,pixelStorei:He,getParameter:be,updateUBOMapping:ze,uniformBlockBinding:Ye,texStorage2D:xe,texStorage3D:_e,texSubImage2D:S,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:ie,scissor:Me,viewport:ve,reset:tt}}function uM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,S){return g?new OffscreenCanvas(F,S):Ir("canvas")}function m(F,S,Z){let j=1,ie=$e(F);if((ie.width>Z||ie.height>Z)&&(j=Z/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let xe=Math.floor(j*ie.width),_e=Math.floor(j*ie.height);d===void 0&&(d=v(xe,_e));let se=S?v(xe,_e):d;return se.width=xe,se.height=_e,se.getContext("2d").drawImage(F,0,0,xe,_e),Be("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+xe+"x"+_e+")."),se}else return"data"in F&&Be("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),F;return F}function p(F){return F.generateMipmaps}function y(F){i.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,S,Z,j,ie,xe=!1){if(F!==null){if(i[F]!==void 0)return i[F];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let _e;j&&(_e=e.get("EXT_texture_norm16"),_e||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=S;if(S===i.RED&&(Z===i.FLOAT&&(se=i.R32F),Z===i.HALF_FLOAT&&(se=i.R16F),Z===i.UNSIGNED_BYTE&&(se=i.R8),Z===i.UNSIGNED_SHORT&&_e&&(se=_e.R16_EXT),Z===i.SHORT&&_e&&(se=_e.R16_SNORM_EXT)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.R8UI),Z===i.UNSIGNED_SHORT&&(se=i.R16UI),Z===i.UNSIGNED_INT&&(se=i.R32UI),Z===i.BYTE&&(se=i.R8I),Z===i.SHORT&&(se=i.R16I),Z===i.INT&&(se=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(se=i.RG32F),Z===i.HALF_FLOAT&&(se=i.RG16F),Z===i.UNSIGNED_BYTE&&(se=i.RG8),Z===i.UNSIGNED_SHORT&&_e&&(se=_e.RG16_EXT),Z===i.SHORT&&_e&&(se=_e.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RG8UI),Z===i.UNSIGNED_SHORT&&(se=i.RG16UI),Z===i.UNSIGNED_INT&&(se=i.RG32UI),Z===i.BYTE&&(se=i.RG8I),Z===i.SHORT&&(se=i.RG16I),Z===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(se=i.RGB16UI),Z===i.UNSIGNED_INT&&(se=i.RGB32UI),Z===i.BYTE&&(se=i.RGB8I),Z===i.SHORT&&(se=i.RGB16I),Z===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),Z===i.UNSIGNED_INT&&(se=i.RGBA32UI),Z===i.BYTE&&(se=i.RGBA8I),Z===i.SHORT&&(se=i.RGBA16I),Z===i.INT&&(se=i.RGBA32I)),S===i.RGB&&(Z===i.UNSIGNED_SHORT&&_e&&(se=_e.RGB16_EXT),Z===i.SHORT&&_e&&(se=_e.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),S===i.RGBA){let re=xe?Mo:ot.getTransfer(ie);Z===i.FLOAT&&(se=i.RGBA32F),Z===i.HALF_FLOAT&&(se=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(se=re===gt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&_e&&(se=_e.RGBA16_EXT),Z===i.SHORT&&_e&&(se=_e.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(F,S){let Z;return F?S===null||S===di||S===Ms?Z=i.DEPTH24_STENCIL8:S===Sn?Z=i.DEPTH32F_STENCIL8:S===qr&&(Z=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===Ms?Z=i.DEPTH_COMPONENT24:S===Sn?Z=i.DEPTH_COMPONENT32F:S===qr&&(Z=i.DEPTH_COMPONENT16),Z}function A(F,S){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ft&&F.minFilter!==vt?Math.log2(Math.max(S.width,S.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?S.mipmaps.length:1}function _(F){let S=F.target;S.removeEventListener("dispose",_),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function x(F){let S=F.target;S.removeEventListener("dispose",x),I(S)}function T(F){let S=n.get(F);if(S.__webglInit===void 0)return;let Z=F.source,j=f.get(Z);if(j){let ie=j[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(F),Object.keys(j).length===0&&f.delete(Z)}n.remove(F)}function E(F){let S=n.get(F);i.deleteTexture(S.__webglTexture);let Z=F.source,j=f.get(Z);delete j[S.__cacheKey],o.memory.textures--}function I(F){let S=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ie=0;ie<S.__webglFramebuffer[j].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[j][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Z=F.textures;for(let j=0,ie=Z.length;j<ie;j++){let xe=n.get(Z[j]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(Z[j])}n.remove(F)}let O=0;function z(){O=0}function P(){return O}function U(F){O=F}function D(){let F=O;return F>=s.maxTextures&&Be("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),O+=1,F}function B(F){let S=[];return S.push(F.wrapS),S.push(F.wrapT),S.push(F.wrapR||0),S.push(F.magFilter),S.push(F.minFilter),S.push(F.anisotropy),S.push(F.internalFormat),S.push(F.format),S.push(F.type),S.push(F.generateMipmaps),S.push(F.premultiplyAlpha),S.push(F.flipY),S.push(F.unpackAlignment),S.push(F.colorSpace),S.join()}function X(F,S){let Z=n.get(F);if(F.isVideoTexture&&G(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){let j=F.image;if(j===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(Z,F,S);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function L(F,S){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Le(Z,F,S);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function V(F,S){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Le(Z,F,S);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function Y(F,S){let Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){Fe(Z,F,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}let $={[Kt]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Rr]:i.MIRRORED_REPEAT},ae={[Ft]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},Se={[Lp]:i.NEVER,[Op]:i.ALWAYS,[Dp]:i.LESS,[Hc]:i.LEQUAL,[Np]:i.EQUAL,[Wc]:i.GEQUAL,[Up]:i.GREATER,[Fp]:i.NOTEQUAL};function Ee(F,S){if(S.type===Sn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vt||S.magFilter===Xr||S.magFilter===nr||S.magFilter===yn||S.minFilter===vt||S.minFilter===Xr||S.minFilter===nr||S.minFilter===yn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,$[S.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ft||S.minFilter!==nr&&S.minFilter!==yn||S.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(F,S){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,S.addEventListener("dispose",_));let j=S.source,ie=f.get(j);ie===void 0&&(ie={},f.set(j,ie));let xe=B(S);if(xe!==F.__cacheKey){ie[xe]===void 0&&(ie[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ie[xe].usedTimes++;let _e=ie[F.__cacheKey];_e!==void 0&&(ie[F.__cacheKey].usedTimes--,_e.usedTimes===0&&E(S)),F.__cacheKey=xe,F.__webglTexture=ie[xe].texture}return Z}function ge(F,S,Z){return Math.floor(Math.floor(F/Z)/S)}function fe(F,S,Z,j){let xe=F.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Z,j,S.data);else{xe.sort((He,Me)=>He.start-Me.start);let _e=0;for(let He=1;He<xe.length;He++){let Me=xe[_e],ve=xe[He],ze=Me.start+Me.count,Ye=ge(ve.start,S.width,4),tt=ge(Me.start,S.width,4);ve.start<=ze+1&&Ye===tt&&ge(ve.start+ve.count-1,S.width,4)===Ye?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++_e,xe[_e]=ve)}xe.length=_e+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let He=0,Me=xe.length;He<Me;He++){let ve=xe[He],ze=Math.floor(ve.start/4),Ye=Math.ceil(ve.count/4),tt=ze%S.width,W=Math.floor(ze/S.width),Te=Ye,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,tt,W,Te,oe,Z,j,S.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function Le(F,S,Z){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let ie=ne(F,S),xe=S.source;t.bindTexture(j,F.__webglTexture,i.TEXTURE0+Z);let _e=n.get(xe);if(xe.version!==_e.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let oe=ot.getPrimaries(ot.workingColorSpace),Ae=S.colorSpace===ts?null:ot.getPrimaries(S.colorSpace),Pe=S.colorSpace===ts||oe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let re=m(S.image,!1,s.maxTextureSize);re=We(S,re);let be=r.convert(S.format,S.colorSpace),He=r.convert(S.type),Me=M(S.internalFormat,be,He,S.normalized,S.colorSpace,S.isVideoTexture);Ee(j,S);let ve,ze=S.mipmaps,Ye=S.isVideoTexture!==!0,tt=_e.__version===void 0||ie===!0,W=xe.dataReady,Te=A(S,re);if(S.isDepthTexture)Me=w(S.format===Pi,S.type),tt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Me,re.width,re.height,0,be,He,null));else if(S.isDataTexture)if(ze.length>0){Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,Te,Me,ze[0].width,ze[0].height);for(let oe=0,Ae=ze.length;oe<Ae;oe++)ve=ze[oe],Ye?W&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,be,He,ve.data):t.texImage2D(i.TEXTURE_2D,oe,Me,ve.width,ve.height,0,be,He,ve.data);S.generateMipmaps=!1}else Ye?(tt&&t.texStorage2D(i.TEXTURE_2D,Te,Me,re.width,re.height),W&&fe(S,re,be,He)):t.texImage2D(i.TEXTURE_2D,0,Me,re.width,re.height,0,be,He,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,ze[0].width,ze[0].height,re.depth);for(let oe=0,Ae=ze.length;oe<Ae;oe++)if(ve=ze[oe],S.format!==dn)if(be!==null)if(Ye){if(W)if(S.layerUpdates.size>0){let Pe=zu(ve.width,ve.height,S.format,S.type);for(let pe of S.layerUpdates){let Xe=ve.data.subarray(pe*Pe/ve.data.BYTES_PER_ELEMENT,(pe+1)*Pe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,pe,ve.width,ve.height,1,be,Xe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,re.depth,be,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Me,ve.width,ve.height,re.depth,0,ve.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,re.depth,be,He,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Me,ve.width,ve.height,re.depth,0,be,He,ve.data)}else{Ye&&tt&&t.texStorage2D(i.TEXTURE_2D,Te,Me,ze[0].width,ze[0].height);for(let oe=0,Ae=ze.length;oe<Ae;oe++)ve=ze[oe],S.format!==dn?be!==null?Ye?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Me,ve.width,ve.height,0,ve.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?W&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,be,He,ve.data):t.texImage2D(i.TEXTURE_2D,oe,Me,ve.width,ve.height,0,be,He,ve.data)}else if(S.isDataArrayTexture)if(Ye){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,re.width,re.height,re.depth),W)if(S.layerUpdates.size>0){let oe=zu(re.width,re.height,S.format,S.type);for(let Ae of S.layerUpdates){let Pe=re.data.subarray(Ae*oe/re.data.BYTES_PER_ELEMENT,(Ae+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,re.width,re.height,1,be,He,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,He,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,be,He,re.data);else if(S.isData3DTexture)Ye?(tt&&t.texStorage3D(i.TEXTURE_3D,Te,Me,re.width,re.height,re.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,He,re.data)):t.texImage3D(i.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,be,He,re.data);else if(S.isFramebufferTexture){if(tt)if(Ye)t.texStorage2D(i.TEXTURE_2D,Te,Me,re.width,re.height);else{let oe=re.width,Ae=re.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Me,oe,Ae,0,be,He,null),oe>>=1,Ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),re.parentNode!==oe){oe.appendChild(re),u.add(S),oe.onpaint=Ae=>{let Pe=Ae.changedElements;for(let pe of u)Pe.includes(pe.image)&&(pe.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Pe=i.RGBA,pe=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,pe,Xe,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ye&&tt){let oe=$e(ze[0]);t.texStorage2D(i.TEXTURE_2D,Te,Me,oe.width,oe.height)}for(let oe=0,Ae=ze.length;oe<Ae;oe++)ve=ze[oe],Ye?W&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be,He,ve):t.texImage2D(i.TEXTURE_2D,oe,Me,be,He,ve);S.generateMipmaps=!1}else if(Ye){if(tt){let oe=$e(re);t.texStorage2D(i.TEXTURE_2D,Te,Me,oe.width,oe.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,He,re)}else t.texImage2D(i.TEXTURE_2D,0,Me,be,He,re);p(S)&&y(j),_e.__version=xe.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function Fe(F,S,Z){if(S.image.length!==6)return;let j=ne(F,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);let xe=n.get(ie);if(ie.version!==xe.__version||j===!0){t.activeTexture(i.TEXTURE0+Z);let _e=ot.getPrimaries(ot.workingColorSpace),se=S.colorSpace===ts?null:ot.getPrimaries(S.colorSpace),re=S.colorSpace===ts||_e===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let be=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let pe=0;pe<6;pe++)!be&&!He?Me[pe]=m(S.image[pe],!0,s.maxCubemapSize):Me[pe]=He?S.image[pe].image:S.image[pe],Me[pe]=We(S,Me[pe]);let ve=Me[0],ze=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type),tt=M(S.internalFormat,ze,Ye,S.normalized,S.colorSpace),W=S.isVideoTexture!==!0,Te=xe.__version===void 0||j===!0,oe=ie.dataReady,Ae=A(S,ve);Ee(i.TEXTURE_CUBE_MAP,S);let Pe;if(be){W&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,ve.width,ve.height);for(let pe=0;pe<6;pe++){Pe=Me[pe].mipmaps;for(let Xe=0;Xe<Pe.length;Xe++){let Oe=Pe[Xe];S.format!==dn?ze!==null?W?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,Oe.width,Oe.height,ze,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,tt,Oe.width,Oe.height,0,Oe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,0,0,Oe.width,Oe.height,ze,Ye,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe,tt,Oe.width,Oe.height,0,ze,Ye,Oe.data)}}}else{if(Pe=S.mipmaps,W&&Te){Pe.length>0&&Ae++;let pe=$e(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(He){W?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Me[pe].width,Me[pe].height,ze,Ye,Me[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,Me[pe].width,Me[pe].height,0,ze,Ye,Me[pe].data);for(let Xe=0;Xe<Pe.length;Xe++){let Gt=Pe[Xe].image[pe].image;W?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,Gt.width,Gt.height,ze,Ye,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,tt,Gt.width,Gt.height,0,ze,Ye,Gt.data)}}else{W?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze,Ye,Me[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,ze,Ye,Me[pe]);for(let Xe=0;Xe<Pe.length;Xe++){let Oe=Pe[Xe];W?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,0,0,ze,Ye,Oe.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xe+1,tt,ze,Ye,Oe.image[pe])}}}p(S)&&y(i.TEXTURE_CUBE_MAP),xe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function Ge(F,S,Z,j,ie,xe){let _e=r.convert(Z.format,Z.colorSpace),se=r.convert(Z.type),re=M(Z.internalFormat,_e,se,Z.normalized,Z.colorSpace),be=n.get(S),He=n.get(Z);if(He.__renderTarget=S,!be.__hasExternalTextures){let Me=Math.max(1,S.width>>xe),ve=Math.max(1,S.height>>xe);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,xe,re,Me,ve,S.depth,0,_e,se,null):t.texImage2D(ie,xe,re,Me,ve,0,_e,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ie,He.__webglTexture,0,me(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ie,He.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(F,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),S.depthBuffer){let j=S.depthTexture,ie=j&&j.isDepthTexture?j.type:null,xe=w(S.stencilBuffer,ie),_e=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(S),xe,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(S),xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,F)}else{let j=S.textures;for(let ie=0;ie<j.length;ie++){let xe=j[ie],_e=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),re=M(xe.internalFormat,_e,se,xe.normalized,xe.colorSpace);de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(S),re,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(F,S,Z){let j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(S.depthTexture);if(ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,S.depthTexture.addEventListener("dispose",_)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S.depthTexture);let be=r.convert(S.depthTexture.format),He=r.convert(S.depthTexture.type),Me;S.depthTexture.format===bi?Me=i.DEPTH_COMPONENT24:S.depthTexture.format===Pi&&(Me=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,S.width,S.height,0,be,He,null)}}else X(S.depthTexture,0);let xe=ie.__webglTexture,_e=me(S),se=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,re=S.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===bi)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,se,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,re,se,xe,0);else if(S.depthTexture.format===Pi)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,se,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,re,se,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function R(F){let S=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==F.depthTexture){let j=F.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=j}if(F.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let j=0;j<6;j++)Ke(S.__webglFramebuffer[j],F,j);else{let j=F.texture.mipmaps;j&&j.length>0?Ke(S.__webglFramebuffer[0],F,0):Ke(S.__webglFramebuffer,F,0)}else if(Z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[j],F,!1);else{let ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,xe)}}else{let j=F.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,F,!1);else{let ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(F,S,Z){let j=n.get(F);S!==void 0&&Ge(j.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&R(F)}function H(F){let S=F.texture,Z=n.get(F),j=n.get(S);F.addEventListener("dispose",x);let ie=F.textures,xe=F.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),xe){Z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[se]=[];for(let re=0;re<S.mipmaps.length;re++)Z.__webglFramebuffer[se][re]=i.createFramebuffer()}else Z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)Z.__webglFramebuffer[se]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(_e)for(let se=0,re=ie.length;se<re;se++){let be=n.get(ie[se]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&de(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){let re=ie[se];Z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[se]);let be=r.convert(re.format,re.colorSpace),He=r.convert(re.type),Me=M(re.internalFormat,be,He,re.normalized,re.colorSpace,F.isXRRenderTarget===!0),ve=me(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Me,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,Z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)Ge(Z.__webglFramebuffer[se][re],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else Ge(Z.__webglFramebuffer[se],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let se=0,re=ie.length;se<re;se++){let be=ie[se],He=n.get(be),Me=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Me=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,He.__webglTexture),Ee(Me,be),Ge(Z.__webglFramebuffer,F,be,i.COLOR_ATTACHMENT0+se,Me,0),p(be)&&y(Me)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(se=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),Ee(se,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)Ge(Z.__webglFramebuffer[re],F,S,i.COLOR_ATTACHMENT0,se,re);else Ge(Z.__webglFramebuffer,F,S,i.COLOR_ATTACHMENT0,se,0);p(S)&&y(se),t.unbindTexture()}F.depthBuffer&&R(F)}function J(F){let S=F.textures;for(let Z=0,j=S.length;Z<j;Z++){let ie=S[Z];if(p(ie)){let xe=b(F),_e=n.get(ie).__webglTexture;t.bindTexture(xe,_e),y(xe),t.unbindTexture()}}}let K=[],ue=[];function he(F){if(F.samples>0){if(de(F)===!1){let S=F.textures,Z=F.width,j=F.height,ie=i.COLOR_BUFFER_BIT,xe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(F),se=S.length>1;if(se)for(let be=0;be<S.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let re=F.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let be=0;be<S.length;be++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let He=n.get(S[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,Z,j,0,0,Z,j,ie,i.NEAREST),c===!0&&(K.length=0,ue.length=0,K.push(i.COLOR_ATTACHMENT0+be),F.depthBuffer&&F.resolveDepthBuffer===!1&&(K.push(xe),ue.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let be=0;be<S.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);let He=n.get(S[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){let S=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function me(F){return Math.min(s.maxSamples,F.samples)}function de(F){let S=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(F){let S=o.render.frame;h.get(F)!==S&&(h.set(F,S),F.update())}function We(F,S){let Z=F.colorSpace,j=F.format,ie=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==ln&&Z!==ts&&(ot.getTransfer(Z)===gt?(j!==dn||ie!==Mn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",Z)),S}function $e(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=k,this.setupRenderTarget=H,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fM(i,e){function t(n,s=ts){let r,o=ot.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return i.BYTE;if(n===Eu)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===oc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Dt)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Iu)return i.RGB;if(n===dn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===uc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===ua||n===fa||n===da||n===pa)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===_c||n===vc||n===yc||n===Mc||n===ma||n===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===_c)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yc)return r.COMPRESSED_R11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ma)return r.COMPRESSED_RG11_EAC;if(n===Sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bc||n===Tc||n===wc||n===Ac||n===Ec||n===Cc||n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oc||n===Bc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oc)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===Vc||n===ga||n===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
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

}`,rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:dM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},of=class extends Ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new rf,p={},y=t.getContextAttributes(),b=null,M=null,w=[],A=[],_=new le,x=null,T=new Ut;T.viewport=new xt;let E=new Ut;E.viewport=new xt;let I=[T,E],O=new ec,z=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=w[ne];return ge===void 0&&(ge=new Ur,w[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=w[ne];return ge===void 0&&(ge=new Ur,w[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=w[ne];return ge===void 0&&(ge=new Ur,w[ne]=ge),ge.getHandSpace()};function U(ne){let ge=A.indexOf(ne.inputSource);if(ge===-1)return;let fe=w[ge];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,l||o),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function D(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",B);for(let ne=0;ne<w.length;ne++){let ge=A[ne];ge!==null&&(A[ne]=null,w[ne].disconnect(ge))}z=null,P=null,m.reset();for(let ne in p)delete p[ne];e.setRenderTarget(b),f=null,d=null,u=null,s=null,M=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",D),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Le=null,Fe=null;y.depth&&(Fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Pi:bi,Le=y.stencil?Ms:di);let Ge={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ot(d.textureWidth,d.textureHeight,{format:dn,type:Mn,depthTexture:new ci(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ot(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(ne){for(let ge=0;ge<ne.removed.length;ge++){let fe=ne.removed[ge],Le=A.indexOf(fe);Le>=0&&(A[Le]=null,w[Le].disconnect(fe))}for(let ge=0;ge<ne.added.length;ge++){let fe=ne.added[ge],Le=A.indexOf(fe);if(Le===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=A.length){A.push(fe),Le=Ge;break}else if(A[Ge]===null){A[Ge]=fe,Le=Ge;break}if(Le===-1)break}let Fe=w[Le];Fe&&Fe.connect(fe)}}let X=new N,L=new N;function V(ne,ge,fe){X.setFromMatrixPosition(ge.matrixWorld),L.setFromMatrixPosition(fe.matrixWorld);let Le=X.distanceTo(L),Fe=ge.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,ht=Fe[14]/(Fe[10]-1),Ke=Fe[14]/(Fe[10]+1),R=(Fe[9]+1)/Fe[5],k=(Fe[9]-1)/Fe[5],H=(Fe[8]-1)/Fe[0],J=(Ge[8]+1)/Ge[0],K=ht*H,ue=ht*J,he=Le/(-H+J),me=he*-H;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(me),ne.translateZ(he),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let de=ht+he,G=Ke+he,We=K-me,$e=ue+(Le-me),F=R*Ke/G*de,S=k*Ke/G*de;ne.projectionMatrix.makePerspective(We,$e,F,S,de,G),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Y(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,fe=ne.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),O.near=E.near=T.near=ge,O.far=E.far=T.far=fe,(z!==O.near||P!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,P=O.far),O.layers.mask=ne.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let Le=ne.parent,Fe=O.cameras;Y(O,Le);for(let Ge=0;Ge<Fe.length;Ge++)Y(Fe[Ge],Le);Fe.length===2?V(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),$(ne,O,Le)};function $(ne,ge,fe){fe===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Gs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(ne){return p[ne]};let ae=null;function Se(ne,ge){if(h=ge.getViewerPose(l||o),g=ge,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Le=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let Ke=0;Ke<fe.length;Ke++){let R=fe[Ke],k=null;if(f!==null)k=f.getViewport(R);else{let J=u.getViewSubImage(d,R);k=J.viewport,Ke===0&&(e.setRenderTargetTextures(M,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(M))}let H=I[Ke];H===void 0&&(H=new Ut,H.layers.enable(Ke),H.viewport=new xt,I[Ke]=H),H.matrix.fromArray(R.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(R.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(k.x,k.y,k.width,k.height),Ke===0&&(O.matrix.copy(H.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(H)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ke=u.getDepthInformation(fe[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,s.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ke=0;Ke<fe.length;Ke++){let R=fe[Ke].camera;if(R){let k=p[R];k||(k=new Io,p[R]=k);let H=u.getCameraImage(R);k.sourceTexture=H}}}}for(let fe=0;fe<w.length;fe++){let Le=A[fe],Fe=w[fe];Le!==null&&Fe!==void 0&&Fe.update(Le,ge,l||o)}ae&&ae(ne,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}let Ee=new gm;Ee.setAnimationLoop(Se),this.setAnimationLoop=function(ne){ae=ne},this.dispose=function(){}}},mM=new Ve,Sm=new it;Sm.set(-1,0,0,0,1,0,0,0,1);function gM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let A=w.program;n.uniformBlockBinding(M,A)}function l(M,w){let A=s[M.id];A===void 0&&(m(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",y));let _=w.program;n.updateUBOMapping(M,_);let x=e.render.frame;r[M.id]!==x&&(d(M),r[M.id]=x)}function h(M){let w=u();M.__bindingPointIndex=w;let A=i.createBuffer(),_=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,_,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let w=s[M.id],A=M.uniforms,_=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,T=A.length;x<T;x++){let E=A[x];if(Array.isArray(E))for(let I=0,O=E.length;I<O;I++)f(E[I],x,I,_);else f(E,x,0,_)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,A,_){if(v(M,w,A,_)===!0){let x=M.__offset,T=M.value;if(Array.isArray(T)){let E=0;for(let I=0;I<T.length;I++){let O=T[I],z=p(O);g(O,M.__data,E),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(E+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,w,A){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,A)}function v(M,w,A,_){let x=M.value,T=w+"_"+A;if(_[T]===void 0)return typeof x=="number"||typeof x=="boolean"?_[T]=x:ArrayBuffer.isView(x)?_[T]=x.slice():_[T]=x.clone(),!0;{let E=_[T];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return _[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function m(M){let w=M.uniforms,A=0,_=16;for(let T=0,E=w.length;T<E;T++){let I=Array.isArray(w[T])?w[T]:[w[T]];for(let O=0,z=I.length;O<z;O++){let P=I[O],U=Array.isArray(P.value)?P.value:[P.value];for(let D=0,B=U.length;D<B;D++){let X=U[D],L=p(X),V=A%_,Y=V%L.boundary,$=V+Y;A+=Y,$!==0&&_-$<L.storage&&(A+=_-$),P.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=L.storage}}}let x=A%_;return x>0&&(A+=_-x),M.__size=A,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){let w=M.target;w.removeEventListener("dispose",y);let A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}var _M=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function vM(){return Ii===null&&(Ii=new hn(_M,16,16,Ss,Dt),Ii.name="DFG_LUT",Ii.minFilter=vt,Ii.magFilter=vt,Ii.wrapS=In,Ii.wrapT=In,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Jr=class{constructor(e={}){let{canvas:t=Bp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=f,m=new Set([fc,uc,hc]),p=new Set([Mn,di,qr,Ms,ac,lc]),y=new Uint32Array(4),b=new Int32Array(4),M=new N,w=null,A=null,_=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,O=null,z=null,P=null,U=null;this._outputColorSpace=pt;let D=0,B=0,X=null,L=-1,V=null,Y=new xt,$=new xt,ae=null,Se=new Ie(0),Ee=0,ne=t.width,ge=t.height,fe=1,Le=null,Fe=null,Ge=new xt(0,0,ne,ge),ht=new xt(0,0,ne,ge),Ke=!1,R=new gs,k=!1,H=!1,J=new Ve,K=new N,ue=new xt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function de(){return X===null?fe:1}let G=n;function We(C,q){return t.getContext(C,q)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",_i,!1),G===null){let q="webgl2";if(G=We(q,C),G===null)throw We(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw je("WebGLRenderer: "+C.message),C}let $e,F,S,Z,j,ie,xe,_e,se,re,be,He,Me,ve,ze,Ye,tt,W,Te,oe,Ae,Pe,pe;function Xe(){$e=new Av(G),$e.init(),Ae=new fM(G,$e),F=new _v(G,$e,e,Ae),S=new hM(G,$e),F.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),z=G.createFramebuffer(),P=G.createFramebuffer(),U=G.createFramebuffer(),Z=new Rv(G),j=new Jy,ie=new uM(G,$e,S,j,F,Ae,Z),xe=new wv(E),_e=new Dx(G),Pe=new gv(G,_e),se=new Ev(G,_e,Z,Pe),re=new Iv(G,se,_e,Pe,Z),W=new Pv(G,F,ie),ze=new vv(j),be=new Ky(E,xe,$e,F,Pe,ze),He=new gM(E,j),Me=new jy,ve=new sM($e),tt=new mv(E,xe,S,re,g,c),Ye=new cM(E,re,F),pe=new xM(G,Z,F,S),Te=new xv(G,$e,Z),oe=new Cv(G,$e,Z),Z.programs=be.programs,E.capabilities=F,E.extensions=$e,E.properties=j,E.renderLists=Me,E.shadowMap=Ye,E.state=S,E.info=Z}Xe(),v!==Mn&&(T=new Dv(v,t.width,t.height,a,s,r));let Oe=new of(E,G);this.xr=Oe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=$e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=$e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ne,ge,!1))},this.getSize=function(C){return C.set(ne,ge)},this.setSize=function(C,q,te=!0){if(Oe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,ge=q,t.width=Math.floor(C*fe),t.height=Math.floor(q*fe),te===!0&&(t.style.width=C+"px",t.style.height=q+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ne*fe,ge*fe).floor()},this.setDrawingBufferSize=function(C,q,te){ne=C,ge=q,fe=te,t.width=Math.floor(C*te),t.height=Math.floor(q*te),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(v===Mn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Y)},this.getViewport=function(C){return C.copy(Ge)},this.setViewport=function(C,q,te,Q){C.isVector4?Ge.set(C.x,C.y,C.z,C.w):Ge.set(C,q,te,Q),S.viewport(Y.copy(Ge).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,q,te,Q){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,q,te,Q),S.scissor($.copy(ht).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(C){S.setScissorTest(Ke=C)},this.setOpaqueSort=function(C){Le=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,te=!0){let Q=0;if(C){let ee=!1;if(X!==null){let Re=X.texture.format;ee=m.has(Re)}if(ee){let Re=X.texture.type,Ne=p.has(Re),Ce=tt.getClearColor(),ke=tt.getClearAlpha(),qe=Ce.r,rt=Ce.g,ut=Ce.b;Ne?(y[0]=qe,y[1]=rt,y[2]=ut,y[3]=ke,G.clearBufferuiv(G.COLOR,0,y)):(b[0]=qe,b[1]=rt,b[2]=ut,b[3]=ke,G.clearBufferiv(G.COLOR,0,b))}else Q|=G.COLOR_BUFFER_BIT}q&&(Q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),O=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",_i,!1),tt.dispose(),Me.dispose(),ve.dispose(),j.dispose(),xe.dispose(),re.dispose(),Pe.dispose(),pe.dispose(),be.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",hd),Oe.removeEventListener("sessionend",ud),Ps.stop()};function Gt(C){C.preventDefault(),So("WebGLRenderer: Context Lost."),I=!0}function Pt(){So("WebGLRenderer: Context Restored."),I=!1;let C=Z.autoReset,q=Ye.enabled,te=Ye.autoUpdate,Q=Ye.needsUpdate,ee=Ye.type;Xe(),Z.autoReset=C,Ye.enabled=q,Ye.autoUpdate=te,Ye.needsUpdate=Q,Ye.type=ee}function _i(C){je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vi(C){let q=C.target;q.removeEventListener("dispose",vi),Z0(q)}function Z0(C){K0(C),j.remove(C)}function K0(C){let q=j.get(C).programs;q!==void 0&&(q.forEach(function(te){be.releaseProgram(te)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,te,Q,ee,Re){q===null&&(q=he);let Ne=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ce=j0(C,q,te,Q,ee);S.setMaterial(Q,Ne);let ke=te.index,qe=1;if(Q.wireframe===!0){if(ke=se.getWireframeAttribute(te),ke===void 0)return;qe=2}let rt=te.drawRange,ut=te.attributes.position,Ze=rt.start*qe,bt=(rt.start+rt.count)*qe;Re!==null&&(Ze=Math.max(Ze,Re.start*qe),bt=Math.min(bt,(Re.start+Re.count)*qe)),ke!==null?(Ze=Math.max(Ze,0),bt=Math.min(bt,ke.count)):ut!=null&&(Ze=Math.max(Ze,0),bt=Math.min(bt,ut.count));let Wt=bt-Ze;if(Wt<0||Wt===1/0)return;Pe.setup(ee,Q,Ce,te,ke);let Ht,wt=Te;if(ke!==null&&(Ht=_e.get(ke),wt=oe,wt.setIndex(Ht)),ee.isMesh)Q.wireframe===!0?(S.setLineWidth(Q.wireframeLinewidth*de()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(ee.isLine){let gn=Q.linewidth;gn===void 0&&(gn=1),S.setLineWidth(gn*de()),ee.isLineSegments?wt.setMode(G.LINES):ee.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else ee.isPoints?wt.setMode(G.POINTS):ee.isSprite&&wt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if($e.get("WEBGL_multi_draw"))wt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let gn=ee._multiDrawStarts,De=ee._multiDrawCounts,Vn=ee._multiDrawCount,dt=ke?_e.get(ke).bytesPerElement:1,Jn=j.get(Q).currentProgram.getUniforms();for(let yi=0;yi<Vn;yi++)Jn.setValue(G,"_gl_DrawID",yi),wt.render(gn[yi]/dt,De[yi])}else if(ee.isInstancedMesh)wt.renderInstances(Ze,Wt,ee.count);else if(te.isInstancedBufferGeometry){let gn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,De=Math.min(te.instanceCount,gn);wt.renderInstances(Ze,Wt,De)}else wt.render(Ze,Wt)};function cd(C,q,te){C.transparent===!0&&C.side===Un&&C.forceSinglePass===!1?(C.side=fn,C.needsUpdate=!0,Ha(C,q,te),C.side=Wn,C.needsUpdate=!0,Ha(C,q,te),C.side=Un):Ha(C,q,te)}this.compile=function(C,q,te=null){te===null&&(te=C),A=ve.get(te),A.init(q),x.push(A),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),C!==te&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights();let Q=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Re=ee.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){let Ce=Re[Ne];cd(Ce,te,ee),Q.add(Ce)}else cd(Re,te,ee),Q.add(Re)}),A=x.pop(),Q},this.compileAsync=function(C,q,te=null){let Q=this.compile(C,q,te);return new Promise(ee=>{function Re(){if(Q.forEach(function(Ne){j.get(Ne).currentProgram.isReady()&&Q.delete(Ne)}),Q.size===0){ee(C);return}setTimeout(Re,10)}$e.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let wh=null;function J0(C){wh&&wh(C)}function hd(){Ps.stop()}function ud(){Ps.start()}let Ps=new gm;Ps.setAnimationLoop(J0),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(C){wh=C,Oe.setAnimationLoop(C),C===null?Ps.stop():Ps.start()},Oe.addEventListener("sessionstart",hd),Oe.addEventListener("sessionend",ud),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(C,q);let te=Oe.enabled===!0&&Oe.isPresenting===!0,Q=T!==null&&(X===null||te)&&T.begin(E,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(q),q=Oe.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,q,X),A=ve.get(C,x.length),A.init(q),A.state.textureUnits=ie.getTextureUnits(),x.push(A),J.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),R.setFromProjectionMatrix(J,li,q.reversedDepth),H=this.localClippingEnabled,k=ze.init(this.clippingPlanes,H),w=Me.get(C,_.length),w.init(),_.push(w),Oe.enabled===!0&&Oe.isPresenting===!0){let Ne=E.xr.getDepthSensingMesh();Ne!==null&&Ah(Ne,q,-1/0,E.sortObjects)}Ah(C,q,0,E.sortObjects),w.finish(),E.sortObjects===!0&&w.sort(Le,Fe,q.reversedDepth),me=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,me&&tt.addToRenderList(w,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),k===!0&&ze.beginShadows();let ee=A.state.shadowsArray;if(Ye.render(ee,C,q),k===!0&&ze.endShadows(),(Q&&T.hasRenderPass())===!1){let Ne=w.opaque,Ce=w.transmissive;if(A.setupLights(),q.isArrayCamera){let ke=q.cameras;if(Ce.length>0)for(let qe=0,rt=ke.length;qe<rt;qe++){let ut=ke[qe];dd(Ne,Ce,C,ut)}me&&tt.render(C);for(let qe=0,rt=ke.length;qe<rt;qe++){let ut=ke[qe];fd(w,C,ut,ut.viewport)}}else Ce.length>0&&dd(Ne,Ce,C,q),me&&tt.render(C),fd(w,C,q)}X!==null&&B===0&&(ie.updateMultisampleRenderTarget(X),ie.updateRenderTargetMipmap(X)),Q&&T.end(E),C.isScene===!0&&C.onAfterRender(E,C,q),Pe.resetDefaultState(),L=-1,V=null,x.pop(),x.length>0?(A=x[x.length-1],ie.setTextureUnits(A.state.textureUnits),k===!0&&ze.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,O!==null&&O.renderEnd()};function Ah(C,q,te,Q){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)A.pushLightProbeGrid(C);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||R.intersectsSprite(C)){Q&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);let Ne=re.update(C),Ce=C.material;Ce.visible&&w.push(C,Ne,Ce,te,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||R.intersectsObject(C))){let Ne=re.update(C),Ce=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ue.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ue.copy(Ne.boundingSphere.center)),ue.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(Ce)){let ke=Ne.groups;for(let qe=0,rt=ke.length;qe<rt;qe++){let ut=ke[qe],Ze=Ce[ut.materialIndex];Ze&&Ze.visible&&w.push(C,Ne,Ze,te,ue.z,ut)}}else Ce.visible&&w.push(C,Ne,Ce,te,ue.z,null)}}let Re=C.children;for(let Ne=0,Ce=Re.length;Ne<Ce;Ne++)Ah(Re[Ne],q,te,Q)}function fd(C,q,te,Q){let{opaque:ee,transmissive:Re,transparent:Ne}=C;A.setupLightsView(te),k===!0&&ze.setGlobalState(E.clippingPlanes,te),Q&&S.viewport(Y.copy(Q)),ee.length>0&&Ga(ee,q,te),Re.length>0&&Ga(Re,q,te),Ne.length>0&&Ga(Ne,q,te),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function dd(C,q,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Q.id]===void 0){let Ze=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Q.id]=new Ot(1,1,{generateMipmaps:!0,type:Ze?Dt:Mn,minFilter:yn,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Re=A.state.transmissionRenderTarget[Q.id],Ne=Q.viewport||Y;Re.setSize(Ne.z*E.transmissionResolutionScale,Ne.w*E.transmissionResolutionScale);let Ce=E.getRenderTarget(),ke=E.getActiveCubeFace(),qe=E.getActiveMipmapLevel();E.setRenderTarget(Re),E.getClearColor(Se),Ee=E.getClearAlpha(),Ee<1&&E.setClearColor(16777215,.5),E.clear(),me&&tt.render(te);let rt=E.toneMapping;E.toneMapping=fi;let ut=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),A.setupLightsView(Q),k===!0&&ze.setGlobalState(E.clippingPlanes,Q),Ga(C,te,Q),ie.updateMultisampleRenderTarget(Re),ie.updateRenderTargetMipmap(Re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let bt=0,Wt=q.length;bt<Wt;bt++){let Ht=q[bt],{object:wt,geometry:gn,material:De,group:Vn}=Ht;if(De.side===Un&&wt.layers.test(Q.layers)){let dt=De.side;De.side=fn,De.needsUpdate=!0,pd(wt,te,Q,gn,De,Vn),De.side=dt,De.needsUpdate=!0,Ze=!0}}Ze===!0&&(ie.updateMultisampleRenderTarget(Re),ie.updateRenderTargetMipmap(Re))}E.setRenderTarget(Ce,ke,qe),E.setClearColor(Se,Ee),ut!==void 0&&(Q.viewport=ut),E.toneMapping=rt}function Ga(C,q,te){let Q=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Re=C.length;ee<Re;ee++){let Ne=C[ee],{object:Ce,geometry:ke,group:qe}=Ne,rt=Ne.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),Ce.layers.test(te.layers)&&pd(Ce,q,te,ke,rt,qe)}}function pd(C,q,te,Q,ee,Re){C.onBeforeRender(E,q,te,Q,ee,Re),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(E,q,te,Q,C,Re),ee.transparent===!0&&ee.side===Un&&ee.forceSinglePass===!1?(ee.side=fn,ee.needsUpdate=!0,E.renderBufferDirect(te,q,Q,ee,C,Re),ee.side=Wn,ee.needsUpdate=!0,E.renderBufferDirect(te,q,Q,ee,C,Re),ee.side=Un):E.renderBufferDirect(te,q,Q,ee,C,Re),C.onAfterRender(E,q,te,Q,ee,Re)}function Ha(C,q,te){q.isScene!==!0&&(q=he);let Q=j.get(C),ee=A.state.lights,Re=A.state.shadowsArray,Ne=ee.state.version,Ce=be.getParameters(C,ee.state,Re,q,te,A.state.lightProbeGridArray),ke=be.getProgramCacheKey(Ce),qe=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,Q.fog=q.fog;let rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=xe.get(C.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",vi),qe=new Map,Q.programs=qe);let ut=qe.get(ke);if(ut!==void 0){if(Q.currentProgram===ut&&Q.lightsStateVersion===Ne)return gd(C,Ce),ut}else Ce.uniforms=be.getUniforms(C),O!==null&&C.isNodeMaterial&&O.build(C,te,Ce),C.onBeforeCompile(Ce,E),ut=be.acquireProgram(Ce,ke),qe.set(ke,ut),Q.uniforms=Ce.uniforms;let Ze=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),gd(C,Ce),Q.needsLights=eg(C),Q.lightsStateVersion=Ne,Q.needsLights&&(Ze.ambientLightColor.value=ee.state.ambient,Ze.lightProbe.value=ee.state.probe,Ze.directionalLights.value=ee.state.directional,Ze.directionalLightShadows.value=ee.state.directionalShadow,Ze.spotLights.value=ee.state.spot,Ze.spotLightShadows.value=ee.state.spotShadow,Ze.rectAreaLights.value=ee.state.rectArea,Ze.ltc_1.value=ee.state.rectAreaLTC1,Ze.ltc_2.value=ee.state.rectAreaLTC2,Ze.pointLights.value=ee.state.point,Ze.pointLightShadows.value=ee.state.pointShadow,Ze.hemisphereLights.value=ee.state.hemi,Ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ee.state.spotLightMatrix,Ze.spotLightMap.value=ee.state.spotLightMap,Ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=A.state.lightProbeGridArray.length>0,Q.currentProgram=ut,Q.uniformsList=null,ut}function md(C){if(C.uniformsList===null){let q=C.currentProgram.getUniforms();C.uniformsList=Kr.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function gd(C,q){let te=j.get(C);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function $0(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;M.setFromMatrixPosition(q.matrixWorld);for(let te=0,Q=C.length;te<Q;te++){let ee=C[te];if(ee.texture!==null&&ee.boundingBox.containsPoint(M))return ee}return null}function j0(C,q,te,Q,ee){q.isScene!==!0&&(q=he),ie.resetTextureUnits();let Re=q.fog,Ne=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?q.environment:null,Ce=X===null?E.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ot.workingColorSpace,ke=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,qe=xe.get(Q.envMap||Ne,ke),rt=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ze=!!te.morphAttributes.position,bt=!!te.morphAttributes.normal,Wt=!!te.morphAttributes.color,Ht=fi;Q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ht=E.toneMapping);let wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,gn=wt!==void 0?wt.length:0,De=j.get(Q),Vn=A.state.lights;if(k===!0&&(H===!0||C!==V)){let It=C===V&&Q.id===L;ze.setState(Q,C,It)}let dt=!1;Q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Vn.state.version||De.outputColorSpace!==Ce||ee.isBatchedMesh&&De.batching===!1||!ee.isBatchedMesh&&De.batching===!0||ee.isBatchedMesh&&De.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&De.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&De.instancing===!1||!ee.isInstancedMesh&&De.instancing===!0||ee.isSkinnedMesh&&De.skinning===!1||!ee.isSkinnedMesh&&De.skinning===!0||ee.isInstancedMesh&&De.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&De.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&De.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&De.instancingMorph===!1&&ee.morphTexture!==null||De.envMap!==qe||Q.fog===!0&&De.fog!==Re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ze.numPlanes||De.numIntersection!==ze.numIntersection)||De.vertexAlphas!==rt||De.vertexTangents!==ut||De.morphTargets!==Ze||De.morphNormals!==bt||De.morphColors!==Wt||De.toneMapping!==Ht||De.morphTargetsCount!==gn||!!De.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,De.__version=Q.version);let Jn=De.currentProgram;dt===!0&&(Jn=Ha(Q,q,ee),O&&Q.isNodeMaterial&&O.onUpdateProgram(Q,Jn,De));let yi=!1,ss=!1,fr=!1,At=Jn.getUniforms(),Xt=De.uniforms;if(S.useProgram(Jn.program)&&(yi=!0,ss=!0,fr=!0),Q.id!==L&&(L=Q.id,ss=!0),De.needsLights){let It=$0(A.state.lightProbeGridArray,ee);De.lightProbeGrid!==It&&(De.lightProbeGrid=It,ss=!0)}if(yi||V!==C){S.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(G,"projectionMatrix",C.projectionMatrix),At.setValue(G,"viewMatrix",C.matrixWorldInverse);let os=At.map.cameraPosition;os!==void 0&&os.setValue(G,K.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&At.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,ss=!0,fr=!0)}if(De.needsLights&&(Vn.state.directionalShadowMap.length>0&&At.setValue(G,"directionalShadowMap",Vn.state.directionalShadowMap,ie),Vn.state.spotShadowMap.length>0&&At.setValue(G,"spotShadowMap",Vn.state.spotShadowMap,ie),Vn.state.pointShadowMap.length>0&&At.setValue(G,"pointShadowMap",Vn.state.pointShadowMap,ie)),ee.isSkinnedMesh){At.setOptional(G,ee,"bindMatrix"),At.setOptional(G,ee,"bindMatrixInverse");let It=ee.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),At.setValue(G,"boneTexture",It.boneTexture,ie))}ee.isBatchedMesh&&(At.setOptional(G,ee,"batchingTexture"),At.setValue(G,"batchingTexture",ee._matricesTexture,ie),At.setOptional(G,ee,"batchingIdTexture"),At.setValue(G,"batchingIdTexture",ee._indirectTexture,ie),At.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(G,"batchingColorTexture",ee._colorsTexture,ie));let rs=te.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&W.update(ee,te,Jn),(ss||De.receiveShadow!==ee.receiveShadow)&&(De.receiveShadow=ee.receiveShadow,At.setValue(G,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&q.environment!==null&&(Xt.envMapIntensity.value=q.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=vM()),ss){if(At.setValue(G,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&Q0(Xt,fr),Re&&Q.fog===!0&&He.refreshFogUniforms(Xt,Re),He.refreshMaterialUniforms(Xt,Q,fe,ge,A.state.transmissionRenderTarget[C.id]),De.needsLights&&De.lightProbeGrid){let It=De.lightProbeGrid;Xt.probesSH.value=It.texture,Xt.probesMin.value.copy(It.boundingBox.min),Xt.probesMax.value.copy(It.boundingBox.max),Xt.probesResolution.value.copy(It.resolution)}Kr.upload(G,md(De),Xt,ie)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Kr.upload(G,md(De),Xt,ie),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&At.setValue(G,"center",ee.center),At.setValue(G,"modelViewMatrix",ee.modelViewMatrix),At.setValue(G,"normalMatrix",ee.normalMatrix),At.setValue(G,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let It=Q.uniformsGroups;for(let os=0,dr=It.length;os<dr;os++){let xd=It[os];pe.update(xd,Jn),pe.bind(xd,Jn)}}return Jn}function Q0(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function eg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,q,te){let Q=j.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(C.texture).__webglTexture=q,j.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){let te=j.get(C);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,te=0){X=C,D=q,B=te;let Q=null,ee=!1,Re=!1;if(C){let Ce=j.get(C);if(Ce.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(G.FRAMEBUFFER,Ce.__webglFramebuffer),Y.copy(C.viewport),$.copy(C.scissor),ae=C.scissorTest,S.viewport(Y),S.scissor($),S.setScissorTest(ae),L=-1;return}else if(Ce.__webglFramebuffer===void 0)ie.setupRenderTarget(C);else if(Ce.__hasExternalTextures)ie.rebindTextures(C,j.get(C.texture).__webglTexture,j.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let rt=C.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&j.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(C)}}let ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);let qe=j.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?Q=qe[q][te]:Q=qe[q],ee=!0):C.samples>0&&ie.useMultisampledRTT(C)===!1?Q=j.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?Q=qe[te]:Q=qe,Y.copy(C.viewport),$.copy(C.scissor),ae=C.scissorTest}else Y.copy(Ge).multiplyScalar(fe).floor(),$.copy(ht).multiplyScalar(fe).floor(),ae=Ke;if(te!==0&&(Q=z),S.bindFramebuffer(G.FRAMEBUFFER,Q)&&S.drawBuffers(C,Q),S.viewport(Y),S.scissor($),S.setScissorTest(ae),ee){let Ce=j.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,te)}else if(Re){let Ce=q;for(let ke=0;ke<C.textures.length;ke++){let qe=j.get(C.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,qe.__webglTexture,te,Ce)}}else if(C!==null&&te!==0){let Ce=j.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ce.__webglTexture,te)}L=-1},this.readRenderTargetPixels=function(C,q,te,Q,ee,Re,Ne,Ce=0){if(!(C&&C.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){S.bindFramebuffer(G.FRAMEBUFFER,ke);try{let qe=C.textures[Ce],rt=qe.format,ut=qe.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!F.textureFormatReadable(rt)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(ut)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-Q&&te>=0&&te<=C.height-ee&&G.readPixels(q,te,Q,ee,Ae.convert(rt),Ae.convert(ut),Re)}finally{let qe=X!==null?j.get(X).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,q,te,Q,ee,Re,Ne,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke)if(q>=0&&q<=C.width-Q&&te>=0&&te<=C.height-ee){S.bindFramebuffer(G.FRAMEBUFFER,ke);let qe=C.textures[Ce],rt=qe.format,ut=qe.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!F.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ze),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(q,te,Q,ee,Ae.convert(rt),Ae.convert(ut),0);let bt=X!==null?j.get(X).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,bt);let Wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await kp(G,Wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ze),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.deleteBuffer(Ze),G.deleteSync(Wt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,te=0){let Q=Math.pow(2,-te),ee=Math.floor(C.image.width*Q),Re=Math.floor(C.image.height*Q),Ne=q!==null?q.x:0,Ce=q!==null?q.y:0;ie.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Ne,Ce,ee,Re),S.unbindTexture()},this.copyTextureToTexture=function(C,q,te=null,Q=null,ee=0,Re=0){let Ne,Ce,ke,qe,rt,ut,Ze,bt,Wt,Ht=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(te!==null)Ne=te.max.x-te.min.x,Ce=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,rt=te.min.y,ut=te.isBox3?te.min.z:0;else{let Xt=Math.pow(2,-ee);Ne=Math.floor(Ht.width*Xt),Ce=Math.floor(Ht.height*Xt),C.isDataArrayTexture?ke=Ht.depth:C.isData3DTexture?ke=Math.floor(Ht.depth*Xt):ke=1,qe=0,rt=0,ut=0}Q!==null?(Ze=Q.x,bt=Q.y,Wt=Q.z):(Ze=0,bt=0,Wt=0);let wt=Ae.convert(q.format),gn=Ae.convert(q.type),De;q.isData3DTexture?(ie.setTexture3D(q,0),De=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),De=G.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),De=G.TEXTURE_2D),S.activeTexture(G.TEXTURE0),S.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);let Vn=S.getParameter(G.UNPACK_ROW_LENGTH),dt=S.getParameter(G.UNPACK_IMAGE_HEIGHT),Jn=S.getParameter(G.UNPACK_SKIP_PIXELS),yi=S.getParameter(G.UNPACK_SKIP_ROWS),ss=S.getParameter(G.UNPACK_SKIP_IMAGES);S.pixelStorei(G.UNPACK_ROW_LENGTH,Ht.width),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht.height),S.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),S.pixelStorei(G.UNPACK_SKIP_ROWS,rt),S.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);let fr=C.isDataArrayTexture||C.isData3DTexture,At=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){let Xt=j.get(C),rs=j.get(q),It=j.get(Xt.__renderTarget),os=j.get(rs.__renderTarget);S.bindFramebuffer(G.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let dr=0;dr<ke;dr++)fr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(C).__webglTexture,ee,ut+dr),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(q).__webglTexture,Re,Wt+dr)),G.blitFramebuffer(qe,rt,Ne,Ce,Ze,bt,Ne,Ce,G.DEPTH_BUFFER_BIT,G.NEAREST);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||j.has(C)){let Xt=j.get(C),rs=j.get(q);S.bindFramebuffer(G.READ_FRAMEBUFFER,P),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,U);for(let It=0;It<ke;It++)fr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.__webglTexture,ee,ut+It):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xt.__webglTexture,ee),At?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rs.__webglTexture,Re,Wt+It):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rs.__webglTexture,Re),ee!==0?G.blitFramebuffer(qe,rt,Ne,Ce,Ze,bt,Ne,Ce,G.COLOR_BUFFER_BIT,G.NEAREST):At?G.copyTexSubImage3D(De,Re,Ze,bt,Wt+It,qe,rt,Ne,Ce):G.copyTexSubImage2D(De,Re,Ze,bt,qe,rt,Ne,Ce);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else At?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(De,Re,Ze,bt,Wt,Ne,Ce,ke,wt,gn,Ht.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Re,Ze,bt,Wt,Ne,Ce,ke,wt,Ht.data):G.texSubImage3D(De,Re,Ze,bt,Wt,Ne,Ce,ke,wt,gn,Ht):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,Ze,bt,Ne,Ce,wt,gn,Ht.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,Ze,bt,Ht.width,Ht.height,wt,Ht.data):G.texSubImage2D(G.TEXTURE_2D,Re,Ze,bt,Ne,Ce,wt,gn,Ht);S.pixelStorei(G.UNPACK_ROW_LENGTH,Vn),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt),S.pixelStorei(G.UNPACK_SKIP_PIXELS,Jn),S.pixelStorei(G.UNPACK_SKIP_ROWS,yi),S.pixelStorei(G.UNPACK_SKIP_IMAGES,ss),Re===0&&q.generateMipmaps&&G.generateMipmap(De),S.unbindTexture()},this.initRenderTarget=function(C){j.get(C).__webglFramebuffer===void 0&&ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ie.setTextureCube(C,0):C.isData3DTexture?ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ie.setTexture2DArray(C,0):ie.setTexture2D(C,0),S.unbindTexture()},this.resetState=function(){D=0,B=0,X=null,S.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Qe=Math.SQRT2*1.15,bm=0,af="flow";function Tm(i,e){return i>-25.5&&i<-10.5&&e>-20&&e<-6||i>-21.5&&i<-12.5&&e>15&&e<25}var wn=2.1/Qe,pi=2.4/Qe;function wm(){let i=new et,e=[],t=new st({color:8625795,metalness:.45,roughness:.35}),n=new st({color:6845557,metalness:.7,roughness:.3}),s=new st({color:2436139}),r=(a,c,l,h=t)=>{let u=new N(...a),d=new N(...c).sub(u),f=new Ue(new vn(l,l,d.length(),10),h);f.position.copy(u).addScaledVector(d,.5),f.quaternion.setFromUnitVectors(new N(0,1,0),d.normalize()),i.add(f)};for(let a of[-.67,.67]){let c=new et;c.position.set(0,.35,a);let l=new Ue(new Ei(.33,.045,8,24),s);l.rotation.y=Math.PI/2,c.add(l);for(let h=0;h<12;h++){let u=h*Math.PI/6,d=new Ue(new vn(.006,.006,.64,5),n);d.rotation.x=u,c.add(d)}i.add(c),e.push(c)}for(let[a,c]of[[[0,.35,-.67],[0,.86,-.2]],[[0,.86,-.2],[0,.4,0]],[[0,.4,0],[0,.35,-.67]],[[0,.86,-.2],[0,.94,.48]],[[0,.94,.48],[0,.4,0]],[[0,.94,.48],[0,.35,.67]],[[0,.94,.48],[0,1.14,.45]],[[-.28,1.14,.45],[.28,1.14,.45]]])r(a,c,.025);let o=new Ue(new Jt(.23,.07,.3),s);return o.position.set(0,.92,-.2),i.add(o),r([-.2,.4,0],[.2,.4,0],.02,n),i.scale.set(1/Qe,1,1/Qe),i.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{root:i,wheels:e}}function Am(){let i=new et,e=new et;i.add(e),e.position.set(nt.x,0,nt.z);let t=new st({color:6649202,metalness:.6,roughness:.3}),n=new st({color:5857639,transparent:!0,opacity:.28,depthWrite:!1}),s=new rn({color:16770228});function r(a,c,l,h,u,d,f,g=i){let v=new Ue(new Jt(h,u,d),f);return v.position.set(a,c,l),g.add(v),v}for(let a of[nt.x1,nt.x2])for(let c of[nt.z1,nt.z2])r(a,2.85,c,.045,13,.045,t);r(nt.x1,2.85,nt.z,.025,13,1.4,n);for(let a of[nt.z1,nt.z2])r(nt.x,2.85,a,1.3,13,.025,n);r(0,-.07,0,1.25,.14,1.35,t,e),r(0,2.45,0,1.25,.08,1.35,t,e),r(0,2.39,0,.8,.025,.8,s,e);let o=Bi.map(a=>{let c=[-1,1].map(l=>r(nt.x2,a.y+1.16,nt.z+l*.32,.055,2.32,.64,t));return r(nt.x2+.02,a.y+1.3,nt.z1-.12,.035,.2,.1,s),{y:a.y,pair:c}});return{root:i,update(a){e.position.y=a.y;for(let c of o)for(let l=0;l<2;l++)c.pair[l].position.z=nt.z+(l?1:-1)*(.32+(Math.abs(a.y-c.y)<.01?a.door*.65:0))}}}function Em(){let i=(n,s)=>{let r=document.createElement("canvas");r.width=1024,r.height=512,s(r.getContext("2d"));let o=new qn(r);return o.colorSpace=pt,o.anisotropy=4,new st({name:n,map:o,roughness:.85})},e=i("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",n=>{n.fillStyle="#f6f1e7",n.fillRect(0,0,1024,512),n.strokeStyle="#b8b6a466",n.lineWidth=1.2;for(let s=-512;s<1536;s+=110)n.beginPath(),n.moveTo(s,0),n.lineTo(s+320,512),n.stroke(),n.beginPath(),n.moveTo(s,0),n.lineTo(s-320,512),n.stroke();for(let s=0;s<1024;s+=5)n.fillStyle="#978b7520",n.fillRect(s,0,1,512)}),t=Array.from({length:3},(n,s)=>i("\u8D70\u5ECA\u6444\u5F71"+s,r=>{r.fillStyle="#e2e0d7",r.fillRect(0,0,1024,512),r.fillStyle="#a6a6a0",r.fillRect(0,350,1024,162);for(let o=0;o<9;o++){let a=70+o*110,c=80+(o*71+s*89)%250;r.fillStyle=["#404644","#707774","#919792"][(o+s)%3],r.fillRect(a,350-c,80,c),r.fillStyle="#d1d3ca";for(let l=370-c;l<340;l+=24)for(let h=a+10;h<a+75;h+=20)r.fillRect(h,l,8,12)}r.strokeStyle="#f6f4e8",r.lineWidth=10,r.strokeRect(20,20,984,472)}));return{\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8:e,...Object.fromEntries(t.map(n=>[n.name,n]))}}function Cm({box:i,cyl:e,ell:t,branch:n,mat:s,wood:r,oak:o,dark:a,glass:c,linen:l,lightmat:h,plaster:u,seats:d,obstacle:f,plant:g}){let v=s("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",16183783),m=s("\u8D70\u5ECA\u70DF\u718F\u6728",5653297),p=s("\u8D70\u5ECA\u6696\u767D\u9876",16315628);i(-1,3.618,-6,20,.03,3.8,m),i(9.75,3.618,-5,1.5,.03,1.8,m),i(10.75,3.618,-6,.5,.03,3.8,m);for(let _=-10.8;_<8.9;_+=.45)i(_,3.636,-6,.012,.006,3.8,r);i(-2,6.955,-6,18,.035,3.8,p),i(-2,6.925,-7.75,17.8,.018,.035,h);for(let[_,x,T]of[[-11,-3,-7],[-3,3,0]]){for(let[E,I]of[[_,T-wn/2],[T+wn/2,x]])i((E+I)/2,5.25,-7.902,I-E,3.2,.028,v),i((E+I)/2,3.73,-7.866,I-E,.16,.045,a);i(T,6.4,-7.902,wn,1.2,.028,v)}for(let _=0;_<2;_++)for(let x=0;x<3;x++){let T=.95+x*.62,E=5.95-_*.82;i(T,E,-7.85,.53,.69,.05,a),i(T,E,-7.812,.46,.61,.016,s("\u8D70\u5ECA\u6444\u5F71"+(_+x)%3,10198934))}i(-4.5,5.25,-7.81,1.15,1.4,.12,o);for(let _ of[-5.1,-3.9])i(_,5.25,-7.68,.07,1.5,.35,r);for(let _ of[4.5,6])i(-4.5,_,-7.68,1.25,.07,.35,r);i(-4.5,5.94,-7.62,1.05,.02,.05,h),e(-4.5,4.68,-7.6,.12,.3,l),t(-4.5,4.94,-7.6,.15,.19,.12,l),i(16,3.5,-.5,10,.2,15,s("\u513F\u7AE5\u9732\u53F0\u77F3\u6750",13156783));for(let _ of[-7.96,6.96])i(16,4.24,_,10,1.28,.06,c,!0),i(16,4.91,_,10,.05,.07,a);i(20.96,4.24,-.5,.06,1.28,15,c,!0),i(20.96,4.91,-.5,.07,.05,15,a);for(let[_,x]of[[-7.15,1.7],[1.45,11.1]])i(11.04,4.24,_,.06,1.28,x,c,!0),i(11.04,4.91,_,.07,.05,x,a);let y=s("\u513F\u7AE5\u8BBE\u65BD\u8584\u8377\u7EFF",8961456),b=s("\u6ED1\u68AF\u6674\u7A7A\u84DD",7974347,{roughness:.35}),M=s("\u6C99\u6C60\u7EC6\u6C99",14534548),w=s("\u513F\u7AE5\u8F6F\u57AB",14727570);i(16,3.635,-1,6,.05,7,w),i(17,4.82,-2.6,1.35,.12,1.25,y);for(let _ of[16.4,17.6])for(let x of[-3.1,-2.1])i(_,4.18,x,.07,1.16,.07,r);for(let _=0;_<6;_++)i(17,3.7+_*.2,-4+_*.18,1,.16,.2,y);let A=i(17,4.3,-.7,1.05,.09,3.1,b);A.rotation.x=.38;for(let _ of[16.4,17.6])n([_,4.95,-2.15],[_,3.82,.75],.075,b),n([_,4.85,-3.15],[_,5.45,-3.15],.045,r);f(17,-1.2,1.65,5.8,3.6,1.9),i(14,3.83,3,2.2,.46,2.1,r,!0),i(14,4.07,3,2,.035,1.9,M),e(14.4,4.2,3.2,.13,.23,b),t(13.6,4.12,2.6,.15,.07,.14,y),i(19.3,4.05,4.9,2,.9,.65,o,!0);for(let _=0;_<4;_++)i(18.6+_*.46,4.25,5.25,.35,.4,.05,[y,b,w][_%3]),t(18.6+_*.46,4.62,4.9,.14,.14,.14,[y,b,w][_%3]);for(let _=0;_<4;_++)e(19,3.71,-3+_*.85,.26,.2,_%2?y:b);i(12.1,4.04,1,.65,.18,2.2,r,!0),i(11.83,4.4,1,.12,.7,2.2,r),d.push({x:12.1,z:1,y:3.6,rotation:Math.PI/2,type:"sit"}),g(12,5.7,.8,3.6),g(20,5.8,.7,3.6)}function Rm(){let i=(a,c=1024,l=768)=>{let h=document.createElement("canvas");h.width=c,h.height=l,a(h.getContext("2d"),c,l);let u=new qn(h);return u.colorSpace=pt,u.anisotropy=4,u};function e(a,c,l,h,u,d,f=0){a.fillStyle=d,a.beginPath(),a.ellipse(c,l,h,u,f,0,Math.PI*2),a.fill()}let t=i((a,c,l)=>{a.fillStyle="#f7eddd",a.fillRect(0,0,c,l);for(let h=0;h<c;h+=8)a.strokeStyle=h%24?"#eee4d530":"#d6c3a035",a.beginPath(),a.moveTo(h,0),a.lineTo(h,l),a.stroke();for(let h=0;h<l;h+=6)a.fillStyle="#ffffff20",a.fillRect(0,h,c,1)}),n=i((a,c,l)=>{let h=a.createLinearGradient(0,0,0,l);h.addColorStop(0,"#cfebed"),h.addColorStop(1,"#fff2cb"),a.fillStyle=h,a.fillRect(0,0,c,l);for(let f=0;f<8;f++)e(a,90+f*275,690,330,130,f%2?"#b1d1ac":"#d3e0b4"),e(a,100+f*280,95+f%2*90,85,30,"#fffaf0");a.fillStyle="#466c62",a.font="bold 50px sans-serif",a.fillText("\u5B9D\u53EF\u68A6 \xB7 \u4E00\u8D77\u53BB\u5192\u9669",110,340),a.font="25px sans-serif",a.fillText("\u6BCF\u4E00\u5929\uFF0C\u90FD\u6709\u65B0\u7684\u53D1\u73B0",115,393);let u=1260,d=442;a.save(),a.translate(u,d),a.fillStyle="#e8b72b",a.beginPath(),a.moveTo(135,50),a.lineTo(240,-40),a.lineTo(220,50),a.lineTo(295,15),a.lineTo(265,110),a.lineTo(150,145),a.closePath(),a.fill(),e(a,0,100,104,120,"#f7d64d"),e(a,0,-10,112,95,"#ffe269");for(let f of[-1,1])e(a,f*65,-131,24,102,"#ffe269",f*.27),e(a,f*84,-204,20,32,"#343a3a",f*.27),e(a,f*40,-24,12,18,"#343a3a"),e(a,f*37,-29,4,6,"#fff"),e(a,f*78,16,21,16,"#e67962"),e(a,f*65,205,45,24,"#f7d64d");e(a,0,-2,6,4,"#343a3a"),a.strokeStyle="#76523f",a.lineWidth=4,a.beginPath(),a.moveTo(-22,29),a.quadraticCurveTo(-10,42,0,30),a.quadraticCurveTo(12,43,24,28),a.stroke(),a.restore();for(let[f,g,v]of[[1750,530,68],[865,595,45],[1940,200,40]])e(a,f,g,v,v,"#fff9ee"),a.fillStyle="#e9887e",a.beginPath(),a.arc(f,g,v,Math.PI,Math.PI*2),a.fill(),a.fillStyle="#536b69",a.fillRect(f-v,g-4,v*2,8),e(a,f,g,v*.24,v*.24,"#536b69"),e(a,f,g,v*.15,v*.15,"#fff9ee")},2048,768),s=i((a,c,l)=>{a.fillStyle="#faf2e5",a.fillRect(0,0,c,l),e(a,710,190,115,115,"#d7ad7a");for(let h=0;h<4;h++){a.fillStyle=["#d2d9c4","#aebdad","#7f9c92","#52766d"][h],a.beginPath(),a.moveTo(0,l);for(let u=0;u<=c;u+=8)a.lineTo(u,360+h*100+Math.sin(u*.007+h)*85);a.lineTo(c,l),a.fill()}a.fillStyle="#f6efdf",a.font="28px serif",a.fillText("\u5C71\u5C45 \xB7 \u56DB\u5B63",65,690)}),r=i((a,c,l)=>{a.fillStyle="#fcf4e8",a.fillRect(0,0,c,l);for(let h=0;h<5;h++){a.strokeStyle="#96815f",a.lineWidth=7,a.beginPath(),a.moveTo(500,690),a.quadraticCurveTo(500+h*35,400,170+h*150,130),a.stroke();for(let u=0;u<4;u++)e(a,240+h*115+(u%2?40:-35),220+u*100,65,24,["#b1bda3","#819c89","#cabd96"][h%3],h*.5-.8)}a.fillStyle="#6b7a66",a.font="28px serif",a.fillText("\u53F6\u5F71 \xB7 \u6162\u65F6\u5149",65,690)}),o=(a,c)=>new st({name:a,map:c,roughness:.88});return{...Em(),\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8:o("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",t),\u5B9D\u53EF\u68A6\u5899\u5E03:o("\u5B9D\u53EF\u68A6\u5899\u5E03",n),\u5C71\u5C45\u6302\u753B:o("\u5C71\u5C45\u6302\u753B",s),\u690D\u7269\u6302\u753B:o("\u690D\u7269\u6302\u753B",r)}}function Pm({box:i,mat:e}){let t=e("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",16248285),n=e("\u5B9D\u53EF\u68A6\u5899\u5E03",14216423),s=e("\u6302\u753B\u6D45\u6A61\u6728\u6846",12689787),r=e("\u5C71\u5C45\u6302\u753B",11782579),o=e("\u690D\u7269\u6302\u753B",12241846);i(-3.105,5.3,-13,.025,3.2,9.8,t),i(3.105,5.3,-13.5,.025,3.2,8.7,t),i(2.895,5.3,-13,.025,3.2,9.6,t),i(2.875,5.3,-14.45,.015,3.2,5.7,n),i(-2.895,5.3,-13,.025,3.2,9.6,t),i(-20.8,1.72,3.8,.024,3.2,3.5,t),i(20.8,1.72,3.8,.024,3.2,3.5,t),i(-13.2,-1.95,-12.905,3.5,3.1,.025,t),i(-20.6,-1.95,-13.105,3.5,3.1,.025,t);function a(c,l,h,u,d,f=!1,g=r){i(c,l,h,f?.065:u+.12,d+.12,f?u+.12:.065,s),i(c+(f?.043:0),l,h+(f?0:.043),f?.018:u,d,f?u:.018,g)}i(-3.14,5.7,-15.35,.065,1.02,1.47,s),i(-3.183,5.7,-15.35,.018,.9,1.35,o),a(-20.73,1.9,3.8,1.8,1.15,!0),i(20.7,1.9,3.8,.06,1.28,1.92,s),i(20.657,1.9,3.8,.018,1.15,1.8,o),a(-13.2,-1.8,-12.86,1.45,.9,!1,r),a(3.5,1.9,-17.45,1.35,.9,!1,o)}var lf=[[-7,-12,3.6],[0,-12,3.6],[5,-14,3.6],[-16,0,0],[-16,-13,0],[16,0,0],[15,-5.3,0],[0,-10,0],[-6,-14,0],[5,-13,0],[-20,-16,-3.6],[-14,-16,-3.6],[-20,-10,-3.6],[-14,-10,-3.6],[-17,20,0]];function Im(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,glass:h,plaster:u,lightmat:d,architecture:f,seats:g,obstacle:v,sofa:m,table:p,chair:y,books:b,plant:M,rug:w}=i,A=r("\u536B\u6D74\u767D\u74F7",15920869,{roughness:.25}),_=r("\u536B\u6D74\u4E94\u91D1",10332588,{roughness:.2,metalness:.8}),x=r("\u536B\u6D74\u7070\u77F3",11977151,{roughness:.35}),T=r("\u6536\u7EB3\u7EC7\u7269",8623498),E=r("\u73A9\u5177\u7C89",15184569),I=r("\u73A9\u5177\u9EC4",15252311);function O(D,B,X,L=0,V=1.1,Y=.55){e(D,L+V/2,B,X,V,Y,a,!0);for(let $=0;$<Math.ceil(X/.55);$++){let ae=D-X/2+($+.5)*X/Math.ceil(X/.55);e(ae,L+V/2,B+Y/2+.012,.015,V-.08,.015,l),e(ae+.1,L+V*.65,B+Y/2+.03,.12,.025,.03,_)}}function z(D,B,X,L,V=1.8,Y=!1,$=0){let ae=f.children.length;e(D,L+V/2,B,X,V,.12,o);for(let Se of[D-X/2,D+X/2])e(Se,L+V/2,B+.2,.06,V,.5,a);for(let Se=0;Se<4;Se++){e(D,L+.1+Se*V/4,B+.2,X,.06,.5,a);for(let Ee=0;Ee<5;Ee++){let ne=D-X*.38+Ee*X*.19;Y?(t(ne,L+.25+Se*V/4,B+.22,.1,.12,.09,Ee%2?E:I),e(ne,L+.15+Se*V/4,B+.22,.16,.06,.17,T)):e(ne,L+.28+Se*V/4,B+.2,.08,.28,.23,[T,c,o][Ee%3])}}if($){let Se=new et;for(let Ee of f.children.slice(ae))Ee.position.x-=D,Ee.position.z-=B,Se.add(Ee);Se.position.set(D,0,B),Se.rotation.y=$,f.add(Se)}v(D+Math.sin($)*.2,B+Math.cos($)*.2,$?.5:X,$?X:.5,L,V)}e(4.85,3.617,-13.5,3.5,.03,8.8,x),e(6.65,5.3,-13.5,.15,3.4,9,u,!0);for(let[D,B]of[[3,5-wn/2],[5+wn/2,6.65]])e((D+B)/2,5.3,-9,B-D,3.4,.15,u,!0);e(5,6.4,-9,wn,1.2,.15,u,!0),e(4.2,3.63,-10.25,1.65,.06,1.7,x),e(5.02,4.6,-10.6,.035,2,1,h,!0),s([3.22,4.6,-10],[3.22,6.1,-10],.025,_),s([3.22,6.1,-10],[3.8,6.1,-10],.025,_),n(3.8,6.08,-10,.19,.035,_),n(3.75,3.67,-10.25,.08,.015,l),O(3.85,-12.1,1,3.6,.95,.85),e(3.85,4.08,-11.66,.92,.85,.025,A);let P=n(3.85,4.05,-11.625,.28,.035,_);P.rotation.x=Math.PI/2;let U=n(3.85,4.05,-11.6,.21,.035,l);U.rotation.x=Math.PI/2,e(3.9,4.4,-11.61,.29,.09,.03,l);for(let D=0;D<3;D++)e(3.85,4.6+D*.075,-12.1,.65,.065,.4,D%2?c:T);n(3.9,3.91,-10,.23,.6,T);for(let D=0;D<4;D++)e(3.9,4.21+D*.055,-10,.34,.05,.28,c);e(3.18,5.1,-12.5,.05,.7,.8,_);for(let D of[-12.7,-12.3])e(3.25,4.8,D,.045,.6,.28,c);e(-.6,3.81,-15.7,2.4,.42,3.8,a,!0),e(-.6,4.055,-15.7,2.3,.07,3.7,r("\u69BB\u69BB\u7C73\u8349\u7F16",12105354)),e(-.6,4.17,-15.7,2.05,.17,3.5,c);for(let D of[-1.38,-.6,.18])e(D,3.81,-13.775,.7,.27,.025,o),e(D,3.84,-13.75,.15,.02,.025,l);g.push({x:-.6,z:-15.7,y:3.6,rotation:0,type:"lie"}),z(-2.83,-11.8,2.6,3.6,1.8,!1,Math.PI/2),z(2.83,-12.1,2.4,3.6,1.2,!0,-Math.PI/2),p(1.85,-17.2,1.5,.8,3.6),y(1.85,-16.5,Math.PI,3.6),e(1.85,4.43,-17.2,.42,.025,.3,c),m(-5.2,-12.5,Math.PI/2,3.6),p(-4,-12.5,.7,1.35,3.6),e(-3.2,4.05,-12.5,.4,.9,2,o,!0),e(-3.2,5.15,-12.5,.07,1,1.65,l),e(-3.245,5.15,-12.5,.015,.91,1.53,r("\u7535\u89C6\u753B\u9762",7574929)),M(-3.7,-17,.7,3.6),e(-9.4,3.72,-12,1.1,.24,2,l,!0),e(-9.4,3.86,-12,.85,.035,1.75,T);for(let D of[-9.86,-8.94])s([D,3.85,-12.85],[D,4.8,-12.85],.035,_);e(-9.4,4.8,-12.85,1,.05,.06,_),e(-9.4,4.94,-12.88,.55,.25,.045,l);for(let D of[-15.2,-14.6]){s([-4.25,3.88,D],[-3.65,3.88,D],.035,_);for(let B of[-4.23,-3.67])t(B,3.88,D,.12,.14,.14,l)}w(-4,-16,1.4,2,3.6),e(-16,3.5,-6,10,.2,26,r("\u9633\u53F0\u9632\u6ED1\u77F3",12170403));for(let D of[-18.95,6.95])e(-16,4.17,D,10,1.15,.06,h,!0),e(-16,4.77,D,10,.05,.08,l);e(-20.95,4.17,-6,.06,1.15,26,h,!0),e(-20.95,4.77,-6,.08,.05,26,l);for(let[D,B]of[[(-29-pi/2)/2,9-pi/2],[(-10+pi/2+7)/2,17-pi/2]])e(-11.05,4.17,D,.06,1.15,B,h,!0),e(-11.05,4.77,D,.08,.05,B,l);p(-16,-6,2.1,1.1,3.6),y(-16,-4.9,Math.PI,3.6),y(-16,-7.1,0,3.6),g.push({x:-16,z:-4.9,y:3.6,rotation:Math.PI,type:"sit"});for(let[D,B]of[[-20,-17],[-20,5],[-12,5]])M(D,B,1.1,3.6);n(-16,4.46,-6,.12,.16,A);for(let D of[-16.4,-15.6])n(D,4.42,-6,.07,.1,A);m(-18,1,Math.PI,3.6),p(-18,-.2,1.3,.7,3.6),O(19,-5.5,2.2),z(19,-6.4,2.6,0,2.25),M(20,4,.9),O(-18,5.9,3),O(-19,-16.9,2,0,1.1),O(3.5,-17.4,2.1),M(3,-5.3,.65),O(18,5.8,3.2),z(-12,-18.1,1.2,-3.6,2),O(-12.1,-8.1,1.2,-3.6,1);for(let[D,B,X]of[[19,-5.5,0],[-18,5.9,0],[3.5,-17.4,0],[-12.1,-8.1,-3.6]])n(D,X+1.2,B,.11,.22,A),s([D,X+1.25,B],[D+.13,X+1.65,B],.015,o),t(D+.13,X+1.65,B,.17,.09,.08,T);for(let[D,B,X]of lf)e(D,X+3.02,B,1.4,.07,.6,l),e(D,X+2.975,B,1.3,.025,.5,d);for(let D of[-20,-12])for(let B of[-15,-5,5])e(D,3.98,B,.16,.65,.16,l),e(D,4.25,B,.18,.15,.18,d)}var Sa=new N;function ei(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Sa.copy(e),Sa[n]=0,Sa.normalize();let l=.5*o/(o+a),h=1-Sa.angleTo(i)/c;return Math.sign(Sa[t])===1?h*l:a/(o+a)+l+l*(1-h)}var ns=class i extends Jt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new N,l=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,v=new N,m=.5/o;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[y+0]=ei(v,l,"z","y",r,n),f[y+1]=1-ei(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[y+0]=1-ei(v,l,"z","y",r,n),f[y+1]=1-ei(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[y+0]=1-ei(v,l,"x","z",r,e),f[y+1]=ei(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[y+0]=1-ei(v,l,"x","z",r,e),f[y+1]=1-ei(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[y+0]=1-ei(v,l,"x","y",r,e),f[y+1]=1-ei(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[y+0]=ei(v,l,"x","y",r,e),f[y+1]=1-ei(v,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Lm({box:i,ell:e,cyl:t,mat:n,architecture:s,seats:r,obstacle:o}){let a=n("\u4E3B\u9898\u5976\u6CB9\u767D",16773083,{roughness:.38}),c=n("\u4E3B\u9898\u6A31\u82B1\u7C89",15247805),l=n("\u4E3B\u9898\u6DE1\u7D2B",12101080),h=n("\u4E3B\u9898\u6674\u7A7A\u84DD",11128800),u=n("\u4E3B\u9898\u9999\u69DF\u91D1",13083239,{metalness:.65,roughness:.28}),d=n("\u4E3B\u9898\u6696\u706F\u5E26",16770737,{emissive:16767131,emissiveIntensity:2}),f=n("\u4E3B\u9898\u70AD\u9ED1",2499884),g=n("\u76AE\u5361\u4E18\u9EC4",16764725),v=n("\u7CBE\u7075\u7403\u7EA2",15158089);function m(_,x,T,E,I,O,z){let P=new Ue(new ns(E,I,O,3,Math.min(E,I,O)*.24),z);return P.position.set(_,x,T),P.castShadow=P.receiveShadow=!0,s.add(P),P}function p(_,x,T,E){let I=new kr;for(let z=0;z<10;z++){let P=z*Math.PI/5+Math.PI/2,U=z%2?E*.44:E,D=Math.cos(P)*U,B=Math.sin(P)*U;z===0?I.moveTo(D,B):I.lineTo(D,B)}I.closePath();let O=new Ue(new Go(I,{depth:.025,bevelEnabled:!1}),d);O.position.set(_,x,T),s.add(O)}let y=-3.6;i(-20.2,y+.018,-10.1,4.15,.028,5.45,n("KTV\u6D45\u8272\u77F3\u5730\u9762",15655391,{roughness:.3}));for(let _=0;_<5;_++)for(let x=0;x<3;x++)m(-21.85+_*.72,y+.58+x*.91,-12.8,.7,.89,.1,[c,h,a,l,a][_]);for(let _ of[-22.17,-18.22])m(_,y+1.6,-12.68,.04,2.9,.04,d);m(-20.2,y+3.06,-12.65,3.95,.045,.045,d);for(let _=0;_<5;_++)m(-21.6+_*.68,y+.48,-8.8,.72,.52,1.03,a),m(-21.6+_*.68,y+.98,-8.35,.73,.85,.38,a),e(-21.6+_*.68,y+.86,-8.64,.25,.23,.14,_%2?l:c);o(-20.25,-8.65,3.7,1.25,y,1.45),r.push({x:-20.3,z:-8.9,y,rotation:Math.PI,type:"sit"}),m(-20.4,y+.71,-10.5,1.7,.12,.75,a);for(let _ of[-21.1,-19.7])for(let x of[-10.78,-10.22])t(_,y+.34,x,.027,.65,u);o(-20.4,-10.5,1.7,.75,y,.8),m(-20.3,y+.38,-12.15,2.9,.7,.55,a),o(-20.3,-12.15,2.9,.55,y,.8),i(-20.3,y+1.65,-12.43,2.75,1.5,.1,f),i(-20.3,y+1.65,-12.367,2.6,1.35,.018,n("\u7CD6\u679C\u70B9\u6B4C\u5C4F",16777215,{emissive:14991310,emissiveIntensity:.5}));for(let _=0;_<9;_++){let x=-22.2+_*.44,T=y+2.65-Math.sin(_/8*Math.PI)*.35;if(p(x,T,-7.18,.085),_<8){let E=i(x+.22,T-.035,-7.19,.46,.015,.015,u);E.rotation.z=-Math.cos(_/8*Math.PI)*.12}}m(-.6,4.3,-15.3,2.05,.09,2.3,h);let b=(_,x,T,E)=>{e(_,x,T,E,E,E,a);let I=new Ue(new un(E,20,12,0,Math.PI*2,0,Math.PI/2),v);I.position.set(_,x,T),s.add(I);let O=new Ue(new Ei(E,.025,6,24),f);O.rotation.x=Math.PI/2,O.position.set(_,x,T),s.add(O),e(_,x,T+E,.1,.1,.04,f),e(_,x,T+E+.032,.06,.06,.02,a)};b(-.6,5.23,-17.48,.58),m(-.6,5.18,-17.78,3.8,2.25,.12,h);for(let _ of[-2.2,1])p(_,5.7,-17.69,.18);let M=-.05,w=-15.25;e(M,4.61,w,.28,.35,.23,g),e(M,4.98,w,.3,.28,.24,g);for(let _ of[-1,1]){let x=e(M+_*.19,5.34,w,.07,.3,.065,g);x.rotation.z=-_*.22,e(M+_*.24,5.57,w,.052,.09,.06,f),e(M+_*.115,5.04,w+.22,.035,.042,.025,f),e(M+_*.22,4.94,w+.19,.06,.05,.025,v),e(M+_*.2,4.38,w+.1,.12,.08,.16,g)}for(let _=0;_<3;_++)b(2.6,4.98,-12.8+_*.62,.18);let A=t(0,3.622,-10.7,1.32,.03,v);t(0,3.64,-10.7,.38,.025,a),i(0,3.654,-10.7,2.64,.014,.09,f)}function Dm(i){let e=document.createElement("canvas");e.width=768,e.height=432;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,768,432);n.addColorStop(0,"#f2b8ce"),n.addColorStop(1,"#b7c9ec"),t.fillStyle=n,t.fillRect(0,0,768,432),t.fillStyle="#574b6b",t.font="bold 32px sans-serif",t.fillText("\u7CD6\u679C\u661F\u5149 \xB7 \u5BB6\u5EAD\u6B22\u5531",40,55),t.font="22px sans-serif",["\u4EB2\u5B50\u513F\u6B4C","\u6D41\u884C\u91D1\u66F2","\u7ECF\u5178\u8001\u6B4C","\u6211\u7684\u6B4C\u5355","\u6B22\u4E50\u5408\u5531","\u8F7B\u677E\u4F34\u594F"].forEach((r,o)=>{let a=143+o%3*238,c=155+Math.floor(o/3)*150;t.fillStyle="#fff0dc",t.beginPath(),t.arc(a,c,53,0,Math.PI*2),t.fill(),t.fillStyle="#6a597a",t.textAlign="center",t.fillText(["\u266B","\u266A","\u2605"][o%3],a,c+10),t.font="22px sans-serif",t.fillText(r,a,c+85)});let s=new qn(e);s.colorSpace=pt,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.map=s,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.needsUpdate=!0}function yM(i,e,t,n=.12){let s=Math.hypot(i,e),r=Math.min(1,s/Math.max(1,t)),o=Math.max(0,(r-n)/(1-n));return{right:s?i/s*o:0,forward:s?-e/s*o:0,x:s?i/s*r*t:0,y:s?e/s*r*t:0}}function Nm(i,e){let t=null,n=null,s={right:0,forward:0};function r(){let a=t;t=null,s.right=s.forward=0,e.style.transform="translate(0px, 0px)",i.dataset.active="false",a!==null&&i.hasPointerCapture(a)&&i.releasePointerCapture(a)}function o(a){if(a.pointerId!==t)return;a.preventDefault();let c=yM(a.clientX-n.x,a.clientY-n.y,n.radius);s.right=c.right,s.forward=c.forward,e.style.transform=`translate(${c.x}px, ${c.y}px)`}i.addEventListener("pointerdown",a=>{if(t!==null||a.button>0)return;a.preventDefault();let c=i.getBoundingClientRect();n={x:c.left+c.width/2,y:c.top+c.height/2,radius:c.width*.32},t=a.pointerId,i.setPointerCapture(t),i.dataset.active="true",o(a)}),i.addEventListener("pointermove",o);for(let a of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(a,c=>{c.pointerId===t&&r()});return{state:s,reset:r}}var Ts=[...[["masterDoor","\u4E3B\u5367\u623F\u95E8",-7,-8,"x",wn],["childDoor","\u513F\u7AE5\u623F\u95E8",0,-8,"x",wn],["bathDoor","\u536B\u6D74\u623F\u95E8",5,-9,"x",wn],["balconyDoor","\u4E3B\u5367\u9633\u53F0\u95E8",-11,-10,"z",pi]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,z:n,axis:s,width:r,height:2.2,y:3.6,open:!0,angle:1,interior:!0})),{id:"gate",name:"\u5EAD\u9662\u5927\u95E8",x:0,z:30,axis:"x",width:12,height:2.5,y:0,open:!0,angle:1},{id:"basementDoor",name:"\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8",x:-22.4,z:-18,axis:"z",width:1.8,height:2.5,y:-3.6,open:!0,angle:1}];function Um(i,e,t){return Ts.some(n=>{if(Math.abs(t-n.y)>=2)return!1;if(!n.interior)return n.angle<.97&&(n.axis==="x"?Math.abs(i-n.x)<n.width/2+.15&&Math.abs(e-n.z)<.25:Math.abs(i-n.x)<.25&&Math.abs(e-n.z)<n.width/2+.15);let s=n.interior?1:n.axis==="x"?2:1,r=n.width/s;for(let o=0;o<s;o++){let a=o===0?-1:1,c=(n.axis==="x"?-a:n.id==="balconyDoor"?-1:1)*n.angle*Math.PI/2,l=n.axis==="x"?n.x+a*n.width/2:n.x,h=n.axis==="x"?n.z:n.z-n.width/2,u=i-l,d=e-h,f=u*Math.cos(c)-d*Math.sin(c),g=u*Math.sin(c)+d*Math.cos(c);if(n.axis==="x"?Math.abs(f+a*r/2)<r/2+.14&&Math.abs(g)<.18:Math.abs(g-r/2)<r/2+.14&&Math.abs(f)<.18)return!0}return!1})}function Fm(i,e){let t=Ts.find(n=>n.id===i);return!t||t.open&&(t.axis==="x"?Math.abs(e.x-t.x)<t.width/2+.3&&Math.abs(e.z-t.z)<1.1:Math.abs(e.x-t.x)<1.1&&Math.abs(e.z-t.z)<t.width/2+.3)&&Math.abs(e.y-t.y)<2?!1:(t.open=!t.open,!0)}function Om(i){let e=new et;i.add(e);let t=new st({color:11413281,roughness:.5}),n=new st({color:13870926,metalness:.5,roughness:.4}),s=new st({color:2637112}),r=new st({color:16764784,emissive:16755769,emissiveIntensity:1.7});function o(f,g,v,m,p,y,b,M=e){let w=new Ue(new Jt(m,p,y),b);return w.position.set(f,g,v),w.castShadow=w.receiveShadow=!0,M.add(w),w}function a(f,g,v,m,p,y=e){let b=new Ue(new un(m,20,14),p);return b.position.set(f,g,v),b.castShadow=!0,y.add(b),b}function c(f,g,v,m,p,y,b=!1,M=0){let w=document.createElement("canvas");w.width=b?128:768,w.height=b?768:128;let A=w.getContext("2d");A.fillStyle="#a41919",A.fillRect(0,0,w.width,w.height),A.strokeStyle="#dcb971",A.lineWidth=7,A.strokeRect(7,7,w.width-14,w.height-14),A.fillStyle="#ffe6a1",A.textAlign="center",A.textBaseline="middle",A.font=(b?"75":"74")+'px "Songti SC",serif',b?[...f].forEach((T,E)=>A.fillText(T,64,58+E*650/(f.length-1))):A.fillText(f,384,64);let _=new qn(w);_.colorSpace=pt;let x=new Ue(new Zi(p,y),new st({map:_,roughness:.75,side:Un}));x.position.set(g,v,m),x.rotation.y=M,e.add(x)}let l=[];for(let f of Ts){let g=f.interior?1:f.axis==="x"?2:1;for(let v=0;v<g;v++){let m=new et,p=v===0?-1:1,y=f.width/g;if(e.add(m),f.interior)f.axis==="x"?(m.position.set(f.x+p*f.width/2,f.y,f.z),o(-p*y/2,1.1,0,y,2.2,.08,s,m),o(-p*(y-.17),1.15,.065,.055,.23,.05,n,m)):(m.position.set(f.x,f.y,f.z-f.width/2),o(0,1.1,y/2,.08,2.2,y,s,m),o(-.07,1.15,y-.17,.045,.23,.055,n,m));else if(f.axis==="x"){m.position.set(f.x+p*f.width/2,f.y,f.z);for(let b=0;b<14;b++)o(-p*(b+.5)*y/14,1.15,0,.06,2.3,.09,s,m);o(-p*y/2,.45,0,y,.55,.1,s,m),o(-p*y/2,2.35,0,y,.09,.12,n,m)}else m.position.set(f.x,f.y,f.z-f.width/2),o(0,1.2,y/2,.1,2.4,y,s,m),o(-.08,1.1,y-.2,.06,.25,.045,n,m);l.push({d:f,pivot:m,sign:p})}}for(let f of[-6.4,6.4])o(f,1.7,30,.65,3.4,.65,s),a(f,3.85,30,.45,t),o(f,3.35,30,.05,.35,.05,n);o(0,3.3,30,13.5,.25,.9,s),c("\u6625\u56DE\u5927\u5730\u798F\u6EE1\u95E8",6.4,1.7,30.34,.46,2.5,!0),c("\u559C\u5165\u534E\u5802\u5BB6\u5174\u65FA",-6.4,1.7,30.34,.46,2.5,!0),c("\u9616\u5BB6\u6B22\u4E50",0,3.3,30.47,3.6,.48),c("\u8FCE\u6625\u63A5\u798F",0,2.98,-3.85,2.3,.4),c("\u5BB6\u548C\u4E07\u4E8B\u5174",-2.75,1.65,-3.85,.32,2.3,!0),c("\u4EBA\u987A\u767E\u4E1A\u65FA",2.75,1.65,-3.85,.32,2.3,!0);for(let f of[-9,-5,5,9])a(f,2.65,-2.5,.3,t),o(f,2.14,-2.5,.035,.4,.035,n);for(let f of[-32.72,32.72])for(let g of[-14,-4,6,16,26])o(f,1.35,g,.16,.5,.24,s),o(f+(f<0?.09:-.09),1.35,g,.06,.3,.2,r);for(let f of[-27,-18,-9,9,18,27])o(f,1.35,29.75,.28,.48,.14,s),o(f,1.35,29.66,.22,.3,.04,r);let h=new et;e.add(h);let u=new st({color:15987952,roughness:1});for(let f of[-3,3]){a(f,.53,25,.55,u,h),a(f,1.2,25,.4,u,h),a(f,1.76,25,.3,u,h),o(f,2.08,25,.62,.08,.62,s,h),o(f,2.23,25,.4,.28,.4,s,h);for(let m of[-.1,.1])a(f+m,1.82,25+.275,.028,s,h);let v=new Ue(new hi(.07,.25,12),n);v.rotation.x=Math.PI/2,v.position.set(f,1.72,25+.36),h.add(v),o(f,1.48,25,.69,.13,.69,t,h);for(let m of[-1,1]){let p=o(f+m*.55,1.3,25,.65,.045,.045,s,h);p.rotation.z=m*.3}}function d(f,g){h.visible=g;for(let v of Ts)v.angle=bn.damp(v.angle,v.open?1:0,6,f);for(let v of l)v.pivot.rotation.y=(v.d.axis==="x"?v.d.interior?-v.sign:v.sign:v.d.id==="balconyDoor"?-1:1)*v.d.angle*Math.PI/2}return d(0,!1),{update:d,group:e}}function MM(){return new Promise(i=>{typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:400}):setTimeout(i,24)})}var $c=class{constructor({yieldWork:e=MM,onChange:t=()=>{}}={}){this.tasks=[],this.running=!1,this.yieldWork=e,this.onChange=t}add(e,t,{when:n=()=>!0,priority:s=10}={}){if(this.tasks.some(r=>r.id===e))throw Error("\u91CD\u590D\u7D20\u6750\u4EFB\u52A1 "+e);this.tasks.push({id:e,load:t,when:n,priority:s,state:"pending"})}async update(e){if(this.running)return;let t=this.tasks.filter(n=>n.state==="pending"&&n.when(e)).sort((n,s)=>n.priority-s.priority)[0];if(t){this.running=!0,t.state="loading",this.onChange(this.stats);try{await this.yieldWork(),await t.load(),t.state="done"}catch(n){t.state="error",t.error=String(n),console.warn("\u7D20\u6750\u6682\u672A\u8F7D\u5165:",t.id,n)}finally{this.running=!1,this.onChange(this.stats)}}}retry(){for(let e of this.tasks)e.state==="error"&&(e.state="pending");this.onChange(this.stats)}get stats(){return{total:this.tasks.length,loaded:this.tasks.filter(e=>e.state==="done").length,failed:this.tasks.filter(e=>e.state==="error").length,active:this.tasks.find(e=>e.state==="loading")?.id||null}}};async function cf(i){let e=globalThis.MANSION_ASSETS?.[i];if(!e)throw Error("\u7F3A\u5C11\u7D20\u6750 "+i);if(e.startsWith("assets/")){let s=new AbortController,r=setTimeout(()=>s.abort(),2e4);try{let o=await fetch(e,{cache:"default",signal:s.signal});if(!o.ok)throw Error(`${i}: HTTP ${o.status}`);return await o.arrayBuffer()}finally{clearTimeout(r)}}let t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}function hf(i,e){let t=i<=700||e&&i<=1200;return{mobile:t,fov:t?68:52,distance:t?7.5:5,pixelCap:t?1.85:1/0}}function Bm(i,e,t,n=!1){return n?"global":e<-.3?"basement":e>7?"roof":e>3.3?"upper":t<7&&i<-11?"west":t<7&&i>11?"east":t<-4&&Math.abs(i)<11?"main":"garden"}var jc={color:5857639,transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1};function zm(i){i.traverse(e=>{if(e.isMesh)for(let t of Array.isArray(e.material)?e.material:[e.material])/glass|玻璃/i.test(t.name)&&(t.color.setHex(jc.color),Object.assign(t,{transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1}),"transmission"in t&&(t.transmission=0),t.needsUpdate=!0)})}function km(){let e=new Uint8Array(262144);for(let s=0;s<256;s++)for(let r=0;r<256;r++){let o=r/256*Math.PI*2,a=s/256*Math.PI*2,c=Math.sin(o+Math.sin(a)*1.2)+.4*Math.sin(3*a+2*o),l=Math.pow(Math.abs(Math.sin(c*6+Math.sin(a*4))),18),h=Math.sin(r*12.9898+s*78.233)*43758.5453,u=110+32*Math.sin(o+a*2)+35*l+9*(h-Math.floor(h)),d=(s*256+r)*4;e[d]=u+7,e[d+1]=u+5,e[d+2]=u,e[d+3]=255}let t=new hn(e,256,256);t.colorSpace=pt,t.wrapS=t.wrapT=Kt,t.generateMipmaps=!0,t.minFilter=yn,t.magFilter=vt,t.anisotropy=4,t.needsUpdate=!0;let n=(s,r,o={})=>new st({name:s,color:r,roughness:.7,...o});return{\u53A8\u623F\u67DC\u4F53:n("\u53A8\u623F\u67DC\u4F53",3422518,{roughness:.62}),\u53A8\u623F\u77F3\u6750:n("\u53A8\u623F\u77F3\u6750",12170927,{map:t,roughness:.38}),\u53A8\u623F\u5730\u7816:n("\u53A8\u623F\u5730\u7816",14276041,{roughness:.62}),\u53A8\u623F\u9876\u9762:n("\u53A8\u623F\u9876\u9762",5593169,{roughness:.95})}}function Vm({box:i,mat:e,dark:t,lightmat:n}){let s=e("\u53A8\u623F\u67DC\u4F53"),r=e("\u53A8\u623F\u77F3\u6750"),o=e("\u53A8\u623F\u5730\u7816"),a=e("\u53A8\u623F\u9876\u9762");i(-6.8,.012,-12.8,8,.018,10,e("\u74F7\u7816\u7F1D",11184543));for(let c=0;c<5;c++)for(let l=0;l<6;l++)i(-10.8+.8+c*1.6,.026,-17.8+.833+l*1.666,1.59,.018,1.656,o);i(-6.4,1.62,-17.65,7.7,3.24,.1,s),i(-6.4,1.5,-17.57,5.7,1.05,.06,r);for(let c of[-7.65,-6.35,-5.05])i(c,2.5,-17.19,1.27,1.2,.68,s),i(c,1.895,-16.88,1.22,.024,.025,n);i(-3.45,1.52,-16.9,1.15,3.04,1.3,s,!0),i(-3.45,1.47,-16.226,.88,.74,.035,t),i(-3.45,1.47,-16.2,.72,.52,.014,e("\u7535\u5668\u9762\u677F",1383712)),i(-3.45,1.74,-16.17,.63,.024,.03,t),i(-9.3,1.5,-16.9,1.4,3,1.3,s,!0);for(let c of[-9.65,-8.95])i(c,1.6,-16.229,.68,2.35,.035,s);i(-9.3,1.6,-16.19,.018,1,.028,t),i(-6.5,3.28,-12.7,8.7,.12,10.5,a);for(let c of[-10.72,-2.28])i(c,3.205,-12.7,.025,.018,10.25,n);for(let c of[-17.78,-7.62])i(-6.5,3.205,c,8.4,.018,.025,n);i(-6.5,3.205,-10.3,7.8,.02,.06,t);for(let c of[-9,-7,-5,-3])i(c,3.188,-10.3,.09,.012,.08,n)}function uf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Mt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Gm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);let g=Gm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Gm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ct(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function ff(i,e){if(e===Lu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yr||e===xa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Yr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var or={x1:9,x2:10.5,z1:-14.5,z2:-6,height:3.6,base:0,reverse:!0},df={x1:7,x2:8.5,z1:-15,z2:-6,height:3.6,base:3.6,reverse:!1},rr={x1:-24.5,x2:-22.5,z1:-17,z2:-7,height:3.6,base:-3.6,reverse:!0};function Hm(i,e){return i>-18.35&&i<-10.3&&e>-12.3&&e<-11.1}var ba=null;function Wm(i){ba=i}function Xm(i){return ba?.phase==="idle"&&ba.door>.98&&Math.abs(ba.y-i)<.05}var ws=[];function ti(i,e,t,n,s=0,r=3){ws.push({x1:i-t/2,x2:i+t/2,z1:e-n/2,z2:e+n/2,y:s,h:r})}function qm(i,e){return i>-20.8&&i<-10.7&&e>-18.8&&e<6.8||i>10.7&&i<20.8&&e>-7.8&&e<6.8}function Qc(i,e){return i>-10.8&&i<10.8&&e>-17.8&&e<-4.15}function Ym(i,e){return i>-24.8&&i<-11.2&&e>-18.8&&e<-7.15}function eh(i,e,t=0){if(Eh(i,e,.15)&&Xm(t))return ba.y;for(let n of[or,df,rr]){if(i<n.x1||i>n.x2||e<n.z1||e>n.z2)continue;let s=(n.z2-e)/(n.z2-n.z1),r=n.base+(n.reverse?1-s:s)*n.height;if(Math.abs(r-t)<.25)return r;if(t>=n.base-.01&&t<=n.base+n.height+.01)return NaN}return t>6.95&&(Qc(i,e)||Hm(i,e))?7.2:t>3.35&&t<3.85&&(Qc(i,e)||qm(i,e))?3.6:t<-3.35&&Ym(i,e)?-3.6:Math.abs(t)<.25?0:NaN}function is(i,e,t,n=t){if(Eh(i,e,.12))return Xm(t)&&i>nt.x1+.14&&e>nt.z1+.14&&e<nt.z2-.14;if(Um(i,e,t)||Math.abs(i)>34||e>49||e<-24||Math.abs(t)<.25&&(((i+5)/4.35)**2+((e-10)/2.85)**2<1||i>17.1&&i<23.9&&e>3.1&&e<18.9))return!1;let s=eh(i,e,n);if(!Number.isFinite(s)||Math.abs(s-n)>.22||n>6.95&&!Qc(i,e)&&!Hm(i,e)||n>3.35&&n<3.85&&!Qc(i,e)&&!qm(i,e)||n<-3.35&&!Ym(i,e)||Math.abs(t)<.001&&i>rr.x1&&i<rr.x2&&e>rr.z1&&e<rr.z2-.1)return!1;let r=.2/Qe;return!ws.some(o=>t+1.68>o.y+.08&&t<o.y+o.h-.12&&i>o.x1-r&&i<o.x2+r&&e>o.z1-r&&e<o.z2+r)}function Zm(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.08));for(let s=0;s<n;s++){let r=i.x+e/n,o=eh(r,i.z,i.y);is(r,i.z,o,i.y)&&(i.x=r,i.y=o);let a=i.z+t/n;o=eh(i.x,a,i.y),is(i.x,a,o,i.y)&&(i.z=a,i.y=o)}return i}function Km(i,e){return i.velocity-=16*e,i.height=Math.max(0,i.height+i.velocity*e),i.height===0&&(i.velocity=0),i}function pf(i){return i.height>.001||i.velocity>0?!1:(i.velocity=6.5,!0)}function Jm(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.05)),s=Math.atan2(e,t);for(let r=0;r<n;r++){let o=i.x+e/n,a=i.z+t/n,c=!0;for(let[l,h]of[[0,0],[-.3,-1.05],[.3,-1.05],[-.3,1.05],[.3,1.05]]){let u=o+(Math.cos(s)*l+Math.sin(s)*h)/Qe,d=a+(-Math.sin(s)*l+Math.cos(s)*h)/Qe;if(Math.abs(eh(u,d,i.y)-i.y)>.001||!is(u,d,i.y,i.y)){c=!1;break}}if(!c)break;i.x=o,i.z=a}return i}function $m(i){let{box:e,cyl:t,mat:n,wood:s,linen:r,dark:o,glass:a,plaster:c,architecture:l,root:h,seats:u,obstacle:d}=i;e(-17,-.025,20,8,.05,8,c);for(let y of[-21,-13])e(y,1.65,20,.2,3.3,8,c,!0);e(-17,1.65,16,8,3.3,.2,c,!0),e(-17,3.4,20,8.6,.18,8.6,o),e(-17,3.25,24,8.3,.1,.12,s),e(-17,.005,27,5,.04,6,c);let f=n("\u8D8A\u91CE\u8F66\u6F06",4018507,{metalness:.72,roughness:.23}),g=n("\u8F6E\u80CE",2106404),v=n("\u8F66\u8EAB\u9970\u4EF6",9609121,{metalness:.9,roughness:.22});e(-17,.8,20,2.15,.65,4.5,f),e(-17,1.5,19.8,1.92,.85,2.65,f),e(-17,1.62,21.14,1.73,.53,.035,a),e(-17,1.62,18.45,1.73,.53,.035,a);for(let y of[-18,-16])e(y,1.63,19.8,.03,.51,2.2,a),e(y,1.62,19.7,.05,.57,.06,o),e(y,1.19,20.3,.04,.04,.2,v);for(let y of[-18.13,-15.87])for(let b of[18.55,21.4]){let M=t(y,.54,b,.49,.27,g);M.rotation.z=Math.PI/2;let w=t(y+(y<-17?-.15:.15),.54,b,.26,.035,v);w.rotation.z=Math.PI/2}e(-17,.72,22.29,1.1,.32,.045,o);for(let y=-17.45;y<-16.5;y+=.15)e(y,.72,22.32,.045,.27,.035,v);for(let y of[-17.78,-16.22])e(y,.95,22.28,.4,.16,.05,n("\u8F66\u706F",16773068,{emissive:16766352,emissiveIntensity:.5}));e(-17,.46,22.28,2.25,.17,.12,v);for(let y of[-17.73,-16.27])e(y,1.98,19.8,.055,.06,2.8,o);d(-17,20,2.5,4.8,0,2.1);let m=[];h.userData.swings=m;function p(y,b,M,w){for(let x of[-1,1])e(b+x*1.4,w+1.45,M,.09,2.9,.09,o,!0);e(b,w+2.9,M,3,.1,.12,s);let A=new et;A.position.set(b,w+2.8,M),h.add(A),e(0,-2.22,0,1.8,.12,.65,s,!1,A),e(0,-2.08,0,1.72,.18,.6,r,!1,A),e(0,-1.77,-.28,1.72,.55,.1,r,!1,A);for(let x of[-.8,.8])e(x,-1.1,0,.018,2.2,.018,o,!1,A);let _={x:b,z:M,y:w,rotation:0,type:"sit",swingId:y};u.push(_),m.push({id:y,pivot:A,seat:_,position:new N})}p("roof",2,-7.2,7.2),p("garden",-9.5,22,0)}function jm(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,root:f,seats:g,tree:v,plant:m,table:p,chair:y,sofa:b,rug:M}=i,w=r("\u77F3\u677F",12105124),A=r("\u571F\u58E4",4797222),_=r("\u53F6\u7EFF",5466941),x=r("\u6843\u82B1\u7C89",14655659),T=r("\u6A58\u5B50",15111730,{roughness:.65}),E=r("\u6843\u5B50",14983306),I=r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5}),O=[];f.userData.districtLabels=O;let z=(L,V,Y,$)=>O.push({text:L,x:V,y:Y,z:$});function P(L,V,Y,$=x){n(L,V+.25,Y,.016,.5,_);for(let ae=0;ae<5;ae++){let Se=ae*1.256;t(L+Math.sin(Se)*.065,V+.51,Y+Math.cos(Se)*.065,.065,.035,.065,$)}t(L,V+.54,Y,.035,.035,.035,T)}function U(L,V,Y,$,ae=0){e(L,ae+.23,V,Y,.46,$,o,!0),e(L,ae+.47,V,Y-.14,.025,$-.14,A);for(let Se=0;Se<Math.floor(Y*3);Se++)for(let Ee=0;Ee<2;Ee++)P(L-Y/2+.22+Se*.32,ae+.48,V+(Ee-.5)*$*.48,Se%3?x:c)}function D(L,V,Y,$=2.8){e(L,Y+1.5,V,$,1.5,.11,l),e(L,Y+1.5,V+.065,$-.12,1.37,.025,I),e(L,Y+.35,V+.1,$+.6,.7,.6,o,!0)}M(-16,-13,7,7),b(-16,-11,Math.PI),p(-16,-13,2.5,1.1),D(-16,-17.6,0),m(-20,-16,.8),z("\u897F\u7FFC\u4F1A\u5BA2\u5385",-16,2.7,-17.3),e(0,.005,27,4,.05,6,w),e(-27,.005,5,3,.05,44,w);for(let L of[-10,10,18])U(L,26,L<0?2:4,1.5);for(let[L,V,Y,$]of[[-28,9,E,"\u6843\u6811"],[-28,19,T,"\u6A58\u6811"],[28,25,T,"\u6A58\u6811"]]){v(L,V,.65);for(let ae=0;ae<22;ae++){let Se=ae*2.4,Ee=.85+ae%4*.22;t(L+Math.sin(Se)*Ee,2.6+ae%5*.29,V+Math.cos(Se)*Ee,.13,.15,.13,Y)}z($,L,1.5,V+2.1)}z("\u5730\u4E0B\u5BA4\u5165\u53E3 \u2193",-23.5,1.9,-5.8);let B=-3.6;e(-18,B-.1,-13,14,.2,12,a),e(-25,B+1.65,-13,.2,3.3,12,h,!0),e(-11,B+1.65,-13,.2,3.3,12,h,!0),e(-18,B+1.65,-19,14,3.3,.2,h,!0),e(-18,B+1.65,-7,14,3.3,.2,h,!0),e(-22.4,-2,-12,.1,3.2,10,h,!0);for(let L of[-17.8,-8.7])e(-18,B+1.5,L,.15,3,2.2,o,!0);for(let L of[-20.6,-13.2])e(L,B+1.5,-13,3.6,3,.15,h,!0);for(let L of[-21,-19.5]){for(let V=0;V<4;V++)e(L,B+.3+V*.6,-18.35,1.25,.07,.8,o);for(let V=0;V<3;V++)for(let Y=0;Y<2;Y++)e(L+(Y-.5)*.48,B+.53+V*.6,-18.3,.4,.38,.6,r("\u50A8\u7269\u7BB1",11047794))}z("\u50A8\u7269\u95F4",-20.2,B+2.4,-18.2);for(let L of[-15.6,-12.8]){p(L,-17.6,2.1,.9,B),e(L,B+1.22,-17.8,1.1,.66,.08,l),e(L,B+1.22,-17.75,1,.57,.025,r("\u7535\u7ADE\u5C4F\u5E55",7704504,{emissive:3697856,emissiveIntensity:.75})),e(L,B+.86,-17.35,.65,.035,.25,l),e(L+.83,B+.35,-17.6,.38,.7,.6,l),y(L,-16.5,Math.PI,B),g.push({x:L,z:-16.5,y:B,rotation:Math.PI,type:"sit"});for(let V=0;V<3;V++)n(L+.83,B+.25+V*.17,-17.28,.05,.02,u).rotation.x=Math.PI/2}z("\u7535\u7ADE\u623F",-14,B+2.5,-18.65);for(let L of[-21.8,-18.8]){e(L,B+.55,-12.2,.32,1.1,.35,l);for(let V of[.3,.7]){let Y=n(L,B+V,-11.99,.1,.02,l);Y.rotation.x=Math.PI/2}}n(-19.1,B+.85,-10.7,.025,1.7,l),t(-19.1,B+1.76,-10.7,.055,.11,.055,l),z("KTV \xB7 \u8F7B\u5531\u65F6\u5149",-20.2,B+2.5,-12.4),b(-14.3,-9.1,Math.PI,B),p(-14.3,-10.8,2,.9,B),D(-14,-12.5,B,2.5),z("\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,B+2.5,-12.4),f.userData.basementLight={x:-18,y:-1.3,z:-13};for(let L of[-21,-15])for(let V of[-17,-9])e(L,-.45,V,2.4,.04,.08,u);for(let L of[-18,-4])e(0,7.75,L,22,1.1,.04,d,!0),e(0,8.32,L,22,.045,.055,l);for(let L of[-11,11])for(let[V,Y]of L===-11?[[-15.2,5.6],[-7.5,7]]:[[-11,14]])e(L,7.75,V,.04,1.1,Y,d,!0),e(L,8.32,V,.055,.045,Y,l);for(let L of[-8,-4,0,4])U(L,-17,2.8,.9,7.2);for(let L of[-14,-8])U(-10,L,.9,2.5,7.2);p(-4,-10,2.5,1.3,7.2);for(let L of[-4.8,-3.2])y(L,-8.8,Math.PI,7.2),g.push({x:L,z:-8.8,y:7.2,rotation:Math.PI,type:"sit"});y(-4,-11.2,0,7.2),n(-4,8.14,-10,.18,.22,r("\u9752\u74F7",7903111));for(let L of[-4.7,-3.3])n(L,8.07,-10,.075,.12,c);for(let L=0;L<4;L++){let V=Math.PI/4+L*Math.PI/2;e(-4+Math.cos(V)*3.65,8.55,-10+Math.sin(V)*3.65,.085,2.7,.085,l,!0)}n(-4,10.04,-10,3.8,.12,l),n(-4,10.13,-10,3.65,.1,o,void 0,3.4),n(-4,9.975,-10,3.55,.025,u),e(3,7.43,-12,1.7,.46,2.1,o,!0),e(3,7.67,-12,1.55,.025,1.95,A),z("\u5929\u53F0\u8336\u5E2D",-4,8.8,-12),z("\u5929\u53F0\u82B1\u56ED",1,8.5,-16.5),e(0,-.01,40,10,.04,20,r("\u8857\u9053\u8DEF\u9762",6843751));for(let L of[-6,6])e(L,.015,40,2,.07,20,w);for(let L=32;L<49;L+=4)e(0,.025,L,.12,.008,1.5,c);let X=[];f.userData.vendors=X;for(let L of[-1,1])for(let V=0;V<3;V++){let Y=L*10,$=33.5+V*5,ae=r("\u644A\u68DA"+V,[12088147,6651502,13743485][V]);e(Y,.6,$,3,1.2,1.4,o,!0),e(Y,1.25,$,3.15,.1,1.5,a);for(let Ee of[-1.5,1.5])for(let ne of[-.9,.9])e(Y+Ee,1.3,$+ne,.055,2.6,.055,l);let Se=e(Y,2.65,$,3.5,.12,2.25,ae);Se.rotation.z=L*.06;for(let Ee=0;Ee<12;Ee++){let ne=Y-1.15+Ee%4*.7,ge=$-.45+Math.floor(Ee/4)*.45;V===2?P(ne,1.3,ge):t(ne,1.42,ge,.18,.13,.16,V===0?T:E)}z(["\u65F6\u4EE4\u9C9C\u679C","\u4E61\u6751\u70B9\u5FC3","\u82B1\u8349\u5C0F\u94FA"][V],Y,2.25,$+1),X.push({x:Y+L*2,z:$,rotation:-L*Math.PI/2})}z("\u4E61\u95F4\u96C6\u5E02 \xB7 \u5411\u524D\u5230\u6CB3\u5CB8",0,3,31),z("\u6CB3\u7554\u6B65\u9053",0,2.8,48),e(0,.01,48,68,.06,3,w),e(0,-.035,55,130,.05,10,r("\u6CB3\u6C34",5406329,{roughness:.15,metalness:.45}));for(let L=0;L<20;L++)e(-58+L*6,-.004,52+L%3*2,2.5,.007,.035,r("\u6CB3\u9762\u6CE2\u7EB9",9744034,{transparent:!0,opacity:.4,depthWrite:!1}));for(let L of[49.6,60.5]){e(0,.9,L,70,.05,.06,l,!0);for(let V=-34;V<=34;V+=2)e(V,.45,L,.04,.9,.04,l)}e(0,.015,62,130,.07,3,w)}function Qm(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,architecture:f,root:g,roofs:v,obstacle:m,seats:p}=i,y=r("\u8C61\u7259\u74F7",15526366,{roughness:.2}),b=r("\u62C9\u4E1D\u4E0D\u9508\u94A2",9542557,{metalness:.88,roughness:.24}),M=r("\u7535\u5668\u9762\u677F",1383712,{metalness:.35,roughness:.1}),w=r("\u9EC4\u94DC",10521429,{metalness:.8,roughness:.27});function A(P,U,D,B,X,L,V,Y=.08,$=f){let ae=new Ue(new ns(B,X,L,4,Y),V);return ae.position.set(P,U,D),ae.castShadow=!0,ae.receiveShadow=!0,$.add(ae),ae}function _(P,U,D,B=.15,X=.4,L=y){let V=[];for(let $=0;$<=12;$++){let ae=$/12;V.push(new le(B*(.65+Math.sin(ae*Math.PI)*.35)*(ae>.8?.7:1),ae*X))}let Y=new Ue(new Ho(V,24),L);Y.position.set(P,U,D),Y.castShadow=!0,f.add(Y)}function x(P,U,D=3,B=2.85){e(P,B,U,D,.075,.14,l),e(P,B-.044,U,D-.07,.018,.09,u);for(let X of[-1,1])n(P+X*D*.37,(B+3.3)/2,U,.009,3.3-B,l)}function T(P,U,D,B=30,X=4){let L=new Zn(16767664,B,X,2);L.position.set(P,U,D),g.add(L)}function E(P,U,D){n(P,U,D,.18,.018,y),n(P,U+.013,D,.13,.007,y),n(P+.29,U+.075,D-.12,.06,.15,d),e(P-.25,U+.016,D,.024,.016,.28,b),e(P+.23,U+.016,D,.018,.016,.25,b)}for(let P of[-21,21])e(P,1.7,3.8,.23,3.4,3.6,h,!0);for(let P of[-20,20])e(P,1.7,7,1.8,3.4,.22,h,!0);e(10.93,5.3,-15.4,.22,3.4,5.2,h,!0),e(-7,5.3,-18,7.5,3.4,.23,h,!0),A(4.9,.5,-16.5,3.9,1,1.1,o,.06),m(4.9,-16.5,3.9,1.1,0,1),A(4.9,1.05,-16.5,4.1,.1,1.25,y,.04),A(4.1,1.4,-16.6,.8,.6,.5,M,.04);for(let P of[3.85,4.35])n(P,1.16,-16.2,.08,.15,y),e(P,1.5,-16.3,.12,.05,.15,b);for(let P of[4,5,6])n(P,.67,-14.9,.28,.12,o),n(P,.32,-14.9,.035,.65,b),n(P,.04,-14.9,.25,.05,b),p.push({x:P,z:-14.9,y:0,rotation:Math.PI,type:"sit"});x(4.9,-16.5,3.5),e(2.8,1.85,-10,.08,1.6,2.8,l),e(2.75,1.85,-10,.025,1.46,2.65,r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5})),A(2.9,.32,-10,.65,.64,3.3,o,.05),m(2.9,-10,.65,3.3,0,.7);for(let P of[13.7,15,16.3])for(let U of[-5.65,-4.95])E(P,.822,U);_(15,.82,-5.3,.17,.45);for(let P=0;P<5;P++)s([15,.98,-5.3],[15+Math.sin(P)*.25,1.6+Math.cos(P)*.1,-5.3+Math.cos(P)*.2],.008,o);x(15,-5.3,3.5),T(15,2.4,-5.3,22,9),x(-6,-13.6,3.4),T(-6,2.5,-14.5,25,9),x(-17,1,2.4);for(let P=-9.5;P<=-4.5;P+=.85)e(P,.46,-16.225,.025,.8,.015,l),e(P+.25,.77,-16.2,.3,.018,.018,l);A(-8,.98,-16.9,1.05,.035,.65,b,.045),A(-8,1,-16.9,.88,.022,.5,M,.05);let I=new Ue(new Ei(.17,.022,10,24,Math.PI),b);I.position.set(-8,1.25,-17.14),f.add(I),n(-8.17,1.13,-17.14,.025,.26,b),n(-7.83,1.2,-17.14,.023,.1,b),A(-5.2,1,-16.9,1.35,.03,.75,M,.035);for(let P of[-5.6,-4.8])for(let U of[-16.7,-17.1]){let D=new Ue(new Ei(.13,.006,6,24),b);D.rotation.x=Math.PI/2,D.position.set(P,1.021,U),f.add(D)}e(-5.2,.47,-16.19,1.05,.65,.07,M),e(-5.2,.66,-16.12,.8,.035,.035,b),e(-5.2,2.65,-16.9,1.6,.13,.9,b),e(-5.2,2.96,-17,.45,.55,.45,b),A(-6.85,1.23,-16.9,.42,.52,.42,M,.035),e(-6.85,1.4,-16.65,.3,.12,.025,b),_(-6.85,1,-16.57,.065,.12),_(-6,1,-13.6,.3,.16,o);for(let P=0;P<5;P++)t(-6+Math.sin(P)*.15,1.18,-13.6+Math.cos(P)*.15,.09,.09,.09,r("\u6C34\u679C",14459474));for(let P of[-7.3,-6,-4.7]){A(P,.6,-12.3,.48,.09,.48,l,.07);for(let U of[-.17,.17])for(let D of[-.17,.17])e(P+U,.3,-12.3+D,.035,.6,.035,l);m(P,-12.3,.5,.5,0,.65)}A(-17,.85,1,2.2,.07,1.1,a,.06),e(-17.25,1.27,.73,.86,.5,.045,l),e(-17.25,1.28,.759,.8,.44,.015,r("\u5C4F\u5E55",4546401,{emissive:1717560,emissiveIntensity:.15})),e(-17.25,1,.72,.06,.28,.06,l),A(-17.25,.9,.78,.42,.025,.25,l,.02),A(-17.25,.908,1.14,.65,.023,.22,l,.02);for(let P=0;P<12;P++)for(let U=0;U<3;U++)e(-17.54+P*.05,.925,1.07+U*.05,.036,.008,.035,r("\u952E\u5E3D",8819082));A(-16.48,.9,1.04,.4,.035,.28,b,.015);let O=e(-16.48,1.04,.89,.4,.28,.025,l);O.rotation.x=-.2,_(-17.83,.9,1.24,.065,.12),n(-18,.94,.66,.12,.04,w),s([-18,.95,.66],[-18,1.65,.66],.018,l),t(-18,1.67,.76,.2,.08,.16,l),T(-18,1.52,.8,2,2.5),e(20.84,1.8,1,.06,1.3,2.3,l),e(20.8,1.8,1,.025,1.17,2.15,M),A(20.2,.35,1,.9,.7,3.5,o,.06),m(20.2,1,.9,3.5,0,.7);for(let P of[-.6,0,.6])_(P,.81,-12.5,.12,.25);e(0,2,-17.32,2.6,1.3,.08,o),e(0,2,-17.265,2.45,1.15,.02,y);for(let P=0;P<7;P++){let U=t(-1+P*.3,1.9+Math.sin(P)*.1,-17.24,.32,.22+Math.sin(P)*.08,.013,r("\u6C34\u58A8\u753B",7437429))}let z=3.6;e(5,z+.02,-16,3.5,.04,3.5,h),A(4.7,z+.34,-16.7,2.35,.67,1.05,y,.22),A(4.7,z+.69,-16.7,1.96,.025,.73,r("\u6D74\u7F38\u5185\u6C34",7310468,{metalness:.2,roughness:.1}),.2),m(4.7,-16.7,2.35,1.05,z,.7),n(5.93,z+.58,-16.7,.025,1.16,b),s([5.93,z+1.16,-16.7],[5.65,z+1.16,-16.7],.025,b),A(3.7,z+.72,-14.2,1,.15,.65,y,.09),e(3.7,z+.36,-14.2,.95,.7,.6,o),m(3.7,-14.2,1,.65,z,.8),e(3.12,z+1.55,-14.2,.05,1.05,.8,b),A(4.8,z+.24,-14.3,.48,.48,.65,y,.14),A(4.8,z+.51,-14.3,.48,.06,.63,y,.16),e(4.8,z+.68,-14.6,.48,.55,.15,y),m(4.8,-14.3,.5,.7,z,.95);for(let P of[-16.8,-15.6,-14.4])e(-10.55,4.9,P,.55,2.6,1.15,o,!0),e(-10.24,4.9,P,.03,.6,.025,w);for(let P of[-9.65,-6.35])A(P,3.91,-16.2,.65,.62,.62,a,.05),_(P,4.23,-16.2,.09,.2,w),t(P,4.52,-16.2,.18,.19,.18,c),T(P,4.5,-16.2,3,4);for(let P of[10,12.8,15.6]){let U=new et;f.add(U),U.position.set(15.1,0,P),U.rotation.y=-Math.PI/2,A(0,.39,0,.86,.15,2.2,o,.04,U),A(0,.51,.38,.81,.15,1.4,c,.07,U);let D=A(0,.83,-.64,.81,.15,.95,c,.07,U);D.rotation.x=-.55;for(let B of[-.33,.33])for(let X of[-.75,.8])e(B,.18,X,.06,.36,.06,l,!1,U);m(15.1,P,2.2,.86,0,.9),p.push({x:15.1,z:P,y:0,rotation:-Math.PI/2,type:"lie",outdoor:!0})}A(-10,.43,18,3,.14,.62,o,.045);for(let P of[-11,-9])e(P,.2,18,.09,.4,.48,l);p.push({x:-10,z:18,y:0,rotation:0,type:"sit"});for(let P of[4.5,11.5])for(let U of[9.6,14.4])e(P,1.5,U,.1,3,.1,l,!0);e(8,3,9.6,7.2,.16,.14,o,!1,v),e(8,3,14.4,7.2,.16,.14,o,!1,v);for(let P=4.5;P<=11.5;P+=.28)e(P,3.12,12,.085,.18,5,o,!1,v);for(let P=17;P<=25;P+=.16)e(P,.85,21,.055,1.7,.12,o);e(21,.32,21,8.2,.06,.14,l);for(let P of[-20,-12,12,20])e(P,2.6,7.08,.06,.34,.08,l),T(P,2.4,7.3,4,4);for(let P of[-16,0,16])T(P,2.6,P===0?-10:0,24,11)}function e0(i={}){i={...km(),...i},ws.length=0;let e=new et,t=new et,n=new et;e.add(t,n);let s=[],r=[],o=[],a=!1,c={},l=(R,k,H={})=>c[R]||(c[R]=i[R]||new st({name:R,color:k,roughness:.8,...H})),h=l("\u80E1\u6843\u6728",7950391),u=l("\u6D45\u6A61\u6728",11700827),d=l("\u7C73\u8272\u5899\u9762",16774889),f=l("\u6DF1\u7070\u74E6",3160892),g=l("\u77F3\u6750",9278086),v=l("\u77F3\u677F",12105124),m=l("\u8349\u5730",5663044),p=l("\u6DF1\u8272\u91D1\u5C5E",2370860),y=l("\u4E9A\u9EBB\u5E03",14997432),b=l("\u571F\u58E4",4797222),M=l("\u6696\u5149",16768160,{emissive:16758368,emissiveIntensity:2}),w=l("\u73BB\u7483",jc.color,jc),A=[];function _(R,k,H,J,K,ue,he,me=!1,de=t,G=!0){if(G&&K<.45&&J>.5&&ue>.5&&(Math.abs(k+3.7)<.25||Math.abs(k)<.5||Math.abs(k-3.5)<.25||Math.abs(k-7.1)<.2)){let $e=_d(R,H,J,ue);if($e.length!==1||$e[0].w!==J||$e[0].d!==ue){let F;for(let S of $e)F=_(S.x,k,S.z,S.w,K,S.d,he,me,de,!1)||F;return F}}let We=new Ue(he===y||he.name==="\u9760\u6795"||he.name==="\u5E8A\u88AB"?new ns(J,K,ue,3,Math.min(J,K,ue)*.22):new Jt(J,K,ue),he);return We.position.set(R,k,H),We.castShadow=!0,We.receiveShadow=!0,(a?n:de).add(We),me&&(ti(R,H,J,ue,k-K/2,K),A.push(We)),We}function x(R,k,H,J,K,ue,he,me=t){let de=new Ue(new un(1,16,12),he);return de.position.set(R,k,H),de.scale.set(J,K,ue),de.castShadow=!0,de.receiveShadow=!0,me.add(de),de}function T(R,k,H,J,K,ue,he=t,me=J){let de=new Ue(new vn(me,J,K,24),ue);return de.position.set(R,k,H),de.castShadow=!0,de.receiveShadow=!0,he.add(de),de}function E(R,k,H,J=h){let K=new N(...k).sub(new N(...R)),ue=T(...new N(...R).addScaledVector(K,.5).toArray(),H,K.length(),J,t,H*.65);return ue.quaternion.setFromUnitVectors(new N(0,1,0),K.normalize()),ue}let I=23,O=()=>(I=I*16807%2147483647,(I-1)/2147483646),z=[l("\u677E\u53F6",3429180),l("\u53F6\u7EFF",5466941),l("\u6D45\u53F6",7571027),l("\u67AB\u53F6",10900534)];function P(R,k,H=1,J=!1){s.push({x:R,z:k,height:H*7.5,rotation:O()*6.28})}function U(R,k,H=.6,J=0){r.push({x:R,z:k,y:J,height:H*1.3})}function D(R,k){_(R,.48,k,.24,.85,.24,p),_(R,.56,k,.27,.3,.27,M),_(R,.78,k,.4,.08,.4,p)}let B=l("\u9EC4\u571F\u5730",11836008);_(-57.25,-.3,0,65.5,.4,180,B),_(33.75,-.3,0,112.5,.4,180,B),_(-23.5,-.3,-53.5,2,.4,73,B),_(-23.5,-.3,41.5,2,.4,97,B),_(-28.75,-.25,5,8.5,.4,50,m),_(5.25,-.25,5,55.5,.4,50,m),_(-23.5,-.25,-18.5,2,.4,3,m),_(-23.5,-.25,11.5,2,.4,37,m);let X=_(0,-.13,-55,170,.08,48,l("\u8FDC\u6E56",8301218,{roughness:.17,metalness:.35}));for(let R=0;R<38;R++){let k=R/38*Math.PI*2,H=Math.cos(k)*(33+O()*13),J=Math.sin(k)*(31+O()*13);J>29&&Math.abs(H)<14||P(H,J,1.1+O()*1.2)}_(0,-.025,1.5,21.8,.05,11,v),_(0,0,18,4,.045,14,v);for(let R=-9;R<=9;R+=2)for(let k=-2;k<7;k+=2)_(R,.007,k,1.97,.035,1.97,v);for(let R of[-5.2,5.2]){_(R,.044,1.5,6.1,.04,6.2,m);for(let k of[-1,1])_(R+k*3.15,.049,1.5,.13,.06,6.4,d);for(let k of[-1.65,4.65])_(R,.049,k,6.4,.06,.13,d)}for(let R=0;R<10;R++)_(-1.5+R%2*.05,.03,8+R*1.4,2.8,.06,1.05,g);_(0,1,-20,66,2,.4,g,!0),_(-33,1,5,.4,2,50,g,!0),_(33,1,5,.4,2,50,g,!0);for(let R of[-19.5,19.5])_(R,.9,30,27,1.8,.4,g,!0);function L(R,k,H,J=0,K=-6){let ue=(Array.isArray(K)?K:[K]).sort((de,G)=>de-G),he=[],me=k;for(let de of ue)de+1.7<k||de-1.7>H||(he.push([me,Math.max(me,de-1.7)]),me=Math.min(H,de+1.7));he.push([me,H]);for(let[de,G]of he)if(!(G-de<.05)){_(R,J+1.65,(de+G)/2,.07,3.3,G-de,w,!0);for(let We=de;We<=G;We+=1.6)_(R,J+1.7,We,.12,3.4,.07,p)}_(R,J+3.35,(k+H)/2,.2,.18,H-k,p)}function V(R,k,H,J,K=0,ue=!1){if(_(R,K-.09,k,H,.18,J,u),R===-16&&k===-.5)for(let he of[-3.75,3.75])_(R+he,K+1.65,k-J/2,2.5,3.3,.065,w,!0);else _(R,K+.35,k-J/2,H,.7,.22,d,!0),_(R,K+2.05,k-J/2,H,2.7,.065,w,!0);for(let he=R-H/2;he<=R+H/2;he+=2)_(he,K+1.7,k-J/2,.065,3.4,.16,p);for(let he of[-1,1]){L(R+he*H/2,k-J/2,k+J/2,K,ue?-6:he*R<0?[-6,0]:0);let me=(H-5)/2;_(R+he*(2.5+me/2),K+1.62,k+J/2,me,3.24,.045,w,!0);for(let de=0;de<3;de++)_(R+he*(2.5+de*me/2),K+1.65,k+J/2,.055,3.3,.14,p)}_(R,K+3.36,k+J/2,H,.18,.2,p),!ue&&R!==-16&&R!==16&&Y(R,k,H+1.5,J+1.5,K+3.55,.25)}function Y(R,k,H,J,K,ue){a=!0;let he=_(R,K,k,H,.18,J,f);he.geometry.dispose(),he.geometry=new ns(H,.18,J,3,.07),_(R,K+.13,k,H-.6,.08,J-.6,f),_(R,K-.13,k,H-.2,.1,J-.2,h),_(R,K-.06,k,H-.14,.04,J-.14,p);for(let me of[-1,1])_(R+me*H/2,K,k,.12,.32,J,p);for(let me of[-1,1])_(R,K,k+me*J/2,H,.32,.12,p);_(R,K-.19,k+J/2-.25,H-.5,.025,.035,M),a=!1}V(0,-11,22,14,0,!0),_(-1,3.51,-11,20,.18,14,u),_(10.75,3.51,-11,.5,.18,14,u),_(9.75,3.51,(-18+or.z1)/2,1.5,.18,or.z1+18,u),_(9.75,3.51,(or.z2-4)/2,1.5,.18,-4-or.z2,u),_(0,3.95,-18,22,.7,.24,d,!0),_(0,5.7,-18,22,2.8,.06,w,!0);for(let R=-11;R<12;R+=2)_(R,5.3,-18,.06,3.4,.16,p);for(let R of[-11,11])if(R===-11){for(let[k,H]of[[-18,-10-pi/2],[-10+pi/2,-4]])_(R,5.3,(k+H)/2,.06,3.4,H-k,w,!0);_(R,6.4,-10,.12,1.2,pi,d,!0)}else{_(R,5.3,-12.15,.06,3.4,11.7,w,!0),_(R,5.3,-4.05,.06,3.4,.1,w,!0),_(R,6.5,-5.15,.12,1,2.3,d,!0);for(let k=-18;k<=-7;k+=2)_(R,5.3,k,.16,3.4,.06,p)}for(let R=-10;R<11;R+=2)_(R,5.15,-4,1.93,3,.05,w,!0),_(R+1,5.2,-4,.07,3.2,.12,p,!0);a=!0,_(-2,7.1,-11,18,.2,14,v),_(9.75,7.1,-11,2.5,.2,14,v),_(7.75,7.1,-16.5,1.5,.2,3,v),_(7.75,7.1,-5,1.5,.2,2,v),a=!1;for(let R of[-9,-5,5,9])_(R,1.7,-2.7,.18,3.4,.18,h,!0);a=!0,_(0,3.3,-2.7,23,.15,2.8,h),a=!1,V(-16,-.5,10,15),V(-16,-13.5,10,11),V(16,-.5,10,15);for(let R of[-3,3])_(R,5.3,-13,.16,3.4,10,d,!0);for(let[R,k,H]of[[-11,-3,-7],[-3,3,0]]){for(let[J,K]of[[R,H-wn/2],[H+wn/2,k]])_((J+K)/2,5.3,-8,K-J,3.4,.16,d,!0);_(H,6.4,-8,wn,1.2,.16,d,!0)}for(let R of[or,df,rr]){let k=(R.x1+R.x2)/2,H=R.x2-R.x1,J=(R.z2-R.z1)/28;for(let K=0;K<28;K++){let ue=R.z2-(K+.5)*J,he=R.base+(R.reverse?28-K:K+1)*3.6/28;_(k,he-.065,ue,H,.13,J+.006,u)}for(let K of[R.x1-.07,R.x2+.07]){E([K,R.base+.9+(R.reverse?3.6:0),R.z2],[K,R.base+.9+(R.reverse?0:3.6),R.z1],.022,p);for(let ue=0;ue<28;ue++){let he=R.z2-(ue+.5)*J,me=R.base+(R.reverse?28-ue:ue+1)*3.6/28;_(K,me+.45,he,.035,.9,.035,p),ti(K,he,.035,J,me,.95)}}}function $(R,k,H,J,K=0){_(R,K+.017,k,H,.035,J,l("\u5730\u6BEF",12827300));for(let ue=0;ue<8;ue++)_(R-H/2+.1+ue*.055,K+.04,k,.025,.01,J,y)}function ae(R,k,H=2,J=1,K=0){H/=Qe,J/=Qe,_(R,K+.75,k,H,.11,J,h,!0);for(let ue of[-1,1])for(let he of[-1,1])_(R+ue*(H/2-.15),K+.35,k+he*(J/2-.12),.1,.7,.1,h)}function Se(R,k,H=0,J=0){let K=new et;t.add(K),_(0,.46,0,.7,.16,.7,y,!1,K),_(0,.88,-.32,.7,.75,.1,h,!1,K);for(let ue of[-1,1])for(let he of[-1,1])_(ue*.27,.2,he*.27,.07,.4,.07,h,!1,K);K.scale.set(1/Qe,1,1/Qe),K.position.set(R,J,k),K.rotation.y=H,ti(R,k,.7/Qe,.7/Qe,J,1.2)}function Ee(R,k,H=0,J=0){o.push({x:R,z:k,y:J,rotation:H,type:"sit"});let K=new et;t.add(K),_(0,.32,0,3.4,.45,1.3,h,!1,K);for(let ue=-1;ue<=1;ue++){_(ue*1.05,.64,0,1.025,.31,1.12,y,!1,K);let he=_(ue*1.05,1.06,-.47,1.04,.73,.29,y,!1,K);he.rotation.x=-.12}for(let ue of[-1,1]){_(ue*1.62,.8,0,.22,.7,1.3,y,!1,K);let he=_(ue*.9,.96,-.25,.65,.5,.18,l("\u9760\u6795",9601640),!1,K);he.rotation.z=ue*.12}K.scale.set(1/Qe,1,1/Qe),K.position.set(R,J,k),K.rotation.y=H,ti(R,k,(H?1.3:3.4)/Qe,(H?3.4:1.3)/Qe,J,1.2)}function ne(R,k,H=7,J=0,K=0){let ue=t.children.length,he=ws.length;_(R,J+1.6,k,H,3.2,.42,h,!0);for(let me=0;me<6;me++){_(R,J+.15+me*.53,k+.3,H,.07,.64,u);for(let de=0;de<H*8;de++){if((de+Math.floor(me/2)*9)%29>17)continue;let G=.23+O()*.2;_(R-H/2+.1+de*.123,J+.21+me*.53+G/2,k+.28,.07+O()*.035,G,.25,l("\u4E66"+de%7,[6707526,12627070,3953490,9129531,14274224,4475712,8290393][de%7]))}}for(let me=0;me<5;me++)_(R,J+.67+me*.53,k+.35,H-.1,.017,.025,M);for(let me=-H/2;me<=H/2;me+=H/5)_(R+me,J+1.6,k+.15,.08,3.2,.6,u);if(K){let me=new et;for(let de of t.children.slice(ue))de.position.x-=R,de.position.z-=k,me.add(de);me.position.set(R,0,k),me.rotation.y=K,t.add(me);for(let de of ws.slice(he)){let G=[[de.x1,de.z1],[de.x1,de.z2],[de.x2,de.z1],[de.x2,de.z2]].map(([We,$e])=>[R+(We-R)*Math.cos(K)+($e-k)*Math.sin(K),k-(We-R)*Math.sin(K)+($e-k)*Math.cos(K)]);de.x1=Math.min(...G.map(We=>We[0])),de.x2=Math.max(...G.map(We=>We[0])),de.z1=Math.min(...G.map(We=>We[1])),de.z2=Math.max(...G.map(We=>We[1]))}}}ne(-20.6,-4.7,3.8,0,Math.PI/2),$(-16,.5,7,8),ae(-17,1,2.2,1.1),Se(-17,2.1,Math.PI),Ee(-14,-3),ae(-14,-1.2,1.7,.8),U(-20,5),U(-12,-6),_(-17,.845,1,1,.03,.55,y),_(-17,.87,1,.025,.015,.55,p),ti(-20,.3,1.1,3,0,2.8),$(16,1,7,7),Ee(17,1,Math.PI/2),ae(18.7,1,1,2.1),U(12,5),U(20,-6),ae(15,-5.3,3.8,1.35);for(let R of[13.7,15,16.3])Se(R,-4.2,Math.PI),Se(R,-6.5);_(-7,.45,-16.9,6,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),_(-7,.93,-16.9,6,.08,1.4,l("\u53A8\u623F\u77F3\u6750")),Vm({box:_,mat:l,dark:p,lightmat:M}),_(-6,.45,-13.6,4.4,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),_(-6,.94,-13.6,4.6,.09,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let R of[-8.26,-3.74])_(R,.47,-13.6,.08,.94,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let R=-7.5;R<-4;R+=.75)_(R,.46,-12.94,.015,.78,.012,p);U(-10,-5),$(0,-11,5.5,5.5),Ee(-1.3,-10,Math.PI/2),ae(.5,-10,1,2),ne(-.3,-17.5,4),Se(-3.9,-10),ae(-4,-9,1,1);function ge(R,k,H=3,J=3.6){o.push({x:R,z:k,y:J,rotation:0,type:"lie"}),_(R,J+.3,k,H,.6,3.6,h,!0),_(R,J+.64,k,H,.18,3.5,y),_(R,J+1,k-1.75,H,.9,.18,h,!0),_(R,J+.77,k+.45,H,.1,2.3,l("\u5E8A\u88AB",7900036));for(let K of[-1,1])_(R+K*H*.23,J+.8,k-1.13,H*.4,.2,.65,y)}ge(-8,-15.4,2.6),$(-7,-10.7,5,3.5,3.6),ae(-4.8,-17,1.5,.8,3.6),Se(-4.8,-16.2,Math.PI,3.6),U(-10,-17,.7,3.6),$(0,-10.5,4,3,3.6);for(let R=0;R<9;R++)_(-1+O()*2,3.78,-10+O(),.25,.32,.25,l("\u79EF\u6728"+R,[12419419,5536903,13875558][R%3]));_(8,0,12,8,.09,5,u);for(let R=0;R<22;R++)_(4.15+R*.35,.05,12,.02,.015,5,h);ae(8,12,2.2,1.2),Se(8,13.2,Math.PI),Se(8,10.8),Se(6.35,12,-Math.PI/2);let fe=l("\u9752\u74F7",7903111,{roughness:.23});T(8,.94,12,.19,.22,fe),x(8,1.08,12,.16,.07,.16,fe);for(let R of[7.4,8.6])T(R,.9,12,.095,.13,fe);for(let R of[12,15])_(R,.18,19,2.2,.36,3,h,!0),_(R,.38,19,2,.04,2.8,b);for(let R of[11.4,12,12.6])for(let k of[18,19,20])U(R,k,.35,.4);let Le=l("\u6C60\u6C34",3636605,{transparent:!0,opacity:.76,roughness:.13,metalness:.38});x(-5,.015,10,4.3,.015,2.8,l("\u6C60\u5E95",2444099));let Fe=new Ue(new Do(1,64),Le);Fe.rotation.x=-Math.PI/2,Fe.scale.set(4.05,2.6,1),Fe.position.set(-5,.23,10),e.add(Fe);for(let R=0;R<38;R++){let k=R/38*Math.PI*2;x(-5+Math.cos(k)*4.2,.12,10+Math.sin(k)*2.75,.45,.23,.36,g)}for(let R=0;R<7;R++){let k=O()*6.28,H=T(-5+Math.cos(k)*2.5,.245,10+Math.sin(k)*1.7,.25,.02,z[1])}x(-3.1,.12,10.7,.6,.2,.4,g),_(20.5,.04,11,7,.12,16,l("\u6CF3\u6C60\u84DD",5152430,{roughness:.16,metalness:.25}));for(let R of[16.8,24.2])_(R,.1,11,.4,.2,16.8,d);for(let R of[2.8,19.2])_(20.5,.1,R,7.8,.2,.4,d);for(let R of[18.5,20.5,22.5])_(R,.106,11,.05,.008,15,p);for(let R of[6,10,14,18])T(25,.65,R,.035,1.3,p),_(25,.65,R-1.9,.04,1.1,3.7,w);P(0,3,1.25),P(-12,14,1.2,!0),P(3,19,1,!0),P(23,-14,1.4),P(-23,12,1.2);for(let R=0;R<38;R++){let k=O()*6.28,H=Math.cos(k)*(2+O()),J=3+Math.sin(k)*(1.3+O());x(H,.17,J,.3+O()*.4,.25,.3+O()*.4,g)}for(let R of[-10,10,-23,23])for(let k of[-6,4,17])D(R,k);D(-2.3,20),D(2.3,20);for(let R of[-16,0,16]){let k=new Zn(16763783,15,13,2);k.position.set(R,2.7,R===0?-11:0),e.add(k)}$m({box:_,cyl:T,mat:l,wood:h,linen:y,dark:p,glass:w,plaster:d,architecture:t,root:e,seats:o,obstacle:ti}),jm({box:_,ell:x,cyl:T,branch:E,mat:l,wood:h,oak:u,linen:y,dark:p,plaster:d,lightmat:M,glass:w,architecture:t,root:e,roofs:n,obstacle:ti,seats:o,tree:P,plant:U,table:ae,chair:Se,sofa:Ee,books:ne,rug:$}),Qm({box:_,ell:x,cyl:T,branch:E,mat:l,wood:h,oak:u,linen:y,dark:p,plaster:d,lightmat:M,glass:w,architecture:t,root:e,roofs:n,obstacle:ti,seats:o}),Im({box:_,ell:x,cyl:T,branch:E,mat:l,wood:h,oak:u,linen:y,dark:p,glass:w,plaster:d,lightmat:M,architecture:t,root:e,seats:o,obstacle:ti,sofa:Ee,table:ae,chair:Se,books:ne,plant:U,rug:$}),Lm({box:_,ell:x,cyl:T,mat:l,architecture:t,seats:o,obstacle:ti}),Pm({box:_,mat:l}),Cm({box:_,cyl:T,ell:x,branch:E,mat:l,wood:h,oak:u,dark:p,glass:w,linen:y,lightmat:M,plaster:d,seats:o,obstacle:ti,plant:U}),_(-14.3,7.1,-11.7,8.1,.2,1.4,v);for(let R of[-12.4,-11])_(-14.3,7.85,R,8.1,1.3,.05,w,!0);t.updateMatrixWorld(!0);let Ge=new Map;t.traverse(R=>{if(!R.isMesh)return;let k=R.geometry.clone().applyMatrix4(R.matrixWorld);if(k.index||k.setIndex(Array.from({length:k.attributes.position.count},(he,me)=>me)),k.attributes.uv||k.setAttribute("uv",new Ct(new Float32Array(k.attributes.position.count*2),2)),R.material.userData.worldUV){let he=k.attributes.position,me=k.attributes.normal,de=k.attributes.uv;for(let G=0;G<he.count;G++){let We=Math.abs(me.getX(G)),$e=Math.abs(me.getY(G)),F=Math.abs(me.getZ(G)),S=R.material.name==="\u8349\u5730"?3:2;de.setXY(G,(We>$e&&We>F?he.getZ(G):he.getX(G))/S,($e>We&&$e>F?he.getZ(G):he.getY(G))/S)}}k.computeBoundingSphere();let H=new N().setFromMatrixPosition(R.matrixWorld),J=Bm(H.x,H.y,H.z,k.boundingSphere.radius>18),K=R.material.uuid+":"+J,ue=Ge.get(K)||{material:R.material,zone:J,geos:[]};ue.geos.push(k),Ge.set(K,ue)}),e.remove(t);let ht=new et;e.add(ht);for(let{material:R,zone:k,geos:H}of Ge.values()){let J=uf(H,!1);if(!J)throw Error("\u6A21\u578B\u5408\u5E76\u5931\u8D25");let K=new Ue(J,R);K.castShadow=R.name!=="\u73BB\u7483",K.receiveShadow=!0,K.name=R.name,K.userData.zone=k,K.frustumCulled=!0,ht.add(K),H.forEach(ue=>ue.dispose())}n.updateMatrixWorld(!0);let Ke=new Map;n.traverse(R=>{if(!R.isMesh)return;let k=Ke.get(R.material)||[],H=R.geometry.clone().applyMatrix4(R.matrixWorld);H.index||H.setIndex(Array.from({length:H.attributes.position.count},(J,K)=>K)),k.push(H),Ke.set(R.material,k)}),n.clear();for(let[R,k]of Ke){let H=new Ue(uf(k),R);H.castShadow=!0,H.receiveShadow=!0,H.name=R.name,n.add(H),k.forEach(J=>J.dispose())}return{root:e,mats:c,pond:Fe,waterMat:Le,plant:U,merged:ht,roofs:n,trees:s,plantSpots:r,seats:o}}function SM(i){return["pond","pool","river"].includes(i)?"water":["tea","rooftea"].includes(i)?"pavilion":["orchard","flowers","roofgarden"].includes(i)?"garden":["garage","market"].includes(i)?"building":"room"}var bM=[...[["liftB","\u5730\u4E0B\u7535\u68AF\u5385",-3.6,"basement"],["liftG","\u4E00\u697C\u7535\u68AF\u5385",0,"ground"],["liftU","\u4E8C\u697C\u7535\u68AF\u5385",3.6,"upper"],["liftR","\u5929\u53F0\u7535\u68AF\u5385",7.2,"roof"]].map(([i,e,t,n])=>[i,e,-16.6,t,-11.7,n]),["entry","\u5EAD\u9662\u5165\u53E3",0,0,27,"ground"],["hall","\u4E00\u697C\u5BA2\u5385",0,0,-8,"ground"],["coffee","\u5496\u5561\u5427",5,0,-13.5,"ground"],["kitchen","\u53A8\u623F",-3.5,0,-14.8,"ground"],["library","\u4E66\u623F",-17,0,2.8,"ground"],["annex","\u897F\u7FFC\u4F1A\u5BA2\u5385",-19,0,-15,"ground"],["dining","\u5BA2\u9910\u5385",12,0,3,"ground"],["tea","\u5EAD\u9662\u8336\u5E2D",8,0,14.1,"ground"],["pond","\u9526\u9CA4\u6C60",-5,0,13.55,"ground"],["pool","\u6CF3\u6C60",15.3,0,7.8,"ground"],["flowers","\u5EAD\u9662\u82B1\u5703",15,0,16.9,"ground"],["orchard","\u679C\u56ED",-28,0,11,"ground"],["garage","\u8D8A\u91CE\u8F66\u8F66\u5E93",-14.3,0,23,"ground"],["swing","\u5EAD\u9662\u79CB\u5343",-9.5,0,23.4,"ground"],["market","\u8857\u9053\u96C6\u5E02",0,0,36,"ground"],["river","\u6CB3\u7554\u6B65\u9053",0,0,48,"ground"],["playterrace","\u513F\u7AE5\u6E38\u4E50\u9633\u53F0",13,3.6,-5,"upper"],["balcony","\u4E3B\u5367\u5C4B\u9876\u9633\u53F0",-16,3.6,-10,"upper"],["master","\u4E8C\u697C\u4E3B\u5367",-7,3.6,-9,"upper"],["child","\u513F\u7AE5\u623F",0,3.6,-8.9,"upper"],["bath","\u4E8C\u697C\u536B\u6D74",6,3.6,-15.4,"upper"],["rooftea","\u5929\u53F0\u8336\u4EAD",-4,7.2,-7.8,"roof"],["roofgarden","\u5929\u53F0\u82B1\u56ED",3,7.2,-10,"roof"],["roofswing","\u5929\u53F0\u79CB\u5343",2,7.2,-5.5,"roof"],["storage","\u5730\u4E0B\u50A8\u7269\u95F4",-20,-3.6,-15,"basement"],["games","\u7535\u7ADE\u623F",-14,-3.6,-15,"basement"],["ktv","KTV",-20,-3.6,-11.7,"basement"],["cinema","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,-3.6,-11.7,"basement"]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,y:n,z:s,level:r}));function t0({dialog:i,host:e,list:t,tabs:n,onTeleport:s,onOpen:r,onClose:o}){let a,c,l,h=[],u="ground",d=.45,f=.85,g=1,v=0,m,p=!1,y=document.createElement("div");y.className="guide-labels",e.append(y);let b=[],M=new N,w=new Qo,A=new le;function _(z,P,U,D,B,X,L){let V=new Ue(new Jt(D,B,X),new st({color:L,roughness:.85}));return V.position.set(z,P,U),c.add(V),V}function x(){if(!i.open)return;let z=e.clientWidth,P=e.clientHeight;a.setSize(z,P,!1),l.aspect=z/P,l.updateProjectionMatrix();let U=(u==="ground"?95:30)*g;l.position.copy(M).add(new N(Math.sin(d)*Math.cos(f)*U,Math.sin(f)*U,Math.cos(d)*Math.cos(f)*U)),l.lookAt(M),a.render(c,l);let D=[];for(let B of b){let X=B.marker.position.clone().project(l),L=B.button.offsetWidth||80,V=24,Y=Math.max(L/2,Math.min(z-L/2,(X.x*.5+.5)*z)),$=Math.max(0,Math.min(P-V,(-X.y*.5+.5)*P));for(let ae=0;ae<30&&D.some(Se=>Math.abs(Se.x-Y)<(Se.w+L)/2+3&&Math.abs(Se.y-$)<V);ae++)$+=V+3,$>P-V&&($=0,Y=Math.max(L/2,Math.min(z-L/2,Y+L+6)));D.push({x:Y,y:$,w:L}),B.button.style.left=Y+"px",B.button.style.top=$+"px",B.button.style.display=Math.abs(X.x)>1.1||Math.abs(X.y)>1.1?"none":""}v=requestAnimationFrame(x)}function T(z){u=z,g=1,h=[],b=[],y.replaceChildren(),c?.traverse(U=>{U.geometry?.dispose(),U.material&&U.material.dispose()}),c=new Hs,c.background=new Ie("#172d29"),c.add(new js(15855330,3691081,2.5));let P=new Qi(16768704,3);P.position.set(-20,40,20),c.add(P),u==="ground"?(M.set(0,0,13),_(0,-.7,12,68,1,78,5402714),_(0,1.8,-11,22,3.6,14,13025964),_(-16,1.5,-6,10,3,26,12298633),_(16,1.5,-.5,10,3,15,12298633),_(-17,1.5,20,8,3,8,9215634),_(0,.02,40,10,.12,20,10196356),_(0,.02,52,68,.12,6,5410715),_(20.5,.05,11,7,.15,16,5410715),_(-5,.05,10,8,.15,5,5410715)):(M.set(u==="basement"?-18:0,0,u==="basement"?-13:-11),_(M.x,-.3,M.z,u==="basement"?14:22,.5,u==="basement"?12:14,9346438)),u==="upper"&&(_(-16,-.3,-6,10,.5,26,12298633),_(16,-.3,-.5,10,.5,15,11914169)),t.replaceChildren();for(let U of bM.filter(D=>D.level===u)){let D=SM(U.id),B=D==="water"?new vn(1.5,1.5,.12,32):D==="pavilion"?new hi(1.5,1,32):D==="garden"?new Zs(1.1,1):new Jt(2.3,D==="building"?1.4:.22,1.6),X=new Ue(B,new st({color:D==="water"?6924730:D==="garden"?8890469:15714186,roughness:.8}));X.position.set(U.x,u==="ground"?4.1:.5,U.z),D==="water"&&(X.scale.z=.65),X.userData.destination=U,c.add(X),h.push(X);let L=document.createElement("button");L.textContent=U.name,L.onclick=Y=>{Y.stopPropagation(),O(),s(U)},L.onpointerdown=Y=>Y.stopPropagation(),y.append(L),b.push({button:L,marker:X});let V=document.createElement("button");V.textContent=U.name+" \u2197",V.onclick=()=>{O(),s(U)},V.onmouseenter=()=>X.material.color.setHex(16777215),V.onmouseleave=()=>X.material.color.setHex(15714186),t.append(V)}n.querySelectorAll("button").forEach(U=>U.setAttribute("aria-pressed",String(U.dataset.level===u)))}function E(){a=new Jr({antialias:!0,powerPreference:"low-power"}),a.setPixelRatio(Math.min(devicePixelRatio,1.25)),e.append(a.domElement),l=new Ut(48,1,.1,220),e.onpointerdown=z=>{m={x:z.clientX,y:z.clientY,sx:z.clientX,sy:z.clientY},p=!1,e.setPointerCapture(z.pointerId)},e.onpointermove=z=>{m&&(Math.hypot(z.clientX-m.sx,z.clientY-m.sy)>5&&(p=!0),p&&(d-=(z.clientX-m.x)*.006,f=bn.clamp(f+(z.clientY-m.y)*.005,.3,1.45)),m.x=z.clientX,m.y=z.clientY)},e.onpointerup=z=>{if(!m||(m=null,p))return;let P=e.getBoundingClientRect();A.set((z.clientX-P.left)/P.width*2-1,-(z.clientY-P.top)/P.height*2+1),w.setFromCamera(A,l);let U=w.intersectObjects(h)[0];U&&(O(),s(U.object.userData.destination))},e.onpointercancel=()=>m=null,e.onwheel=z=>{z.preventDefault(),g=bn.clamp(g+z.deltaY*.001,.5,1.8)},e.style.touchAction="none"}function I(){i.open||(r(),i.showModal(),a||E(),T(u),x())}function O(){i.close(),cancelAnimationFrame(v),m=null,o()}return n.querySelectorAll("button").forEach(z=>z.onclick=()=>T(z.dataset.level)),i.querySelector("[data-close]").onclick=O,i.addEventListener("cancel",z=>{z.preventDefault(),O()}),{open:I,close:O}}var mf={clear:"\u6674\u5929",rain:"\u96E8\u5929",snow:"\u96EA\u5929",wind:"\u5927\u98CE"};function n0(i,e){return(i+4)**2+(e+10)**2<3.8**2?10.2:i>-11&&i<11&&e>-18&&e<-4?7.2:i>-21&&i<-11&&e>-19&&e<7||i>11&&i<21&&e>-8&&e<7?3.8:i>-21.3&&i<-12.7&&e>15.7&&e<24.3?3.6:(i+4)**2+(e+10)**2<3.8**2?10.2:-.05}function i0(i,e){let t="clear",n={value:0},s={value:0},r={value:0},o=1e3,a=new Float32Array(o*6),c=Array.from({length:o},()=>({x:Math.random()*60-30,y:Math.random()*25,z:Math.random()*75-22})),l=new Mt;l.setAttribute("position",new Ct(a,3));let h=new Xs(l,new xs({color:12178911,transparent:!0,opacity:.55,depthWrite:!1}));h.frustumCulled=!1,i.add(h);let u=new qs(l,new _s({color:15988474,size:.12,transparent:!0,opacity:.9,depthWrite:!1}));u.frustumCulled=!1,i.add(u);for(let m of Object.values(e.mats).filter(p=>!p.transparent&&!p.name.includes("\u5C4F\u5E55")&&!p.name.includes("\u7535\u89C6")))m.onBeforeCompile=p=>{p.uniforms.uSnow=r,p.vertexShader=`varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSnowWorld=(modelMatrix*vec4(position,1.)).xyz;vSnowNormal=normalize(mat3(modelMatrix)*normal);`),p.fragmentShader=`uniform float uSnow; varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec3 p=vSnowWorld;p.xz/=${Qe.toFixed(8)};float cover=-.05;
 if(p.x>-11.&&p.x<11.&&p.z>-18.&&p.z< -4.)cover=7.2;
 if((p.x> -21.&&p.x< -11.&&p.z> -19.&&p.z<7.)||(p.x>11.&&p.x<21.&&p.z> -8.&&p.z<7.))cover=3.8;
 if(p.x> -21.3&&p.x< -12.7&&p.z>15.7&&p.z<24.3)cover=3.6;
 if(pow(p.x+4.,2.)+pow(p.z+10.,2.)<14.44)cover=10.2;
 float snowMask=smoothstep(.45,.85,vSnowNormal.y)*step(cover-.2,p.y)*uSnow;
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.92,.95,.98),snowMask*.95);`)},m.customProgramCacheKey=()=>"snow-exposure-v1",m.needsUpdate=!0;let d=new Set;function f(){i.traverse(m=>{if(!m.isInstancedMesh)return;let p=m.material;d.has(p)||(d.add(p),p.onBeforeCompile=y=>{y.uniforms.uWind=n,y.uniforms.uWeatherTime=s,y.vertexShader=`uniform float uWind;uniform float uWeatherTime;
`+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x+=sin(uWeatherTime*2.0+position.y*.65)*uWind*min(max(position.y,0.)*.045,.28);`)},p.customProgramCacheKey=()=>"weather-wind-v1",p.needsUpdate=!0)})}function g(m){t=m,r.value=t==="snow"?1:0,n.value=t==="wind"?1:t==="rain"?.35:0,h.visible=t==="rain"||t==="wind",u.visible=t==="snow",h.material.opacity=t==="wind"?.16:.55,h.material.color.setHex(t==="wind"?13423030:12178911)}function v(m,p,y){if(s.value=p,t==="clear")return;let b=t==="wind"?160:o;l.setDrawRange(0,b*2);for(let M=0;M<b;M++){let w=c[M];w.y-=m*(t==="rain"?17:t==="snow"?1.6:1),w.x+=m*(t==="wind"?12:t==="snow"?Math.sin(p+M)*.6:3);let A=n0(w.x,w.z);(w.y<A||w.x>34||w.x<-34)&&(w.x=(Math.random()-.5)*66,w.z=Math.random()*72-22,w.y=12+Math.random()*15);let _=M*6;a[_]=w.x,a[_+1]=w.y,a[_+2]=w.z,a[_+3]=w.x+(t==="wind"?1.5:t==="rain"?.08:0),a[_+4]=Math.max(n0(w.x,w.z)+.03,w.y-(t==="rain"?.65:0)),a[_+5]=w.z}l.attributes.position.needsUpdate=!0}return g("clear"),{set:g,update:v,attachWind:f,get kind(){return t}}}var gf=new Map,xf=i=>(gf.has(i)||gf.set(i,new st({color:i,roughness:.78})),gf.get(i));function Lt(i,e,t,n,s,r,o,a){let c=new Ue(new un(1,12,8),xf(a));return c.position.set(e,t,n),c.scale.set(s,r,o),c.castShadow=!0,i.add(c),c}function ar(i,e,t,n,s,r,o){let a=new et;a.position.set(e,t,n),i.add(a);let c=new Ue(new Lo(s,r,4,8),xf(o));return c.position.y=-r/2,c.castShadow=!0,a.add(c),a}function lr({shirt:i=12694426,pants:e=3819336,hair:t=3418917,scale:n=1,female:s=!1}={}){let r=new et;r.scale.setScalar(n);let o=13211251;Lt(r,0,1.19,0,.29,.39,.18,i),Lt(r,0,1.66,0,.19,.23,.19,o),Lt(r,0,1.8,-.025,.193,.12,.19,t),s&&Lt(r,0,1.63,-.11,.21,.25,.12,t),Lt(r,-.073,1.68,.169,.022,.017,.015,3156259),Lt(r,.073,1.68,.169,.022,.017,.015,3156259),Lt(r,0,1.62,.193,.03,.04,.04,o);for(let l of[-1,1])Lt(r,l*.184,1.66,0,.035,.055,.025,o),Lt(r,l*.073,1.686,.165,.036,.025,.017,15130322),Lt(r,l*.073,1.686,.181,.014,.016,.009,4470830),Lt(r,l*.074,1.733,.163,.039,.009,.013,t);Lt(r,0,1.566,.171,.05,.009,.008,10248530);let a=[ar(r,-.34,1.4,0,.085,.46,i),ar(r,.34,1.4,0,.085,.46,i)];a.forEach(l=>Lt(l,0,-.53,0,.067,.085,.065,o));let c=[ar(r,-.14,.84,0,.099,.35,e),ar(r,.14,.84,0,.099,.35,e)];return c.forEach(l=>{l.lower=ar(l,0,-.35,0,.085,.35,e),Lt(l.lower,0,-.4,.06,.105,.075,.175,3879984)}),{g:r,arms:a,legs:c,animate(l,h=!1,u=""){c.forEach((d,f)=>{d.rotation.x=h?Math.sin(l*9+f*Math.PI)*.65:u==="sit"?-Math.PI/2:0,d.lower.rotation.x=u==="sit"?Math.PI/2:h?Math.max(0,-Math.sin(l*9+f*Math.PI))*.6:0}),a.forEach((d,f)=>{d.rotation.x=h?-Math.sin(l*8+f*Math.PI)*.45:u==="read"?-1.15:u==="garden"?-.75+Math.sin(l*3)*.2:u==="cook"?-.7+Math.sin(l*3+f)*.2:0}),r.children[0].rotation.z=h?Math.sin(l*8)*.025:0}}}function _f(i=12423257){let e=new et;Lt(e,0,.47,0,.2,.23,.42,i),Lt(e,0,.65,.37,.22,.23,.23,i),Lt(e,0,.56,.57,.12,.09,.15,13350298),Lt(e,0,.59,.69,.07,.05,.045,2434853);for(let s of[-1,1])Lt(e,s*.17,.61,.38,.09,.22,.13,i),Lt(e,s*.09,.72,.55,.024,.024,.025,2238503);let t=[];for(let s of[-.14,.14])for(let r of[-.26,.25])t.push(ar(e,s,.36,r,.055,.23,i));let n=ar(e,0,.55,-.38,.055,.32,i);return n.rotation.x=1.6,{g:e,animate(s){t.forEach((r,o)=>r.rotation.x=Math.sin(s*9+o*Math.PI)*.5),n.rotation.z=Math.sin(s*12)*.7}}}function s0(i){let e=new et;Lt(e,0,0,0,.12,.075,.35,i),Lt(e,0,0,.22,.1,.07,.12,15655626);let t=new Ue(new hi(.14,.24,3),xf(i));return t.rotation.x=Math.PI/2,t.position.z=-.38,e.add(t),e}function vf(){let i=new et;Lt(i,0,.08,0,.28,.14,.36,4875584),Lt(i,0,.09,.38,.1,.09,.15,7898443);for(let e of[-.24,.24])for(let t of[-.23,.23])Lt(i,e,.02,t,.13,.035,.09,7767119);for(let e of[-.16,0,.16])Lt(i,0,.192,e,.13,.014,.1,6911053);return i}function r0(i){let e=new Map,t=new Map,n=i.clone();return o0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function o0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)o0(i.children[n],e.children[n],t)}var th=class extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Af(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new nh(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new nh(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new zf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=es.extractUrlBase(e);o=es.resolveURL(l,this.path)}else o=es.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ks(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===u0){try{o[ft.KHR_BINARY_GLTF]=new kf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Yf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:o[u]=new Tf;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vf(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[u]=new Gf;break;case ft.KHR_MESH_QUANTIZATION:o[u]=new Hf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function TM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Yt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bf=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],ln);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Zn(h),l.distance=u;break;case"spot":l=new Jo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Tf=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(s)}},wf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(r,r)}return Promise.all(s)}},Ef=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Cf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Rf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,pt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],ln),Promise.all(s)}},Lf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Df=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,pt)),Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ff=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Of=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Bf=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},nh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},zf=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ni.TRIANGLES&&l.mode!==ni.TRIANGLE_STRIP&&l.mode!==ni.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let v=new Ve,m=new N,p=new sn,y=new N(1,1,1),b=new Ai(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,v.compose(m,p,y));for(let M in c)if(M==="_COLOR_0"){let w=c[M];b.instanceColor=new ms(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Bt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},u0="glTF",Ta=12,a0={JSON:1313821514,BIN:5130562},kf=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==u0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ta,r=new DataView(e,Ta),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===a0.JSON){let l=new Uint8Array(e,Ta+o,a);this.content=n.decode(l)}else if(c===a0.BIN){let l=Ta+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Xf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=jr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(f)},a,l,ln,d)})})}},Gf=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Hf=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},ih=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,v=g-l,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let M=0;M!==a;M++){let w=o[v+M+a],A=o[v+M+c]*h,_=o[g+M+a],x=o[g+M]*h;r[M]=y*w+b*A+m*_+p*x}return r}},wM=new sn,Wf=class extends ih{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return wM.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},l0={9728:Ft,9729:vt,9984:rc,9985:Xr,9986:nr,9987:yn},c0={33071:In,33648:Rr,10497:Kt},yf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},AM={CUBICSPLINE:void 0,LINEAR:Vs,STEP:ks},Mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function EM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),i.DefaultMaterial}function cr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function RM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PM(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sf(t.attributes):e=i.indices+":"+Sf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sf(i.targets[n]);return e}function Sf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function qf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var LM=new Ve,Yf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Js(this.options.manager):this.textureLoader=new $o(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ks(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cr(r,a,s),Di(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(es.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yf[s.type],a=jr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ct(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=yf[s.type],l=jr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(y);b||(v=new l(a,p*f,s.count*f/h),b=new Fr(v,f/h),t.cache.add(y,b)),m=new Or(b,c,d%f/h,g)}else a===null?v=new l(s.count*c):v=new l(a,d,s.count*c),m=new Ct(v,c,g);if(s.sparse!==void 0){let p=yf.SCALAR,y=jr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new y(o[1],b,s.sparse.count*p),A=new l(o[2],M,s.sparse.count*c);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,x=w.length;_<x;_++){let T=w[_];if(m.setX(T,A[_*c]),c>=2&&m.setY(T,A[_*c+1]),c>=3&&m.setZ(T,A[_*c+2]),c>=4&&m.setW(T,A[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=l0[d.magFilter]||vt,h.minFilter=l0[d.minFilter]||yn,h.wrapS=c0[d.wrapS]||Kt,h.wrapT=c0[d.wrapT]||Kt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){let m=new jt(v);m.needsUpdate=!0,d(m)}),t.load(es.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Di(u,o),u.userData.mimeType=o.mimeType||IM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new _s,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new xs,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return st}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let u=s[ft.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ln),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Un);let h=r.alphaMode||Mf.OPAQUE;if(h===Mf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rn){let u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],ln)}return r.emissiveTexture!==void 0&&o!==rn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Di(u,r),t.associations.set(u,{materials:e}),r.extensions&&cr(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return h0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=PM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=h0(new Mt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?EM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=o[f],p,y=l[f];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Eo(v,y):new Ue(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?p.geometry=ff(p.geometry,xa):m.mode===ni.TRIANGLE_FAN&&(p.geometry=ff(p.geometry,Yr));else if(m.mode===ni.LINES)p=new Xs(v,y);else if(m.mode===ni.LINE_STRIP)p=new Ws(v,y);else if(m.mode===ni.LINE_LOOP)p=new Ro(v,y);else if(m.mode===ni.POINTS)p=new qs(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&RM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Di(p,r),m.extensions&&cr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&cr(s,u[0],r),u[0];let d=new et;r.extensions&&cr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(bn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ri(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Co(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let b=0,M=d.length;b<M;b++){let w=d[b],A=f[b],_=g[b],x=v[b],T=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let E=n._createAnimationTracks(w,A,_,x,T);if(E)for(let I=0;I<E.length;I++)p.push(E[I])}let y=new qo(r,void 0,p);return Di(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,LM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Br:l.length>1?h=new et:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Di(h,r),r.extensions&&cr(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new et;n.name&&(r.name=s.createUniqueName(n.name)),Di(r,n),n.extensions&&cr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(r0(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Cn||d instanceof jt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}As[r.path]===As.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(As[r.path]){case As.weights:h=Ji;break;case As.rotation:h=$i;break;case As.translation:case As.scale:h=vs;break;default:switch(n.itemSize){case 1:h=Ji;break;case 2:case 3:default:h=vs;break}break}let u=s.interpolation!==void 0?AM[s.interpolation]:Vs,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let v=new h(c[f]+"."+As[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof $i?Wf:ih;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function DM(i,e,t){let n=e.attributes,s=new cn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let h=qf(jr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=qf(jr[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function h0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Xf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Di(i,e),DM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?CM(i,e.targets,t):i})}var sh=class extends Yo{constructor(e){super(e),this.type=Dt}parse(e){let o=function(x,T){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},u=function(x,T,E){T=T||1024;let O=x.pos,z=-1,P=0,U="",D=String.fromCharCode.apply(null,new Uint16Array(x.subarray(O,O+128)));for(;0>(z=D.indexOf(`
`))&&P<T&&O<x.byteLength;)U+=D,P+=D.length,O+=128,D=String.fromCharCode.apply(null,new Uint16Array(x.subarray(O,O+128)));return-1<z?(E!==!1&&(x.pos+=P+z+1),U+D.slice(0,z)):!1},d=function(x){let T=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,D;for((x.pos>=x.byteLength||!(U=u(x)))&&o(1,"no header found"),(D=U.match(T))||o(3,"bad initial token"),P.valid|=1,P.programtype=D[1],P.string+=U+`
`;U=u(x),U!==!1;){if(P.string+=U+`
`,U.charAt(0)==="#"){P.comments+=U+`
`;continue}if((D=U.match(E))&&(P.gamma=parseFloat(D[1])),(D=U.match(I))&&(P.exposure=parseFloat(D[1])),(D=U.match(O))&&(P.valid|=2,P.format=D[1]),(D=U.match(z))&&(P.valid|=4,P.height=parseInt(D[1],10),P.width=parseInt(D[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(x,T,E){let I=T;if(I<8||I>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);I!==(x[2]<<8|x[3])&&o(3,"wrong scanline width");let O=new Uint8Array(4*T*E);O.length||o(4,"unable to allocate buffer space");let z=0,P=0,U=4*I,D=new Uint8Array(4),B=new Uint8Array(U),X=E;for(;X>0&&P<x.byteLength;){P+4>x.byteLength&&o(1),D[0]=x[P++],D[1]=x[P++],D[2]=x[P++],D[3]=x[P++],(D[0]!=2||D[1]!=2||(D[2]<<8|D[3])!=I)&&o(3,"bad rgbe scanline format");let L=0,V;for(;L<U&&P<x.byteLength;){V=x[P++];let $=V>128;if($&&(V-=128),(V===0||L+V>U)&&o(3,"bad scanline data"),$){let ae=x[P++];for(let Se=0;Se<V;Se++)B[L++]=ae}else B.set(x.subarray(P,P+V),L),L+=V,P+=V}let Y=I;for(let $=0;$<Y;$++){let ae=0;O[z]=B[$+ae],ae+=I,O[z+1]=B[$+ae],ae+=I,O[z+2]=B[$+ae],ae+=I,O[z+3]=B[$+ae],z+=4}X--}return O},g=function(x,T,E,I){let O=x[T+3],z=Math.pow(2,O-128)/255;E[I+0]=x[T+0]*z,E[I+1]=x[T+1]*z,E[I+2]=x[T+2]*z,E[I+3]=1},v=function(x,T,E,I){let O=x[T+3],z=Math.pow(2,O-128)/255;E[I+0]=ps.toHalfFloat(Math.min(x[T+0]*z,65504)),E[I+1]=ps.toHalfFloat(Math.min(x[T+1]*z,65504)),E[I+2]=ps.toHalfFloat(Math.min(x[T+2]*z,65504)),E[I+3]=ps.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),y=p.width,b=p.height,M=f(m.subarray(m.pos),y,b),w,A,_;switch(this.type){case Sn:_=M.length/4;let x=new Float32Array(_*4);for(let E=0;E<_;E++)g(M,E*4,x,E*4);w=x,A=Sn;break;case Dt:_=M.length/4;let T=new Uint16Array(_*4);for(let E=0;E<_;E++)v(M,E*4,T,E*4);w=T,A=Dt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:A,colorSpace:ln,minFilter:vt,magFilter:vt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var rh=class extends Ue{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new N(.70707,.70707,0),u=new Ie(t.sunColor!==void 0?t.sunColor:16777215),d=new Ie(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new N(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Wn,m=t.fog!==void 0?t.fog:!1,p=new jn,y=new N,b=new N,M=new N,w=new Ve,A=new N(0,0,-1),_=new xt,x=new N,T=new N,E=new xt,I=new Ve,O=new Ut,z=new Ot(s,r,{type:Dt}),P={name:"MirrorShader",uniforms:on.merge([we.fog,we.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ve},sunColor:{value:new Ie(8355711)},sunDirection:{value:new N(.70707,.70707,0)},eye:{value:new N},waterColor:{value:new Ie(5592405)}}]),vertexShader:`
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
				}`},U=new yt({name:P.name,uniforms:on.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:v,fog:m});U.uniforms.mirrorSampler.value=z.texture,U.uniforms.textureMatrix.value=I,U.uniforms.alpha.value=a,U.uniforms.time.value=c,U.uniforms.normalSampler.value=l,U.uniforms.sunColor.value=u,U.uniforms.waterColor.value=d,U.uniforms.sunDirection.value=h,U.uniforms.distortionScale.value=g,U.uniforms.eye.value=f,n.material=U,n.onBeforeRender=function(D,B,X){if(b.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition(X.matrixWorld),w.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(w),x.subVectors(b,M),x.dot(y)>0)return;x.reflect(y).negate(),x.add(b),w.extractRotation(X.matrixWorld),A.set(0,0,-1),A.applyMatrix4(w),A.add(M),T.subVectors(b,A),T.reflect(y).negate(),T.add(b),O.position.copy(x),O.up.set(0,1,0),O.up.applyMatrix4(w),O.up.reflect(y),O.lookAt(T),O.far=X.far,O.updateMatrixWorld(),O.projectionMatrix.copy(X.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(O.projectionMatrix),I.multiply(O.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,b),p.applyMatrix4(O.matrixWorldInverse),_.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let L=O.projectionMatrix;E.x=(Math.sign(_.x)+L.elements[8])/L.elements[0],E.y=(Math.sign(_.y)+L.elements[9])/L.elements[5],E.z=-1,E.w=(1+L.elements[10])/L.elements[14],_.multiplyScalar(2/_.dot(E)),L.elements[2]=_.x,L.elements[6]=_.y,L.elements[10]=_.z+1-o,L.elements[14]=_.w,f.setFromMatrixPosition(X.matrixWorld);let V=D.getRenderTarget(),Y=D.xr.enabled,$=D.shadowMap.autoUpdate;n.visible=!1,D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(z),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(B,O),n.visible=!0,D.xr.enabled=Y,D.shadowMap.autoUpdate=$,D.setRenderTarget(V);let ae=X.viewport;ae!==void 0&&D.state.viewport(ae)}}};var Ni={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Rn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},NM=new Ri(-1,1,1,-1,0,1),Zf=class extends Mt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},UM=new Zf,Ui=class{constructor(e){this._mesh=new Ue(UM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oh=class extends Rn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=on.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ui(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wa=class extends Rn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ah=class extends Rn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oh(Ni),this.copyPass.material.blending=qt,this.timer=new jo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wa!==void 0&&(o instanceof wa?n=!0:o instanceof ah&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ch=class extends Rn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Aa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},Ea={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},hh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function f0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=FM(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new N(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new hn(s,e,e);return r.wrapS=Kt,r.wrapT=Kt,r.needsUpdate=!0,r}function FM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Ca={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Kf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Kf(i,e,t){let n=OM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function OM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),o))}return n}var uh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=e-d,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let y=g-m+h,b=v-p+h,M=g-1+2*h,w=v-1+2*h,A=c&255,_=l&255,x=this.perm[A+this.perm[_]]%12,T=this.perm[A+m+this.perm[_+p]]%12,E=this.perm[A+1+this.perm[_+1]]%12,I=.5-g*g-v*v;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[x],g,v));let O=.5-y*y-b*b;O<0?s=0:(O*=O,s=O*O*this._dot(this.grad3[T],y,b));let z=.5-M*M-w*w;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[E],M,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,y=e-v,b=t-m,M=n-p,w,A,_,x,T,E;y>=b?b>=M?(w=1,A=0,_=0,x=1,T=1,E=0):y>=M?(w=1,A=0,_=0,x=1,T=0,E=1):(w=0,A=0,_=1,x=1,T=0,E=1):b<M?(w=0,A=0,_=1,x=0,T=1,E=1):y<M?(w=0,A=1,_=0,x=0,T=1,E=1):(w=0,A=1,_=0,x=1,T=1,E=0);let I=y-w+f,O=b-A+f,z=M-_+f,P=y-x+2*f,U=b-T+2*f,D=M-E+2*f,B=y-1+3*f,X=b-1+3*f,L=M-1+3*f,V=h&255,Y=u&255,$=d&255,ae=this.perm[V+this.perm[Y+this.perm[$]]]%12,Se=this.perm[V+w+this.perm[Y+A+this.perm[$+_]]]%12,Ee=this.perm[V+x+this.perm[Y+T+this.perm[$+E]]]%12,ne=this.perm[V+1+this.perm[Y+1+this.perm[$+1]]]%12,ge=.6-y*y-b*b-M*M;ge<0?s=0:(ge*=ge,s=ge*ge*this._dot3(this.grad3[ae],y,b,M));let fe=.6-I*I-O*O-z*z;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[Se],I,O,z));let Le=.6-P*P-U*U-D*D;Le<0?o=0:(Le*=Le,o=Le*Le*this._dot3(this.grad3[Ee],P,U,D));let Fe=.6-B*B-X*X-L*L;return Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this._dot3(this.grad3[ne],B,X,L)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,g,v=(e+t+n+s)*c,m=Math.floor(e+v),p=Math.floor(t+v),y=Math.floor(n+v),b=Math.floor(s+v),M=(m+p+y+b)*l,w=m-M,A=p-M,_=y-M,x=b-M,T=e-w,E=t-A,I=n-_,O=s-x,z=T>E?32:0,P=T>I?16:0,U=E>I?8:0,D=T>O?4:0,B=E>O?2:0,X=I>O?1:0,L=z+P+U+D+B+X,V=o[L][0]>=3?1:0,Y=o[L][1]>=3?1:0,$=o[L][2]>=3?1:0,ae=o[L][3]>=3?1:0,Se=o[L][0]>=2?1:0,Ee=o[L][1]>=2?1:0,ne=o[L][2]>=2?1:0,ge=o[L][3]>=2?1:0,fe=o[L][0]>=1?1:0,Le=o[L][1]>=1?1:0,Fe=o[L][2]>=1?1:0,Ge=o[L][3]>=1?1:0,ht=T-V+l,Ke=E-Y+l,R=I-$+l,k=O-ae+l,H=T-Se+2*l,J=E-Ee+2*l,K=I-ne+2*l,ue=O-ge+2*l,he=T-fe+3*l,me=E-Le+3*l,de=I-Fe+3*l,G=O-Ge+3*l,We=T-1+4*l,$e=E-1+4*l,F=I-1+4*l,S=O-1+4*l,Z=m&255,j=p&255,ie=y&255,xe=b&255,_e=a[Z+a[j+a[ie+a[xe]]]]%32,se=a[Z+V+a[j+Y+a[ie+$+a[xe+ae]]]]%32,re=a[Z+Se+a[j+Ee+a[ie+ne+a[xe+ge]]]]%32,be=a[Z+fe+a[j+Le+a[ie+Fe+a[xe+Ge]]]]%32,He=a[Z+1+a[j+1+a[ie+1+a[xe+1]]]]%32,Me=.6-T*T-E*E-I*I-O*O;Me<0?h=0:(Me*=Me,h=Me*Me*this._dot4(r[_e],T,E,I,O));let ve=.6-ht*ht-Ke*Ke-R*R-k*k;ve<0?u=0:(ve*=ve,u=ve*ve*this._dot4(r[se],ht,Ke,R,k));let ze=.6-H*H-J*J-K*K-ue*ue;ze<0?d=0:(ze*=ze,d=ze*ze*this._dot4(r[re],H,J,K,ue));let Ye=.6-he*he-me*me-de*de-G*G;Ye<0?f=0:(Ye*=Ye,f=Ye*Ye*this._dot4(r[be],he,me,de,G));let tt=.6-We*We-$e*$e-F*F-S*S;return tt<0?g=0:(tt*=tt,g=tt*tt*this._dot4(r[He],We,$e,F,S)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Ra=class i extends Rn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=f0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ot(this.width,this.height,{type:Dt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},Aa.defines),uniforms:on.clone(Aa.uniforms),vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader,blending:qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Wo,this.normalMaterial.blending=qt,this.pdMaterial=new yt({defines:Object.assign({},Ca.defines),uniforms:on.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},Ea.defines),uniforms:on.clone(Ea.uniforms),vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,blending:qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:on.clone(Ni.uniforms),vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ia,blendDst:Qs,blendEquation:Xn,blendSrcAlpha:na,blendDstAlpha:Qs,blendEquationAlpha:Xn}),this.blendMaterial=new yt({uniforms:on.clone(hh.uniforms),vertexShader:hh.vertexShader,fragmentShader:hh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ic,blendSrc:ia,blendDst:Qs,blendEquation:Xn,blendSrcAlpha:na,blendDstAlpha:Qs,blendEquationAlpha:Xn}),this._fsQuad=new Ui(null),this._originalClearColor=new Ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ci,this.depthTexture.format=Pi,this.depthTexture.type=Ms,this.normalRenderTarget=new Ot(this.width,this.height,{minFilter:Ft,magFilter:Ft,type:Dt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Kf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new uh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new hn(s,e,e,dn,Mn);return r.wrapS=Kt,r.wrapT=Kt,r.needsUpdate=!0,r}};Ra.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var d0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Qr=class i extends Rn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,o,{type:Dt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ot(r,o,{type:Dt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ot(r,o,{type:Dt});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=d0;this.highPassUniforms=on.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=on.clone(Ni.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader,premultipliedAlpha:!0,blending:ta,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new rn,this._fsQuad=new Ui(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}};Qr.BlurDirectionX=new le(1,0);Qr.BlurDirectionY=new le(0,1);var Pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var fh=class extends Rn{constructor(){super(),this.isOutputPass=!0,this.uniforms=on.clone(Pa.uniforms),this.material=new Gr({name:Pa.name,uniforms:this.uniforms,vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader}),this._fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===la?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var to=Object.freeze({flow:{name:"\u6D41\u7545",pixelRatio:.85,shadowSize:1024,shadowInterval:200,reflectionInterval:1/0,ao:!1,bloom:!1,near:7,medium:20,smallNear:4,smallMedium:12},balanced:{name:"\u5747\u8861",pixelRatio:1,shadowSize:1536,shadowInterval:100,reflectionInterval:160,ao:!1,bloom:!1,near:12,medium:32,smallNear:7,smallMedium:20},high:{name:"\u7CBE\u7EC6",pixelRatio:1.25,shadowSize:2048,shadowInterval:66,reflectionInterval:80,ao:!0,bloom:!0,near:20,medium:45,smallNear:12,smallMedium:28}}),eo=["flow","balanced","high"];function p0(i,e,t=!1,n=-1){let s=[t?e.smallNear:e.near,t?e.smallMedium:e.medium];if(n<0)return i<s[0]?0:i<s[1]?1:2;let r=n;for(;r<2&&i>s[r]*1.15;)r++;for(;r>0&&i<s[r-1]*.85;)r--;return r}function m0(i,e=12){let t=new Map;for(let n of i){let s=Math.floor(n.x/e)+":"+Math.floor(n.z/e);t.has(s)||t.set(s,[]),t.get(s).push(n)}return[...t.values()]}var dh=class{constructor(){this.level=1,this.mode="auto",this.reset()}reset(){this.duration=0,this.frames=0,this.slow=0,this.fast=0,this.cooldown=4,this.fps=0}setMode(e){if(!["auto",...eo].includes(e))throw Error("\u672A\u77E5\u753B\u8D28");return this.mode=e,e!=="auto"?this.level=eo.indexOf(e):this.level=1,this.reset(),eo[this.level]}sample(e){if(e<=0||e>1)return this.reset(),null;if(this.duration+=e,this.frames++,this.cooldown=Math.max(0,this.cooldown-e),this.duration<1)return null;this.fps=this.frames/this.duration;let t=this.duration;if(this.duration=0,this.frames=0,this.mode!=="auto"||this.cooldown>0)return null;this.slow=this.fps<38?this.slow+t:0,this.fast=this.fps>57?this.fast+t:0;let n=this.level;return this.slow>=2&&n>0?n--:this.fast>=14&&n<2&&n++,n===this.level?null:(this.level=n,this.slow=0,this.fast=0,this.cooldown=8,eo[n])}};function g0(i,e,t,n){let s=to[i];if(!e.mobile)return{...s};let r={flow:1.35,balanced:1.6,high:1.85},o=Math.sqrt(24e5/Math.max(1,t*n));return{...s,pixelRatio:Math.min(r[i],e.pixelCap,o),near:Math.max(s.near,12),medium:Math.max(s.medium,28),smallNear:Math.max(s.smallNear,7),smallMedium:Math.max(s.smallMedium,18)}}function BM(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new Ct(new Uint32Array(t.buffer),1)}function x0(i){let e=[];function t(s,r,{small:o=!1}={}){s.updateMatrixWorld(!0);let a=[];s.traverse(c=>{if(!c.isMesh)return;let l=[c.geometry];for(let h of["medium","far"]){let u=new Mt;u.setIndex(c.geometry.userData.lod?.[h]?BM(c.geometry.userData.lod[h]):c.geometry.index);for(let[d,f]of Object.entries(c.geometry.attributes))u.setAttribute(d,f);u.boundingBox=c.geometry.boundingBox?.clone()||null,u.boundingSphere=c.geometry.boundingSphere?.clone()||null,l.push(u)}a.push({geometries:l,material:c.material,matrix:c.matrixWorld.clone()})});for(let c of m0(r)){let l=new N;for(let u of c)l.add(new N(u.x,u.y||0,u.z));l.divideScalar(c.length);let h=[];for(let u=0;u<3;u++){let d=new et,f=0;for(let g of a){let v=new Ai(g.geometries[u],g.material,c.length);v.receiveShadow=!0,v.castShadow=u<2;let m=new Ve,p=new sn;for(let y=0;y<c.length;y++){let b=c[y],M=b.height/s.userData.height;p.setFromAxisAngle(new N(0,1,0),b.rotation||0),m.compose(new N(b.x,b.y||0,b.z),p,new N(M,M,M)),m.multiply(g.matrix),v.setMatrixAt(y,m)}v.instanceMatrix.needsUpdate=!0,v.computeBoundingSphere(),d.add(v),f+=(v.geometry.index?.count||v.geometry.attributes.position.count)/3*c.length}d.visible=!1,i.add(d),h.push({group:d,triangles:f})}e.push({center:l,small:o,levels:h,current:-1})}}function n(s,r){let o=!1;for(let a of e){let c=s.position.distanceTo(a.center),l=p0(c,r,a.small,a.current);if(l!==a.current){a.current=l;for(let h=0;h<3;h++)a.levels[h].group.visible=h===l;o=!0}}return o}return{add:t,update:n,get stats(){return{cells:e.length,triangles:e.reduce((s,r)=>s+(r.levels[r.current]?.triangles||0),0),nearCells:e.filter(s=>s.current===0).length}}}}function Jf(i,e=4){i.generateMipmaps=!0,i.minFilter=yn,i.magFilter=vt,i.anisotropy=e,i.needsUpdate=!0}function $f(i,e){let t=new Set,n=Math.min(4,e.capabilities.getMaxAnisotropy());i.traverse(s=>{if(s.isMesh)for(let r of Array.isArray(s.material)?s.material:[s.material])for(let o of["map","normalMap","roughnessMap","metalnessMap","aoMap","alphaMap"]){let a=r[o];!a||t.has(a)||(t.add(a),Jf(a,n))}})}function ph(i){return cf(i).then(e=>new Promise((t,n)=>new th().parse(e,"",s=>{globalThis.MANSION_ASSETS[i].startsWith("assets/")||delete globalThis.MANSION_ASSETS[i],zm(s.scene),t(s.scene)},n)))}function _0(i,e,t,n,{parent:s,queue:r,onLoaded:o=()=>{}}){let a=[],c=x0(s),l=(L,V,Y=14)=>$=>$.bird||Math.hypot($.x-L,$.z-V)<Y;function h(L){let V=new cn().setFromObject(L),Y=V.getSize(new N),$=V.getCenter(new N),ae=new et;return L.position.add(new N(-$.x,-V.min.y,-$.z)),ae.add(L),ae.userData.height=Y.y,$f(L,t),ae}function u(L,V,Y,$,ae,Se=0){let Ee=L.clone(!0);return Ee.scale.set(ae/L.userData.height/Qe,ae/L.userData.height,ae/L.userData.height/Qe),Ee.position.set(V,Y,$),Ee.rotation.y=Se,Ee.traverse(ne=>{ne.isMesh&&(ne.castShadow=!0,ne.receiveShadow=!0)}),s.add(Ee),Ee}let d=new et;s.add(d);let f=new Zs(1,1),g=new vn(.08,.12,1,6),v=new st({color:5795657}),m=new st({color:7166274}),p=new Ai(f,v,e.trees.length),y=new Ai(g,m,e.trees.length);d.add(p,y),e.trees.forEach((L,V)=>{let Y=new Ve;Y.compose(new N(L.x,L.height*.7,L.z),new sn,new N(L.height*.25,L.height*.32,L.height*.25)),p.setMatrixAt(V,Y),Y.compose(new N(L.x,L.height*.25,L.z),new sn,new N(1,L.height*.5,1)),y.setMatrixAt(V,Y)}),p.computeBoundingSphere(),y.computeBoundingSphere(),r.add("\u6811\u6728\u6A21\u578B",async()=>{a[0]=h(await ph("tree_small_02")),c.add(a[0],e.trees),s.remove(d),f.dispose(),g.dispose(),v.dispose(),m.dispose(),o()},{priority:2});let b=99,M=()=>(b=b*16807%2147483647,(b-1)/2147483646),w=[],A=[];for(let L=0;L<95;L++){let V=(M()-.5)*51,Y=(M()-.5)*43;Tm(V,Y)||Y<7&&Math.abs(V)<22||Math.abs(V)<3||V>3&&V<25&&Y>7||V>-10&&V<0&&Y<14||(w.push({x:V,z:Y,height:.3+M()*.75,rotation:M()*7}),L%2===0&&A.push({x:V+.5,z:Y+.3,height:.7+M()*.5,rotation:M()*7}))}for(let L=0;L<15;L++){let V=L/15*6.28;w.push({x:Math.cos(V)*2.1,z:3+Math.sin(V)*1.2,height:.45,rotation:V})}for(let[L,V,Y]of[["fern_02",1,w],["shrub_01",2,A],["potted_plant_02",5,e.plantSpots]])r.add(L,async()=>{a[V]=h(await ph(L)),c.add(a[V],Y,{small:!0}),o()},{when:$=>$.bird||Y.some(ae=>Math.hypot(ae.x-$.x,ae.z-$.z)<14),priority:8});r.add("\u5BA4\u5185\u5355\u6905",async()=>{a[3]=h(await ph("modern_arm_chair_01")),u(a[3],12.8,0,2.8,1.12,.5),u(a[3],-12.7,0,3.7,1.12,-.7),u(a[3],-5,3.6,-15,1.05,1.3),o()},{when:L=>L.bird||L.z<9,priority:9}),r.add("\u4E66\u623F\u58C1\u7089",async()=>{let L=await ph("interior");L.position.set(-20,0,.3),$f(L,t),L.traverse(V=>{V.isMesh&&(V.castShadow=!0,V.receiveShadow=!0)}),s.add(L),o()},{when:l(-20,.3,13),priority:7});let _=null;r.add("\u73AF\u5883\u5149",async()=>{let L=new sh().parse(await cf("environment")),V=new hn(L.data,L.width,L.height,dn,L.type);V.mapping=Wr,V.needsUpdate=!0,_=V,i.background=V,i.backgroundBlurriness=.04,i.environment=V,i.environmentRotation.y=1.2,i.backgroundRotation.y=1.2,n.visible=!1,o()},{priority:1});let x=128,T=new Uint8Array(x*x*4);for(let L=0;L<x;L++)for(let V=0;V<x;V++){let Y=(L*x+V)*4;T[Y]=128+Math.sin(V*.24+L*.09)*18,T[Y+1]=128+Math.cos(L*.21+V*.06)*18,T[Y+2]=250,T[Y+3]=255}let E=new hn(T,x,x);E.wrapS=E.wrapT=Kt,Jf(E,Math.min(4,t.capabilities.getMaxAnisotropy()));let I=new rh(new Zi(6.7,15.7),{textureWidth:384,textureHeight:384,waterNormals:E,sunDirection:new N(-.7,.5,.4),sunColor:16769198,waterColor:1523515,distortionScale:1.1,fog:!0});I.rotation.x=-Math.PI/2,I.position.set(20.5,.135,11),s.add(I);let O=I.material,z=new st({color:2710100,metalness:.48,roughness:.18,normalMap:E,normalScale:new le(.12,.12)}),P=to.flow,U=-1/0,D=-1/0,B=0,X=I.onBeforeRender;return I.onBeforeRender=function(...L){L[1].overrideMaterial||!Number.isFinite(P.reflectionInterval)||(O.uniforms.eye.value.setFromMatrixPosition(L[2].matrixWorld),!(B-U<P.reflectionInterval)&&(U=B,X.apply(this,L)))},{pool:I,templates:a,normal:E,get environment(){return _},vegetation:c,setQuality(L){P=L,I.material=Number.isFinite(L.reflectionInterval)?O:z,U=-1/0,D=-1/0},update(L,V,Y){if(B=L,O.uniforms.time.value+=V*.45,L-D>200){let $={position:Y.position.clone()};$.position.x/=Qe,$.position.z/=Qe,c.update($,P),D=L}}}}function v0(i,e,t){let n,s,r,o=to.flow;function a(){n||(n=new lh(i),n.addPass(new ch(e,t)),s=new Ra(e,t,Math.max(1,innerWidth>>1),Math.max(1,innerHeight>>1)),s.updateGtaoMaterial({radius:.55,thickness:1,distanceFallOff:1,samples:6}),s.blendIntensity=.58,n.addPass(s),r=new Qr(new le(innerWidth,innerHeight),.15,.45,1.15),n.addPass(r),n.addPass(new fh))}function c(){if(!s)return;let l=i.getPixelRatio();s.setSize(Math.max(1,Math.round(innerWidth*l*.5)),Math.max(1,Math.round(innerHeight*l*.5)))}return{setQuality(l){o=l,i.setPixelRatio(Math.min(devicePixelRatio,o.pixelRatio)),(o.ao||o.bloom)&&a(),n&&(s.enabled=o.ao,r.enabled=o.bloom,n.setPixelRatio(i.getPixelRatio()),c())},resize(l,h){n?.setSize(l,h),c()},render(){!o.ao&&!o.bloom?i.render(e,t):n.render()}}}var ye=i=>document.getElementById(i),_t=new Hs,ro=new et,sd=matchMedia("(pointer: coarse)"),Fi=hf(innerWidth,sd.matches);document.body.dataset.mobile=String(Fi.mobile);var tn=new Ut(Fi.fov,innerWidth/innerHeight,.08,230),za=new $c({onChange:i=>{ye("assetStatus").textContent=i.failed?"\u90E8\u5206\u7D20\u6750\u5F85\u91CD\u8BD5":i.active?"\u7EC6\u8282\u52A0\u8F7D\u4E2D\u2026":"\u7D20\u6750\u6309\u4F4D\u7F6E\u52A0\u8F7D",ye("assetStatus").title=`\u5DF2\u8F7D\u5165 ${i.loaded}/${i.total} \u9879\uFF1B\u5931\u8D25 ${i.failed} \u9879\uFF0C\u70B9\u51FB\u91CD\u8BD5`}}),mt;try{mt=new Jr({antialias:!0,powerPreference:"high-performance"})}catch(i){throw ye("loading").innerHTML="<h2>\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u5F00\u542F 3D</h2><p>\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684 Chrome\u3001Edge \u6216 Safari\uFF0C\u5E76\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u3002</p>",i}mt.setPixelRatio(Math.min(devicePixelRatio,1));mt.setSize(innerWidth,innerHeight);mt.shadowMap.enabled=!0;mt.shadowMap.type=nc;mt.shadowMap.autoUpdate=!1;mt.shadowMap.needsUpdate=!0;mt.toneMapping=er;mt.toneMappingExposure=.93;mt.outputColorSpace=pt;ye("scene").appendChild(mt.domElement);_t.fog=new To(11975337,.006);var A0=new js(13822187,7827538,.8);_t.add(A0);var Bn=new Qi(16765338,2.4);Bn.position.set(-24,23,16);Bn.castShadow=!0;Bn.shadow.mapSize.set(1536,1536);Object.assign(Bn.shadow.camera,{left:-55,right:55,top:50,bottom:-50,near:1,far:150});Bn.shadow.bias=-3e-4;Bn.shadow.normalBias=.06;_t.add(Bn);var vh=new Ue(new un(160,32,16),new yt({side:fn,depthWrite:!1,uniforms:{top:{value:new Ie("#739dba")},bottom:{value:new Ie("#efd0a1")}},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 v;uniform vec3 top;uniform vec3 bottom;void main(){float h=clamp(normalize(v).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.65)),1.);}"}));_t.add(vh);var yh=new Ue(new un(3,20,12),new rn({color:16770221}));yh.position.set(-64,26,-103);_t.add(yh);var zM=new Js,Qf=new Map,kM={\u8D70\u5ECA\u70DF\u718F\u6728:["wood",1,6574916],\u8349\u5730:["grass",1,9540993],\u77F3\u677F:["road",1,13684419],\u6D45\u6A61\u6728:["wood",1,12299925],\u80E1\u6843\u6728:["wood",1,9860435],\u7C73\u8272\u5899\u9762:["plaster",1,16774889],\u77F3\u6750:["stone",1,11120544],\u6DF1\u7070\u74E6:["roof",1,3554618]},E0={};for(let[i,[e,t,n]]of Object.entries(kM)){let s=new st({name:i,color:n,roughness:.88});s.userData.worldUV=!0,s.normalScale.set(.3,.3),E0[i]=s;for(let[r,o]of[["color","map"],["normal","normalMap"],["roughness","roughnessMap"]]){let a=e+"-"+r;if(!globalThis.MANSION_ASSETS[a]||["road","plaster"].includes(e)&&r==="color"||e==="roof"&&r!=="roughness")continue;let l=Qf.get(a)||{id:a,kind:r,slot:o,repeat:t,targets:[]};l.targets.push(s),Qf.set(a,l)}}for(let i of Qf.values())za.add(i.id,async()=>{let e=await zM.loadAsync(globalThis.MANSION_ASSETS[i.id]);e.wrapS=e.wrapT=Kt,e.repeat.set(i.repeat,i.repeat),e.anisotropy=Math.min(8,mt.capabilities.getMaxAnisotropy()),i.kind==="color"&&(e.colorSpace=pt);for(let t of i.targets)t[i.slot]=e,t.needsUpdate=!0;globalThis.MANSION_ASSETS[i.id].startsWith("data:")&&delete globalThis.MANSION_ASSETS[i.id]},{priority:i.kind==="color"?3:Fi.mobile?6:12,when:e=>i.targets.some(t=>e.materials.has(t))});var $t=e0({...E0,...Rm()});Dm($t);_t.add($t.root);var no,rd=v0(mt,_t,tn),hr=i0(_t,$t),VM=Om($t.root),GM=new rn({color:16753719,transparent:!0,opacity:.8}),C0=[];for(let i=0;i<7;i++){let e=new Ue(new hi(.08,.55,7),GM);e.position.set(-19.95+i%2*.2,.65,.3+(i-3)*.2),_t.add(e),C0.push(e)}var od=new Zn(16753742,6,5);od.position.set(-19.3,1,.3);_t.add(od);for(let[i,e]of[["\u7535\u89C6\u753B\u9762","\u5C71\u6C34\u4E4B\u95F4 \xB7 \u98CE\u666F\u9891\u9053"],["\u7535\u7ADE\u5C4F\u5E55","\u6E38\u620F\u5927\u5385 \xB7 \u51C6\u5907\u5C31\u7EEA"]]){let t=document.createElement("canvas");t.width=640,t.height=360;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,360);s.addColorStop(0,"#283f55"),s.addColorStop(1,"#b2c5ac"),n.fillStyle=s,n.fillRect(0,0,640,360);for(let o=0;o<3;o++){n.fillStyle=["#7b9a99","#526f72","#304e53"][o],n.beginPath(),n.moveTo(0,360);for(let a=0;a<=640;a+=20)n.lineTo(a,170+o*45+Math.sin(a*.012+o)*55+Math.cos(a*.026)*18);n.lineTo(640,360),n.fill()}n.fillStyle="#f4e9c9",n.font="24px sans-serif",n.fillText(e,28,43),n.font="16px sans-serif",n.fillText(i==="\u7535\u7ADE\u5C4F\u5E55"?"\u6B22\u8FCE\u56DE\u5BB6\uFF0C\u653E\u677E\u4E00\u4E0B":"\u4E61\u6751\u751F\u6D3B \xB7 \u6162\u4EAB\u65F6\u5149",28,326);let r=new qn(t);r.colorSpace=pt,$t.mats[i].map=r,$t.mats[i].needsUpdate=!0}var ad=new Zn(16767669,125,23,2);ad.position.set(-18,-1.3,-13);_t.add(ad);var HM=Array.from({length:2},()=>{let i=new Zn(16769723,0,16,2);return _t.add(i),i}),R0=$t.root.userData.vendors.map((i,e)=>{let t=lr({shirt:[9730912,7441528,12095865][e%3],pants:4213576,female:e%2===1});return t.g.position.set(i.x,0,i.z),t.g.rotation.y=i.rotation,_t.add(t.g),t}),Je=lr({shirt:12892052,pants:4215628});_t.add(Je.g);var ce=new N(0,0,19);Je.g.position.copy(ce);Je.g.rotation.y=Math.PI;var ka=lr({shirt:12624012,pants:15590094,female:!0});ka.g.position.set(-6,0,-15.1);_t.add(ka.g);var Es=lr({shirt:7904683,pants:4545380,scale:.69});_t.add(Es.g);Es.g.position.set(0,0,16.8);var ur=lr({shirt:10327161,pants:6120278,hair:13223865,scale:.97});ur.g.position.set(-14,-.08,-3);_t.add(ur.g);var Va=lr({shirt:10785965,pants:6712160,hair:12435124,female:!0,scale:.93});Va.g.position.set(12,0,16.9);_t.add(Va.g);var Mh=[_f(13081187),_f(14736848)];Mh.forEach(i=>_t.add(i.g));var P0=Array.from({length:9},(i,e)=>s0([15115083,15065554,12412229][e%3]));P0.forEach(i=>_t.add(i));var Na=[vf(),vf()];Na.forEach(i=>_t.add(i));var Sh=new Ue(new Jt(.45,.04,.32),new st({color:14668205}));Sh.position.set(0,1.08,.4);Sh.rotation.x=-.3;ur.g.add(Sh);var I0=new Ue(new un(.22,16,12),new st({color:14067302}));_t.add(I0);var WM=Je,On=new Xa([WM,ka,Es,ur,Va].map((i,e)=>({actor:i,name:["\u7238\u7238","\u5988\u5988","\u5B69\u5B50","\u7237\u7237","\u5976\u5976"][e],position:{x:i.g.position.x,y:Math.round(i.g.position.y/3.6)*3.6,z:i.g.position.z}}))),xi=wm();xi.root.position.set(3,0,19);_t.add(xi.root);var zn=!1,Rt=new Wa,L0=Am();_t.add(L0.root);Wm(Rt);var D0=new N,XM=[],Ia=0,N0=0,U0=0,Tt=bm,Pn=!1,mn=null,Oa=0,ii=!1,kn="stand",zt=null,an={height:0,velocity:0},La=new N(0,0,9),Ua=100,Fa=.67,Fn=0,io=.24,Ba=Fi.distance,oo=!1,ed=0,_h=0,An=Nm(ye("moveJoystick"),ye("joystickThumb")),Cs=null,Nt=new Set,y0;function Vt(i){ye("toast").textContent=i,ye("toast").classList.add("show"),clearTimeout(y0),y0=setTimeout(()=>ye("toast").classList.remove("show"),3800)}var qM=[{id:"sandplay",x:14,z:1.5,y:3.6,title:"\u4E00\u8D77\u73A9\u6C99\u5B50",hint:"\u513F\u7AE5\u9633\u53F0 \xB7 \u6C99\u6C60\u65F6\u5149",type:"\u4EB2\u5B50\u65F6\u5149",heading:"\u5C0F\u5C0F\u6C99\u5821",body:"<p>\u62FF\u8D77\u5C0F\u6876\u548C\u94F2\u5B50\uFF0C\u966A\u5B69\u5B50\u642D\u4E00\u5EA7\u6C99\u5821\u3002\u73A9\u597D\u540E\uFF0C\u628A\u73A9\u5177\u6536\u56DE\u65C1\u8FB9\u7684\u67DC\u5B50\u3002</p>",mood:"\u4EAB\u53D7\u4EB2\u5B50\u65F6\u5149"},...Ts.filter(i=>i.interior).flatMap(i=>[-1,1].map(e=>({id:i.id,x:i.x+(i.axis==="z"?e*.8:0),z:i.z+(i.axis==="x"?e*.8:0),y:i.y,title:"\u5F00\u5173"+i.name,hint:"\u9760\u8FD1\u623F\u95E8 \xB7 \u6309 E \u6216\u70B9\u51FB\u5F00\u5173"}))),...[["gate",0,28.4,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["gate",0,31.6,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["basementDoor",-23.5,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"],["basementDoor",-21.2,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"]].map(([i,e,t,n,s])=>({id:i,x:e,z:t,y:n,title:s,hint:"\u6309 E \u5F00\u5173 \xB7 \u8BF7\u907F\u5F00\u95E8\u6247\u8303\u56F4"})),...[["rooftea",-4,-7.8,7.2,"\u5728\u5929\u53F0\u559D\u8336","\u5929\u53F0\u8336\u5E2D","\u7AEF\u8D77\u9752\u74F7\u676F\uFF0C\u4FEF\u77B0\u679C\u56ED\u3001\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"],["roofplant",3,-11,7.2,"\u5728\u5929\u53F0\u79CD\u82B1","\u5929\u53F0\u82B1\u56ED","\u628A\u65B0\u82B1\u82D7\u79CD\u8FDB\u5929\u53F0\u7684\u5C0F\u82B1\u5703\u3002"],["coffee",5,-14,0,"\u78E8\u4E00\u676F\u5496\u5561","\u4E00\u697C\u5496\u5561\u5427","\u5496\u5561\u673A\u6E29\u70ED\u8D77\u6765\uFF0C\u676F\u4E2D\u6563\u51FA\u9999\u6C14\u3002"],["tv",1.6,-10,0,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u4E00\u697C\u8D77\u5C45\u5385","\u7535\u89C6\u5207\u6362\u5230\u53E6\u4E00\u5E45\u5C71\u6C34\u8272\u8C03\u7684\u753B\u9762\u3002"],["tv",-14,-11.7,-3.6,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385","\u5728\u6C99\u53D1\u65C1\u770B\u770B\u7535\u89C6\uFF0C\u6162\u6162\u5EA6\u8FC7\u95F2\u6687\u65F6\u5149\u3002"],["ktv",-19,-11.7,-3.6,"\u64AD\u653E\u4E00\u6BB5\u793A\u8303\u4F34\u594F","\u7CD6\u679C\u661F\u5149 KTV","\u7C89\u5F69\u8F6F\u5305\u4E0E\u661F\u661F\u706F\u4E0B\uFF0C\u4E00\u8D77\u5531\u9996\u6B4C\u5427\u3002\u793A\u8303\u4F34\u594F\u6B63\u5728\u64AD\u653E\uFF0C\u9EA6\u514B\u98CE\u5C31\u5728\u8336\u51E0\u65C1\u3002"],["game",-14,-15,-3.6,"\u542F\u52A8\u7535\u7ADE\u684C\u9762","\u5730\u4E0B\u7535\u7ADE\u623F","\u663E\u793A\u5668\u70B9\u4EAE\uFF0C\u4ECA\u665A\u53EF\u4EE5\u5728\u8FD9\u91CC\u4F11\u95F2\u4E00\u4E0B\u3002"],["storage",-20,-15,-3.6,"\u67E5\u770B\u50A8\u7269\u95F4","\u5730\u4E0B\u50A8\u7269\u95F4","\u6574\u9F50\u7684\u67B6\u5B50\u4E0A\u5206\u653E\u7740\u6362\u5B63\u7269\u54C1\u3001\u56ED\u827A\u7528\u54C1\u4E0E\u751F\u6D3B\u5907\u54C1\u3002"],["peach",-28,11,0,"\u770B\u770B\u6811\u4E0A\u7684\u6843\u5B50","\u5EAD\u9662\u679C\u56ED","\u679D\u5934\u6302\u7740\u7C89\u5AE9\u7684\u6843\u5B50\uFF0C\u679C\u9999\u6DF7\u7740\u8349\u6728\u7684\u6C14\u606F\u3002"],["orange",-28,21,0,"\u770B\u770B\u6811\u4E0A\u7684\u6A58\u5B50","\u5EAD\u9662\u679C\u56ED","\u6A58\u5B50\u5728\u53F6\u95F4\u6CDB\u7740\u6696\u8272\uFF0C\u7B49\u5BB6\u4EBA\u4E00\u8D77\u8FC7\u6765\u91C7\u6536\u3002"],["market",-7,33.5,0,"\u901B\u901B\u9C9C\u679C\u644A","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u62DB\u547C\u4F60\u770B\u770B\u4ECA\u5929\u521A\u6458\u4E0B\u6765\u7684\u65F6\u4EE4\u6C34\u679C\u3002"],["market",7,38.5,0,"\u770B\u770B\u4E61\u6751\u70B9\u5FC3","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u6B63\u5728\u6574\u7406\u70B9\u5FC3\uFF0C\u6CB3\u5CB8\u5C31\u5728\u8857\u9053\u524D\u65B9\u3002"]].map(([i,e,t,n,s,r,o])=>({id:i,x:e,z:t,y:n,title:s,heading:r,hint:r+" \xB7 \u6309 E \u4E92\u52A8",type:r,body:"<p>"+o+"</p>",mood:s})),{id:"read",x:-17,z:2.8,y:0,title:"\u5750\u4E0B\u6765\uFF0C\u8BFB\u4E00\u672C\u4E66",hint:"\u4E66\u623F \xB7 \u6728\u9999\u4E0E\u58C1\u7089",type:"\u9605\u8BFB\u65F6\u5149",heading:"\u628A\u65F6\u95F4\u7559\u7ED9\u4E00\u9875\u4E66",body:'<p class="quote">\u5C71\u9759\u4F3C\u592A\u53E4\uFF0C\u65E5\u957F\u5982\u5C0F\u5E74\u3002</p><p>\u4F60\u7FFB\u5F00\u684C\u4E0A\u7684\u8BD7\u96C6\u3002\u7A97\u5916\u7684\u6811\u5F71\u8F7B\u8F7B\u6643\u52A8\uFF0C\u58C1\u7089\u91CC\u4F20\u6765\u6728\u67F4\u7EC6\u788E\u7684\u58F0\u54CD\u3002\u7237\u7237\u62AC\u5934\u7B11\u4E86\u7B11\uFF0C\u53C8\u4F4E\u5934\u8BFB\u8D77\u624B\u91CC\u7684\u4E66\u3002</p>',mood:"\u8BFB\u4E86\u4E00\u9875\u4E66\uFF0C\u5FC3\u4E5F\u9759\u4E86\u4E0B\u6765"},{id:"tea",x:8,z:14.1,y:0,title:"\u5750\u4E0B\u559D\u4E00\u676F\u8336",hint:"\u5EAD\u9662\u8336\u5E2D \xB7 \u70ED\u8336\u521A\u597D",type:"\u4E00\u76CF\u8336\u7684\u65F6\u95F4",heading:"\u665A\u98CE\uFF0C\u548C\u4E00\u676F\u6E29\u70ED\u7684\u8336",body:'<p>\u4F60\u5728\u8336\u5E2D\u65C1\u5750\u4E0B\uFF0C\u7AEF\u8D77\u9752\u74F7\u676F\u3002\u6E29\u70ED\u7684\u8336\u9999\u6563\u5F00\uFF0C\u6C60\u5858\u7684\u6C34\u58F0\u5728\u8FDC\u5904\u54CD\u8D77\u3002</p><p class="quote">\u4ECA\u5929\u4E5F\u8F9B\u82E6\u4E86\u3002\u6162\u4E00\u70B9\uFF0C\u518D\u6162\u4E00\u70B9\u3002</p>',mood:"\u559D\u8FC7\u4E00\u676F\u8336\uFF0C\u8EAB\u5FC3\u8212\u5C55"},{id:"plant",x:15,z:16.9,y:0,title:"\u5728\u82B1\u5703\u79CD\u4E00\u682A\u82B1",hint:"\u5EAD\u9662\u82B1\u5703 \xB7 \u4EB2\u624B\u79CD\u4E0B\u5C0F\u5C0F\u671F\u5F85",type:"\u82B1\u56ED\u65E5\u8BB0",heading:"\u8BA9\u82B1\u56ED\u518D\u591A\u4E00\u70B9\u989C\u8272",body:"<p>\u4F60\u677E\u4E86\u677E\u571F\uFF0C\u79CD\u4E0B\u82B1\u82D7\uFF0C\u6D47\u4E0A\u4E00\u70B9\u6C34\u3002\u5976\u5976\u5728\u65C1\u8FB9\u63D0\u9192\u4F60\uFF1A\u201C\u6BCF\u5929\u6765\u770B\u770B\uFF0C\u522B\u6D47\u592A\u591A\u3002\u201D</p><p>\u65B0\u79CD\u7684\u82B1\u5DF2\u7ECF\u51FA\u73B0\u5728\u82B1\u5703\u4E2D\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u79CD\u4E0B\u66F4\u591A\u82B1\u3002</p>",mood:"\u79CD\u4E0B\u4E86\u4E00\u70B9\u65B0\u7684\u671F\u5F85"},{id:"fish",x:-5,z:13.55,y:0,title:"\u6295\u5582\u9526\u9CA4\uFF0C\u770B\u770B\u4E4C\u9F9F",hint:"\u9526\u9CA4\u6C60 \xB7 \u9C7C\u513F\u4F1A\u6E38\u8FC7\u6765",type:"\u6C60\u5858\u8FB9",heading:"\u6C34\u9762\u4E0B\u7684\u5C0F\u5C0F\u90BB\u5C45",body:"<p>\u4F60\u6492\u4E0B\u4E00\u628A\u9C7C\u7CAE\uFF0C\u9526\u9CA4\u6162\u6162\u805A\u62E2\u8FC7\u6765\uFF0C\u91D1\u8272\u7684\u5C3E\u9CCD\u5212\u51FA\u4E00\u9053\u9053\u6D9F\u6F2A\u3002\u77F3\u5934\u4E0A\u7684\u4E4C\u9F9F\u6B63\u5728\u6652\u592A\u9633\u3002</p>",mood:"\u9C7C\u513F\u5403\u9971\u4E86\uFF0C\u6C34\u9762\u6CDB\u8D77\u6D9F\u6F2A"},{id:"cook",x:-3.5,z:-14.8,y:0,title:"\u548C\u59BB\u5B50\u804A\u804A\u665A\u9910",hint:"\u53A8\u623F \xB7 \u4ECA\u665A\u4E00\u8D77\u5403\u996D",type:"\u53A8\u623F\u91CC\u7684\u5BF9\u8BDD",heading:"\u201C\u56DE\u6765\u5566\uFF1F\u518D\u7B49\u4E00\u4F1A\u513F\u3002\u201D",body:"<p>\u59BB\u5B50\u6B63\u5728\u6599\u7406\u53F0\u524D\u51C6\u5907\u665A\u9910\u3002\u4F60\u5E2E\u5979\u9012\u8FC7\u7897\uFF0C\u5979\u7B11\u7740\u8BF4\uFF1A\u201C\u4ECA\u5929\u505A\u4E86\u5927\u5BB6\u7231\u5403\u7684\uFF0C\u5F85\u4F1A\u513F\u53EB\u5B69\u5B50\u6D17\u624B\u5403\u996D\u3002\u201D</p>",mood:"\u5E2E\u5FD9\u51C6\u5907\u4E86\u665A\u9910"},{id:"rest",x:-7,z:-10.8,y:3.6,title:"\u5728\u5367\u5BA4\u4F11\u606F\u7247\u523B",hint:"\u4E8C\u5C42\u4E3B\u5367 \xB7 \u8FDC\u79BB\u55A7\u95F9",type:"\u4F11\u606F\u7247\u523B",heading:"\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5B89\u9759\u89D2\u843D",body:"<p>\u67D4\u8F6F\u7684\u5E8A\u54C1\u3001\u6E29\u6696\u7684\u6728\u8272\u548C\u7A97\u5916\u7684\u665A\u971E\u3002\u4F60\u5750\u5728\u5E8A\u8FB9\uFF0C\u4F38\u4E86\u4E2A\u61D2\u8170\u3002</p>",mood:"\u4F11\u606F\u4E86\u4E00\u4F1A\u513F\uFF0C\u7CBE\u795E\u7115\u53D1"},{id:"kid",x:0,z:-8.9,y:3.6,title:"\u770B\u770B\u5B69\u5B50\u7684\u79EF\u6728",hint:"\u4E8C\u5C42\u513F\u7AE5\u623F \xB7 \u5C0F\u5C0F\u5EFA\u7B51\u5E08",type:"\u5C0F\u5C0F\u4E16\u754C",heading:"\u5C0F\u5C0F\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u5BB6",body:"<p>\u76AE\u5361\u4E18\u5B88\u7740\u5E8A\u8FB9\uFF0C\u7CBE\u7075\u7403\u6574\u9F50\u6446\u5728\u6536\u85CF\u67DC\u4E0A\u3002\u5B69\u5B50\u9080\u8BF7\u4F60\u4E00\u8D77\u7528\u79EF\u6728\u642D\u5EFA\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u57FA\u5730\u3002</p>",mood:"\u53D1\u73B0\u4E86\u5B69\u5B50\u7684\u5C0F\u5C0F\u4E16\u754C"}];function YM(){if(Ia>=12)return Vt("\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\uFF0C\u6765\u6B23\u8D4F\u4E00\u4E0B\u5427\u3002"),!1;let i=new et,e=14.35+Ia%3*.65,t=18+Math.floor(Ia/3)*.62;for(let n=0;n<5;n++){let s=new Ue(new vn(.018,.025,.5,5),new st({color:6587464}));s.position.set(e+Math.sin(n)*.1,.65,t+Math.cos(n)*.1),i.add(s);let r=new Ue(new un(.105,8,6),new st({color:[14921892,15194009,12296654][Ia%3]}));r.position.copy(s.position),r.position.y=.95,r.scale.y=.55,i.add(r)}return ro.add(i),XM.push(i),Ia++,!0}function F0(i){Nt.clear(),An.reset(),ii=!0,ye("modalType").textContent=i.type,ye("modalTitle").textContent=i.heading,ye("modalBody").innerHTML=i.body,ye("modalDone").textContent="\u7EE7\u7EED\u6563\u6B65",ye("modal").showModal(),ye("mood").textContent=i.mood||"\u95F2\u5EAD\u6F2B\u6B65"}var mh=0;function ZM(){if(mh>=8)return Vt("\u5929\u53F0\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\u3002"),!1;let i=2.6+mh%2*.55,e=-12.6+Math.floor(mh/2)*.35,t=new et,n=new Ue(new vn(.016,.018,.45,6),new st({color:6584910}));n.position.set(i,7.95,e),t.add(n);let s=new Ue(new un(.12,10,8),new st({color:14788784}));return s.position.set(i,8.2,e),s.scale.y=.55,t.add(s),ro.add(t),mh++,!0}function KM(){let i=new(window.AudioContext||window.webkitAudioContext);i.resume(),[262,330,392,330,294,349,440,349,262,330,392,523,440,392,330,262].forEach((e,t)=>{let n=i.createOscillator(),s=i.createGain(),r=i.currentTime+t*.32;n.type="sine",n.frequency.value=e,s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.075,r+.025),s.gain.exponentialRampToValueAtTime(.001,r+.3),n.connect(s),s.connect(i.destination),n.start(r),n.stop(r+.31)}),setTimeout(()=>i.close(),6e3)}function O0(){if(Rt.phase!=="idle")return;if(zn){nd();return}if(mn?.id==="bicycle"){nd();return}if(mn?.id==="elevator"){W0();return}if(!mn||ye("modal").open)return;let i=mn;if(Ts.some(e=>e.id===i.id)){if(Fm(i.id,ce)){let e=Ts.find(t=>t.id===i.id);Vt(e.name+(e.open?"\u6B63\u5728\u6253\u5F00":"\u6B63\u5728\u5173\u95ED"))}else Vt("\u8BF7\u7A0D\u5FAE\u9000\u540E\uFF0C\u518D\u5173\u95ED\u95E8");return}if(!(i.id==="roofplant"&&!ZM())){if(i.id==="rooftea"&&Oi("sit"),i.id==="ktv"&&KM(),i.id==="tv"){let e=$t.mats.\u7535\u89C6\u753B\u9762;e.color.setHex(e.color.getHex()===7574929?12489840:7574929),e.emissive.copy(e.color).multiplyScalar(.4)}if(i.id==="game"&&($t.mats.\u7535\u7ADE\u5C4F\u5E55.emissiveIntensity=1.2),!(i.id==="plant"&&!YM())){if(i.id==="fish"&&(N0=Oa+25),i.id==="dog"){U0=Oa+15,Vt("\u8C46\u8C46\u548C\u56E2\u56E2\u5F00\u5FC3\u5730\u6447\u8D77\u4E86\u5C3E\u5DF4\uFF0C\u8DDF\u7740\u4F60\u4E00\u8D77\u6563\u6B65\u3002");return}(i.id==="tea"||i.id==="read")&&(Je.legs.forEach(e=>{e.rotation.x=-1.25,e.lower.rotation.x=1.25}),Je.arms.forEach(e=>e.rotation.x=-1),Je.g.position.set(i.id==="tea"?8:-17,-.1,i.id==="tea"?13.2:2.1),Je.g.rotation.y=Math.PI),F0(i)}}}function Oi(i){if(zn||Rt.phase!=="idle"||an.height>0)return;if(i==="stand"||kn===i){kn="stand",zt=null,Je.g.rotation.x=0,Je.g.position.copy(ce),ye("mood").textContent="\u95F2\u5EAD\u6F2B\u6B65";return}let t=$t.seats.filter(n=>n.type===i&&Math.abs(n.y-ce.y)<.5&&Math.hypot(n.x-ce.x,n.z-ce.z)<3.3).sort((n,s)=>Math.hypot(n.x-ce.x,n.z-ce.z)-Math.hypot(s.x-ce.x,s.z-ce.z))[0];kn=i,Nt.clear(),An.reset(),zt=t?{...t}:{x:ce.x,z:ce.z,y:ce.y,rotation:Je.g.rotation.y,type:i,ground:!0},ye("mood").textContent=i==="sit"?"\u5750\u4E0B\u6B47\u4E00\u4F1A\u513F":"\u8EBA\u4E0B\u6765\uFF0C\u770B\u770B\u5929\u7A7A",Vt(i==="sit"?"\u5DF2\u5750\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 C \u8D77\u8EAB":"\u5DF2\u8EBA\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 L \u8D77\u8EAB")}ye("sitBtn").onclick=()=>Oi("sit");ye("lieBtn").onclick=()=>Oi("lie");ye("jumpBtn").onclick=()=>{zn||Rt.phase!=="idle"||(kn!=="stand"&&Oi("stand"),pf(an))};ye("birdBtn").onclick=()=>{Tt=Tt===2?0:2,Rs()};ye("roofBtn").onclick=()=>{$t.roofs.visible=!$t.roofs.visible,ye("roofBtn").textContent=$t.roofs.visible?"\u9690\u85CF\u5C4B\u9876":"\u663E\u793A\u5C4B\u9876",mt.shadowMap.needsUpdate=!0};var Kn=new dh;Kn.setMode(af);var gi=to.balanced,td=-1/0,M0=0;mt.info.autoReset=!1;function bh(i){gi=g0(i,Fi,innerWidth,innerHeight),rd.setQuality(gi),no?.setQuality(gi),Bn.shadow.mapSize.x!==gi.shadowSize&&(Bn.shadow.map?.dispose(),Bn.shadow.map=null,Bn.shadow.mapPass?.dispose(),Bn.shadow.mapPass=null,Bn.shadow.mapSize.set(gi.shadowSize,gi.shadowSize)),mt.shadowMap.needsUpdate=!0,td=-1/0,ye("qualityBtn").textContent=(Kn.mode==="auto"?"\u81EA\u52A8\uFF1A":"\u753B\u8D28\uFF1A")+gi.name}ye("qualityBtn").onclick=()=>{let i=["auto","flow","balanced","high"],e=i[(i.indexOf(Kn.mode)+1)%i.length];bh(Kn.setMode(e)),Vt(e==="auto"?"\u81EA\u52A8\u8C03\u8282\u753B\u8D28\uFF0C\u4F18\u5148\u4FDD\u6301\u6D41\u7545":"\u5DF2\u5207\u6362"+gi.name+"\u753B\u8D28")};bh(af);ye("assetStatus").onclick=()=>za.retry();Object.defineProperty(window,"mansionPerformance",{configurable:!0,get:()=>({fps:Math.round(Kn.fps),mode:Kn.mode,quality:gi.name,drawCalls:mt.info.render.calls,renderedTriangles:mt.info.render.triangles,vegetation:no?.vegetation.stats,assets:za.stats,mobile:Fi.mobile,startupMs:q0})});function Rs(){Tt!==2&&($t.roofs.visible=!0,ye("roofBtn").textContent="\u9690\u85CF\u5C4B\u9876"),document.body.dataset.view=Tt===2?"bird":"walk",ye("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][Tt],ye("birdBtn").textContent=Tt===2?"\u8FDB\u5165\u6F2B\u6E38":"\u9E1F\u77B0\u5168\u666F",ye("roofBtn").classList.toggle("hidden",Tt!==2)}function ld(){ye("modal").close(),ii=!1,Nt.clear(),An.reset(),Oi("stand"),Je.g.position.copy(ce)}ye("closeModal").onclick=ld;ye("modalDone").onclick=ld;ye("modal").addEventListener("cancel",i=>{i.preventDefault(),ld()});ye("interactBtn").onclick=O0;ye("helpBtn").onclick=()=>F0({type:"\u5982\u4F55\u5728\u5BB6\u4E2D\u6F2B\u6B65",heading:"\u968F\u5FC3\u8D70\u8D70\uFF0C\u4E0D\u5FC5\u7740\u6025",body:"<p><b>W A S D / \u65B9\u5411\u952E</b>\uFF1A\u76F8\u5BF9\u955C\u5934\u65B9\u5411\u79FB\u52A8<br><b>\u6309\u4F4F\u9F20\u6807\u62D6\u52A8</b>\uFF1A\u73AF\u987E\u56DB\u5468<br><b>\u9F20\u6807\u6EDA\u8F6E</b>\uFF1A\u8C03\u6574\u8DDF\u968F\u8DDD\u79BB<br><b>\u7A7A\u683C</b>\uFF1A\u8DF3\u8DC3\u3000<b>C / L / R</b>\uFF1A\u5750\u4E0B / \u8EBA\u4E0B / \u8D77\u8EAB<br><b>B</b>\uFF1A\u9E1F\u77B0\u5168\u666F\uFF0C\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001WASD \u5E73\u79FB<br><b>Shift</b>\uFF1A\u5954\u8DD1\u3000<b>V</b>\uFF1A\u5207\u6362\u89C6\u89D2<br><b>E</b>\uFF1A\u5728\u63D0\u793A\u51FA\u73B0\u65F6\u4E92\u52A8<br><b>Esc</b>\uFF1A\u5173\u95ED\u4E92\u52A8</p><p>\u4ECE\u5EAD\u9662\u8FDB\u5165\u540E\u65B9\u4E3B\u5B85\uFF0C\u4E1C\u4FA7\u7A84\u697C\u68AF\u53EF\u4EE5\u6B65\u884C\u4E0A\u4E8C\u697C\uFF0C\u4ECE\u4E8C\u697C\u5317\u4FA7\u8F6C\u5230\u76F8\u90BB\u697C\u68AF\u53EF\u4E0A\u5929\u53F0\u3002\u897F\u4FA7\u5EAD\u9662\u5E26\u8DEF\u724C\u7684\u697C\u68AF\u901A\u5411\u5730\u4E0B\u5BA4\uFF1B\u51FA\u5357\u95E8\u6CBF\u96C6\u5E02\u524D\u884C\u5230\u6CB3\u5CB8\u3002\u5DE6\u53F3\u4E24\u7FFC\u7684\u5165\u53E3\u90FD\u671D\u5411\u5EAD\u9662\u524D\u65B9\u3002\u624B\u673A\u53EF\u4F7F\u7528\u5DE6\u4E0B\u89D2\u65B9\u5411\u952E\uFF0C\u62D6\u52A8\u573A\u666F\u8F6C\u52A8\u89C6\u89D2\u3002</p>"});function B0(){Tt=(Tt+1)%3,Rs(),ye("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][Tt],Vt(["\u7B2C\u4E09\u4EBA\u79F0 \xB7 \u62D6\u52A8\u9F20\u6807\u73AF\u987E","\u7B2C\u4E00\u4EBA\u79F0 \xB7 \u9002\u5408\u5BA4\u5185\u63A2\u7D22","\u9E1F\u77B0\u5168\u666F \xB7 \u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0C\u65B9\u5411\u952E\u5E73\u79FB"][Tt])}ye("viewBtn").onclick=B0;var z0=new Map;_t.traverse(i=>{i.isPointLight&&z0.set(i,i.intensity)});function Th(){let i=hr.kind==="rain",e=hr.kind==="snow";Bn.intensity=Pn?.32:i?.85:e?1.5:2.4,A0.intensity=Pn?.5:.8,_t.backgroundIntensity=Pn?.2:i?.38:.65,_t.environmentIntensity=Pn?.32:i?.42:.62,mt.toneMappingExposure=Pn?1.15:.98,vh.material.uniforms.top.value.set(Pn?"#203449":i?"#647781":e?"#b8cbd2":"#739dba"),vh.material.uniforms.bottom.value.set(Pn?"#627484":i?"#a0afb0":"#efd0a1"),_t.fog.color.set(Pn?5399926:i?10399410:e?13359324:11188130),_t.fog.density=e?.012:i?.009:.006,yh.visible=!i&&!e,yh.material.color.set(Pn?14871807:16770221),z0.forEach((t,n)=>n.intensity=t*(Pn?1.5:1)),ye("timeLabel").textContent=Pn?"\u5165\u591C \xB7 19:30":"\u508D\u665A \xB7 17:40",ye("weatherLabel").textContent=mf[hr.kind]+" / "+(Pn?"\u706F\u706B\u53EF\u4EB2":"\u5B9C\u5F52\u5BB6"),mt.shadowMap.needsUpdate=!0}ye("dayBtn").onclick=()=>{Pn=!Pn,Th()};ye("weatherSelect").onchange=i=>{hr.set(i.target.value),Th(),Vt("\u5DF2\u5207\u6362"+mf[i.target.value])};var JM=t0({dialog:ye("guideDialog"),host:ye("guideScene"),list:ye("guidePlaces"),tabs:ye("guideTabs"),onOpen:()=>{so(),ii=!0,Nt.clear(),An.reset(),oo=!1,Cs=null},onClose:()=>{ii=!1,Nt.clear(),An.reset(),Kn.reset()},onTeleport:i=>{if(so(),!is(i.x,i.z,i.y,i.y)){Vt("\u8BE5\u843D\u70B9\u6682\u4E0D\u53EF\u901A\u884C\uFF0C\u8BF7\u9009\u62E9\u76F8\u90BB\u5730\u70B9");return}ce.set(i.x,i.y,i.z),kn="stand",zt=null,an.height=0,an.velocity=0,Tt=0,Nt.clear(),An.reset(),Je.g.position.copy(ce),Je.g.rotation.x=0,tn.position.set(i.x*Qe,i.y+2.2,i.z*Qe+3),Fn=0,io=.24,Rs(),mt.shadowMap.needsUpdate=!0,Vt("\u5DF2\u5230\u8FBE"+i.name)}}),k0=()=>{Rt.phase==="idle"&&so()&&JM.open()};ye("mapExpand").onclick=ye("guideBtn").onclick=k0;ye("mapExpand").onkeydown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),k0())};ye("homeBtn").onclick=()=>{Rt.phase==="idle"&&so()&&(ce.set(0,0,19),Fn=.12,io=.24,Tt=0,kn="stand",zt=null,an.height=0,an.velocity=0,Rs(),ye("viewBtn").querySelector("span").textContent="\u7B2C\u4E09\u4EBA\u79F0",Nt.clear(),An.reset(),Vt("\u5DF2\u56DE\u5230\u5EAD\u9662\u5165\u53E3"))};var mi,Da,gh=!1;ye("soundBtn").onclick=()=>{if(!mi){mi=new(window.AudioContext||window.webkitAudioContext),Da=mi.createGain(),Da.gain.value=0,Da.connect(mi.destination);let i=mi.createBuffer(1,mi.sampleRate*4,mi.sampleRate),e=i.getChannelData(0),t=0;for(let r=0;r<e.length;r++)t=(t+(Math.random()*2-1)*.025)/1.02,e[r]=t;let n=mi.createBufferSource();n.buffer=i,n.loop=!0;let s=mi.createBiquadFilter();s.type="lowpass",s.frequency.value=800,n.connect(s),s.connect(Da),n.start()}gh=!gh,mi.resume(),Da.gain.setTargetAtTime(gh?.7:0,mi.currentTime,.3),ye("soundBtn").querySelector("span").textContent=gh?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u73AF\u5883\u58F0\u97F3"};addEventListener("keydown",i=>{ye("modal").open||ye("guideDialog").open||ye("liftDialog").open||Rt.phase!=="idle"||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),Nt.add(i.code),!i.repeat&&(i.code==="KeyE"&&O0(),i.code==="KeyV"&&B0(),i.code==="KeyB"&&(Tt=Tt===2?0:2,Rs()),i.code==="Space"&&Tt!==2&&!zn&&Rt.phase==="idle"&&(Oi("stand"),pf(an)),i.code==="KeyC"&&Oi("sit"),i.code==="KeyL"&&Oi("lie"),i.code==="KeyR"&&Oi("stand")))});addEventListener("keyup",i=>Nt.delete(i.code));addEventListener("blur",()=>{Nt.clear(),An.reset(),oo=!1,Cs=null});document.addEventListener("visibilitychange",()=>{Nt.clear(),An.reset(),oo=!1,Cs=null,Kn.reset(),mt.shadowMap.needsUpdate=!0});mt.domElement.addEventListener("pointerdown",i=>{Cs===null&&(Cs=i.pointerId,oo=!0,ed=i.clientX,_h=i.clientY,mt.domElement.setPointerCapture(i.pointerId))});mt.domElement.addEventListener("pointermove",i=>{!oo||Cs!==i.pointerId||(Fn-=(i.clientX-ed)*.005,Tt===2?Fa=bn.clamp(Fa+(i.clientY-_h)*.004,.25,1.48):io=bn.clamp(io+(i.clientY-_h)*.004,-.35,.85),ed=i.clientX,_h=i.clientY)});for(let i of["pointerup","pointercancel","lostpointercapture"])mt.domElement.addEventListener(i,e=>{Cs===e.pointerId&&(oo=!1,Cs=null)});mt.domElement.addEventListener("wheel",i=>{i.preventDefault(),Tt===2?Ua=bn.clamp(Ua+i.deltaY*.035,22,110):Ba=bn.clamp(Ba+i.deltaY*.005,2,9)},{passive:!1});mt.domElement.addEventListener("contextmenu",i=>i.preventDefault());function V0(){An.reset();let i=hf(innerWidth,sd.matches);i.mobile!==Fi.mobile&&(Ba=i.distance),Fi=i,document.body.dataset.mobile=String(Fi.mobile),tn.fov=Fi.fov,tn.aspect=innerWidth/innerHeight,tn.updateProjectionMatrix(),mt.setSize(innerWidth,innerHeight),bh(eo[Kn.level]),rd.resize(innerWidth,innerHeight)}addEventListener("resize",V0);sd.addEventListener("change",V0);var $M=ws.map(i=>new cn(new N((i.x1-.1)*Qe,i.y,(i.z1-.1)*Qe),new N((i.x2+.1)*Qe,i.y+i.h,(i.z2+.1)*Qe))),S0=new wi,b0=new N,xh=new N;function jM(i,e){xh.subVectors(e,i);let t=xh.length();if(t<.001)return e;S0.set(i,xh.clone().normalize());let n=t;for(let s of $M)if(S0.intersectBox(s,b0)){let r=b0.distanceTo(i);r>.12&&(n=Math.min(n,Math.max(.08,r-.18)))}return i.clone().addScaledVector(xh,n/t)}var QM=ye("map").getContext("2d");function eS(){let i=QM;i.clearRect(0,0,240,224),i.save(),i.translate(120,63);let e=2.8,t=(n,s,r,o,a)=>{i.fillStyle=a,i.fillRect((n-r/2)*e,(s-o/2)*e,r*e,o*e)};t(0,5,66,50,"#3e5548"),t(0,40,10,20,"#777970"),t(0,53,68,7,"#568b8d"),t(-16,-13.5,10,11,"#9c9d81"),t(0,-11,22,14,"#9c9d81"),t(-16,-.5,10,15,"#9c9d81"),t(16,-.5,10,15,"#9c9d81"),t(0,0,22,8,"#65705b"),t(20.5,11,7,16,"#568b8d"),i.fillStyle="#6a9a92",i.beginPath(),i.ellipse(-5*e,10*e,4.1*e,2.7*e,0,0,7),i.fill(),t(8,12,7,4,"#89785e"),t(13.5,19,5.2,3,"#79905a"),t(9.75,-10.25,1.5,8.5,"#c8b38a"),t(-23.5,-12,2,10,"#c8b38a"),i.font="11px sans-serif",i.textAlign="center",i.fillStyle="#263f33",i.fillText(ce.y<0?"\u5730\u4E0B\u4E00\u5C42":ce.y>6?"\u5C4B\u9876\u82B1\u56ED":"\u4E3B\u5B85 \xB7 \u4E8C\u5C42",0,-12*e),i.fillText("\u96C6\u5E02",0,40*e),i.fillText("\u6CB3\u5CB8",0,49*e),i.fillText("\u4E66\u623F",-16*e,0),i.fillText("\u5BA2\u9910\u5385",16*e,0),i.fillStyle="#e7e7d2",i.fillText("\u8336\u5E2D",8*e,12*e+4),i.fillText("\u9C7C\u5858",-5*e,10*e+4),i.fillText("\u82B1\u5703",13.5*e,19*e+4);for(let n of[ka,Es,ur,Va])i.fillStyle="#dfb890",i.beginPath(),i.arc(n.g.position.x*e,n.g.position.z*e,2.6,0,7),i.fill();i.translate(ce.x*e,ce.z*e),i.rotate(-Fn),i.fillStyle="#f5edcf33",i.beginPath(),i.moveTo(0,0),i.lineTo(-8,-15),i.lineTo(8,-15),i.closePath(),i.fill(),i.fillStyle="#fff7da",i.beginPath(),i.arc(0,0,4,0,7),i.fill(),i.restore()}function tS(){let i="\u5EAD\u9662",e="\u6811\u5F71\u3001\u6C34\u58F0\uFF0C\u8FD8\u6709\u5BB6\u4EBA\u7684\u966A\u4F34\u3002",t=ce.y>3?"\u4E8C\u5C42":"\u4E00\u5C42";ce.y<-.2?(t="\u5730\u4E0B\u4E00\u5C42",i=ce.x<-22?"\u5730\u4E0B\u5BA4\u697C\u68AF":ce.z<-13?ce.x<-18?"\u50A8\u7269\u95F4":"\u7535\u7ADE\u623F":ce.x<-18?"KTV":"\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",e="\u6CBF\u697C\u68AF\u4E0B\u5230\u5E95\u90E8\uFF0C\u518D\u4ECE\u4E1C\u4FA7\u8FDB\u5165\u5404\u4E2A\u623F\u95F4\u3002"):ce.y>6.95?(t="\u5929\u53F0",i="\u5929\u53F0\u82B1\u56ED\u4E0E\u8336\u5E2D",e="\u5750\u4E0B\u559D\u8336\uFF0C\u79CD\u82B1\uFF0C\u4FEF\u77B0\u9662\u5916\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"):ce.y>3.85?(i="\u5929\u53F0\u697C\u68AF",t="\u4E8C\u5C42 \u2192 \u5929\u53F0",e="\u7EE7\u7EED\u5411\u5357\u8D70\u5230\u5929\u53F0\u5E73\u53F0\u3002"):ce.y>3?(i=ce.x>11?"\u513F\u7AE5\u6E38\u4E50\u9633\u53F0":ce.x<-11?"\u4E3B\u5367\u5C4B\u9876\u9633\u53F0":ce.z>-8?"\u4E8C\u5C42\u8D70\u5ECA":ce.x<-3?"\u4E3B\u5367":ce.x<3?"\u5B9D\u53EF\u68A6\u513F\u7AE5\u623F":"\u72EC\u7ACB\u536B\u6D74",e=ce.x>11?"\u5BA2\u9910\u5385\u5C4B\u9876\u7684\u513F\u7AE5\u5929\u5730\uFF1A\u6ED1\u68AF\u3001\u6C99\u6C60\u548C\u73A9\u5177\u3002":ce.x<-11?"\u4E66\u623F\u5C4B\u9876\u7684\u9732\u53F0\uFF0C\u8336\u684C\u3001\u7EFF\u690D\u4E0E\u4F11\u95F2\u6C99\u53D1\u3002":"\u72EC\u7ACB\u623F\u95E8\u3001\u6696\u5149\u7167\u660E\u4E0E\u5145\u8DB3\u7684\u751F\u6D3B\u6536\u7EB3\u3002"):ce.y>.2?(i="\u697C\u68AF",e="\u62FE\u7EA7\u800C\u4E0A\uFF0C\u53BB\u4E8C\u697C\u770B\u770B\u3002"):ce.z<-4&&Math.abs(ce.x)<11?(i=ce.x<-3?"\u5F00\u653E\u5F0F\u53A8\u623F":"\u4E3B\u5B85\u8D77\u5C45\u5385",e="\u6CBF\u4E1C\u4FA7\u901A\u9053\u5411\u5317\u5230\u697C\u68AF\u8D77\u70B9\uFF0C\u4E0A\u697C\u540E\u4ECE\u516C\u5171\u5E73\u53F0\u524D\u5F80\u5404\u623F\u95F4\u3002"):ce.x>-21&&ce.x<-13&&ce.z>16&&ce.z<24?(i="\u8F66\u5E93",e="\u8D8A\u91CE\u8F66\u505C\u5728\u8FD9\u91CC\uFF0C\u8F66\u9053\u901A\u5411\u5EAD\u9662\u5357\u95E8\u3002"):ce.z>46?(i="\u6CB3\u7554\u6B65\u9053",e="\u6CBF\u6CB3\u6563\u6B65\uFF0C\u8EAB\u540E\u662F\u70ED\u95F9\u7684\u5C0F\u96C6\u5E02\u3002"):ce.z>30?(i="\u4E61\u95F4\u96C6\u5E02",e="\u8857\u9053\u4E24\u8FB9\u6709\u9C9C\u679C\u3001\u70B9\u5FC3\u4E0E\u82B1\u8349\u644A\u4F4D\u3002"):ce.x<-11&&ce.z<-8?(i="\u897F\u7FFC\u4F1A\u5BA2\u5385",e="\u65B0\u589E\u7684\u5927\u7A7A\u95F4\uFF0C\u4F1A\u5BA2\u3001\u9605\u8BFB\u4E0E\u89C2\u5F71\u3002"):ce.x<-11&&ce.z<7?(i="\u6696\u6728\u4E66\u623F",e="\u4E66\u5899\u3001\u76AE\u6905\u548C\u4E00\u76CF\u4E0D\u6025\u7740\u7184\u706D\u7684\u706F\u3002"):ce.x>11&&ce.z<7?(i="\u5BA2\u9910\u5385",e="\u76F8\u805A\u7684\u65E5\u5E38\uFF0C\u4ECE\u4E00\u987F\u665A\u9910\u5F00\u59CB\u3002"):ce.z>16&&(i="\u5EAD\u9662\u5165\u53E3",e="\u6CBF\u7740\u77F3\u5F84\uFF0C\u53BB\u770B\u770B\u5BB6\u4EBA\u7684\u65E5\u5E38\u3002"),ye("place").textContent=i,ye("description").textContent=e,ye("floor").textContent=t+" \xB7 "+i}function so(){if(!zn)return!0;let i=vd(ce,Je.g.rotation.y,is);return i?(xi.root.position.copy(ce),zn=!1,ce.set(i.x,i.y,i.z),Je.g.position.copy(ce),Je.g.rotation.x=0,Je.animate(Oa,!1),kn="stand",zt=null,Nt.clear(),An.reset(),ye("bikeBtn").textContent="\u9A91\u81EA\u884C\u8F66",Vt("\u5DF2\u4E0B\u8F66\uFF0C\u81EA\u884C\u8F66\u505C\u5728\u8EAB\u65C1"),!0):(Vt("\u4E24\u4FA7\u6682\u65F6\u6CA1\u6709\u7A7A\u4F4D\uFF0C\u8BF7\u7A0D\u5FAE\u632A\u52A8\u8F66\u8F86\u518D\u4E0B\u8F66"),!1)}function nd(){if(!(ii||Rt.phase!=="idle")){if(zn){so();return}if(Math.abs(ce.y-xi.root.position.y)>.2||ce.distanceTo(xi.root.position)>2.2){Vt("\u5148\u8D70\u5230\u5EAD\u9662\u81EA\u884C\u8F66\u65C1\uFF08\u5165\u53E3\u53F3\u4FA7\uFF09");return}Oi("stand"),an.height=an.velocity=0,zn=!0,Tt=0,Rs(),ye("bikeBtn").textContent="\u4E0B\u81EA\u884C\u8F66",Vt("\u5DF2\u4E0A\u8F66 \xB7 \u4F7F\u7528\u65B9\u5411\u952E\u6216\u6447\u6746\u9A91\u884C\uFF0C\u697C\u68AF\u524D\u8BF7\u4E0B\u8F66")}}ye("bikeBtn").onclick=nd;ye("familySelect").onchange=i=>{let e=Number(i.target.value);if(ii||Rt.phase!=="idle"){i.target.value=String(On.index);return}if(!so()){i.target.value=String(On.index);return}let t=On.members[e].actor.g.position.clone();if(t.y=Math.round(t.y/3.6)*3.6,!is(t.x,t.z,t.y)){let n=!1;for(let s=.3;s<3&&!n;s+=.3)for(let r=0;r<16;r++){let o=t.x+Math.sin(r*Math.PI/8)*s,a=t.z+Math.cos(r*Math.PI/8)*s;if(is(o,a,t.y)){t.set(o,t.y,a),n=!0;break}}if(!n){i.target.value=String(On.index),Vt("\u8BE5\u89D2\u8272\u8EAB\u8FB9\u6682\u65F6\u6CA1\u6709\u53EF\u7AD9\u7ACB\u4F4D\u7F6E");return}}On.members[e].position={x:t.x,y:t.y,z:t.z},Je.g.visible=!0,Je.g.position.copy(ce),Je.g.rotation.x=0,On.switchTo(e,{x:ce.x,y:ce.y,z:ce.z}),Je=On.members[e].actor,ce.copy(t),Je.g.position.copy(ce),kn="stand",zt=null,an.height=an.velocity=0,Nt.clear(),An.reset(),Tt=0,Rs(),tn.position.set(ce.x*Qe,ce.y+2.2,ce.z*Qe+Ba),ye("actorName").textContent=On.members[e].name,Vt("\u6B63\u5728\u63A7\u5236"+On.members[e].name)};function G0(){return Bi.some(i=>Math.abs(i.y-ce.y)<.1)&&Math.hypot(ce.x-nt.exitX,ce.z-nt.z)<1.5}function H0(i){for(let e of["familySelect","bikeBtn","guideBtn","homeBtn","jumpBtn","sitBtn","lieBtn","birdBtn","viewBtn","liftBtn"])ye(e).disabled=i}function W0(){if(!(ii||Rt.phase!=="idle")){if(zn){Vt("\u8BF7\u5148\u4E0B\u81EA\u884C\u8F66\u518D\u4E58\u7535\u68AF");return}if(!G0()){Vt("\u7535\u68AF\u4F4D\u4E8E\u897F\u7FFC\uFF0C\u53EF\u4ECE\u5BFC\u89C8\u5730\u56FE\u524D\u5F80\u7535\u68AF\u5385");return}Nt.clear(),An.reset(),ii=!0,ye("liftFloors").replaceChildren();for(let i of Bi){let e=document.createElement("button");e.textContent=i.name,e.disabled=Math.abs(i.y-ce.y)<.1,e.onclick=()=>{if(!is(nt.exitX,nt.z,i.y)){Vt("\u76EE\u6807\u51FA\u53E3\u6682\u88AB\u6321\u4F4F");return}let t=Bi.find(n=>Math.abs(n.y-ce.y)<.1).y;Rt.request(t,i.y)&&(D0.copy(ce),ye("liftDialog").close(),kn="stand",zt=null,an.height=an.velocity=0,H0(!0),Vt("\u7535\u68AF\u6B63\u5728\u547C\u68AF\u5E76\u524D\u5F80"+i.name))},ye("liftFloors").append(e)}ye("liftDialog").showModal()}}ye("liftBtn").onclick=W0;function X0(){Rt.phase==="idle"&&(ye("liftDialog").close(),ii=!1,Nt.clear(),An.reset())}ye("liftClose").onclick=X0;ye("liftDialog").addEventListener("cancel",X0);var q0=0,T0=!0,w0=new gs,nS=new Ve,id=performance.now(),jf=0;tn.position.set(0,2.7,19*Qe+5);tn.lookAt(0,1.45,19*Qe);function Y0(i){requestAnimationFrame(Y0);let e=(i-id)/1e3;if(id=i,document.hidden||ye("guideDialog").open)return;let t=Kn.sample(e);t&&bh(t);let n=Math.min(e,.075);Oa+=n,jf++;let s=Oa,r=Rt.update(n);if(L0.update(Rt),Rt.passenger&&(Rt.phase==="board"?ce.lerpVectors(D0,new N(nt.x,Rt.y,nt.z),Rt.boarding):Rt.phase==="exit"?ce.set(bn.lerp(nt.x,nt.exitX,Rt.exiting),Rt.y,nt.z):ce.set(nt.x,Rt.y,nt.z),Je.g.position.copy(ce),Je.animate(s,Rt.phase==="board"||Rt.phase==="exit")),r==="arrived"&&(ce.set(nt.exitX,Rt.target,nt.z),Je.g.position.copy(ce),ii=!1,H0(!1),Vt("\u5DF2\u5230\u8FBE"+Bi.find(l=>l.y===Rt.target).name)),!ii){let l=An.state.forward+(Nt.has("KeyW")||Nt.has("ArrowUp")?1:0)-(Nt.has("KeyS")||Nt.has("ArrowDown")?1:0),h=An.state.right+(Nt.has("KeyD")||Nt.has("ArrowRight")?1:0)-(Nt.has("KeyA")||Nt.has("ArrowLeft")?1:0),u=Math.max(1,Math.hypot(l,h)),d=zn?7.5/Qe:(Nt.has("ShiftLeft")||Nt.has("ShiftRight")?8:4.8)/Qe,f=(h*Math.cos(Fn)-l*Math.sin(Fn))/u*d*n,g=(-l*Math.cos(Fn)-h*Math.sin(Fn))/u*d*n;if(Tt===2)La.x=bn.clamp(La.x+f*2,-34,34),La.z=bn.clamp(La.z+g*2,-22,52);else if(kn==="stand"){let v=ce.clone();if(zn?Jm(ce,f,g):Zm(ce,f,g),(an.height>0||an.velocity>0)&&Km(an,n),Je.g.position.copy(ce),Je.g.position.y+=an.height,Je.g.rotation.x=0,l||h){let m=Math.atan2(f,g);Je.g.rotation.y+=Math.atan2(Math.sin(m-Je.g.rotation.y),Math.cos(m-Je.g.rotation.y))*Math.min(1,n*12)}Je.animate(s,!!(l||h)),zn&&(xi.root.position.copy(ce),xi.root.rotation.y=Je.g.rotation.y,xi.wheels.forEach(m=>m.rotation.x+=Math.hypot(ce.x-v.x,ce.z-v.z)*Qe/.33),Je.g.position.y+=.1,Je.legs.forEach((m,p)=>{m.rotation.x=-1.1+Math.sin(s*8+p*Math.PI)*(l||h?.25:0),m.lower.rotation.x=1.4}),Je.arms.forEach(m=>m.rotation.x=-1.1))}kn!=="stand"&&zt&&(Je.g.position.set(zt.x,zt.y+(kn==="lie"?zt.ground?.22:zt.outdoor?.7:.99:zt.ground?-.72:-.25),zt.z),Je.g.rotation.y=zt.rotation,kn==="sit"?(Je.g.rotation.x=0,Je.animate(s,!1,"sit"),Je.arms.forEach(v=>v.rotation.x=-.65)):(Je.g.position.x+=Math.sin(zt.rotation)*.7,Je.g.position.z+=Math.cos(zt.rotation)*.7,Je.g.rotation.set(-Math.PI/2,0,zt.rotation),Je.animate(s,!1)))}let o=(zt?new N(zt.x,zt.y,zt.z):ce.clone()).add(new N(0,kn==="lie"?.8:1.45*Je.g.scale.y+an.height,0));o.x*=Qe,o.z*=Qe;let a;if(Tt===2){let l=La.clone();l.x*=Qe,l.z*=Qe,a=l.clone().add(new N(Math.sin(Fn)*Math.cos(Fa)*Ua,Math.sin(Fa)*Ua,Math.cos(Fn)*Math.cos(Fa)*Ua)),tn.position.lerp(a,1-Math.exp(-n*7)),tn.lookAt(l),Je.g.visible=!0}else{let l=Tt===1?.12:Ba;a=o.clone().add(new N(Math.sin(Fn)*l,Tt===1?.12:Math.sin(io)*l,Math.cos(Fn)*l));let h=jM(o,a);tn.position.lerp(h,1-Math.exp(-n*12)),Tt===1?(tn.position.copy(a),tn.lookAt(o.clone().add(new N(-Math.sin(Fn)*6,-io*5,-Math.cos(Fn)*6)))):tn.lookAt(o),Je.g.visible=Tt!==1&&tn.position.distanceTo(o)>1}VM.update(n,hr.kind==="snow"),hr.update(n,s,tn);for(let l of $t.root.userData.swings)l.pivot.rotation.x=Math.sin(s*1.6)*(zt?.swingId===l.id?.18:.035),l.pivot.updateMatrixWorld(!0),zt?.swingId===l.id&&(l.position.set(0,-2.8,0).applyMatrix4(l.pivot.matrixWorld),l.position.x/=Qe,l.position.z/=Qe,Je.g.position.copy(l.position).add(new N(0,-.05,0)),Je.g.rotation.x=l.pivot.rotation.x);no&&no.update(i,n,tn);let c=lf.filter(l=>Math.abs(l[2]-ce.y)<.4).map(l=>({r:l,d:Math.hypot(l[0]-ce.x,l[1]-ce.z)})).sort((l,h)=>l.d-h.d);HM.forEach((l,h)=>{let u=c[h];l.visible=!!u&&u.d<12,u&&(l.position.set(u.r[0],u.r[2]+2.7,u.r[1]),l.intensity=65*Math.max(0,1-u.d/14))}),ad.visible=ce.y<-.3,R0.forEach((l,h)=>l.animate(s+h,!1,"cook"));for(let l=0;l<On.members.length;l++){let h=On.members[l].actor;if(h!==Je){if(h.g.visible=!0,On.visited.has(l)){h.animate(s,!1);continue}l===1&&h.animate(s,!1,"cook"),l===2&&(h.g.position.set(-.5+Math.sin(s*.45)*2.6,0,16+Math.cos(s*.45)*1.1),h.g.rotation.y=Math.atan2(Math.cos(s*.45)*2.6,-Math.sin(s*.45)*1.1),h.animate(s,!0)),l===3&&(h.animate(s,!1,"read"),h.legs.forEach(u=>{u.rotation.x=-1.3,u.lower.rotation.x=1.3})),l===4&&h.animate(s,!1,"garden")}}if(Sh.visible=Je!==ur&&!On.visited.has(3),On.visited.has(2)||I0.position.set(Es.g.position.x+.7,Es.g.position.y+.23,Es.g.position.z),Mh.forEach((l,h)=>{if(s<U0&&ce.y<.1&&ce.z>7){let u=s+h*3;l.g.position.set(ce.x+Math.sin(u)*1.1,0,ce.z+Math.cos(u)*1.1),l.g.rotation.y=u+Math.PI/2}else{let u=s*.3+h*2.4;l.g.position.set(3+Math.sin(u)*2,0,8+Math.cos(u)*3.5),l.g.rotation.y=Math.atan2(Math.cos(u)*2,-Math.sin(u)*3.5)}l.animate(s+h)}),P0.forEach((l,h)=>{let u=s*(.24+h*.01)+h*.8,d=s<N0,f=-5+Math.cos(u)*(d?1:2.8),g=(d?11.6:10)+Math.sin(u)*(d?.35:1.65);l.position.set(f,.135+Math.sin(u*3)*.012,g),l.rotation.y=Math.atan2(-Math.sin(u)*(d?1:2.8),Math.cos(u)*(d?.35:1.65))}),Na[0].position.set(-3.1,.25,10.7),Na[0].rotation.y=.5+Math.sin(s*.15)*.15,Na[1].position.set(-6.3+Math.sin(s*.07)*.6,.13,9.1+Math.cos(s*.07)*.7),Na[1].rotation.y=s*.07,C0.forEach((l,h)=>{l.scale.y=.65+Math.sin(s*7+h)*.24+Math.sin(s*13+h)*.17}),od.intensity=(Pn?9:6)+Math.sin(s*9)*.8,jf%6===0){mn=null;let l=2.15;for(let h of qM){let u=Math.hypot(h.x-ce.x,h.z-ce.z);u<l&&Math.abs(ce.y-h.y)<.5&&(l=u,mn=h)}for(let h of Mh)ce.y<.1&&h.g.position.distanceTo(ce)<1.6&&!mn&&(mn={id:"dog",title:"\u6478\u6478\u8C46\u8C46\u548C\u56E2\u56E2",hint:"\u5C0F\u72D7 \xB7 \u60F3\u548C\u4F60\u4E00\u8D77\u6563\u6B65"});!mn&&!zn&&Math.abs(ce.y-xi.root.position.y)<.2&&Math.hypot(ce.x-xi.root.position.x,ce.z-xi.root.position.z)<2&&(mn={id:"bicycle",title:"\u9A91\u81EA\u884C\u8F66",hint:"\u5EAD\u9662\u81EA\u884C\u8F66"}),!mn&&G0()&&(mn={id:"elevator",title:"\u9009\u62E9\u7535\u68AF\u697C\u5C42",hint:"\u5730\u4E0B\u5BA4 \xB7 \u4E00\u697C \xB7 \u4E8C\u697C \xB7 \u5929\u53F0"}),zn&&(mn={id:"bicycle",title:"\u4E0B\u81EA\u884C\u8F66",hint:"\u6309 E \u6216\u70B9\u51FB\u4E0B\u8F66"}),ye("prompt").classList.toggle("hidden",!mn||ii||Tt===2),mn&&(ye("actionName").textContent=mn.title,ye("actionHint").textContent=mn.hint),eS(),tS()}i-td>=gi.shadowInterval&&(mt.shadowMap.needsUpdate=!0,td=i);for(let l of $t.merged.children)l.userData.zone==="basement"&&(l.visible=ce.y<-.15||ce.x<-21&&ce.z<-6&&ce.z>-20);if(mt.info.reset(),rd.render(),T0&&(T0=!1,q0=performance.now(),ye("loading").style.opacity="0",setTimeout(()=>ye("loading").remove(),300)),jf%20===0&&!document.hidden){w0.setFromProjectionMatrix(nS.multiplyMatrices(tn.projectionMatrix,tn.matrixWorldInverse));let l=new Set;for(let h of[...$t.merged.children,...$t.roofs.visible?$t.roofs.children:[]])h.visible&&w0.intersectsObject(h)&&l.add(h.material);za.update({x:ce.x,z:ce.z,y:ce.y,bird:Tt===2,materials:l})}i-M0>1e3&&(ye("qualityBtn").title="\u70B9\u51FB\u5207\u6362\uFF1A\u81EA\u52A8 / \u6D41\u7545 / \u5747\u8861 / \u7CBE\u7EC6\uFF1B\u5F53\u524D "+Math.round(Kn.fps)+" \u5E27/\u79D2",ye("frameRate").textContent=Math.round(Kn.fps)+" \u5E27/\u79D2",M0=i)}Rs();for(let i of[..._t.children])ro.add(i);ro.scale.set(Qe,1,Qe);_t.add(ro);for(let i of[Je,ka,Es,ur,Va,...R0,...Mh])i.g.scale.x/=Qe,i.g.scale.z/=Qe;no=_0(_t,$t,mt,vh,{parent:ro,queue:za,onLoaded:()=>{hr.attachWind(),Th(),mt.shadowMap.needsUpdate=!0}});no.setQuality(gi);Th();id=performance.now();Kn.reset();requestAnimationFrame(Y0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
