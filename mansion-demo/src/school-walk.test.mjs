import test from 'node:test';
import assert from 'node:assert/strict';
import {createWorld} from './world.mjs';
import {movePlayer,canMove,groundHeight} from './navigation.mjs';
import {SCHOOL_BUILDINGS,SCHOOL_STAIRS,SCHOOL_ROOMS} from './school-layout.mjs';
createWorld();
function walk(p,x,z){movePlayer(p,x-p.x,z-p.z);assert.ok(Math.hypot(p.x-x,p.z-z)<.09,`target ${x},${z}; actual ${p.x},${p.y},${p.z}`);}
test('continuous house-company-school-playground-classroom round trip uses normal collision navigation',()=>{
 const p={x:0,y:0,z:19};const route=[[0,27],[0,32],[43,32],[43,18],[48,18],[62,18],[62,24],[62,28],[76,28],[90,28],[128,42],[128,8],[106.15,8],[106.15,-1],[106.15,-3.6],[106.15,-11.9]];
 for(const [x,z] of route)walk(p,x,z);for(const [x,z] of route.toReversed())walk(p,x,z);walk(p,0,19);assert.equal(p.y,0);
});
test('all 192 classrooms reachable by walking corridors and three stair flights, with descent back to campus',()=>{
 for(const [building,b] of SCHOOL_BUILDINGS.entries()){
  const p={x:77,y:0,z:28};walk(p,b.x+30,28);walk(p,b.x+30,b.z+7);
  for(let floor=0;floor<4;floor++){
   for(const r of SCHOOL_ROOMS.filter(r=>r.building===building&&r.floor===floor)){
    walk(p,r.x+3.15,b.z+7);walk(p,r.x+3.15,b.z+4.4);walk(p,r.x+3.15,b.z-3.7);walk(p,r.x+1.5,b.z-3.7);walk(p,r.x+3.15,b.z-3.7);walk(p,r.x+3.15,b.z+7);
   }
   walk(p,b.x+30,b.z+7);
   if(floor<3){const s=SCHOOL_STAIRS.find(s=>s.building===building&&s.base===floor*3.6),start=s.reverse?b.z-6:b.z+6,end=s.reverse?b.z+6:b.z-6;
    walk(p,b.x+30,start);walk(p,(s.x1+s.x2)/2,start);walk(p,(s.x1+s.x2)/2,end);assert.ok(Math.abs(p.y-(floor+1)*3.6)<1e-7);walk(p,b.x+30,end);walk(p,b.x+30,b.z+7);
   }
  }
  for(const s of SCHOOL_STAIRS.filter(s=>s.building===building).toReversed()){
   const start=s.reverse?b.z+6:b.z-6,end=s.reverse?b.z-6:b.z+6;walk(p,b.x+30,start);walk(p,(s.x1+s.x2)/2,start);walk(p,(s.x1+s.x2)/2,end);assert.ok(Math.abs(p.y-s.base)<1e-7);walk(p,b.x+30,end);walk(p,b.x+30,b.z+7);
  }
  walk(p,b.x+30,28);walk(p,77,28);assert.equal(p.y,0);
 }
});
test('school keeps walls, desks, guardrails and campus boundary; company new door only opens on ground floor',()=>{
 const r=SCHOOL_ROOMS[0];assert.equal(canMove(r.x-4,r.z,0),false);assert.equal(canMove(r.x,r.z-2.35,0),false);assert.equal(canMove(r.x+3.15,r.z+5.1,0),true);
 assert.equal(canMove(62,26,0),true);assert.equal(canMove(58,26,0),false);assert.equal(canMove(62,26,3.6),false);assert.equal(canMove(191,28,0),false);
 assert.ok(Number.isNaN(groundHeight(90,30,3.6)));assert.equal(canMove(99,0,3.6),false);
 for(const s of SCHOOL_STAIRS){const x=(s.x1+s.x2)/2,z=(s.z1+s.z2)/2,y=s.base+1.8;assert.equal(canMove(x,z,y),true);assert.equal(canMove(s.x1,z,y),false);}
});
