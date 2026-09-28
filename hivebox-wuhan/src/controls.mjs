import * as T from 'three';
import {moveWithCollision,distance,canStand,navigationRoute} from './simulation.mjs';
import {TERMINAL,FIREWORK} from './config.mjs';
export function createControls(canvas,hero,getMode,onInteract,onNotice) {
 const keys=new Set(),stick={x:0,y:0};let yaw=0,pitch=.16,route=[],pointer=null;
 const clear=()=>{keys.clear();stick.x=0;stick.y=0;pointer=null;resetJoystick();};
 function look(dx,dy) {yaw-=dx*.004;pitch=T.MathUtils.clamp(pitch-dy*.003,-1.1,1.15);}
 canvas.addEventListener('pointerdown',event=>{
  if(getMode()!=='explore'||event.button!==0) {return;}
  canvas.focus({preventScroll:true});pointer={id:event.pointerId,x:event.clientX,y:event.clientY};canvas.setPointerCapture(event.pointerId);
 });
 canvas.addEventListener('pointermove',event=>{
  if(!pointer||pointer.id!==event.pointerId||getMode()!=='explore') {return;}
  look(event.clientX-pointer.x,event.clientY-pointer.y);pointer.x=event.clientX;pointer.y=event.clientY;
 });
 const release=()=>{pointer=null;};canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.addEventListener('lostpointercapture',release);
 window.addEventListener('keydown',event=>{
  if(getMode()!=='explore') {return;}
  if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(event.code)) {event.preventDefault();keys.add(event.code);route=[];}
  if(event.repeat) {return;}
  if(event.code==='KeyE') {onInteract();}
  if(event.code==='Escape') {route=[];clear();onNotice('已停止自动行走');}
 });
 window.addEventListener('keyup',event=>keys.delete(event.code));window.addEventListener('blur',clear);
 document.addEventListener('visibilitychange',()=>{if(document.hidden) {clear();}});
 const joystick=document.querySelector('#joystick'),knob=document.querySelector('#joystick-knob');let stickId=null;
 function resetJoystick() {stickId=null;stick.x=0;stick.y=0;knob.style.transform='none';}
 function updateJoystick(event) {
  const rect=joystick.getBoundingClientRect(),dx=event.clientX-rect.x-rect.width/2,dy=event.clientY-rect.y-rect.height/2;
  const len=Math.hypot(dx,dy),scale=Math.min(1,29/(len||1));stick.x=dx*scale/29;stick.y=dy*scale/29;knob.style.transform=`translate(${dx*scale}px,${dy*scale}px)`;route=[];
 }
 joystick.addEventListener('pointerdown',event=>{if(getMode()!=='explore') {return;}stickId=event.pointerId;joystick.setPointerCapture(stickId);updateJoystick(event);});
 joystick.addEventListener('pointermove',event=>{if(event.pointerId===stickId) {updateJoystick(event);}});
 ['pointerup','pointercancel','lostpointercapture'].forEach(type=>joystick.addEventListener(type,resetJoystick));
 function update(dt) {
  hero.moving=false;if(getMode()!=='explore') {return;}
  let x=0,z=0;
  if(route.length) {
   const target=route[0],d=distance(hero.root.position,target);
   if(d<.16) {hero.root.position.x=target.x;hero.root.position.z=target.z;route.shift();if(!route.length) {yaw=0;pitch=-.02;onNotice('已到达，点击下方按钮或按 E 开始');}return;}
   x=(target.x-hero.root.position.x)/d;z=(target.z-hero.root.position.z)/d;yaw=Math.atan2(-x,-z);
  } else {
   const forward=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'))-stick.y;
   const strafe=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+stick.x;
   x=-Math.sin(yaw)*forward+Math.cos(yaw)*strafe;z=-Math.cos(yaw)*forward-Math.sin(yaw)*strafe;
   const magnitude=Math.hypot(x,z);if(magnitude>1) {x/=magnitude;z/=magnitude;}
  }
  if(Math.hypot(x,z)>.03) {
   const before=hero.root.position.clone();moveWithCollision(hero.root.position,x*3.1*dt,z*3.1*dt);
   hero.moving=before.distanceTo(hero.root.position)>.001;hero.root.rotation.y=Math.atan2(x,z);
  }
 }
 function cameraPose() {
  const eye=new T.Vector3(hero.root.position.x,1.71,hero.root.position.z);
  let radius=4.8;
  while(radius>.65&&!canStand(eye.x+Math.sin(yaw)*radius,eye.z+Math.cos(yaw)*radius)) {radius-=.15;}
  const position=eye.clone().add(new T.Vector3(Math.sin(yaw)*radius,1.15-pitch*3,Math.cos(yaw)*radius));position.y=Math.max(.6,position.y);
  return {position,target:eye.clone().add(new T.Vector3(-Math.sin(yaw),pitch*1.5,-Math.cos(yaw)))};
 }
 function navigate(destination) {
  clear();const target=destination==='locker'?TERMINAL:{x:FIREWORK.x,z:FIREWORK.z+2.3};
  route=navigationRoute(hero.root.position,target);
 }
 return {update,cameraPose,navigate,clear,stop(){route=[];clear();},resetView(){yaw=0;pitch=.16;},get isNavigating(){return route.length>0;},get yaw(){return yaw;}};
}
