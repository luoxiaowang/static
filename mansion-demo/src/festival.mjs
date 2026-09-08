import * as T from 'three';
export const DOORS=[
 {id:'gate',name:'庭院大门',x:0,z:30,axis:'x',width:12,height:2.5,y:0,open:true,angle:1},
 {id:'basementDoor',name:'地下室入口门',x:-22.4,z:-18,axis:'z',width:1.8,height:2.5,y:-3.6,open:true,angle:1}
];
export function doorBlocks(x,z,y){return DOORS.some(d=>d.angle<.97&&Math.abs(y-d.y)<2&&(d.axis==='x'?Math.abs(x-d.x)<d.width/2+.15&&Math.abs(z-d.z)<.25:Math.abs(x-d.x)<.25&&Math.abs(z-d.z)<d.width/2+.15));}
export function toggleDoor(id,p){const d=DOORS.find(d=>d.id===id);if(!d)return false;if(d.open&&(d.axis==='x'?Math.abs(p.x-d.x)<d.width/2+.3&&Math.abs(p.z-d.z)<1.1:Math.abs(p.x-d.x)<1.1&&Math.abs(p.z-d.z)<d.width/2+.3)&&Math.abs(p.y-d.y)<2)return false;d.open=!d.open;return true;}
export function createFestival(parent){
 const group=new T.Group();parent.add(group);const red=new T.MeshStandardMaterial({color:0xae2721,roughness:.5}),gold=new T.MeshStandardMaterial({color:0xd3a74e,metalness:.5,roughness:.4}),dark=new T.MeshStandardMaterial({color:0x283d38}),warm=new T.MeshStandardMaterial({color:0xffcf70,emissive:0xffac39,emissiveIntensity:1.7});
 function box(x,y,z,w,h,d,m,p=group){const o=new T.Mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;p.add(o);return o;}
 function ball(x,y,z,r,m,p=group){const o=new T.Mesh(new T.SphereGeometry(r,20,14),m);o.position.set(x,y,z);o.castShadow=true;p.add(o);return o;}
 function writing(text,x,y,z,w,h,vertical=false,rotation=0){const c=document.createElement('canvas');c.width=vertical?128:768;c.height=vertical?768:128;const ctx=c.getContext('2d');ctx.fillStyle='#a41919';ctx.fillRect(0,0,c.width,c.height);ctx.strokeStyle='#dcb971';ctx.lineWidth=7;ctx.strokeRect(7,7,c.width-14,c.height-14);ctx.fillStyle='#ffe6a1';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=(vertical?'75':'74')+'px "Songti SC",serif';if(vertical)[...text].forEach((ch,i)=>ctx.fillText(ch,64,58+i*650/(text.length-1)));else ctx.fillText(text,384,64);const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;const mesh=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({map:tex,roughness:.75,side:T.DoubleSide}));mesh.position.set(x,y,z);mesh.rotation.y=rotation;group.add(mesh);}
 const moving=[];
 for(const d of DOORS){
  const leaves=d.axis==='x'?2:1;
  for(let i=0;i<leaves;i++){const pivot=new T.Group(),sign=i===0?-1:1,w=d.width/leaves;group.add(pivot);
   if(d.axis==='x'){pivot.position.set(d.x+sign*d.width/2,d.y,d.z);for(let j=0;j<14;j++)box(-sign*(j+.5)*w/14,1.15,0,.06,2.3,.09,dark,pivot);box(-sign*w/2,.45,0,w,.55,.10,dark,pivot);box(-sign*w/2,2.35,0,w,.09,.12,gold,pivot);}
   else{pivot.position.set(d.x,d.y,d.z-d.width/2);box(0,1.2,w/2,.10,2.4,w,dark,pivot);box(-.08,1.1,w-.2,.06,.25,.045,gold,pivot);}
   moving.push({d,pivot,sign});
  }
 }
 // Chinese couplets are attached to the gateway and house entrance, not floating labels.
 for(const x of [-6.4,6.4]){box(x,1.7,30,.65,3.4,.65,dark);ball(x,3.85,30,.45,red);box(x,3.35,30,.05,.35,.05,gold);}
 box(0,3.3,30,13.5,.25,.9,dark);
 writing('春回大地福满门',6.4,1.7,30.34,.46,2.5,true);writing('喜入华堂家兴旺',-6.4,1.7,30.34,.46,2.5,true);writing('阖家欢乐',0,3.3,30.47,3.6,.48);
 writing('迎春接福',0,2.98,-3.85,2.3,.4);writing('家和万事兴',-2.75,1.65,-3.85,.32,2.3,true);writing('人顺百业旺',2.75,1.65,-3.85,.32,2.3,true);
 for(const x of [-9,-5,5,9]){ball(x,2.65,-2.5,.3,red);box(x,2.14,-2.5,.035,.4,.035,gold);}
 // Wall-mounted lamps on both sides of the perimeter.
 for(const x of [-32.72,32.72])for(const z of [-14,-4,6,16,26]){box(x,1.35,z,.16,.5,.24,dark);box(x+(x<0?.09:-.09),1.35,z,.06,.3,.2,warm);}
 for(const x of [-27,-18,-9,9,18,27]){box(x,1.35,29.75,.28,.48,.14,dark);box(x,1.35,29.66,.22,.3,.04,warm);}
 const snowmen=new T.Group();group.add(snowmen);const snow=new T.MeshStandardMaterial({color:0xf3f4f0,roughness:1});
 for(const x of [-3,3]){const z=25;ball(x,.53,z,.55,snow,snowmen);ball(x,1.2,z,.4,snow,snowmen);ball(x,1.76,z,.3,snow,snowmen);box(x,2.08,z,.62,.08,.62,dark,snowmen);box(x,2.23,z,.4,.28,.4,dark,snowmen);for(const dx of [-.10,.10])ball(x+dx,1.82,z+.275,.028,dark,snowmen);const nose=new T.Mesh(new T.ConeGeometry(.07,.25,12),gold);nose.rotation.x=Math.PI/2;nose.position.set(x,1.72,z+.36);snowmen.add(nose);box(x,1.48,z,.69,.13,.69,red,snowmen);for(const side of [-1,1]){const arm=box(x+side*.55,1.3,z,.65,.045,.045,dark,snowmen);arm.rotation.z=side*.3;}}
 function update(dt,isSnow){snowmen.visible=isSnow;for(const d of DOORS)d.angle=T.MathUtils.damp(d.angle,d.open?1:0,6,dt);for(const m of moving)m.pivot.rotation.y=(m.d.axis==='x'?m.sign:1)*m.d.angle*Math.PI/2;}
 update(0,false);return{update,group};
}
