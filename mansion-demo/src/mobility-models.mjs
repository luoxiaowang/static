import * as T from 'three';import {LIFT,FLOORS} from './house-mobility.mjs';import {PLAN_SCALE} from './layout.mjs';
export function createBicycle(){const root=new T.Group(),wheels=[],paint=new T.MeshStandardMaterial({color:0x839e83,metalness:.45,roughness:.35}),metal=new T.MeshStandardMaterial({color:0x687475,metalness:.7,roughness:.3}),rubber=new T.MeshStandardMaterial({color:0x252c2b});
 const rod=(a,b,r,m=paint)=>{const av=new T.Vector3(...a),v=new T.Vector3(...b).sub(av),o=new T.Mesh(new T.CylinderGeometry(r,r,v.length(),10),m);o.position.copy(av).addScaledVector(v,.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());root.add(o);};
 for(const z of [-.67,.67]){const wheel=new T.Group();wheel.position.set(0,.35,z);const tire=new T.Mesh(new T.TorusGeometry(.33,.045,8,24),rubber);tire.rotation.y=Math.PI/2;wheel.add(tire);for(let i=0;i<12;i++){const a=i*Math.PI/6,o=new T.Mesh(new T.CylinderGeometry(.006,.006,.64,5),metal);o.rotation.x=a;wheel.add(o);}root.add(wheel);wheels.push(wheel);}
 for(const [a,b]of [[[0,.35,-.67],[0,.86,-.2]],[[0,.86,-.2],[0,.4,0]],[[0,.4,0],[0,.35,-.67]],[[0,.86,-.2],[0,.94,.48]],[[0,.94,.48],[0,.4,0]],[[0,.94,.48],[0,.35,.67]],[[0,.94,.48],[0,1.14,.45]],[[-.28,1.14,.45],[.28,1.14,.45]]])rod(a,b,.025);
 const seat=new T.Mesh(new T.BoxGeometry(.23,.07,.3),rubber);seat.position.set(0,.92,-.2);root.add(seat);rod([-.2,.4,0],[.2,.4,0],.02,metal);root.scale.set(1/PLAN_SCALE,1,1/PLAN_SCALE);root.traverse(o=>{if(o.isMesh)o.castShadow=true;});return {root,wheels};}
export function createLiftModel(){const root=new T.Group(),car=new T.Group();root.add(car);car.position.set(LIFT.x,0,LIFT.z);
 const steel=new T.MeshStandardMaterial({color:0x657572,metalness:.6,roughness:.3}),glass=new T.MeshStandardMaterial({color:0x596167,transparent:true,opacity:.28,depthWrite:false}),warm=new T.MeshBasicMaterial({color:0xffe4b4});
 function box(x,y,z,w,h,d,m,parent=root){const o=new T.Mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x,y,z);parent.add(o);return o;}
 for(const x of [LIFT.x1,LIFT.x2])for(const z of [LIFT.z1,LIFT.z2])box(x,2.85,z,.045,13,.045,steel);
 box(LIFT.x1,2.85,LIFT.z,.025,13,1.4,glass);for(const z of [LIFT.z1,LIFT.z2])box(LIFT.x,2.85,z,1.3,13,.025,glass);
 box(0,-.07,0,1.25,.14,1.35,steel,car);box(0,2.45,0,1.25,.08,1.35,steel,car);box(0,2.39,0,.8,.025,.8,warm,car);
 const doors=FLOORS.map(f=>{const pair=[-1,1].map(sign=>box(LIFT.x2,f.y+1.16,LIFT.z+sign*.32,.055,2.32,.64,steel));box(LIFT.x2+.02,f.y+1.3,LIFT.z1-.12,.035,.2,.1,warm);return {y:f.y,pair};});
 return {root,update(lift){car.position.y=lift.y;for(const d of doors)for(let i=0;i<2;i++)d.pair[i].position.z=LIFT.z+(i?1:-1)*(.32+(Math.abs(lift.y-d.y)<.01?lift.door*.65:0));}};
}
