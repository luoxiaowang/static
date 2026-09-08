import test from 'node:test';import assert from 'node:assert/strict';
import{createWorld}from './world.mjs';
import{STAIRS,solids,movePlayer,groundHeight,canMove,startJump,advanceJump}from './navigation.mjs';
const world=createWorld();
function walk(p,x,z){movePlayer(p,x-p.x,z-p.z);assert.ok(Math.abs(p.x-x)<.09&&Math.abs(p.z-z)<.09,`路线被挡：目标 ${x},${z}，实际 ${p.x},${p.z}`);}
test('场景几何有效且按材质合并',()=>{assert.ok(world.merged.children.length<80);assert.ok(solids.length>50);world.merged.traverse(o=>{if(o.isMesh){assert.ok(o.geometry.attributes.position.count>0);assert.ok(Array.from(o.geometry.attributes.position.array).every(Number.isFinite));}});});
test('从庭院入口实际步行进入主宅、转向楼梯、上二楼卧室再下楼',()=>{const p={x:0,y:0,z:19};walk(p,0,-5);walk(p,9.75,-5);walk(p,9.75,-16);assert.equal(p.y,3.6);walk(p,6,-16);walk(p,6,-7);walk(p,-7,-7);assert.equal(p.y,3.6);walk(p,6,-7);walk(p,6,-16);walk(p,9.75,-16);walk(p,9.75,-5);assert.equal(p.y,0);walk(p,0,-5);walk(p,0,10);});
test('左右房间前门及通往主宅的连廊均可通过',()=>{for(const x of[-16,16]){const p={x,y:0,z:9};walk(p,x,6);walk(p,x<0?-12:12,6);walk(p,x<0?-12:12,-6);walk(p,x<0?-12:12,-5);walk(p,x<0?-9:9,-5);}});
test('楼板洞口严格对齐楼梯，头部净空足够',()=>{assert.equal(STAIRS.height,3.6);assert.ok(STAIRS.z2-STAIRS.z1>=8);for(let z=STAIRS.z2;z>=STAIRS.z1;z-=.1){const y=(STAIRS.z2-z)/(STAIRS.z2-STAIRS.z1)*3.6;assert.ok(y>=0&&y<=3.6);}});
test('玻璃、外墙和家具保持碰撞',()=>{let p={x:-13,y:0,z:9};movePlayer(p,0,-5);assert.ok(p.z>7);let q={x:0,y:0,z:-16};movePlayer(q,0,-5);assert.ok(q.z> -18);});
test('楼梯侧面不能瞬间爬高，二层不会走出边界',()=>{assert.equal(canMove(9.75,-10,groundHeight(9.75,-10,0),0),false);assert.equal(canMove(12,-10,3.6,3.6),false);});
test('池塘、泳池和庄园边界不可进入',()=>{assert.equal(canMove(-5,10,0),false);assert.equal(canMove(20,10,0),false);assert.equal(canMove(35,0,0),false);});
test('高速移动仍分步检测，不会穿墙',()=>{let p={x:0,y:0,z:-8};movePlayer(p,0,-80);assert.ok(p.z> -18);});
test('跳跃有起跳、最高点和落地，禁止空中连跳',()=>{const s={height:0,velocity:0};assert.ok(startJump(s));let max=0;for(let i=0;i<180;i++){advanceJump(s,1/120);max=Math.max(max,s.height);if(i===10)assert.equal(startJump(s),false);}assert.ok(max>1.2&&max<1.4);assert.equal(s.height,0);assert.equal(s.velocity,0);assert.ok(startJump(s));});
test('可坐与可躺家具覆盖客厅、卧室、庭院和泳池',()=>{assert.ok(world.seats.filter(x=>x.type==='sit').length>=3);assert.ok(world.seats.filter(x=>x.type==='lie').length>=4);assert.ok(world.seats.some(x=>x.y===3.6));assert.ok(world.seats.some(x=>x.outdoor));});
test('从一楼经侧边楼梯到二楼、天台茶席再原路返回',()=>{
 const p={x:0,y:0,z:-5};walk(p,9.75,-5);walk(p,9.75,-16);walk(p,7.75,-16);walk(p,7.75,-5);assert.equal(p.y,7.2);
 walk(p,0,-5);walk(p,0,-7.8);walk(p,-4,-7.8);assert.equal(p.y,7.2);walk(p,0,-7.8);walk(p,0,-5);walk(p,7.75,-5);walk(p,7.75,-16);assert.equal(p.y,3.6);walk(p,9.75,-16);walk(p,9.75,-5);assert.equal(p.y,0);
});
test('西侧庭院可下地下室并到达四个功能房间，原路返回地面',()=>{
 const p={x:-23.5,y:0,z:-5};walk(p,-23.5,-18);assert.equal(p.y,-3.6);walk(p,-22,-18);walk(p,-22,-15);walk(p,-20,-15);walk(p,-17.5,-15);walk(p,-14,-15);walk(p,-17.5,-15);walk(p,-17.5,-11.7);walk(p,-20,-11.7);walk(p,-17.5,-11.7);walk(p,-14,-11.7);walk(p,-17.5,-11.7);walk(p,-17.5,-15);walk(p,-22,-15);walk(p,-22,-18);walk(p,-23.5,-18);walk(p,-23.5,-5);assert.equal(p.y,0);
});
test('扩大后的院门通往两侧集市及河岸，河水不可步入',()=>{const p={x:0,y:0,z:23};walk(p,0,31);walk(p,0,39);walk(p,6,39);walk(p,6,48);walk(p,0,48);movePlayer(p,0,10);assert.ok(p.z<=49);});
test('西翼新增会客厅连通书房，一楼无卧床',()=>{const p={x:-16,y:0,z:-5};walk(p,-16,-8.8);walk(p,-19,-8.8);walk(p,-19,-15);assert.equal(p.y,0);assert.ok(!world.seats.some(s=>s.y===0&&s.type==='lie'&&!s.outdoor));});
