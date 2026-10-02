import {OFFICE_FLOORS,OFFICE_STAIRS,officeFloorPanels,OFFICE_DESKS} from './office-layout.mjs';
// 外观依据 hivebox-wuhan/src/architecture.mjs：浅石材、竖向壁柱、中央幕墙、雨棚。
// 原模型为实心体块，因此重建可探索楼板和立面，保留其建筑语言。
export function addOffice(a){
 const {box,mat,branch,root}=a;
 const stone=mat('公司浅色石材',0xd8d4c7),trim=mat('公司立面线脚',0xe8e4d9),frame=mat('公司窗框',0x65737a),glass=mat('公司玻璃',0x96bdce,{transparent:true,opacity:.28,depthWrite:false,roughness:.22,metalness:.2});
 const floor=mat('公司办公地毯',0x929b98),wood=mat('公司办公桌',0xd6c6a8),dark=mat('公司办公椅',0x334a48),screen=mat('公司电脑屏幕',0x7dbeb5,{emissive:0x315d65,emissiveIntensity:.65}),light=mat('公司顶灯',0xe7f1e7,{emissive:0xd6ecdf,emissiveIntensity:.8});
 const labels=root.userData.officeLabels=[];
 box(39,-.035,18,8,.07,34,mat('公司马路',0x606967));
 box(21.5,-.025,32,43,.05,2,stone);box(44.5,-.025,18,3,.05,34,stone);
 for(let z=3;z<35;z+=4)box(39,.005,z,.12,.012,1.8,trim);
 for(let x=35.5;x<43;x+=1)box(x,.01,18,.55,.02,2.6,trim);
 box(58,-.07,18,30,.12,32,stone);
 labels.push({text:'丰巢 · 武汉研发中心',x:45.64,y:5.05,z:18,rotation:-Math.PI/2,w:11,h:1},{text:'过街 → 丰巢研发中心',x:26,y:1.7,z:32.8,w:7,h:.6},{text:'一至五楼办公 · 楼梯 / 电梯直达天台',x:48,y:2.6,z:18,rotation:-Math.PI/2,w:6,h:.5});
 for(const f of OFFICE_FLOORS){
  for(const p of officeFloorPanels())box((p.x1+p.x2)/2,f.y-.1,(p.z1+p.z2)/2,p.x2-p.x1,.2,p.z2-p.z1,f.y===18?stone:floor);
  if(f.y===18)continue;
  for(const z of [4,26]){box(58,f.y+1.8,z,24,3.6,.18,glass,true);box(58,f.y+.4,z,24,.8,.24,stone,true);}
  box(70,f.y+1.8,15,.2,3.6,22,stone,true);
  for(const [z,d]of [[9,10],[23,6]]){box(46,f.y+1.8,z,.12,3.6,d,glass,true);box(46,f.y+.4,z,.35,.8,d,stone,true);}
  if(f.y>0)box(46,f.y+1.8,17,.12,3.6,6,glass,true);
  for(const z of [4,7,10,13,14,20,23,26])box(45.85,f.y+1.8,z,.6,3.6,.3,trim,true);
  box(45.8,f.y+3.45,15,.7,.3,22.6,trim);box(70,f.y+3.45,15,.4,.3,22.6,trim);
  for(const x of [50,56,62])for(const z of [10,18,23])box(x,f.y+3.28,z,2.5,.035,.18,light);
  for(const z of [6])box(65,f.y+1.6,z,2,3.2,.08,glass,true);
  box(64,f.y+1.6,7,.08,3.2,2,glass,true);box(66,f.y+1.6,7,.08,3.2,2,glass,true);
  labels.push({text:f.name+' · 开放办公区',x:62,y:f.y+2.5,z:25.7,w:4,h:.5},{text:'电梯 ↑ 天台 / 各层',x:65,y:f.y+2.8,z:8.15,w:3,h:.45});
 }
 // 电梯正面与井道的视觉门由运行时控制，移除正面的静态封板碰撞。
 // 防坠由 officeShaft 处理，乘梯过程由状态机接管玩家。
 for(const s of OFFICE_STAIRS){
  for(let i=0;i<40;i++){const z=s.z1+(i+.5)*.3,y=s.base+(s.reverse?(i+1):40-i)*s.height/40;box((s.x1+s.x2)/2,y-.045,z,1.4,.09,.303,stone);}
  for(const x of [s.x1-.06,s.x2+.06]){
   branch([x,s.base+.9+(s.reverse?0:3.6),10],[x,s.base+.9+(s.reverse?3.6:0),22],.025,frame);
   for(let i=0;i<40;i++){const z=10+(i+.5)*.3,y=s.base+(s.reverse?(i+.5):39.5-i)*3.6/40;box(x,y+.45,z,.045,.9,.3,glass,true);}
  }
 }
 for(const d of OFFICE_DESKS){
  box(d.x,d.y+.77,d.z,2.8,.12,1.2,wood,true);
  for(const dx of [-1.15,1.15])box(d.x+dx,d.y+.36,d.z,.06,.72,.85,frame);
  box(d.x,d.y+1.22,d.z+.22,1.1,.64,.07,dark);box(d.x,d.y+1.22,d.z+.175,1,.54,.018,screen);box(d.x,d.y+.91,d.z+.22,.07,.28,.08,frame);
  box(d.x,d.y+.85,d.z-.24,.65,.035,.23,dark);box(d.x+.5,d.y+.85,d.z-.25,.09,.04,.14,dark);
  box(d.x,d.y+.48,d.z-1.05,.58,.13,.6,dark,true);box(d.x,d.y+.83,d.z-1.33,.58,.63,.09,dark,true);box(d.x,d.y+.23,d.z-1.05,.08,.45,.08,frame);
  box(d.x,d.y+.06,d.z-1.05,.7,.06,.65,frame);
 }
 // 天台电梯机房保留可进入的南向开口。
 box(65,20.7,7,2.2,.15,2.2,stone);
 for(const x of [64,66])box(x,19.3,7,.08,2.6,2,glass,true);
 box(65,19.3,6,2,2.6,.08,glass,true);
 labels.push({text:'天台电梯',x:65,y:20.5,z:8.15,w:2,h:.4});
 // 入口雨棚朝向庭院，保持玻璃入口与中轴立面的辨识度。
 box(44.2,3.35,17,4,.12,8,glass);for(const z of [13,17,21])branch([46,4.5,z],[42.3,3.35,z],.028,frame);
 for(const z of [14,20])box(45.7,9.2,z,.7,18.4,.6,trim);
 for(const z of [4,26])box(58,18.6,z,24,1.2,.08,glass,true);
 for(const x of [46,70])box(x,18.6,15,.08,1.2,22,glass,true);
 for(const z of [4,26])box(58,19.22,z,24,.06,.07,frame);
 for(const x of [46,70])box(x,19.22,15,.07,.06,22,frame);
 for(const z of [9,23]){box(51,18.25,z,4,.5,.8,stone,true);box(51,18.55,z,3.8,.25,.65,mat('公司天台绿植',0x587d56));}
 box(55,18.75,16,2,.12,1.2,wood,true);for(const x of [53,57])box(x,18.4,16,.8,.8,1,dark,true);
 labels.push({text:'天台观景 · 马路对面是家',x:46.3,y:19.1,z:17,rotation:Math.PI/2,w:6,h:.6});
}
