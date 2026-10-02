import {addOffice} from './office-building.mjs';
import {cutLiftFloor,LIFT} from './house-mobility.mjs';
import {addHallwayTerrace} from './hallway-terrace.mjs';
import {addWallDecor} from './wall-decor.mjs';
import {GLASS_FINISH} from './glazing.mjs';
import {addInteriorDesign} from './interior-design.mjs';
import {addRoomThemes} from './room-themes.mjs';
import * as T from 'three';
import {kitchenMaterials,addKitchenArchitecture} from './kitchen.mjs';
import {geometryZone} from './asset-queue.mjs';
import {PLAN_SCALE,ROOM_DOOR_WIDTH,BALCONY_DOOR_WIDTH} from './layout.mjs';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {obstacle,solids,STAIRS,ROOF_STAIRS,BASEMENT_STAIRS} from './navigation.mjs';
import {addAmenities} from './amenities.mjs';
import {addDistrict} from './district.mjs';
import {addDetails} from './details.mjs';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
export function createWorld(materials={}){
 materials={...kitchenMaterials(),...materials};
 solids.length=0;const root=new T.Group(), architecture=new T.Group(), roofs=new T.Group();root.add(architecture,roofs);const trees=[],plantSpots=[],seats=[];let buildingRoof=false;
 const mats={};
 const mat=(n,c,extra={})=>mats[n]||(mats[n]=materials[n]||new T.MeshStandardMaterial({name:n,color:c,roughness:.8,...extra}));
 const wood=mat('胡桃木',0x795037), oak=mat('浅橡木',0xb28a5b), plaster=mat('米色墙面',0xfff6e9), roofmat=mat('深灰瓦',0x303b3c),stone=mat('石材',0x8d9286),paving=mat('石板',0xb8b5a4),grass=mat('草地',0x566944),dark=mat('深色金属',0x242d2c),linen=mat('亚麻布',0xe4d7b8),soil=mat('土壤',0x493326),lightmat=mat('暖光',0xffdca0,{emissive:0xffb660,emissiveIntensity:2}),glass=mat('玻璃',GLASS_FINISH.color,GLASS_FINISH);
 const colliders=[];
 function box(x,y,z,w,h,d,m,solid=false,parent=architecture,cut=true){if(cut&&h<.45&&w>.5&&d>.5&&(Math.abs(y+3.7)<.25||Math.abs(y)<.5||Math.abs(y-3.5)<.25||Math.abs(y-7.1)<.2)){const parts=cutLiftFloor(x,z,w,d);if(parts.length!==1||parts[0].w!==w||parts[0].d!==d){let first;for(const p of parts)first=box(p.x,y,p.z,p.w,h,p.d,m,solid,parent,false)||first;return first;}}const o=new T.Mesh(((m===linen||m.name==='靠枕'||m.name==='床被')?new RoundedBoxGeometry(w,h,d,3,Math.min(w,h,d)*.22):new T.BoxGeometry(w,h,d)),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;(buildingRoof?roofs:parent).add(o);if(solid){obstacle(x,z,w,d,y-h/2,h);colliders.push(o);}return o;}
 function ell(x,y,z,sx,sy,sz,m,parent=architecture){const o=new T.Mesh(new T.SphereGeometry(1,16,12),m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 function cyl(x,y,z,r,h,m,parent=architecture,rt=r){const o=new T.Mesh(new T.CylinderGeometry(rt,r,h,24),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 function branch(a,b,r,m=wood){const v=new T.Vector3(...b).sub(new T.Vector3(...a));const o=cyl(...new T.Vector3(...a).addScaledVector(v,.5).toArray(),r,v.length(),m,architecture,r*.65);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());return o;}
 let seed=23;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
 const leaves=[mat('松叶',0x34533c),mat('叶绿',0x536b3d),mat('浅叶',0x738653),mat('枫叶',0xa65436)];
 function tree(x,z,s=1,maple=false){trees.push({x,z,height:s*7.5,rotation:rand()*6.28});}
 function plant(x,z,s=.6,y=0){plantSpots.push({x,z,y,height:s*1.3});}
 function lamp(x,z){box(x,.48,z,.24,.85,.24,dark);box(x,.56,z,.27,.3,.27,lightmat);box(x,.78,z,.4,.08,.4,dark);}
 // Quiet mountain backdrop, lake and planted perimeter.
 // Four ground panels leave a genuine opening over the basement stair.
 const earth=mat('黄土地',0xb49a68);box(-57.25,-.30,0,65.5,.4,180,earth);box(33.75,-.30,0,112.5,.4,180,earth);box(-23.5,-.30,-53.5,2,.4,73,earth);box(-23.5,-.30,41.5,2,.4,97,earth);
 box(-28.75,-.25,5,8.5,.4,50,grass);box(5.25,-.25,5,55.5,.4,50,grass);
 box(-23.5,-.25,-18.5,2,.4,3,grass);box(-23.5,-.25,11.5,2,.4,37,grass);
 const lake=box(0,-.13,-55,170,.08,48,mat('远湖',0x7eaaa2,{roughness:.17,metalness:.35}));
 for(let i=0;i<38;i++){const a=i/38*Math.PI*2;let x=Math.cos(a)*(33+rand()*13),z=Math.sin(a)*(31+rand()*13);if(!(z>29&&Math.abs(x)<14)&&!(x>33&&z>0))tree(x,z,1.1+rand()*1.2);}
 // Courtyard stone and timber thresholds remain flush for accessible navigation.
 box(0,-.025,1.5,21.8,.05,11,paving);box(0,0,18,4,.045,14,paving);
 for(let x=-9;x<=9;x+=2)for(let z=-2;z<7;z+=2){box(x,.007,z,1.97,.035,1.97,paving);}
 for(const x of [-5.2,5.2]){box(x,.044,1.5,6.1,.04,6.2,grass);for(const side of [-1,1])box(x+side*3.15,.049,1.5,.13,.06,6.4,plaster);for(const z of [-1.65,4.65])box(x,.049,z,6.4,.06,.13,plaster);}
 for(let i=0;i<10;i++)box(-1.5+(i%2)*.05,.03,8+i*1.4,2.8,.06,1.05,stone);
 box(0,1,-20,66,2,.4,stone,true);box(-33,1,5,.4,2,50,stone,true);box(33,1,5,.4,2,50,stone,true);
 for(const x of [-19.5,19.5])box(x,.9,30,27,1.8,.4,stone,true);
 // Room shell: open center bays, large glass windows on both sides.
 function sideWindow(x,z1,z2,base=0,door=-6){
  // A real 3.4 metre opening, no invisible wall across the passage.
  const openings=(Array.isArray(door)?door:[door]).sort((a,b)=>a-b);const spans=[];let end=z1;for(const door of openings){if(door+1.7<z1||door-1.7>z2)continue;spans.push([end,Math.max(end,door-1.7)]);end=Math.min(z2,door+1.7);}spans.push([end,z2]);
  for(const [a,b]of spans){if(b-a<.05)continue;box(x,base+1.65,(a+b)/2,.07,3.3,b-a,glass,true);for(let z=a;z<=b;z+=1.6)box(x,base+1.7,z,.12,3.4,.07,dark);}
  box(x,base+3.35,(z1+z2)/2,.2,.18,z2-z1,dark);
 }
 function shell(cx,cz,w,d,base=0,upper=false){
  box(cx,base-.09,cz,w,.18,d,oak);
  if(cx===-16&&cz===-.5){for(const dx of [-3.75,3.75])box(cx+dx,base+1.65,cz-d/2,2.5,3.3,.065,glass,true);}
  else {
  box(cx,base+.35,cz-d/2,w,.7,.22,plaster,true);
  box(cx,base+2.05,cz-d/2,w,2.7,.065,glass,true);}
  for(let x=cx-w/2;x<=cx+w/2;x+=2)box(x,base+1.7,cz-d/2,.065,3.4,.16,dark);
  for(const sign of [-1,1]){
   sideWindow(cx+sign*w/2,cz-d/2,cz+d/2,base,upper?-6:(sign*cx<0?[-6,0]:0));
   if(!upper){ // cross-wing corridor aligns with the main-house opening
    // Individual panels intentionally leave the courtyard-facing side open.
   }
   const span=(w-5)/2;
   box(cx+sign*(2.5+span/2),base+1.62,cz+d/2,span,3.24,.045,glass,true);
   for(let k=0;k<3;k++)box(cx+sign*(2.5+k*span/2),base+1.65,cz+d/2,.055,3.3,.14,dark);
  }
  box(cx,base+3.36,cz+d/2,w,.18,.2,dark);
  if(!upper&&cx!==-16&&cx!==16)hipRoof(cx,cz,w+1.5,d+1.5,base+3.55,.25);
 }
 function hipRoof(x,z,w,d,y,h){
  buildingRoof=true;
  const canopy=box(x,y,z,w,.18,d,roofmat);canopy.geometry.dispose();canopy.geometry=new RoundedBoxGeometry(w,.18,d,3,.07);
  box(x,y+.13,z,w-.6,.08,d-.6,roofmat);
  box(x,y-.13,z,w-.2,.10,d-.2,wood);
  // Recessed shadow gap and a thin floating perimeter fascia.
  box(x,y-.06,z,w-.14,.04,d-.14,dark);
  for(let sign of [-1,1])box(x+sign*w/2,y,z,.12,.32,d,dark);
  for(let sign of [-1,1])box(x,y,z+sign*d/2,w,.32,.12,dark);
  box(x,y-.19,z+d/2-.25,w-.5,.025,.035,lightmat);
  buildingRoof=false;
 }
 shell(0,-11,22,14,0,true); // main floor, staircase hall
 // Upper floor, explicit stair void (x7..9.6, z-13..-5).
 box(-1,3.51,-11,20,.18,14,oak);box(10.75,3.51,-11,.5,.18,14,oak);
 box(9.75,3.51,(-18+STAIRS.z1)/2,1.5,.18,STAIRS.z1+18,oak);box(9.75,3.51,(STAIRS.z2-4)/2,1.5,.18,-4-STAIRS.z2,oak);
 // Upper shell without a solid floor.
 box(0,3.95,-18,22,.7,.24,plaster,true);box(0,5.7,-18,22,2.8,.06,glass,true);for(let x=-11;x<12;x+=2)box(x,5.3,-18,.06,3.4,.16,dark);
 for(let x of [-11,11]){if(x===-11){for(const [a,b]of [[-18,-10-BALCONY_DOOR_WIDTH/2],[-10+BALCONY_DOOR_WIDTH/2,-4]])box(x,5.3,(a+b)/2,.06,3.4,b-a,glass,true);box(x,6.4,-10,.12,1.2,BALCONY_DOOR_WIDTH,plaster,true);}else{box(x,5.3,-12.15,.06,3.4,11.7,glass,true);box(x,5.3,-4.05,.06,3.4,.1,glass,true);box(x,6.5,-5.15,.12,1,2.3,plaster,true);for(let z=-18;z<=-7;z+=2)box(x,5.3,z,.16,3.4,.06,dark);}}
 for(let x=-10;x<11;x+=2){box(x,5.15,-4,1.93,3,.05,glass,true);box(x+1,5.2,-4,.07,3.2,.12,dark,true);}
 // Walkable roof deck with an opening directly over the second staircase.
 buildingRoof=true;box(-2,7.10,-11,18,.2,14,paving);box(9.75,7.10,-11,2.5,.2,14,paving);
 box(7.75,7.10,-16.5,1.5,.2,3,paving);box(7.75,7.10,-5,1.5,.2,2,paving);buildingRoof=false;
 // Central entry porch.
 for(let x of [-9,-5,5,9])box(x,1.7,-2.7,.18,3.4,.18,wood,true);
 buildingRoof=true;box(0,3.3,-2.7,23,.15,2.8,wood);buildingRoof=false;
 shell(-16,-.5,10,15);shell(-16,-13.5,10,11);shell(16,-.5,10,15);
 // Connections to the main house via courtyard are open; side walls stay solid.
 // Upper bedroom separators with open 1.8m passages at z=-7.
 for(let x of [-3,3])box(x,5.3,-13,.16,3.4,10,plaster,true);
 for(const [left,right,door] of [[-11,-3,-7],[-3,3,0]]){for(const [a,b]of [[left,door-ROOM_DOOR_WIDTH/2],[door+ROOM_DOOR_WIDTH/2,right]])box((a+b)/2,5.3,-8,b-a,3.4,.16,plaster,true);box(door,6.4,-8,ROOM_DOOR_WIDTH,1.2,.16,plaster,true);}
 for(const st of [STAIRS,ROOF_STAIRS,BASEMENT_STAIRS]){
  const cx=(st.x1+st.x2)/2,w=st.x2-st.x1,d=(st.z2-st.z1)/28;
  for(let i=0;i<28;i++){const z=st.z2-(i+.5)*d,h=st.base+(st.reverse?28-i:i+1)*3.6/28;box(cx,h-.065,z,w,.13,d+.006,oak);}
  for(const x of [st.x1-.07,st.x2+.07]){
   branch([x,st.base+.9+(st.reverse?3.6:0),st.z2],[x,st.base+.9+(st.reverse?0:3.6),st.z1],.022,dark);
   for(let i=0;i<28;i++){const z=st.z2-(i+.5)*d,y=st.base+(st.reverse?28-i:i+1)*3.6/28;box(x,y+.45,z,.035,.9,.035,dark);obstacle(x,z,.035,d,y,.95);}
  }
 }
 // Furnishings.
 function rug(x,z,w,d,y=0){box(x,y+.017,z,w,.035,d,mat('地毯',0xc3baa4));for(let i=0;i<8;i++)box(x-w/2+.1+i*.055,y+.04,z,.025,.01,d,linen);}
 function table(x,z,w=2,d=1,y=0){w/=PLAN_SCALE;d/=PLAN_SCALE;box(x,y+.75,z,w,.11,d,wood,true);for(let a of [-1,1])for(let b of [-1,1])box(x+a*(w/2-.15),y+.35,z+b*(d/2-.12),.1,.7,.1,wood);}
 function chair(x,z,rot=0,y=0){let g=new T.Group();architecture.add(g);box(0,.46,0,.7,.16,.7,linen,false,g);box(0,.88,-.32,.7,.75,.1,wood,false,g);for(let a of [-1,1])for(let b of [-1,1])box(a*.27,.2,b*.27,.07,.4,.07,wood,false,g);g.scale.set(1/PLAN_SCALE,1,1/PLAN_SCALE);g.position.set(x,y,z);g.rotation.y=rot;obstacle(x,z,.7/PLAN_SCALE,.7/PLAN_SCALE,y,1.2);}
 function sofa(x,z,rot=0,y=0){seats.push({x,z,y,rotation:rot,type:'sit'});let g=new T.Group();architecture.add(g);box(0,.32,0,3.4,.45,1.3,wood,false,g);for(let i=-1;i<=1;i++){box(i*1.05,.64,0,1.025,.31,1.12,linen,false,g);const back=box(i*1.05,1.06,-.47,1.04,.73,.29,linen,false,g);back.rotation.x=-.12;}for(let s of [-1,1]){box(s*1.62,.8,0,.22,.7,1.3,linen,false,g);let p=box(s*.9,.96,-.25,.65,.5,.18,mat('靠枕',0x928268),false,g);p.rotation.z=s*.12;}g.scale.set(1/PLAN_SCALE,1,1/PLAN_SCALE);g.position.set(x,y,z);g.rotation.y=rot;obstacle(x,z,(rot?1.3:3.4)/PLAN_SCALE,(rot?3.4:1.3)/PLAN_SCALE,y,1.2);}
 function books(x,z,w=7,y=0,rotation=0){const meshStart=architecture.children.length,solidStart=solids.length;box(x,y+1.6,z,w,3.2,.42,wood,true);for(let k=0;k<6;k++){box(x,y+.15+k*.53,z+.3,w,.07,.64,oak);for(let i=0;i<w*8;i++){if((i+Math.floor(k/2)*9)%29>17)continue;let h=.23+rand()*.2;box(x-w/2+.1+i*.123,y+.21+k*.53+h/2,z+.28,.07+rand()*.035,h,.25,mat('书'+(i%7),[0x665946,0xc0ac7e,0x3c5352,0x8b4e3b,0xd9ceb0,0x444b40,0x7e8059][i%7]));}}for(let k=0;k<5;k++)box(x,y+.67+k*.53,z+.35,w-.1,.017,.025,lightmat);for(let i=-w/2;i<=w/2;i+=w/5)box(x+i,y+1.6,z+.15,.08,3.2,.6,oak);
 if(rotation){const g=new T.Group();for(const mesh of architecture.children.slice(meshStart)){mesh.position.x-=x;mesh.position.z-=z;g.add(mesh);}g.position.set(x,0,z);g.rotation.y=rotation;architecture.add(g);for(const s of solids.slice(solidStart)){const corners=[[s.x1,s.z1],[s.x1,s.z2],[s.x2,s.z1],[s.x2,s.z2]].map(([xx,zz])=>[x+(xx-x)*Math.cos(rotation)+(zz-z)*Math.sin(rotation),z-(xx-x)*Math.sin(rotation)+(zz-z)*Math.cos(rotation)]);s.x1=Math.min(...corners.map(c=>c[0]));s.x2=Math.max(...corners.map(c=>c[0]));s.z1=Math.min(...corners.map(c=>c[1]));s.z2=Math.max(...corners.map(c=>c[1]));}}
 }
 books(-20.6,-4.7,3.8,0,Math.PI/2);rug(-16,.5,7,8);table(-17,1,2.2,1.1);chair(-17,2.1,Math.PI);sofa(-14,-3);table(-14,-1.2,1.7,.8);plant(-20,5);plant(-12,-6);
 box(-17,.845,1,1,.03,.55,linen);box(-17,.87,1,.025,.015,.55,dark);
 // Fireplace is a Blender asset placed at west library wall (runtime loader).
 obstacle(-20,.3,1.1,3,0,2.8);
 rug(16,1,7,7);sofa(17,1,Math.PI/2);table(18.7,1,1,2.1);plant(12,5);plant(20,-6);
 table(15,-5.3,3.8,1.35);for(let x of [13.7,15,16.3]){chair(x,-4.2,Math.PI);chair(x,-6.5);}
 // Kitchen and family hall.
 box(-7,.45,-16.9,6,.9,1.3,mat('厨房柜体'),true);box(-7,.93,-16.9,6,.08,1.4,mat('厨房石材'));addKitchenArchitecture({box,mat,dark,lightmat});
 box(-6,.45,-13.6,4.4,.9,1.3,mat('厨房柜体'),true);box(-6,.94,-13.6,4.6,.09,1.5,mat('厨房石材'));for(const x of [-8.26,-3.74])box(x,.47,-13.6,.08,.94,1.5,mat('厨房石材'));for(let x=-7.5;x<-4;x+=.75)box(x,.46,-12.94,.015,.78,.012,dark);plant(-10,-5);
 rug(0,-11,5.5,5.5);sofa(-1.3,-10,Math.PI/2);table(.5,-10,1,2);books(-.3,-17.5,4);chair(-3.9,-10);table(-4,-9,1,1);
 // Upstairs bedroom, child room and reading corner.
 function bed(x,z,w=3,y=3.6){seats.push({x,z,y,rotation:0,type:'lie'});box(x,y+.3,z,w,.6,3.6,wood,true);box(x,y+.64,z,w,.18,3.5,linen);box(x,y+1,z-1.75,w,.9,.18,wood,true);box(x,y+.77,z+.45,w,.1,2.3,mat('床被',0x788b84));for(let s of [-1,1])box(x+s*w*.23,y+.8,z-1.13,w*.4,.2,.65,linen);}
 bed(-8,-15.4,2.6);rug(-7,-10.7,5,3.5,3.6);table(-4.8,-17,1.5,.8,3.6);chair(-4.8,-16.2,Math.PI,3.6);plant(-10,-17,.7,3.6);
 rug(0,-10.5,4,3,3.6);for(let i=0;i<9;i++)box(-1+rand()*2,3.78,-10+rand(),.25,.32,.25,mat('积木'+i,[0xbd815b,0x547c87,0xd3b966][i%3]));

 // Tea deck and planting beds.
 box(8,0,12,8,.09,5,oak);for(let i=0;i<22;i++)box(4.15+i*.35,.05,12,.02,.015,5,wood);
 table(8,12,2.2,1.2);chair(8,13.2,Math.PI);chair(8,10.8);chair(6.35,12,-Math.PI/2);
 const tea=mat('青瓷',0x789787,{roughness:.23});cyl(8,.94,12,.19,.22,tea);ell(8,1.08,12,.16,.07,.16,tea);for(let x of [7.4,8.6])cyl(x,.9,12,.095,.13,tea);
 for(let x of [12,15]){box(x,.18,19,2.2,.36,3,wood,true);box(x,.38,19,2,.04,2.8,soil);}
 for(let x of [11.4,12,12.6])for(let z of [18,19,20]){plant(x,z,.35,.4);}
 // Koi pond: raised stone lip prevents entering water.
 const waterMat=mat('池水',0x377d7d,{transparent:true,opacity:.76,roughness:.13,metalness:.38});
 ell(-5,.015,10,4.3,.015,2.8,mat('池底',0x254b43));
 const pond=new T.Mesh(new T.CircleGeometry(1,64),waterMat);pond.rotation.x=-Math.PI/2;pond.scale.set(4.05,2.6,1);pond.position.set(-5,.23,10);root.add(pond);
 for(let i=0;i<38;i++){let a=i/38*Math.PI*2;ell(-5+Math.cos(a)*4.2,.12,10+Math.sin(a)*2.75,.45,.23,.36,stone);}
 for(let i=0;i<7;i++){let a=rand()*6.28;const lily=cyl(-5+Math.cos(a)*2.5,.245,10+Math.sin(a)*1.7,.25,.02,leaves[1]);}
 ell(-3.1,.12,10.7,.6,.2,.4,stone);
 // Pool.
 box(20.5,.04,11,7,.12,16,mat('泳池蓝',0x4e9eae,{roughness:.16,metalness:.25}));for(let x of [16.8,24.2])box(x,.1,11,.4,.2,16.8,plaster);for(let z of [2.8,19.2])box(20.5,.1,z,7.8,.2,.4,plaster);
 for(let x of [18.5,20.5,22.5])box(x,.106,11,.05,.008,15,dark);
 for(let z of [6,10,14,18]){cyl(25,.65,z,.035,1.3,dark);box(25,.65,z-1.9,.04,1.1,3.7,glass);}
 // Garden islands.
 tree(0,3,1.25);tree(-12,14,1.2,true);tree(3,19,1,true);tree(23,-14,1.4);tree(-23,12,1.2);
 for(let i=0;i<38;i++){const a=rand()*6.28;let x=Math.cos(a)*(2+rand()),z=3+Math.sin(a)*(1.3+rand());ell(x,.17,z,.3+rand()*.4,.25,.3+rand()*.4,stone);}
 for(let x of [-10,10,-23,23])for(let z of [-6,4,17])lamp(x,z);lamp(-2.3,20);lamp(2.3,20);
 for(let x of [-16,0,16]){const l=new T.PointLight(0xffcb87,15,13,2);l.position.set(x,2.7,x===0?-11:0);root.add(l);}
 addAmenities({box,cyl,mat,wood,linen,dark,glass,plaster,architecture,root,seats,obstacle});
 addDistrict({box,ell,cyl,branch,mat,wood,oak,linen,dark,plaster,lightmat,glass,architecture,root,roofs,obstacle,seats,tree,plant,table,chair,sofa,books,rug});
 addDetails({box,ell,cyl,branch,mat,wood,oak,linen,dark,plaster,lightmat,glass,architecture,root,roofs,obstacle,seats});
 addInteriorDesign({box,ell,cyl,branch,mat,wood,oak,linen,dark,glass,plaster,lightmat,architecture,root,seats,obstacle,sofa,table,chair,books,plant,rug});
 addRoomThemes({box,ell,cyl,mat,architecture,seats,obstacle});
 addWallDecor({box,mat});
 addHallwayTerrace({box,cyl,ell,branch,mat,wood,oak,dark,glass,linen,lightmat,plaster,seats,obstacle,plant});
 box(-14.3,7.1,-11.7,8.1,.2,1.4,paving);for(const z of [-12.4,-11])box(-14.3,7.85,z,8.1,1.3,.05,glass,true);
 addOffice({box,mat,branch,root});
 // Merge static geometry by material: hundreds of books and foliage become a few draw calls.
 architecture.updateMatrixWorld(true);const groups=new Map();architecture.traverse(o=>{if(!o.isMesh)return;const geo=o.geometry.clone().applyMatrix4(o.matrixWorld);if(!geo.index)geo.setIndex(Array.from({length:geo.attributes.position.count},(_,i)=>i));if(!geo.attributes.uv)geo.setAttribute('uv',new T.BufferAttribute(new Float32Array(geo.attributes.position.count*2),2));if(o.material.userData.worldUV){const p=geo.attributes.position,n=geo.attributes.normal,uv=geo.attributes.uv;for(let i=0;i<p.count;i++){const nx=Math.abs(n.getX(i)),ny=Math.abs(n.getY(i)),nz=Math.abs(n.getZ(i));const tile=o.material.name==='草地'?3:2;uv.setXY(i,(nx>ny&&nx>nz?p.getZ(i):p.getX(i))/tile,(ny>nx&&ny>nz?p.getZ(i):p.getY(i))/tile);}}geo.computeBoundingSphere();const center=new T.Vector3().setFromMatrixPosition(o.matrixWorld),zone=geometryZone(center.x,center.y,center.z,geo.boundingSphere.radius>18);const key=o.material.uuid+':'+zone;const batch=groups.get(key)||{material:o.material,zone,geos:[]};batch.geos.push(geo);groups.set(key,batch);});
 root.remove(architecture);const merged=new T.Group();root.add(merged);for(const {material:m,zone,geos}of groups.values()){const g=mergeGeometries(geos,false);if(!g)throw Error('模型合并失败');const mesh=new T.Mesh(g,m);mesh.castShadow=m.name!=='玻璃';mesh.receiveShadow=true;mesh.name=m.name;mesh.userData.zone=zone;mesh.frustumCulled=true;merged.add(mesh);geos.forEach(g=>g.dispose());}
 // Keep the hide-roof group, but batch its repeated slats/fascias by material.
 roofs.updateMatrixWorld(true);const roofBatches=new Map();roofs.traverse(o=>{if(!o.isMesh)return;const list=roofBatches.get(o.material)||[];const geo=o.geometry.clone().applyMatrix4(o.matrixWorld);if(!geo.index)geo.setIndex(Array.from({length:geo.attributes.position.count},(_,i)=>i));list.push(geo);roofBatches.set(o.material,list);});roofs.clear();for(const[m,geos]of roofBatches){const mesh=new T.Mesh(mergeGeometries(geos),m);mesh.castShadow=true;mesh.receiveShadow=true;mesh.name=m.name;roofs.add(mesh);geos.forEach(g=>g.dispose());}
 return{root,mats,pond,waterMat,plant,merged,roofs,trees,plantSpots,seats};
}
