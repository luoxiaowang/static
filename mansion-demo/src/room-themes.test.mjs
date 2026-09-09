import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWorld} from './world.mjs';
import {canMove} from './navigation.mjs';
test('主题家具保留 KTV 和儿童房入口与互动通道，并有实体碰撞',()=>{
 const world=createWorld();
 for(const [x,y,z] of [[-20,-3.6,-11.7],[-19,-3.6,-11.7],[0,3.6,-8.9],[0,3.6,-10.5]])assert.ok(canMove(x,z,y,y),`${x},${z} 应可通行`);
 assert.equal(canMove(-20.4,-10.5,-3.6,-3.6),false);
 assert.equal(canMove(2.65,-12.1,3.6,3.6),false);
 assert.ok(world.seats.some(s=>s.y===-3.6&&s.x===-20.3));
 for(const name of ['糖果点歌屏','皮卡丘黄','精灵球红','主题暖灯带'])assert.ok(world.merged.children.some(m=>m.material.name===name));
});
