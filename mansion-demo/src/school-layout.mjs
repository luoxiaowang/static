export const SCHOOL_BUILDINGS=['知行楼','启智楼','明德楼','博雅楼','求真楼','致远楼','向阳楼','星河楼'].map((name,i)=>({name,x:99+(i%2)*56,z:-65+Math.floor(i/2)*19}));
export const SCHOOL_ROOMS=SCHOOL_BUILDINGS.flatMap((b,building)=>Array.from({length:4},(_,floor)=>Array.from({length:6},(_,room)=>({id:`${building+1}-${floor+1}-${room+1}`,building,floor,room,x:b.x-20+room*8,y:floor*3.6,z:b.z,name:`${b.name} · ${floor+1}层 · ${floor+1}0${room+1}教室`,students:30,teachers:1}))).flat());
export const STUDENT_SEATS=Array.from({length:30},(_,i)=>({x:(i%5-2)*1.25,z:-1.9+Math.floor(i/5)*1.03}));
export function roomAt(building,floor,room){return SCHOOL_ROOMS.find(r=>r.building===building&&r.floor===floor&&r.room===room);}

// Walkable campus, corridor decks and stairs share the same logical coordinates as the house.
export const SCHOOL_BOUNDS={x1:72,x2:190,z1:-74,z2:74};
export const SCHOOL_STAIRS=SCHOOL_BUILDINGS.flatMap((b,building)=>Array.from({length:3},(_,i)=>({building,x1:b.x+(i%2?27:25),x2:b.x+(i%2?28.6:26.6),z1:b.z-5,z2:b.z+5,base:i*3.6,height:3.6,reverse:i%2===1})));
export const SCHOOL_DECKS=SCHOOL_BUILDINGS.flatMap((b,building)=>Array.from({length:4},(_,floor)=>[
 {x1:b.x-24,x2:b.x+24,z1:b.z-5.2,z2:b.z+5.2},
 {x1:b.x-24,x2:b.x+31,z1:b.z+5,z2:b.z+8},
 {x1:b.x+24,x2:b.x+31,z1:b.z-7,z2:b.z-5},
 {x1:b.x+29,x2:b.x+31,z1:b.z-5,z2:b.z+5.2}
].map(p=>({...p,building,y:floor*3.6}))).flat());
export const SCHOOL_SOLIDS=[];
function solid(building,key,x,y,z,w,h,d){SCHOOL_SOLIDS.push({building,key,x,y,z,w,h,d,x1:x-w/2,x2:x+w/2,z1:z-d/2,z2:z+d/2});}
for(const [building,b] of SCHOOL_BUILDINGS.entries())for(let f=0;f<4;f++){
 const y=f*3.6;
 solid(building,'wall',b.x,y+1.7,b.z-5.1,48,3.4,.2);
 for(let r=0;r<=6;r++)solid(building,'wall',b.x-24+r*8,y+1.7,b.z,.18,3.4,10.2);
 for(let r=0;r<6;r++){
  const x=b.x-20+r*8;
  // A 1.6 m logical doorway at the east aisle of each classroom.
  solid(building,'wood',x-.85,y+.45,b.z+5.1,6.3,.9,.18);
  solid(building,'blue',x-.85,y+1.65,b.z+5.1,6.3,1.5,.12);
  solid(building,'wall',x+3.95,y+1.7,b.z+5.1,.1,3.4,.18);
  solid(building,'wall',x+3.1,y+2.95,b.z+5.1,1.6,.9,.18);
 }
 if(f>0){
  solid(building,'dark',b.x+3.5,y+.55,b.z+8,55,1.1,.1);
  solid(building,'dark',b.x-24,y+.55,b.z+6.6,.1,1.1,2.8);
  solid(building,'dark',b.x+31,y+.55,b.z+.5,.1,1.1,15);
  solid(building,'dark',b.x+27.5,y+.55,b.z-7,7,1.1,.1);
  solid(building,'dark',b.x+24,y+.55,b.z-6,.1,1.1,2);
 }
}
export function inSchool(x,z){return x>=SCHOOL_BOUNDS.x1&&x<=SCHOOL_BOUNDS.x2&&z>=SCHOOL_BOUNDS.z1&&z<=SCHOOL_BOUNDS.z2;}
export function schoolGround(x,z,previous=0){
 const ramps=SCHOOL_STAIRS.filter(s=>x>=s.x1&&x<=s.x2&&z>=s.z1&&z<=s.z2);
 if(ramps.length){const heights=ramps.map(s=>s.base+(s.reverse?(z-s.z1):(s.z2-z))/(s.z2-s.z1)*s.height);return heights.find(y=>Math.abs(y-previous)<.25)??NaN;}
 if(Math.abs(previous)<.12)return 0;
 return SCHOOL_DECKS.find(p=>Math.abs(p.y-previous)<.12&&x>=p.x1&&x<=p.x2&&z>=p.z1&&z<=p.z2)?.y??NaN;
}
export function schoolRoomNear(pos){return SCHOOL_ROOMS.find(r=>Math.abs(pos.y-r.y)<.15&&Math.abs(pos.x-r.x)<3.85&&pos.z>r.z-4.95&&pos.z<r.z+5.15);}
export function schoolBlocked(x,z,y){
 const radius=.13;
 if(y<2.6&&[[75,25,.4],[75,31,.4],[99,38.8,.22],[99,45.2,.22],[157,38.8,.22],[157,45.2,.22]].some(([px,pz,r])=>Math.abs(x-px)<r&&Math.abs(z-pz)<r))return true;
 for(const s of SCHOOL_SOLIDS){if(Math.abs(x-SCHOOL_BUILDINGS[s.building].x)>33||Math.abs(z-SCHOOL_BUILDINGS[s.building].z)>10)continue;if(y+1.68>s.y-s.h/2+.08&&y<s.y+s.h/2-.12&&x>s.x1-radius&&x<s.x2+radius&&z>s.z1-radius&&z<s.z2+radius)return true;}
 const room=schoolRoomNear({x,z,y});
 if(room){const dx=x-room.x,dz=z-room.z;
  if(Math.abs(dx)<1.05&&Math.abs(dz+3.7)<.5)return true;
  if(Math.abs(dx+2.4)<.4&&Math.abs(dz+3.7)<.35)return true;
  for(const s of STUDENT_SEATS)if(Math.abs(dx-s.x)<.61&&dz>s.z-.88&&dz<s.z+.42)return true;
 }
 // Railings run along each staircase, with open ends at the landings.
 for(const s of SCHOOL_STAIRS){if(z>s.z1+.02&&z<s.z2-.02){const h=s.base+(s.reverse?(z-s.z1):(s.z2-z))/10*3.6;if(Math.abs(y-h)<1.2&&(Math.abs(x-s.x1)<.13||Math.abs(x-s.x2)<.13))return true;}}
 return false;
}
