import * as T from 'three';
const cache=new Map();const mat=c=>{if(!cache.has(c))cache.set(c,new T.MeshStandardMaterial({color:c,roughness:.78}));return cache.get(c);};
function sphere(parent,x,y,z,sx,sy,sz,c){const m=new T.Mesh(new T.SphereGeometry(1,12,8),mat(c));m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;parent.add(m);return m;}
function segment(parent,x,y,z,r,len,c){const g=new T.Group();g.position.set(x,y,z);parent.add(g);const m=new T.Mesh(new T.CapsuleGeometry(r,len,4,8),mat(c));m.position.y=-len/2;m.castShadow=true;g.add(m);return g;}
export function human({shirt=0xc1b39a,pants=0x3a4748,hair=0x342b25,scale=1,female=false}={}){
 const g=new T.Group();g.scale.setScalar(scale);const skin=0xc99673;
 sphere(g,0,1.19,0,.29,.39,.18,shirt);sphere(g,0,1.66,0,.19,.23,.19,skin);sphere(g,0,1.8,-.025,.193,.12,.19,hair);
 if(female)sphere(g,0,1.63,-.11,.21,.25,.12,hair);
 sphere(g,-.073,1.68,.169,.022,.017,.015,0x302923);sphere(g,.073,1.68,.169,.022,.017,.015,0x302923);sphere(g,0,1.62,.193,.03,.04,.04,skin);for(let side of [-1,1]){sphere(g,side*.184,1.66,0,.035,.055,.025,skin);sphere(g,side*.073,1.686,.165,.036,.025,.017,0xe6ded2);sphere(g,side*.073,1.686,.181,.014,.016,.009,0x44382e);sphere(g,side*.074,1.733,.163,.039,.009,.013,hair);}sphere(g,0,1.566,.171,.05,.009,.008,0x9c6152);
 const arms=[segment(g,-.34,1.4,0,.085,.46,shirt),segment(g,.34,1.4,0,.085,.46,shirt)];
 arms.forEach(a=>sphere(a,0,-.53,0,.067,.085,.065,skin));
 const legs=[segment(g,-.14,.84,0,.099,.35,pants),segment(g,.14,.84,0,.099,.35,pants)];legs.forEach(a=>{a.lower=segment(a,0,-.35,0,.085,.35,pants);sphere(a.lower,0,-.40,.06,.105,.075,.175,0x3b3430);});
 return{g,arms,legs,animate(t,moving=false,activity=''){legs.forEach((a,i)=>{a.rotation.x=moving?Math.sin(t*9+i*Math.PI)*.65:activity==='sit'?-Math.PI/2:0;a.lower.rotation.x=activity==='sit'?Math.PI/2:moving?Math.max(0,-Math.sin(t*9+i*Math.PI))*.6:0;});arms.forEach((a,i)=>{a.rotation.x=moving?-Math.sin(t*8+i*Math.PI)*.45:activity==='read'?-1.15:activity==='garden'?-.75+Math.sin(t*3)*.2:activity==='cook'?-.7+Math.sin(t*3+i)*.2:0;});g.children[0].rotation.z=moving?Math.sin(t*8)*.025:0;}};
}
export function dog(color=0xbd9059){const g=new T.Group();sphere(g,0,.47,0,.2,.23,.42,color);sphere(g,0,.65,.37,.22,.23,.23,color);sphere(g,0,.56,.57,.12,.09,.15,0xcbb59a);sphere(g,0,.59,.69,.07,.05,.045,0x252725);for(let s of [-1,1]){sphere(g,s*.17,.61,.38,.09,.22,.13,color);sphere(g,s*.09,.72,.55,.024,.024,.025,0x222827);}const legs=[];for(let x of [-.14,.14])for(let z of [-.26,.25])legs.push(segment(g,x,.36,z,.055,.23,color));const tail=segment(g,0,.55,-.38,.055,.32,color);tail.rotation.x=1.6;return{g,animate(t){legs.forEach((l,i)=>l.rotation.x=Math.sin(t*9+i*Math.PI)*.5);tail.rotation.z=Math.sin(t*12)*.7;}};}
export function fish(color){const g=new T.Group();sphere(g,0,0,0,.12,.075,.35,color);sphere(g,0,0,.22,.10,.07,.12,0xeee2ca);const tail=new T.Mesh(new T.ConeGeometry(.14,.24,3),mat(color));tail.rotation.x=Math.PI/2;tail.position.z=-.38;g.add(tail);return g;}
export function turtle(){const g=new T.Group();sphere(g,0,.08,0,.28,.14,.36,0x4a6540);sphere(g,0,.09,.38,.10,.09,.15,0x78854b);for(let x of [-.24,.24])for(let z of [-.23,.23])sphere(g,x,.02,z,.13,.035,.09,0x76844f);for(let z of [-.16,0,.16])sphere(g,0,.192,z,.13,.014,.1,0x69744d);return g;}
