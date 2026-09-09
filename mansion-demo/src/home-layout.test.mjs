import test from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';
import {createWorld} from './world.mjs';import {canMove,movePlayer} from './navigation.mjs';import {DOORS} from './festival.mjs';import {PLAN_SCALE} from './layout.mjs';import {tintGlass} from './glazing.mjs';
const world=createWorld();
function walk(p,x,z){movePlayer(p,x-p.x,z-p.z);assert.ok(Math.hypot(p.x-x,p.z-z)<.09,`目标 ${x},${z} 实际 ${p.x},${p.z}`);}
test('卫浴关门时，上楼仍可走公共走廊进入两个卧室和阳台',()=>{
 const door=DOORS.find(d=>d.id==='bathDoor');door.open=false;door.angle=0;
 try{const p={x:8.7,y:0,z:-5};for(const [x,z]of [[8.7,-16],[9.75,-16],[9.75,-5],[6,-5],[6,-7],[0,-7],[0,-10],[0,-7],[-7,-7],[-7,-10],[-13,-10]])walk(p,x,z);assert.equal(p.y,3.6);assert.equal(canMove(6.65,-16,3.6),false);}finally{door.open=true;door.angle=1;}
});
test('常用室内门是加宽后的单扇尺度，门框外侧不可穿墙',()=>{
 for(const d of DOORS.filter(d=>d.interior)){assert.ok(d.width*PLAN_SCALE>=2.1&&d.width*PLAN_SCALE<=2.41);assert.equal(d.height,2.2);if(d.axis==='x')assert.equal(canMove(d.x+d.width/2+.3,d.z,d.y),false);}
});
test('主要观影沙发正面朝向电视，门口通道保持空旷',()=>{
 for(const [x,z,y,tx,tz]of [[-1.3,-10,0,2.75,-10],[17,1,0,20.8,1],[-5.2,-12.5,3.6,-3.2,-12.5],[-16,-11,0,-16,-17.6],[-14.3,-9.1,-3.6,-14,-12.5]]){const seat=world.seats.find(s=>s.x===x&&s.z===z&&s.y===y);assert.ok(seat);const dot=(Math.sin(seat.rotation)*(tx-x)+Math.cos(seat.rotation)*(tz-z))/Math.hypot(tx-x,tz-z);assert.ok(dot>.95);}
 for(const [x,z,y]of [[-7,-9,3.6],[0,-9,3.6],[0,-5,0],[16,6,0]])assert.ok(canMove(x,z,y));
});
test('儿童床头不再有置物架，中部活动区和侧边取书通道可行走',()=>{
 assert.ok(world.seats.some(s=>s.type==='lie'&&s.x===-.6&&s.z===-15.7));
 const p={x:0,y:3.6,z:-9};walk(p,0,-12);walk(p,-1.8,-12);walk(p,0,-12);walk(p,1.6,-12);walk(p,1.6,-15.3);
});
test('灰色玻璃保留透明度，导入玻璃同样处理但水与其他材质不受影响',()=>{
 const glass=world.mats['玻璃'];assert.equal(glass.color.getHex(),0x596167);assert.equal(glass.opacity,.38);assert.equal(glass.transparent,true);assert.equal(glass.depthWrite,false);
 const group=new T.Group(),m=new T.MeshPhysicalMaterial({name:'Window Glass',transmission:1}),other=new T.MeshStandardMaterial({name:'water',opacity:.7});group.add(new T.Mesh(new T.BoxGeometry(),m),new T.Mesh(new T.BoxGeometry(),other));tintGlass(group);assert.equal(m.opacity,.38);assert.equal(m.transmission,0);assert.equal(other.opacity,.7);
});
