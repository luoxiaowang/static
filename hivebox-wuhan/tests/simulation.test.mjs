import test from 'node:test';
import assert from 'node:assert/strict';
import {advanceFestival,canInteract,canStand,moveWithCollision,ringPosition,distance,crowdRoute,navigationRoute,isSegmentClear} from '../src/simulation.mjs';
import {FIREWORK,PEOPLE,FESTIVAL_DURATION,FUSE_DURATION,LAUNCH_DURATION} from '../src/config.mjs';
test('八名角色姓名唯一，性别和主角正确',()=>{
 assert.equal(new Set(PEOPLE.map(p=>p.name)).size,8);
 assert.equal(PEOPLE[0].name,'王金枝');assert.equal(PEOPLE.filter(p=>p.female).length,5);
});
test('碰撞阻止穿过柜机和大楼，允许沿立面滑动',()=>{
 const p={x:-14,z:6};moveWithCollision(p,0,-20);assert.ok(p.z>3.8);
 const start=p.x;moveWithCollision(p,1,-1);assert.ok(p.x>start);
 assert.equal(canStand(0,-1),false);assert.equal(canStand(5,13),false);
});
test('八个围圈位置均可站立且没有重复',()=>{
 const ring=PEOPLE.map((_,i)=>ringPosition(i));
 ring.forEach(p=>{assert.ok(canStand(p.x,p.z));assert.ok(Math.abs(distance(p,FIREWORK)-4.6)<.001);});
 assert.equal(new Set(ring.map(p=>`${p.x},${p.z}`)).size,8);
});
test('集合未完成绝不发射；引线、升空和十秒庆祝严格顺序',()=>{
 let s={phase:'fuse',elapsed:0};
 s=advanceFestival(s,FUSE_DURATION-.01,true,false);assert.equal(s.phase,'fuse');
 s=advanceFestival(s,.02,false,false);assert.equal(s.phase,'gathering');
 s=advanceFestival(s,30,false,false);assert.equal(s.phase,'gathering');
 s=advanceFestival(s,.01,true,false);assert.equal(s.phase,'launch');
 s=advanceFestival(s,LAUNCH_DURATION,false,false);assert.equal(s.phase,'celebrating');
 s=advanceFestival(s,FESTIVAL_DURATION-.01,false,false);assert.equal(s.phase,'celebrating');
 s=advanceFestival(s,.02,false,false);assert.equal(s.phase,'returning');
 s=advanceFestival(s,1,false,false);assert.equal(s.phase,'returning');
 s=advanceFestival(s,.01,false,true);assert.equal(s.phase,'idle');
});
test('远处、柜机操作中和烟花进行中不能重复交互',()=>{
 assert.equal(canInteract('explore','idle',{x:5,z:15},FIREWORK),true);
 assert.equal(canInteract('explore','idle',{x:0,z:30},FIREWORK),false);
 assert.equal(canInteract('terminal','idle',{x:5,z:15},FIREWORK),false);
 assert.equal(canInteract('explore','fuse',{x:5,z:15},FIREWORK),false);
});
test('跨中心集合路径生成侧向避让点',()=>{
 assert.ok(crowdRoute({x:5,z:6},{x:5,z:18}).length>=2);
 assert.equal(crowdRoute({x:0,z:4},{x:0,z:12}).length,1);
});
test('全部伙伴集合及归位路径均不穿过实体障碍',()=>{
 PEOPLE.forEach((person,index)=>{
  const home=index===0?{x:5,z:15.3}:{x:person.x,z:person.z};
  for(const [from,to] of [[home,ringPosition(index)],[ringPosition(index),home]]) {
   let current={...from};
   for(const target of crowdRoute(from,to)) {
    const start={...current};
    for(let i=0;i<=100;i++) {const t=i/100;assert.ok(canStand(start.x+(target.x-start.x)*t,start.z+(target.z-start.z)*t),`${person.name} 路径进入障碍`);}
    current={...target};
   }
  }
 });
});

test('任意广场角落到柜机或烟花的导航避开树池、柜体和烟花',()=>{
 const starts=[{x:27,z:30},{x:-27,z:30},{x:-14,z:1},{x:5,z:10},{x:0,z:25}];
 const targets=[{x:-14,z:5.2},{x:5,z:15.3}];
 starts.forEach(from=>targets.forEach(to=>{
  const route=navigationRoute(from,to);assert.deepEqual(route.at(-1),to);
  let previous=from;route.forEach(point=>{assert.ok(isSegmentClear(previous,point));previous=point;});
 }));
});
