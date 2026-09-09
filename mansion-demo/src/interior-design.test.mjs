import test from 'node:test';import assert from 'node:assert/strict';
import {createWorld} from './world.mjs';import {movePlayer,canMove,groundHeight} from './navigation.mjs';import {DOORS,doorBlocks,toggleDoor} from './festival.mjs';import {ROOM_LIGHTS} from './interior-design.mjs';
createWorld();
function walk(p,x,z){movePlayer(p,x-p.x,z-p.z);assert.ok(Math.hypot(p.x-x,p.z-z)<.09,`通道被挡：${x},${z} 实际 ${p.x},${p.z}`);}
test('独立卧室门默认打开，走廊分别进房，主卧连通屋顶阳台并原路返回',()=>{
 const p={x:6,y:3.6,z:-7};walk(p,0,-7);walk(p,0,-9);walk(p,0,-7);walk(p,-7,-7);walk(p,-7,-10);walk(p,-9,-10);walk(p,-13,-10);walk(p,-16,-10);assert.equal(p.y,3.6);walk(p,-13,-10);walk(p,-9,-10);walk(p,-7,-10);walk(p,-7,-7);
 assert.equal(canMove(-21.1,-10,3.6),false);assert.equal(groundHeight(-16,-10,7.2),Number.NaN);
});
test('房门关闭阻止穿越、开门恢复，开启的门扇本身也不可穿透',()=>{
 for(const id of ['masterDoor','childDoor','bathDoor']){const door=DOORS.find(d=>d.id===id);assert.equal(door.open,true);assert.equal(doorBlocks(door.x,door.z,3.6),false);assert.equal(toggleDoor(id,{x:door.x,z:door.z,y:3.6}),false);door.open=false;door.angle=0;assert.equal(doorBlocks(door.x,door.z,3.6),true);door.open=true;door.angle=1;assert.equal(doorBlocks(door.x-door.width/2,door.z-door.width*.5,3.6),true);}
});
test('卫浴隔墙、家具、灯具与可使用的榻榻米齐备',()=>{
 const world=createWorld();assert.equal(canMove(6.65,-12,3.6),false);assert.equal(canMove(3.85,-12.1,3.6),false);assert.ok(world.seats.some(s=>s.x===-.6&&s.z===-15.7&&s.type==='lie'));
 const p={x:5,y:3.6,z:-7};walk(p,5,-9.7);walk(p,5.7,-9.7);walk(p,5.7,-10.9);
 assert.ok(ROOM_LIGHTS.some(r=>r[2]===-3.6));assert.ok(ROOM_LIGHTS.filter(r=>r[2]===3.6).length>=3);
});
