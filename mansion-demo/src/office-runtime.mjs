import * as T from 'three';
import {human} from './characters.mjs';
import {PLAN_SCALE} from './layout.mjs';
import {Elevator} from './house-mobility.mjs';
import {OFFICE_FLOORS,OFFICE_DESKS,OFFICE_LIFT as L} from './office-layout.mjs';
export function createOfficeRuntime(parent,labels){
 const root=new T.Group();parent.add(root);
 const lift=new Elevator(OFFICE_FLOORS),car=new T.Group();car.position.set(L.x,0,L.z);root.add(car);
 const metal=new T.MeshStandardMaterial({color:0x728982,metalness:.45,roughness:.35});
 const box=(x,y,z,w,h,d,parent=root)=>{const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),metal);mesh.position.set(x,y,z);parent.add(mesh);return mesh;};
 box(0,-.07,0,1.9,.14,1.9,car);box(0,2.6,0,1.9,.1,1.9,car);box(0,1.25,-.96,1.9,2.5,.08,car);
 const doors=OFFICE_FLOORS.map(f=>({y:f.y,pair:[-1,1].map(side=>box(L.x+side*.48,f.y+1.25,8,.96,2.5,.06))}));
 // 静态招牌仅在浏览器生成，几何与通行测试不依赖 Canvas。
 for(const label of labels){const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=128;const c=canvas.getContext('2d');c.fillStyle='#e8e5d9';c.fillRect(0,0,1024,128);c.fillStyle='#304d43';c.font='bold 58px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(label.text,512,64,970);const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;const mesh=new T.Mesh(new T.PlaneGeometry(label.w,label.h),new T.MeshBasicMaterial({map:texture,side:T.DoubleSide}));mesh.position.set(label.x,label.y,label.z);mesh.rotation.y=label.rotation||0;root.add(mesh);}
 const staff=[];
 for(const f of OFFICE_FLOORS.slice(0,5)){
  for(const d of OFFICE_DESKS.filter(d=>d.y===f.y&&d.z===12)){const actor=human({shirt:[0x7d9eaf,0xb29c89,0x81967e][staff.length%3],female:staff.length%2===0});actor.g.scale.set(1/PLAN_SCALE,1,1/PLAN_SCALE);actor.g.position.set(d.x,f.y-.32,d.z-.94);root.add(actor.g);staff.push({actor,floor:f.y,desk:d});}
  const actor=human({shirt:0xb9a881});actor.g.scale.set(1/PLAN_SCALE,1,1/PLAN_SCALE);root.add(actor.g);staff.push({actor,floor:f.y});
 }
 return{lift,root,staff,near(pos){return OFFICE_FLOORS.some(f=>Math.abs(f.y-pos.y)<.1)&&Math.hypot(pos.x-L.exitX,pos.z-L.exitZ)<1.6;},update(dt,t,pos){
  const event=lift.update(dt);car.position.y=lift.y;
  for(const d of doors)for(let i=0;i<2;i++)d.pair[i].position.x=L.x+(i?1:-1)*(.48+(Math.abs(lift.y-d.y)<.01?lift.door*.98:0));
  for(const s of staff){s.actor.g.visible=pos.x>33&&Math.abs(pos.y-s.floor)<2.1;if(!s.actor.g.visible)continue;
   if(s.desk){s.actor.animate(t,false,'sit');s.actor.arms.forEach((arm,i)=>{arm.rotation.x=-.85+Math.sin(t*5+i*2)*.045;});}
   else{const angle=t*.22+s.floor;const x=56+Math.sin(angle)*6,z=16.5+Math.cos(angle)*.8;s.actor.g.position.set(x,s.floor,z);s.actor.g.rotation.y=Math.atan2(Math.cos(angle)*6,-Math.sin(angle)*.8);s.actor.animate(t,true);}
  }
  return event;
 }};
}
