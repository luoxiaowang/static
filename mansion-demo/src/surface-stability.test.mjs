import test from 'node:test';import assert from 'node:assert/strict';import * as T from 'three';
import {createWorld} from './world.mjs';import{lodForDistance,PROFILES}from './performance.mjs';import{stableTexture}from './surface-stability.mjs';
const world=createWorld();world.root.updateMatrixWorld(true);
test('木地板上没有同高草地，庭院铺砖不会覆盖室内',()=>{for(const [x,z]of [[-19,6],[-15,6],[15,6],[1,-6]]){const hits=new T.Raycaster(new T.Vector3(x,.2,z),new T.Vector3(0,-1,0),0,1).intersectObject(world.root,true);assert.ok(hits.length);assert.equal(hits[0].object.material.name,'浅橡木',`${x},${z} 的表面被其他材质覆盖`);const floor=hits.find(h=>h.object.material.name==='浅橡木');const grass=hits.find(h=>h.object.material.name==='草地');assert.ok(grass);assert.ok(floor.point.y-grass.point.y>=.045);}});
test('庭院仍显示石板材质',()=>{const hits=new T.Raycaster(new T.Vector3(0,.2,-1),new T.Vector3(0,-1,0),0,1).intersectObject(world.root,true);assert.equal(hits[0].object.material.name,'石板');});
test('围绕模型切换边界小幅来回移动不会反复跳档',()=>{let level=0;for(const d of [11.9,12.1,11.8,12.4,12.0,13.5]){level=lodForDistance(d,PROFILES.balanced,false,level);assert.equal(level,0);}level=lodForDistance(14,PROFILES.balanced,false,level);assert.equal(level,1);for(const d of [13,12,11,10.3]){level=lodForDistance(d,PROFILES.balanced,false,level);assert.equal(level,1);}assert.equal(lodForDistance(10,PROFILES.balanced,false,level),0);});
test('缓冲区不妨碍远距离及时使用简化模型',()=>{assert.equal(lodForDistance(100,PROFILES.balanced,false,0),2);assert.equal(lodForDistance(1,PROFILES.balanced,false,2),0);});
test('程序化水面法线启用 mipmap 和线性过滤，避免最近点采样跳变',()=>{const texture=new T.DataTexture(new Uint8Array(16*16*4),16,16);stableTexture(texture,4);assert.equal(texture.generateMipmaps,true);assert.equal(texture.minFilter,T.LinearMipmapLinearFilter);assert.equal(texture.magFilter,T.LinearFilter);assert.equal(texture.anisotropy,4);});

test('三段楼梯真实网格开口有足够头部净空',()=>{
 for(const [x,z1,z2,base,reverse]of [[9.75,-14.5,-6,0,true],[7.75,-15,-6,3.6,false],[-23.5,-17,-7,-3.6,true]]){
  for(let z=z1+.15;z<z2-.1;z+=.25){const t=(z2-z)/(z2-z1),y=base+(reverse?1-t:t)*3.6;
   const hits=new T.Raycaster(new T.Vector3(x,y+.24,z),new T.Vector3(0,1,0),0,1.44).intersectObject(world.root,true);
   assert.equal(hits.length,0,`楼梯 ${x},${z} 高度 ${y} 存在头部遮挡：${hits[0]?.object.material.name}`);
  }
 }
});
