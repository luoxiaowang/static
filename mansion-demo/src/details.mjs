import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
export function addDetails(a){
 const{box,ell,cyl,branch,mat,wood,oak,linen,dark,plaster,lightmat,glass,architecture,root,roofs,obstacle,seats}=a;
 const ceramic=mat('象牙瓷',0xece9de,{roughness:.2}),steel=mat('拉丝不锈钢',0x919b9d,{metalness:.88,roughness:.24}),blackglass=mat('电器面板',0x151d20,{metalness:.35,roughness:.1}),bronze=mat('黄铜',0xa08b55,{metalness:.8,roughness:.27});
 function round(x,y,z,w,h,d,m,r=.08,parent=architecture){let o=new T.Mesh(new RoundedBoxGeometry(w,h,d,4,r),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 function vessel(x,y,z,r=.15,h=.4,m=ceramic){const points=[];for(let i=0;i<=12;i++){const t=i/12;points.push(new T.Vector2(r*(.65+Math.sin(t*Math.PI)*.35)*(t>.8?.7:1),t*h));}const o=new T.Mesh(new T.LatheGeometry(points,24),m);o.position.set(x,y,z);o.castShadow=true;architecture.add(o);}
 function pendant(x,z,width=3,y=2.85){box(x,y,z,width,.075,.14,dark);box(x,y-.044,z,width-.07,.018,.09,lightmat);for(let s of [-1,1])cyl(x+s*width*.37,(y+3.3)/2,z,.009,3.3-y,dark);}
 function light(x,y,z,intensity=30,size=4){const l=new T.PointLight(0xffdab0,intensity,size,2);l.position.set(x,y,z);root.add(l);}
 function tableware(x,y,z){cyl(x,y,z,.18,.018,ceramic);cyl(x,y+.013,z,.13,.007,ceramic);cyl(x+.29,y+.075,z-.12,.06,.15,glass);box(x-.25,y+.016,z,.024,.016,.28,steel);box(x+.23,y+.016,z,.018,.016,.25,steel);}
 // Solid plaster and stone volumes balance the transparent garden-facing facades.
 for(const x of [-21,21])box(x,1.7,3.8,.23,3.4,3.6,plaster,true);
 for(const x of [-20,20])box(x,1.7,7,1.8,3.4,.22,plaster,true);
 box(10.93,5.3,-15.4,.22,3.4,5.2,plaster,true);
 box(-7,5.3,-18,7.5,3.4,.23,plaster,true);
 // First-floor coffee bar replaces the guest bed.
 round(4.9,.5,-16.5,3.9,1,1.1,wood,.06);obstacle(4.9,-16.5,3.9,1.1,0,1);
 round(4.9,1.05,-16.5,4.1,.1,1.25,ceramic,.04);
 round(4.1,1.4,-16.6,.8,.6,.5,blackglass,.04);
 for(const x of [3.85,4.35]){cyl(x,1.16,-16.2,.08,.15,ceramic);box(x,1.5,-16.3,.12,.05,.15,steel);}
 for(const x of [4,5,6]){cyl(x,.67,-14.9,.28,.12,wood);cyl(x,.32,-14.9,.035,.65,steel);cyl(x,.04,-14.9,.25,.05,steel);seats.push({x,z:-14.9,y:0,rotation:Math.PI,type:'sit'});}
 pendant(4.9,-16.5,3.5);
 box(2.8,1.85,-10,.08,1.6,2.8,dark);box(2.75,1.85,-10,.025,1.46,2.65,mat('电视画面',0x739591,{emissive:0x315653,emissiveIntensity:.5}));
 round(2.9,.32,-10,.65,.64,3.3,wood,.05);obstacle(2.9,-10,.65,3.3,0,.7);
 // Detailed dining tables, ceramics and black linear lighting.
 for(let x of [13.7,15,16.3])for(let z of [-5.65,-4.95])tableware(x,.822,z);
 vessel(15,.82,-5.3,.17,.45);for(let i=0;i<5;i++)branch([15,.98,-5.3],[15+Math.sin(i)*.25,1.6+Math.cos(i)*.1,-5.3+Math.cos(i)*.2],.008,wood);
 pendant(15,-5.3,3.5);light(15,2.4,-5.3,22,9);pendant(-6,-13.6,3.4);light(-6,2.5,-14.5,25,9);pendant(-17,1,2.4);
 // Kitchen: cabinet reveals and brass handles, sink, curved mixer, induction stove,
 // oven, extractor, coffee machine, fridge handles and worktop objects.
 for(let x=-9.5;x<=-4.5;x+=.85){box(x,.46,-16.225,.025,.8,.015,dark);box(x+.25,.77,-16.2,.30,.018,.018,dark);}
 round(-8,.98,-16.9,1.05,.035,.65,steel,.045);round(-8,1.0,-16.9,.88,.022,.5,blackglass,.05);
 const faucet=new T.Mesh(new T.TorusGeometry(.17,.022,10,24,Math.PI),steel);faucet.position.set(-8,1.25,-17.14);architecture.add(faucet);cyl(-8.17,1.13,-17.14,.025,.26,steel);cyl(-7.83,1.2,-17.14,.023,.1,steel);
 round(-5.2,1,-16.9,1.35,.03,.75,blackglass,.035);for(let x of [-5.6,-4.8])for(let z of [-16.7,-17.1]){const ring=new T.Mesh(new T.TorusGeometry(.13,.006,6,24),steel);ring.rotation.x=Math.PI/2;ring.position.set(x,1.021,z);architecture.add(ring);}
 box(-5.2,.47,-16.19,1.05,.65,.07,blackglass);box(-5.2,.66,-16.12,.8,.035,.035,steel);box(-5.2,2.65,-16.9,1.6,.13,.9,steel);box(-5.2,2.96,-17,.45,.55,.45,steel);
 round(-6.85,1.23,-16.9,.42,.52,.42,blackglass,.035);box(-6.85,1.4,-16.65,.3,.12,.025,steel);vessel(-6.85,1.0,-16.57,.065,.12);

 vessel(-6,1,-13.6,.3,.16,wood);for(let i=0;i<5;i++)ell(-6+Math.sin(i)*.15,1.18,-13.6+Math.cos(i)*.15,.09,.09,.09,mat('水果',0xdca252));
 for(let x of [-7.3,-6,-4.7]){round(x,.6,-12.3,.48,.09,.48,dark,.07);for(let dx of [-.17,.17])for(let dz of [-.17,.17])box(x+dx,.3,-12.3+dz,.035,.6,.035,dark);obstacle(x,-12.3,.5,.5,0,.65);}
 // Office desk with screen, laptop, keyboard, task lamp and cup.
 round(-17,.85,1,2.2,.07,1.1,oak,.06);box(-17.25,1.27,.73,.86,.5,.045,dark);box(-17.25,1.28,.759,.8,.44,.015,mat('屏幕',0x455f61,{emissive:0x1a3538,emissiveIntensity:.15}));box(-17.25,1.0,.72,.06,.28,.06,dark);round(-17.25,.9,.78,.42,.025,.25,dark,.02);round(-17.25,.908,1.14,.65,.023,.22,dark,.02);
 for(let i=0;i<12;i++)for(let j=0;j<3;j++)box(-17.54+i*.05,.925,1.07+j*.05,.036,.008,.035,mat('键帽',0x86918a));
 round(-16.48,.9,1.04,.4,.035,.28,steel,.015);const laptop=box(-16.48,1.04,.89,.4,.28,.025,dark);laptop.rotation.x=-.2;vessel(-17.83,.9,1.24,.065,.12);
 cyl(-18,.94,.66,.12,.04,bronze);branch([-18,.95,.66],[-18,1.65,.66],.018,dark);ell(-18,1.67,.76,.2,.08,.16,dark);light(-18,1.52,.8,2,2.5);
 // Large framed ink landscape, TV console and lounge detailing.
 box(20.84,1.8,1,.06,1.3,2.3,dark);box(20.8,1.8,1,.025,1.17,2.15,blackglass);
 round(20.2,.35,1,.9,.7,3.5,wood,.06);obstacle(20.2,1,.9,3.5,0,.7);
 for(let x of [-.6,0,.6]){vessel(x,.81,-12.5,.12,.25);}
 box(0,2,-17.32,2.6,1.3,.08,wood);box(0,2,-17.265,2.45,1.15,.02,ceramic);
 for(let i=0;i<7;i++){const peak=ell(-1+i*.3,1.9+Math.sin(i)*.1,-17.24,.32,.22+Math.sin(i)*.08,.013,mat('水墨画',0x717c75));}
 // Ensuite bathroom on the east upper landing, with screen and unobstructed south entry.
 const base=3.6;
 box(5,base+.02,-16,3.5,.04,3.5,plaster);
 round(4.7,base+.34,-16.7,2.35,.67,1.05,ceramic,.22);round(4.7,base+.69,-16.7,1.96,.025,.73,mat('浴缸内水',0x6f8c84,{metalness:.2,roughness:.1}),.2);obstacle(4.7,-16.7,2.35,1.05,base,.7);
 cyl(5.93,base+.58,-16.7,.025,1.16,steel);branch([5.93,base+1.16,-16.7],[5.65,base+1.16,-16.7],.025,steel);
 round(3.7,base+.72,-14.2,1,.15,.65,ceramic,.09);box(3.7,base+.36,-14.2,.95,.7,.6,wood);obstacle(3.7,-14.2,1,.65,base,.8);box(3.12,base+1.55,-14.2,.05,1.05,.8,steel);
 round(4.8,base+.24,-14.3,.48,.48,.65,ceramic,.14);round(4.8,base+.51,-14.3,.48,.06,.63,ceramic,.16);box(4.8,base+.68,-14.6,.48,.55,.15,ceramic);obstacle(4.8,-14.3,.5,.7,base,.95);
 // Master wardrobe, bedside tables and reading sconces.
 for(let z of [-16.8,-15.6,-14.4]){box(-10.55,4.9,z,.55,2.6,1.15,wood,true);box(-10.24,4.9,z,.03,.6,.025,bronze);}
 for(let x of [-9,-5]){round(x,3.91,-14.5,.65,.62,.62,oak,.05);vessel(x,4.23,-14.5,.09,.2,bronze);ell(x,4.52,-14.5,.18,.19,.18,linen);light(x,4.5,-14.5,3,4);}
 // Pool sun loungers and low garden benches.
 for(let z of [10,12.8,15.6]){
  let g=new T.Group();architecture.add(g);g.position.set(15.1,0,z);g.rotation.y=-Math.PI/2;
  round(0,.39,0,.86,.15,2.2,wood,.04,g);round(0,.51,.38,.81,.15,1.4,linen,.07,g);let back=round(0,.83,-.64,.81,.15,.95,linen,.07,g);back.rotation.x=-.55;
  for(let x of [-.33,.33])for(let zz of [-.75,.8])box(x,.18,zz,.06,.36,.06,dark,false,g);
  obstacle(15.1,z,2.2,.86,0,.9);seats.push({x:15.1,z,y:0,rotation:-Math.PI/2,type:'lie',outdoor:true});
 }
 round(-10,.43,18,3,.14,.62,wood,.045);for(let x of [-11,-9])box(x,.2,18,.09,.4,.48,dark);seats.push({x:-10,z:18,y:0,rotation:0,type:'sit'});
 // Pergola by the tea deck, horizontal roof slats and privacy screen.
 for(let x of [4.5,11.5])for(let z of [9.6,14.4])box(x,1.5,z,.10,3,.10,dark,true);
 box(8,3,9.6,7.2,.16,.14,wood,false,roofs);box(8,3,14.4,7.2,.16,.14,wood,false,roofs);
 for(let x=4.5;x<=11.5;x+=.28)box(x,3.12,12,.085,.18,5,wood,false,roofs);
 for(let x=17;x<=25;x+=.16)box(x,.85,21,.055,1.7,.12,wood);box(21,.32,21,8.2,.06,.14,dark);
 // Recessed warm lights along facades and cornices.
 for(let x of [-20,-12,12,20]){box(x,2.6,7.08,.06,.34,.08,dark);light(x,2.4,7.3,4,4);}
 for(let x of [-16,0,16]){const z=x===0?-10:0;light(x,2.6,z,24,11);}
}
