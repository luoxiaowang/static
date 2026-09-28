import * as T from 'three';
import {box,ball,cylinder,beam,material,canvasTexture,sign,glowMaterial} from './geometry.mjs';
export function createLandscape(scene) {
 const group=new T.Group();scene.add(group);
 const paving=canvasTexture(512,512,(c,w,h)=>{
  c.fillStyle='#c3c7bd';c.fillRect(0,0,w,h);
  for(let y=0;y<8;y++) {for(let x=0;x<4;x++) {
   const shade=185+Math.floor(Math.random()*17);c.fillStyle=`rgb(${shade+5},${shade+8},${shade})`;c.fillRect(x*128+(y%2)*64-64,y*64,126,62);
  }}
 });
 paving.wrapS=paving.wrapT=T.RepeatWrapping;paving.repeat.set(20,17);
 const ground=box(group,0,-.18,12,105,.32,95,new T.MeshStandardMaterial({map:paving,roughness:.96}));ground.castShadow=false;
 box(group,0,-.04,35.8,100,.16,1.2,0xb7b9ad);
 box(group,0,-.1,43,110,.15,13,0x777f7e);
 for(let x=-48;x<49;x+=7) {box(group,x,.001,44,3,.015,.18,0xede9c9);}
 for(const x of [-22.5,22.5]) {box(group,x,-.018,17,2.1,.04,35,0x8d9786);}
 for(const x of [-25,25]) {for(const z of [4,17,29]) {createTree(group,x,z);}}
 for(const side of [-1,1]) {
  for(const z of [10.5,23.5]) {createBench(group,side*25,z);createLamp(group,side*22,z);}
  createFlowerBed(group,side*10,1.1,7);
  box(group,side*31,.11,12,5,.2,43,0x8d9e74);
  for(let z=-5;z<32;z+=2.1) {ball(group,side*30.8,.7,z,1,.8,1.3,0x688057);}
 }
 for(let x=-21;x<23;x+=3) {if(Math.abs(x)>5) {cylinder(group,x,.38,32,.11,.15,.76,0x66716b,12);}}
 sign(group,'丰巢武汉研发中心',-19.6,1.25,1.3,3.4,.75,'#eaf0d5','#53694e',90);
 return group;
}
function createTree(group,x,z) {
 box(group,x,.14,z,2.25,.28,2.25,0xc0bfb1);
 box(group,x,.29,z,2,.03,2,0x747458);
 cylinder(group,x,1.9,z,.12,.23,3.3,0x766452);
 for(let i=0;i<5;i++) {
  const a=i*2.4;beam(group,[x,2.1,z],[x+Math.cos(a)*.9,3.4,z+Math.sin(a)*.85],.075,0x766452);
  ball(group,x+Math.cos(a)*.95,3.7+(i%2)*.5,z+Math.sin(a)*.85,1.28,1.5,1.25,[0x718d62,0x859c68,0x8da972,0x617f58,0x97aa76][i]);
 }
 ball(group,x,4.9,z,1.35,1.15,1.25,0x94aa76);
}
function createBench(group,x,z) {
 for(const sx of [-.9,.9]) {box(group,x+sx,.3,z,.14,.6,.75,0x526358);}
 for(let j=0;j<4;j++) {box(group,x,.62,z-.32+j*.2,2.4,.12,.15,0x9a8160);}
 box(group,x,1.01,z-.4,2.4,.54,.1,0x9a8160);
}
function createLamp(group,x,z) {
 cylinder(group,x,1.5,z,.055,.09,3,0x43594b);
 box(group,x,3,z,.58,.12,.4,0x43594b);
 box(group,x,2.92,z,.45,.04,.3,glowMaterial(0xffe4aa,.8));
}
function createFlowerBed(group,x,z,width) {
 box(group,x,.23,z,width,.46,1.3,0xb4b6a4);
 box(group,x,.48,z,width-.15,.05,1.15,0x6c7050);
 for(let i=0;i<width*5;i++) {
  const px=x-width/2+.12+i*.2,pz=z+Math.sin(i*5)*.3;
  ball(group,px,.67,pz,.23,.3,.26,0x57724a);
  if(i%2===0) {ball(group,px,.9,pz,.13,.09,.13,[0xd9b469,0xcd8c8b,0xede2b3][i%3]);}
 }
}
