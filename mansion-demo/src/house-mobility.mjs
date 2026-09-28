export const LIFT={x:-17.7,z:-11.7,x1:-18.35,x2:-17.05,z1:-12.4,z2:-11,exitX:-16.6};
export const FLOORS=[{y:-3.6,name:'地下一层'},{y:0,name:'一楼'},{y:3.6,name:'二楼'},{y:7.2,name:'天台'}];
export function shaftContains(x,z,margin=0){return x>LIFT.x1-margin&&x<LIFT.x2+margin&&z>LIFT.z1-margin&&z<LIFT.z2+margin;}
export function cutLiftFloor(x,z,w,d){
 const a=x-w/2,b=x+w/2,c=z-d/2,e=z+d/2;
 if(b<=LIFT.x1||a>=LIFT.x2||e<=LIFT.z1||c>=LIFT.z2)return [{x,z,w,d}];
 const l=Math.max(a,LIFT.x1),r=Math.min(b,LIFT.x2),n=Math.max(c,LIFT.z1),s=Math.min(e,LIFT.z2),out=[];
 for(const [x1,x2,z1,z2] of [[a,l,c,e],[r,b,c,e],[l,r,c,n],[l,r,s,e]])if(x2-x1>.001&&z2-z1>.001)out.push({x:(x1+x2)/2,z:(z1+z2)/2,w:x2-x1,d:z2-z1});
 return out;
}
export class Elevator{
 constructor(){this.y=0;this.phase='idle';this.door=1;this.target=0;this.origin=0;this.passenger=false;this.boarding=0;this.exiting=0;}
 request(origin,target){if(this.phase!=='idle'||!FLOORS.some(f=>f.y===origin)||!FLOORS.some(f=>f.y===target)||origin===target)return false;this.origin=origin;this.target=target;this.boarding=this.exiting=0;this.phase=Math.abs(this.y-origin)<.001?(this.door===1?'board':'pickupOpen'):'recallClose';this.passenger=this.phase==='board';return true;}
 update(dt){dt=Math.min(.1,Math.max(0,dt));const approach=(a,b,s)=>a+Math.sign(b-a)*Math.min(Math.abs(b-a),s);
 if(this.phase==='recallClose'||this.phase==='close'){this.door=approach(this.door,0,dt*2);if(!this.door)this.phase=this.phase==='close'?'travel':'recall';}
 else if(this.phase==='recall'||this.phase==='travel'){const goal=this.phase==='recall'?this.origin:this.target;this.y=approach(this.y,goal,dt*1.8);if(this.y===goal)this.phase=this.phase==='recall'?'pickupOpen':'open';}
 else if(this.phase==='pickupOpen'){this.door=approach(this.door,1,dt*2);if(this.door===1){this.passenger=true;this.phase='board';}}
 else if(this.phase==='board'){this.passenger=true;this.boarding=Math.min(1,this.boarding+dt/.65);if(this.boarding===1)this.phase='close';}
 else if(this.phase==='open'){this.door=approach(this.door,1,dt*2);if(this.door===1)this.phase='exit';}
 else if(this.phase==='exit'){this.exiting=Math.min(1,this.exiting+dt/.65);if(this.exiting===1){this.phase='idle';this.passenger=false;return 'arrived';}}
 return null;
 }
}
export function findDismount(position,angle,canStand){for(const radius of [.55,.85,1.15])for(const offset of [Math.PI/2,-Math.PI/2,Math.PI,0]){const p={x:position.x+Math.sin(angle+offset)*radius,y:position.y,z:position.z+Math.cos(angle+offset)*radius};if(canStand(p.x,p.z,p.y))return p;}return null;}
export class FamilyControl{
 constructor(members){this.members=members;this.index=0;this.visited=new Set([0]);}
 switchTo(index,position){if(!Number.isInteger(index)||!this.members[index])return null;this.members[this.index].position={...position};this.index=index;this.visited.add(index);return {...this.members[index].position};}
}
