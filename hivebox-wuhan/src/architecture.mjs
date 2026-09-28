import * as T from 'three';
import {box,beam,sign,material,canvasTexture,glowMaterial} from './geometry.mjs';
const STONE=0xd8d4c7,TRIM=0xe8e4d9,FRAME=0x65737a;
export function createBuilding(scene) {
 const group=new T.Group();scene.add(group);
 const glassTexture=canvasTexture(256,512,(c,w,h)=>{
  const sky=c.createLinearGradient(0,0,w,h);sky.addColorStop(0,'#b4cfde');sky.addColorStop(.45,'#6e8fa2');sky.addColorStop(.51,'#a7c3ce');sky.addColorStop(1,'#506c7f');c.fillStyle=sky;c.fillRect(0,0,w,h);
  c.fillStyle='#eff7f5';c.globalAlpha=.17;for(let i=0;i<5;i++) {c.fillRect(i*70-80,0,24,h);}
 });
 const glass=new T.MeshStandardMaterial({map:glassTexture,metalness:.42,roughness:.24,color:0xcadfe7});
 box(group,0,17.4,-7.5,38.5,34.8,15,STONE);
 // 中轴抬高，浅色石材竖柱与连续玻璃幕墙形成参考建筑的主要轮廓。
 box(group,0,18.2,-7.15,13.6,36.4,15.1,TRIM);
 box(group,0,19.7,.47,8.25,30.3,.15,glass);
 for(let x=-4;x<=4;x+=1.33) {box(group,x,19.7,.6,.045,30.4,.09,FRAME);}
 for(let y=4.9;y<35;y+=1.5) {box(group,0,y,.62,8.3,.055,.1,FRAME);}
 for(const side of [-1,1]) {
  for(const x0 of [9.2,13.05,16.9]) {for(let row=0;row<10;row++) {createWindow(group,side*x0,1.7+row*3.3,glass);}}
  for(const x0 of [6.9,11.15,15.05,19]) {box(group,side*x0,17.2,.75,.68,34.4,1.25,TRIM);}
  box(group,side*5.25,18,.88,.85,35.6,1.35,TRIM);
  for(let y=4.25;y<35;y+=3.3) {box(group,side*12.8,y,.81,12.7,.27,.95,STONE);}
  for(let y=8;y<34;y+=3.3) {createLouver(group,side*6.1,y);}
 }
 [4.6,7.7,27.7,34.6].forEach(y=>box(group,0,y,.9,39.1,.36,1.7,TRIM));
 box(group,0,36.4,.75,14.25,.45,1.6,TRIM);
 // 石材接缝是轻微的真实结构细节，避免整面墙成为单一大色块。
 for(let y=1;y<34;y+=1.1) {box(group,0,y,.025,38.4,.017,.025,0xb8b9af);}
 createEntrance(group,glass);
 sign(group,'丰巢 · 武汉研发中心',0,8.4,1.86,12.5,1,'#30453c','#e4e1d5',78);
 sign(group,'让每一份期待，都有回响',0,3.8,1.11,5.9,.45,'#f1f3dc',null,64);
 createWings(group,glass);
 return group;
}
function createWindow(group,x,y,glass) {
 box(group,x,y,.11,3.1,2.55,.15,0x455b69);
 box(group,x,y,.21,2.87,2.32,.07,glass);
 for(const dx of [-1.48,0,1.48]) {box(group,x+dx,y,.3,.06,2.5,.09,FRAME);}
 box(group,x,y-.4,.3,3,.055,.08,FRAME);
 box(group,x,y+1.28,.35,3.23,.1,.45,TRIM);
 box(group,x,y-1.29,.32,3.23,.13,.4,STONE);
}
function createLouver(group,x,y) {
 box(group,x,y,.59,.77,2.1,.15,0x45535b);
 for(let j=0;j<11;j++) {box(group,x,y-.95+j*.18,.7,.73,.045,.09,0x929d9d);}
}
function createEntrance(group,glass) {
 box(group,0,2,0,7,4,.5,0x324b51);
 box(group,0,1.92,.42,5.2,3.84,.1,glass);
 for(const x of [-2.65,-1.35,0,1.35,2.65]) {box(group,x,1.92,.56,.08,3.9,.12,0xb4bcba);}
 for(const x of [-.18,.18]) {box(group,x,1.5,.72,.04,.65,.07,0xe3e4d9);}
 box(group,0,.07,1.4,7.9,.14,3,0xbdbdb3);
 box(group,0,.06,3.1,3.2,.1,2.1,0x738168);
 const canopy=new T.MeshPhysicalMaterial({color:0xa1c1b8,transparent:true,opacity:.68,metalness:.2,roughness:.15,side:T.DoubleSide});
 box(group,0,4.65,1.8,8.3,.15,4.2,canopy);
 for(const x of [-4,-2,0,2,4]) {box(group,x,4.5,1.8,.075,.17,4.3,FRAME);beam(group,[x,6.2,.7],[x,4.64,3.8],.035,FRAME);}
 box(group,0,4.53,3.85,8.4,.18,.14,FRAME);
 const warm=glowMaterial(0xffe5aa,1.2);
 for(const x of [-3.2,0,3.2]) {box(group,x,4.48,1.8,.75,.035,.3,warm);}
 for(const x of [-4.6,4.6]) {box(group,x,2.1,.7,.55,4.2,.8,TRIM);}
}
function createWings(group,glass) {
 for(const side of [-1,1]) {
  const wing=new T.Group();wing.position.set(side*28,0,-13);wing.rotation.y=side*-.18;group.add(wing);
  box(wing,0,8,0,15,16,12,0xc1c3b8);
  for(let row=0;row<5;row++) {for(let col=-2;col<=2;col++) {box(wing,col*2.8,1.8+row*3,6.04,2.2,1.95,.1,glass);}}
  box(wing,0,16,0,15.5,.35,12.5,0xe3e2d5);
 }
}
