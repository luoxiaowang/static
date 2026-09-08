import {test} from 'node:test';
import assert from 'node:assert/strict';
import {joystickAxes,createJoystick} from './mobile-controls.mjs';
import {resolveQuality,PROFILES} from './performance.mjs';
import {mobileSettings} from './asset-queue.mjs';
test('摇杆死区、半速、方向与超范围限制',()=>{
 assert.equal(joystickAxes(2,2,40).right,0);
 const half=joystickAxes(22.4,0,40);assert.ok(Math.abs(half.right-.5)<1e-10);
 assert.equal(joystickAxes(0,-100,40).forward,1);
 assert.equal(joystickAxes(-100,0,40).right,-1);
 const diagonal=joystickAxes(100,100,40);assert.ok(Math.abs(Math.hypot(diagonal.right,diagonal.forward)-1)<1e-10);assert.ok(diagonal.forward<0);
});
test('摇杆独占触点，松开、取消和失去捕获后归零',()=>{
 const handlers={},pad={dataset:{},capture:null,addEventListener:(t,f)=>handlers[t]=f,getBoundingClientRect:()=>({left:0,top:0,width:100,height:100}),setPointerCapture(id){this.capture=id;},hasPointerCapture(id){return this.capture===id;},releasePointerCapture(){this.capture=null;}},thumb={style:{}};
 const stick=createJoystick(pad,thumb);const event=(id,x=90)=>({pointerId:id,clientX:x,clientY:50,button:0,preventDefault(){}});
 for(const release of ['pointerup','pointercancel','lostpointercapture']){
  handlers.pointerdown(event(1));assert.equal(stick.state.right,1);
  handlers.pointerdown(event(2,0));handlers.pointermove(event(2,0));handlers.pointerup(event(2));assert.equal(stick.state.right,1);
  handlers[release](event(1));assert.equal(stick.state.right,0);assert.equal(pad.capture,null);
 }
 handlers.pointerdown(event(1));stick.reset();handlers.pointermove(event(1));assert.equal(stick.state.right,0);
});
test('移动画质更清晰、像素预算受限，桌面参数不变',()=>{
 for(const tier of Object.keys(PROFILES))assert.deepEqual(resolveQuality(tier,mobileSettings(1440,false),1440,900),PROFILES[tier]);
 const flow=resolveQuality('flow',mobileSettings(390,true),390,844);assert.equal(flow.pixelRatio,1.35);assert.equal(flow.ao,false);assert.equal(flow.reflectionInterval,Infinity);assert.ok(flow.near>PROFILES.flow.near);
 const tablet=resolveQuality('high',mobileSettings(1200,true),1200,1600);assert.ok(1200*1600*tablet.pixelRatio**2<=2400001);
});
