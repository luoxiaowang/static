import {hallwayMaterials} from './hallway-terrace.mjs';
import * as T from 'three';
export function createWallMaterials(){
 const texture=(draw,w=1024,h=768)=>{const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;draw(canvas.getContext('2d'),w,h);const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;return map;};
 function ellipse(c,x,y,rx,ry,color,angle=0){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,angle,0,Math.PI*2);c.fill();}
 const paper=texture((c,w,h)=>{c.fillStyle='#f7eddd';c.fillRect(0,0,w,h);for(let x=0;x<w;x+=8){c.strokeStyle=x%24?'#eee4d530':'#d6c3a035';c.beginPath();c.moveTo(x,0);c.lineTo(x,h);c.stroke();}for(let y=0;y<h;y+=6){c.fillStyle='#ffffff20';c.fillRect(0,y,w,1);}});
 const mural=texture((c,w,h)=>{
  const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#cfebed');g.addColorStop(1,'#fff2cb');c.fillStyle=g;c.fillRect(0,0,w,h);
  for(let i=0;i<8;i++){ellipse(c,90+i*275,690,330,130,i%2?'#b1d1ac':'#d3e0b4');ellipse(c,100+i*280,95+(i%2)*90,85,30,'#fffaf0');}
  c.fillStyle='#466c62';c.font='bold 50px sans-serif';c.fillText('宝可梦 · 一起去冒险',110,340);c.font='25px sans-serif';c.fillText('每一天，都有新的发现',115,393);
  // Pikachu silhouette, black-tipped ears, red cheeks and lightning tail.
  const x=1260,y=442;c.save();c.translate(x,y);c.fillStyle='#e8b72b';c.beginPath();c.moveTo(135,50);c.lineTo(240,-40);c.lineTo(220,50);c.lineTo(295,15);c.lineTo(265,110);c.lineTo(150,145);c.closePath();c.fill();
  ellipse(c,0,100,104,120,'#f7d64d');ellipse(c,0,-10,112,95,'#ffe269');
  for(const s of [-1,1]){ellipse(c,s*65,-131,24,102,'#ffe269',s*.27);ellipse(c,s*84,-204,20,32,'#343a3a',s*.27);ellipse(c,s*40,-24,12,18,'#343a3a');ellipse(c,s*37,-29,4,6,'#fff');ellipse(c,s*78,16,21,16,'#e67962');ellipse(c,s*65,205,45,24,'#f7d64d');}
  ellipse(c,0,-2,6,4,'#343a3a');c.strokeStyle='#76523f';c.lineWidth=4;c.beginPath();c.moveTo(-22,29);c.quadraticCurveTo(-10,42,0,30);c.quadraticCurveTo(12,43,24,28);c.stroke();c.restore();
  for(const [bx,by,r] of [[1750,530,68],[865,595,45],[1940,200,40]]){ellipse(c,bx,by,r,r,'#fff9ee');c.fillStyle='#e9887e';c.beginPath();c.arc(bx,by,r,Math.PI,Math.PI*2);c.fill();c.fillStyle='#536b69';c.fillRect(bx-r,by-4,r*2,8);ellipse(c,bx,by,r*.24,r*.24,'#536b69');ellipse(c,bx,by,r*.15,r*.15,'#fff9ee');}
 },2048,768);
 const art=texture((c,w,h)=>{c.fillStyle='#faf2e5';c.fillRect(0,0,w,h);ellipse(c,710,190,115,115,'#d7ad7a');for(let i=0;i<4;i++){c.fillStyle=['#d2d9c4','#aebdad','#7f9c92','#52766d'][i];c.beginPath();c.moveTo(0,h);for(let x=0;x<=w;x+=8)c.lineTo(x,360+i*100+Math.sin(x*.007+i)*85);c.lineTo(w,h);c.fill();}c.fillStyle='#f6efdf';c.font='28px serif';c.fillText('山居 · 四季',65,690);});
 const botanical=texture((c,w,h)=>{c.fillStyle='#fcf4e8';c.fillRect(0,0,w,h);for(let i=0;i<5;i++){c.strokeStyle='#96815f';c.lineWidth=7;c.beginPath();c.moveTo(500,690);c.quadraticCurveTo(500+i*35,400,170+i*150,130);c.stroke();for(let j=0;j<4;j++)ellipse(c,240+i*115+(j%2?40:-35),220+j*100,65,24,['#b1bda3','#819c89','#cabd96'][i%3],i*.5-.8);}c.fillStyle='#6b7a66';c.font='28px serif';c.fillText('叶影 · 慢时光',65,690);});
 const material=(name,map)=>new T.MeshStandardMaterial({name,map,roughness:.88});
 return {...hallwayMaterials(),'暖白织纹墙纸':material('暖白织纹墙纸',paper),'宝可梦墙布':material('宝可梦墙布',mural),'山居挂画':material('山居挂画',art),'植物挂画':material('植物挂画',botanical)};
}
export function addWallDecor({box,mat}){
 const paper=mat('暖白织纹墙纸',0xf7eddd),pokemon=mat('宝可梦墙布',0xd8ece7),frame=mat('挂画浅橡木框',0xc1a17b),art=mat('山居挂画',0xb3c9b3),leaf=mat('植物挂画',0xbacbb6);
 // Panels sit on solid walls and leave all doors and windows unobstructed.
 box(-3.105,5.3,-13,.025,3.2,9.8,paper);box(3.105,5.3,-13.5,.025,3.2,8.7,paper);
 box(2.895,5.3,-13,.025,3.2,9.6,paper);box(2.875,5.3,-14.45,.015,3.2,5.7,pokemon);box(-2.895,5.3,-13,.025,3.2,9.6,paper);
 box(-20.8,1.72,3.8,.024,3.2,3.5,paper);box(20.8,1.72,3.8,.024,3.2,3.5,paper);
 box(-13.2,-1.95,-12.905,3.5,3.1,.025,paper);box(-20.6,-1.95,-13.105,3.5,3.1,.025,paper);
 function picture(x,y,z,w,h,side=false,m=art){box(x,y,z,side?.065:w+.12,h+.12,side?w+.12:.065,frame);box(x+(side?.043:0),y,z+(side?0:.043),side?.018:w,h,side?w:.018,m);}
 box(-3.14,5.7,-15.35,.065,1.02,1.47,frame);box(-3.183,5.7,-15.35,.018,.9,1.35,leaf);
 picture(-20.73,1.9,3.8,1.8,1.15,true);
 // Right-wall artworks face inward (toward negative x).
 box(20.70,1.9,3.8,.06,1.28,1.92,frame);box(20.657,1.9,3.8,.018,1.15,1.8,leaf);
 picture(-13.2,-1.8,-12.86,1.45,.9,false,art);
 picture(3.5,1.9,-17.45,1.35,.9,false,leaf);
}
