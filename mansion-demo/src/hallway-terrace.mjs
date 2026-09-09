import * as T from 'three';
import {ROOM_DOOR_WIDTH} from './layout.mjs';
export function hallwayMaterials(){
 const make=(name,draw)=>{const c=document.createElement('canvas');c.width=1024;c.height=512;draw(c.getContext('2d'));const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;return new T.MeshStandardMaterial({name,map,roughness:.85});};
 const wallpaper=make('走廊几何墙纸',c=>{c.fillStyle='#f6f1e7';c.fillRect(0,0,1024,512);c.strokeStyle='#b8b6a466';c.lineWidth=1.2;for(let x=-512;x<1536;x+=110){c.beginPath();c.moveTo(x,0);c.lineTo(x+320,512);c.stroke();c.beginPath();c.moveTo(x,0);c.lineTo(x-320,512);c.stroke();}for(let x=0;x<1024;x+=5){c.fillStyle='#978b7520';c.fillRect(x,0,1,512);}});
 const photos=Array.from({length:3},(_,i)=>make('走廊摄影'+i,c=>{c.fillStyle='#e2e0d7';c.fillRect(0,0,1024,512);c.fillStyle='#a6a6a0';c.fillRect(0,350,1024,162);for(let k=0;k<9;k++){const x=70+k*110,h=80+(k*71+i*89)%250;c.fillStyle=['#404644','#707774','#919792'][(k+i)%3];c.fillRect(x,350-h,80,h);c.fillStyle='#d1d3ca';for(let y=370-h;y<340;y+=24)for(let xx=x+10;xx<x+75;xx+=20)c.fillRect(xx,y,8,12);}c.strokeStyle='#f6f4e8';c.lineWidth=10;c.strokeRect(20,20,984,472);}));
 return {'走廊几何墙纸':wallpaper,...Object.fromEntries(photos.map(m=>[m.name,m]))};
}
export function addHallwayTerrace({box,cyl,ell,branch,mat,wood,oak,dark,glass,linen,lightmat,plaster,seats,obstacle,plant}){
 const paper=mat('走廊几何墙纸',0xf6f1e7),floor=mat('走廊烟熏木',0x564331),cream=mat('走廊暖白顶',0xf8f4ec);
 // Floor pieces deliberately stop at both stair voids.
 box(-1,3.618,-6,20,.03,3.8,floor);box(9.75,3.618,-5,1.5,.03,1.8,floor);box(10.75,3.618,-6,.5,.03,3.8,floor);
 for(let x=-10.8;x<8.9;x+=.45)box(x,3.636,-6,.012,.006,3.8,wood);
 box(-2,6.955,-6,18,.035,3.8,cream);box(-2,6.925,-7.75,17.8,.018,.035,lightmat);
 for(const [left,right,door]of [[-11,-3,-7],[-3,3,0]]){
  for(const [a,b]of [[left,door-ROOM_DOOR_WIDTH/2],[door+ROOM_DOOR_WIDTH/2,right]]){box((a+b)/2,5.25,-7.902,b-a,3.2,.028,paper);box((a+b)/2,3.73,-7.866,b-a,.16,.045,dark);}
  box(door,6.4,-7.902,ROOM_DOOR_WIDTH,1.2,.028,paper);
 }
 // A compact salon-style photo wall beside the child's door.
 for(let row=0;row<2;row++)for(let col=0;col<3;col++){const x=.95+col*.62,y=5.95-row*.82;box(x,y,-7.85,.53,.69,.05,dark);box(x,y,-7.812,.46,.61,.016,mat('走廊摄影'+(row+col)%3,0x9b9f96));}
 // Timber display box, mounted on the wall rather than standing in the passage.
 box(-4.5,5.25,-7.81,1.15,1.4,.12,oak);for(const x of [-5.1,-3.9])box(x,5.25,-7.68,.07,1.5,.35,wood);for(const y of [4.5,6])box(-4.5,y,-7.68,1.25,.07,.35,wood);box(-4.5,5.94,-7.62,1.05,.02,.05,lightmat);cyl(-4.5,4.68,-7.6,.12,.3,linen);ell(-4.5,4.94,-7.6,.15,.19,.12,linen);
 // East dining-room roof: flush accessible slab, fenced edges and a clear entrance lane.
 box(16,3.5,-.5,10,.2,15,mat('儿童露台石材',0xc8c1af));
 for(const z of [-7.96,6.96]){box(16,4.24,z,10,1.28,.06,glass,true);box(16,4.91,z,10,.05,.07,dark);}
 box(20.96,4.24,-.5,.06,1.28,15,glass,true);box(20.96,4.91,-.5,.07,.05,15,dark);
 for(const [z,d]of [[-7.15,1.7],[1.45,11.1]]){box(11.04,4.24,z,.06,1.28,d,glass,true);box(11.04,4.91,z,.07,.05,d,dark);}
 const mint=mat('儿童设施薄荷绿',0x88bdb0),blue=mat('滑梯晴空蓝',0x79adcb,{roughness:.35}),sand=mat('沙池细沙',0xddc794),rubber=mat('儿童软垫',0xe0b992);
 box(16,3.635,-1,6,.05,7,rubber);
 // Slide with a raised launch platform, access steps and raised side rails.
 box(17,4.82,-2.6,1.35,.12,1.25,mint);for(const x of [16.4,17.6])for(const z of [-3.1,-2.1])box(x,4.18,z,.07,1.16,.07,wood);
 for(let i=0;i<6;i++)box(17,3.7+i*.2,-4+i*.18,1,.16,.2,mint);
 const chute=box(17,4.3,-.7,1.05,.09,3.1,blue);chute.rotation.x=.38;
 for(const x of [16.4,17.6]){branch([x,4.95,-2.15],[x,3.82,.75],.075,blue);branch([x,4.85,-3.15],[x,5.45,-3.15],.045,wood);}
 obstacle(17,-1.2,1.65,5.8,3.6,1.9);
 // Sand play, toy storage, stepping pods and a shaded parent bench.
 box(14,3.83,3,2.2,.46,2.1,wood,true);box(14,4.07,3,2,.035,1.9,sand);cyl(14.4,4.2,3.2,.13,.23,blue);ell(13.6,4.12,2.6,.15,.07,.14,mint);
 box(19.3,4.05,4.9,2,.9,.65,oak,true);for(let i=0;i<4;i++){box(18.6+i*.46,4.25,5.25,.35,.4,.05,[mint,blue,rubber][i%3]);ell(18.6+i*.46,4.62,4.9,.14,.14,.14,[mint,blue,rubber][i%3]);}
 for(let i=0;i<4;i++)cyl(19,3.71,-3+i*.85,.26,.2,i%2?mint:blue);
 box(12.1,4.04,1, .65,.18,2.2,wood,true);box(11.83,4.4,1,.12,.7,2.2,wood);seats.push({x:12.1,z:1,y:3.6,rotation:Math.PI/2,type:'sit'});
 plant(12,5.7,.8,3.6);plant(20,5.8,.7,3.6);
}
