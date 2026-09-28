import * as T from 'three';
import {LOCKER,FIREWORK} from './config.mjs';
export const element=id=>document.getElementById(id);
export const show=(id,visible)=>{element(id).hidden=!visible;};
export function createUI(camera,people) {
 const projected=new T.Vector3(),world=new T.Vector3(),map=element('minimap'),ctx=map.getContext('2d');
 let noticeUntil=0,oldHint='';
 function notice(text,duration=4) {element('status').textContent=text;show('status',true);noticeUntil=performance.now()+duration*1000;}
 function showExploration(visible) {['toolbar','missions','map','view','crosshair'].forEach(id=>show(id,visible));show('touch-controls',visible&&matchMedia('(pointer:coarse)').matches);}
 function updateLabels(mode) {
  people.forEach(p=>{
   world.copy(p.root.position);world.y=2.32+p.body.position.y;
   projected.copy(world).project(camera);
   const distance=camera.position.distanceTo(world),visible=mode!=='terminal'&&mode!=='terminal-zoom'&&projected.z<1&&projected.z>0&&Math.abs(projected.x)<1.08&&Math.abs(projected.y)<1.05&&distance<65;
   p.label.hidden=!visible;
   if(visible) {p.label.style.transform=`translate(${(projected.x*.5+.5)*innerWidth}px,${(-projected.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`;p.label.style.zIndex=String(Math.max(1,100-Math.floor(distance)));}
  });
 }
 function drawMap(yaw) {
  const sx=x=>180+x*5.2,sz=z=>18+z*5.5;
  ctx.clearRect(0,0,360,230);ctx.fillStyle='#e2e8d7';ctx.fillRect(0,0,360,230);
  ctx.strokeStyle='#d5ddc9';ctx.lineWidth=1;for(let x=0;x<360;x+=20) {ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,230);ctx.stroke();}
  ctx.fillStyle='#a4b198';ctx.fillRect(sx(-19),0,38*5.2,20);ctx.fillStyle='#799364';ctx.fillRect(sx(-3),17,6*5.2,6);
  ctx.fillStyle='#99b743';ctx.fillRect(sx(LOCKER.x-4.3),sz(LOCKER.z),8.6*5.2,9);
  ctx.fillStyle='#b68568';ctx.beginPath();ctx.arc(sx(FIREWORK.x),sz(FIREWORK.z),5,0,Math.PI*2);ctx.fill();
  people.forEach((p,i)=>{ctx.fillStyle=i===0?'#506f25':'#8b9583';ctx.beginPath();ctx.arc(sx(p.root.position.x),sz(p.root.position.z),i===0?5:3.5,0,Math.PI*2);ctx.fill();});
  const hero=people[0].root.position;ctx.strokeStyle='#668a33';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(sx(hero.x),sz(hero.z));ctx.lineTo(sx(hero.x)-Math.sin(yaw)*12,sz(hero.z)-Math.cos(yaw)*12);ctx.stroke();
 }
 function hint(target) {
  const key=target??'';if(key===oldHint) {return;}oldHint=key;show('interaction',!!target);
  element('interaction-label').textContent=target==='locker'?'开始操作':'点燃烟花';
  element('interaction-hint').textContent=target==='locker'?'屏幕里，藏着给你的小惊喜':'等大家围好，一起看烟花';
 }
 function complete(task) {element(`mission-${task}`).classList.add('is-complete');}
 function festival(phase,count,seconds) {
  const content={fuse:['小小引线，点亮期待','伙伴们，快来集合！','引线正在燃烧 · 王金枝和大家一起跑向烟花'],gathering:['八个人，同一份快乐','等每一个伙伴就位',`已到位 ${count} / 8 人 · 围好后自动升空`],launch:['抬头，好戏要开始了','让热爱，冲上天空','烟花正在升空'],celebrating:['1024 · 这一刻，属于我们','把热爱写成光',`八位伙伴一起欢呼 · 烟花庆祝还剩 ${seconds} 秒`],returning:['快乐已送达','愿每一天，都有新的闪光','伙伴们正在返回原位 · 稍后可以再次点燃']};
  const row=content[phase];show('festival-caption',!!row);
  if(row) {element('festival-kicker').textContent=row[0];element('festival-title').textContent=row[1];element('festival-description').textContent=row[2];}
 }
 function update(mode,yaw) {updateLabels(mode);if(!element('map').hidden) {drawMap(yaw);}if(performance.now()>noticeUntil) {show('status',false);}}
 return {notice,showExploration,hint,complete,festival,update};
}
