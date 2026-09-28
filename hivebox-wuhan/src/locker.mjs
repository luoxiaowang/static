import * as T from 'three';
import {box,beam,sign,canvasTexture,glowMaterial,cylinder} from './geometry.mjs';
import {LOCKER,FIREWORK} from './config.mjs';
import {bakeStatic} from './optimize.mjs';
export function createLocker(scene) {
 const group=new T.Group();group.position.set(LOCKER.x,0,LOCKER.z);scene.add(group);
 box(group,0,1.77,0,8.7,3.54,1.1,0x50614b);
 box(group,0,.14,.04,8.9,.28,1.3,0x71806a);
 for(const x of [-3.35,-1.8,1.8,3.35]) {createDoors(group,x);}
 box(group,0,1.78,.58,1.25,3.16,.13,0xb4cd2b);
 box(group,0,3.35,.58,8.85,.17,.17,glowMaterial(0xf9ffdf,.65));
 box(group,0,3.54,0,8.9,.13,1.27,0x4c604a);
 sign(group,'丰巢',0,2.98,.67,1.04,.3,'#243c25','#c1d734',120);
 box(group,0,1.94,.7,.73,1.16,.1,0x273c35);
 const screen=new T.Mesh(new T.PlaneGeometry(.64,1.04),new T.MeshBasicMaterial({map:createScreenTexture()}));
 screen.position.set(0,1.94,.761);group.add(screen);
 box(group,0,1.2,.7,.44,.055,.06,0x354238);
 box(group,.12,1.35,.7,.15,.14,.06,0x283e36);
 sign(group,'便捷取寄 · 温暖相伴',0,.81,.661,1.02,.25,'#faffdf',null,67);
 sign(group,'丰 巢',2.8,2.61,.687,2.16,.55,'#253b24',null,120);
 sign(group,'智能快递柜',2.8,2.23,.687,2.15,.27,'#eff9cb',null,75);
 sign(group,'丰巢 · 随时为你守候',-2.65,3.01,.687,2.5,.27,'#f6fddd',null,70);
 for(const [x,y,r] of [[-3.7,2.5,.26],[-2.7,1.7,.35],[-1.7,.8,.24],[1.45,2.7,.23],[2.4,1.2,.43],[3.6,.6,.25]]) {addHexagon(group,x,y,r);}
 bakeStatic(group);return group;
}
function createDoors(group,x) {
 const sizes=[.49,.41,.31,.31,.31,.43,.66];let y=.29;
 for(let i=0;i<sizes.length;i++) {
  const h=sizes[i];box(group,x,y+h/2,.59,1.5,h-.024,.14,i%2===0?0xa6c82a:0xb0ce2a);
  box(group,x+.67,y+h/2,.672,.075,.027,.012,0x738d25);y+=h;
 }
}
function addHexagon(group,x,y,r) {
 for(let i=0;i<6;i++) {
  const a=i*Math.PI/3,b=(i+1)*Math.PI/3;
  beam(group,[x+Math.cos(a)*r,y+Math.sin(a)*r,.679],[x+Math.cos(b)*r,y+Math.sin(b)*r,.679],.014,0xd7e832);
 }
}
export function createScreenTexture() {
 return canvasTexture(480,780,(c,w,h)=>{
  c.fillStyle='#1ba894';c.fillRect(0,0,w,h);c.fillStyle='#f6f7ed';c.fillRect(0,0,w,300);
  c.fillStyle='#3d6653';c.font='bold 25px sans-serif';c.fillText('丰巢',22,39);
  c.fillStyle='#559e37';c.font='bold 49px sans-serif';c.fillText('空调清洗季',25,121);
  c.fillStyle='#536c5c';c.font='20px sans-serif';c.fillText('清除灰尘污垢  高温杀菌消毒',25,162);
  c.fillStyle='#8aba4a';c.beginPath();c.arc(368,226,53,0,Math.PI*2);c.fill();
  const cards=[['储物下单',15,318,215,135],['存被开门',248,318,215,135],['取快递',15,470,215,180],['寄快递',248,470,215,180]];
  cards.forEach(([text,x,y,cw,ch],i)=>{c.fillStyle=i===2?'#fff0cc':'#eff7e9';c.fillRect(x,y,cw,ch);c.fillStyle='#85b544';c.fillRect(x+cw/2-24,y+25,48,40);c.fillStyle='#355446';c.font='bold 29px sans-serif';c.textAlign='center';c.fillText(text,x+cw/2,y+ch-24);});
  c.fillStyle='#ecf4e8';c.fillRect(15,668,448,75);c.fillStyle='#355446';c.font='22px sans-serif';c.fillText('便民服务 · 温暖生活',240,714);
 });
}
export function createFireworkProp(scene) {
 const group=new T.Group();group.position.set(FIREWORK.x,0,FIREWORK.z);scene.add(group);
 box(group,0,.38,0,.88,.76,.88,0xad4e45);
 box(group,0,.1,0,.97,.08,.97,0xcaa36b);
 for(const x of [-.26,0,.26]) {for(const z of [-.26,0,.26]) {cylinder(group,x,.82,z,.11,.11,.22,0x685344);cylinder(group,x,.937,z,.078,.078,.009,0x282b28);}}
 sign(group,'1024',0,.46,.451,.8,.31,'#ffe9a7','#ad4e45',130);
 sign(group,'一起，绽放',0,.22,.452,.72,.18,'#ffe9a7',null,100);
 beam(group,[.4,.54,0],[1.04,.2,.15],.016,0x827656);
 const marker=new T.Mesh(new T.RingGeometry(1.25,1.29,64),new T.MeshBasicMaterial({color:0xb7c764,transparent:true,opacity:.5,side:T.DoubleSide}));
 marker.rotation.x=-Math.PI/2;marker.position.y=.015;group.add(marker);
 bakeStatic(group);return group;
}
