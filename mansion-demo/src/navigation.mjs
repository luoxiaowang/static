import {inOffice,inOfficeDistrict,officeGround} from './office-layout.mjs';
import {shaftContains,LIFT} from './house-mobility.mjs';
import {doorBlocks} from './festival.mjs';
import {PLAN_SCALE} from './layout.mjs';
// One source of truth for the visible staircase, navigation and room destinations.
export const STAIRS={x1:9,x2:10.5,z1:-14.5,z2:-6,height:3.6,base:0,reverse:true};
export const ROOF_STAIRS={x1:7,x2:8.5,z1:-15,z2:-6,height:3.6,base:3.6,reverse:false};
export const BASEMENT_STAIRS={x1:-24.5,x2:-22.5,z1:-17,z2:-7,height:3.6,base:-3.6,reverse:true};
export function inLiftBridge(x,z){return x>-18.35&&x< -10.3&&z>-12.3&&z< -11.1;}
let liftAccess=null;export function setLiftAccess(lift){liftAccess=lift;}
function cabinOpen(y){return liftAccess?.phase==='idle'&&liftAccess.door>.98&&Math.abs(liftAccess.y-y)<.05;}
export const solids=[];
export function obstacle(x,z,w,d,y=0,h=3){solids.push({x1:x-w/2,x2:x+w/2,z1:z-d/2,z2:z+d/2,y,h});}
export function inBalcony(x,z){return x>-20.8&&x< -10.7&&z>-18.8&&z<6.8||x>10.7&&x<20.8&&z>-7.8&&z<6.8;}
export function inUpper(x,z){return x>-10.8&&x<10.8&&z>-17.8&&z<-4.15;}
export function inBasement(x,z){return x>-24.8&&x<-11.2&&z>-18.8&&z<-7.15;}
export function groundHeight(x,z,previous=0){
 if(inOfficeDistrict(x,z))return officeGround(x,z,previous);
 if(shaftContains(x,z,.15)&&cabinOpen(previous))return liftAccess.y;
 for(const s of [STAIRS,ROOF_STAIRS,BASEMENT_STAIRS]){
  if(x<s.x1||x>s.x2||z<s.z1||z>s.z2)continue;
  const t=(s.z2-z)/(s.z2-s.z1),h=s.base+(s.reverse?1-t:t)*s.height;
  // Select the connected ramp only, never a staircase on another floor.
  if(Math.abs(h-previous)<.25)return h;
  if(previous>=s.base-.01&&previous<=s.base+s.height+.01)return NaN;
 }
 if(previous>6.95&&(inUpper(x,z)||inLiftBridge(x,z)))return 7.2;
 if(previous>3.35&&previous<3.85&&(inUpper(x,z)||inBalcony(x,z)))return 3.6;
 if(previous< -3.35&&inBasement(x,z))return -3.6;
 if(Math.abs(previous)<.25)return 0;
 return NaN;
}
export function canMove(x,z,y,oldY=y){
 if(shaftContains(x,z,.12))return cabinOpen(y)&&x>LIFT.x1+.14&&z>LIFT.z1+.14&&z<LIFT.z2-.14;
 if(doorBlocks(x,z,y))return false;
 if((Math.abs(x)>34||z>49||z< -24)&&!inOfficeDistrict(x,z))return false;
 if(Math.abs(y)<.25&&(((x+5)/4.35)**2+((z-10)/2.85)**2<1||x>17.1&&x<23.9&&z>3.1&&z<18.9))return false;
 const nextY=groundHeight(x,z,oldY);
 if(!Number.isFinite(nextY)||Math.abs(nextY-oldY)>.22)return false;
 if(!inOffice(x,z)&&oldY>6.95&&!inUpper(x,z)&&!inLiftBridge(x,z))return false;
 if(!inOffice(x,z)&&oldY>3.35&&oldY<3.85&&!inUpper(x,z)&&!inBalcony(x,z))return false;
 if(oldY< -3.35&&!inBasement(x,z))return false;
 // The basement opening is a real void; crossing its sides cannot stand on air.
 if(Math.abs(y)<.001&&x>BASEMENT_STAIRS.x1&&x<BASEMENT_STAIRS.x2&&z>BASEMENT_STAIRS.z1&&z<BASEMENT_STAIRS.z2-.1)return false;
 const r=.20/PLAN_SCALE;
 return !solids.some(s=>y+1.68>s.y+.08&&y<s.y+s.h-.12&&x>s.x1-r&&x<s.x2+r&&z>s.z1-r&&z<s.z2+r);
}
export function movePlayer(p,dx,dz){
 const count=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.08));
 for(let i=0;i<count;i++){
  const nx=p.x+dx/count;let ny=groundHeight(nx,p.z,p.y);
  if(canMove(nx,p.z,ny,p.y)){p.x=nx;p.y=ny;}
  const nz=p.z+dz/count;ny=groundHeight(p.x,nz,p.y);
  if(canMove(p.x,nz,ny,p.y)){p.z=nz;p.y=ny;}
 }
 return p;
}
export function advanceJump(state,dt){
 state.velocity-=16*dt;state.height=Math.max(0,state.height+state.velocity*dt);
 if(state.height===0)state.velocity=0;
 return state;
}
export function startJump(state){if(state.height>.001||state.velocity>0)return false;state.velocity=6.5;return true;}
// A bicycle occupies more space than a walking character and cannot climb stairs.
export function moveBicycle(p,dx,dz){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.05)),angle=Math.atan2(dx,dz);
 for(let i=0;i<steps;i++){const x=p.x+dx/steps,z=p.z+dz/steps;let clear=true;
  for(const [side,along]of [[0,0],[-.3,-1.05],[.3,-1.05],[-.3,1.05],[.3,1.05]]){const xx=x+(Math.cos(angle)*side+Math.sin(angle)*along)/PLAN_SCALE,zz=z+(-Math.sin(angle)*side+Math.cos(angle)*along)/PLAN_SCALE;if(Math.abs(groundHeight(xx,zz,p.y)-p.y)>.001||!canMove(xx,zz,p.y,p.y)){clear=false;break;}}
  if(!clear)break;p.x=x;p.z=z;
 }return p;
}
