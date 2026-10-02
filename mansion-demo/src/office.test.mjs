import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {createWorld} from './world.mjs';
import {movePlayer,canMove,groundHeight} from './navigation.mjs';
import {OFFICE_FLOORS,OFFICE_STAIRS,OFFICE_DESKS,officeFloorPanels} from './office-layout.mjs';
import {Elevator} from './house-mobility.mjs';
const world=createWorld();
function walk(p,x,z){movePlayer(p,x-p.x,z-p.z);assert.ok(Math.hypot(p.x-x,p.z-z)<.09,`目标 ${x},${z}，实际 ${p.x},${p.y},${p.z}`);}
test('庭院南门经连接步道、斑马线进入公司，再原路回家',()=>{const p={x:0,y:0,z:27};for(const [x,z]of [[0,32],[43,32],[43,18],[48,18],[62,18],[48,18],[43,18],[43,32],[0,32],[0,27]])walk(p,x,z);assert.equal(p.y,0);});
test('每层办公室、工位过道、电梯厅和楼梯平台连通，五层到天台往返',()=>{
 const p={x:62,y:0,z:18};
 for(const [i,s]of OFFICE_STAIRS.entries()){
  for(const [x,z]of [[62,24],[48,24],[48,15],[62,15],[62,9.4],[65,9.4],[63,9.4]])walk(p,x,z);
  const start=s.reverse?9:23,end=s.reverse?23:9,cx=(s.x1+s.x2)/2;
  walk(p,63,start);walk(p,cx,start);walk(p,cx,end);assert.ok(Math.abs(p.y-(i+1)*3.6)<1e-8);walk(p,63,end);walk(p,62,end);walk(p,62,18);
 }
 walk(p,48,18);assert.equal(p.y,18);walk(p,62,18);
 for(const s of [...OFFICE_STAIRS].reverse()){const start=s.reverse?23:9,end=s.reverse?9:23,cx=(s.x1+s.x2)/2;walk(p,63,start);walk(p,cx,start);walk(p,cx,end);assert.ok(Math.abs(p.y-s.base)<1e-8);walk(p,63,end);}
});
test('楼板与楼梯头部净空一致，天台护栏与井道防坠',()=>{
 world.root.updateMatrixWorld(true);
 const ray=new T.Raycaster();
 for(const s of OFFICE_STAIRS)for(let i=2;i<38;i++){const z=10+i*.3,y=s.base+(s.reverse?i:40-i)*3.6/40;ray.set(new T.Vector3((s.x1+s.x2)/2,y+.16,z),new T.Vector3(0,1,0));const hit=ray.intersectObject(world.merged,true)[0];assert.ok(!hit||hit.distance>1.9,`楼梯净空 ${s.base},${z}: ${hit?.distance}`);}
 for(const y of OFFICE_FLOORS.map(f=>f.y)){assert.equal(canMove(65,7,y),false);assert.equal(canMove(70,18,y),false);assert.equal(canMove(46,10,y),false);}
 assert.equal(canMove(45,18,18),false);assert.ok(Number.isNaN(groundHeight(68.7,16,0)));
 assert.ok(officeFloorPanels().length>3);assert.equal(OFFICE_DESKS.length,30);
});
test('公司电梯六站全排列可呼梯、进舱、到站并出舱，运输期间拒绝重复请求',()=>{
 const elevator=new Elevator(OFFICE_FLOORS);
 for(const origin of OFFICE_FLOORS)for(const target of OFFICE_FLOORS){if(origin===target)continue;assert.ok(elevator.request(origin.y,target.y));assert.equal(elevator.request(origin.y,target.y),false);let arrived=false,boarded=false;for(let i=0;i<2000;i++){const event=elevator.update(.05);if(elevator.passenger)boarded=true;if(event==='arrived'){arrived=true;break;}}assert.ok(arrived&&boarded);assert.equal(elevator.y,target.y);assert.equal(elevator.phase,'idle');assert.ok(canMove(65,9.4,target.y));}
});
test('天台西侧观景点到庭院有无遮挡视线',()=>{
 const origin=new T.Vector3(47,19.65,18),target=new T.Vector3(10,1.3,14),direction=target.clone().sub(origin);
 const ray=new T.Raycaster(origin,direction.clone().normalize(),0,direction.length()-.2);
 assert.equal(ray.intersectObject(world.merged,true).filter(hit=>hit.object.material.opacity>=.9).length,0);
});
test('公司导览的六个楼层目的地均可落地',async()=>{
 const {DESTINATIONS}=await import('./guide.mjs');const destinations=DESTINATIONS.filter(d=>d.level==='office');assert.equal(destinations.length,6);for(const d of destinations)assert.ok(canMove(d.x,d.z,d.y));
});
test('员工覆盖五层，坐姿办公与走动动画有效，按距离和楼层隐藏远处人物',async()=>{
 const {createOfficeRuntime}=await import('./office-runtime.mjs');const company=createOfficeRuntime(new T.Group(),[]);
 assert.equal(company.staff.length,20);assert.equal(company.staff.filter(s=>s.desk).length,15);
 company.update(.05,1,{x:60,y:7.2,z:18});for(const s of company.staff){assert.equal(s.actor.g.visible,Math.abs(s.floor-7.2)<2.1);if(!s.desk&&s.actor.g.visible)assert.ok(canMove(s.actor.g.position.x,s.actor.g.position.z,s.floor));}
 const walker=company.staff.find(s=>!s.desk&&s.floor===7.2),before=walker.actor.g.position.clone();company.update(.05,2,{x:60,y:7.2,z:18});assert.ok(before.distanceTo(walker.actor.g.position)>.1);
 company.update(.05,3,{x:0,y:0,z:18});assert.ok(company.staff.every(s=>!s.actor.g.visible));
});
