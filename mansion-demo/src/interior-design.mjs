import {ROOM_DOOR_WIDTH,BALCONY_DOOR_WIDTH} from './layout.mjs';
import * as T from 'three';
export const ROOM_LIGHTS=[[-7,-12,3.6],[0,-12,3.6],[5,-14,3.6],[-16,0,0],[-16,-13,0],[16,0,0],[15,-5.3,0],[0,-10,0],[-6,-14,0],[5,-13,0],[-20,-16,-3.6],[-14,-16,-3.6],[-20,-10,-3.6],[-14,-10,-3.6],[-17,20,0]];
export function addInteriorDesign(a){
 const {box,ell,cyl,branch,mat,wood,oak,linen,dark,glass,plaster,lightmat,architecture,seats,obstacle,sofa,table,chair,books,plant,rug}=a;
 const ceramic=mat('卫浴白瓷',0xf2eee5,{roughness:.25}),steel=mat('卫浴五金',0x9da9ac,{roughness:.2,metalness:.8}),tile=mat('卫浴灰石',0xb6c1bf,{roughness:.35}),fabric=mat('收纳织物',0x83958a),pink=mat('玩具粉',0xe7b2b9),yellow=mat('玩具黄',0xe8bb57);
 // All cabinetry is backed by physical colliders; accessories remain nonblocking.
 function cabinet(x,z,w,y=0,h=1.1,d=.55){box(x,y+h/2,z,w,h,d,oak,true);for(let i=0;i<Math.ceil(w/.55);i++){const xx=x-w/2+(i+.5)*w/Math.ceil(w/.55);box(xx,y+h/2,z+d/2+.012,.015,h-.08,.015,dark);box(xx+.10,y+h*.65,z+d/2+.03,.12,.025,.03,steel);}}
 function shelf(x,z,w,y,h=1.8,toys=false,rotation=0){const first=architecture.children.length;box(x,y+h/2,z,w,h,.12,wood);for(const xx of [x-w/2,x+w/2])box(xx,y+h/2,z+.2,.06,h,.5,oak);for(let k=0;k<4;k++){box(x,y+.1+k*h/4,z+.2,w,.06,.5,oak);for(let i=0;i<5;i++){const xx=x-w*.38+i*w*.19;if(toys){ell(xx,y+.25+k*h/4,z+.22,.1,.12,.09,i%2?pink:yellow);box(xx,y+.15+k*h/4,z+.22,.16,.06,.17,fabric);}else box(xx,y+.28+k*h/4,z+.2,.08,.28,.23,[fabric,linen,wood][i%3]);}}if(rotation){const group=new T.Group();for(const mesh of architecture.children.slice(first)){mesh.position.x-=x;mesh.position.z-=z;group.add(mesh);}group.position.set(x,0,z);group.rotation.y=rotation;architecture.add(group);}obstacle(x+Math.sin(rotation)*.2,z+Math.cos(rotation)*.2,rotation?.5:w,rotation?w:.5,y,h);}
 // Private bathroom, sealed to the ceiling and separated from both stairs.
 box(4.85,3.617,-13.5,3.5,.03,8.8,tile);
 box(6.65,5.3,-13.5,.15,3.4,9,plaster,true);
 for(const [a,b]of [[3,5-ROOM_DOOR_WIDTH/2],[5+ROOM_DOOR_WIDTH/2,6.65]])box((a+b)/2,5.3,-9,b-a,3.4,.15,plaster,true);
 box(5,6.4,-9,ROOM_DOOR_WIDTH,1.2,.15,plaster,true);
 // Walk-in shower at the south end, transparent screen with a wide open side.
 box(4.2,3.63,-10.25,1.65,.06,1.7,tile);box(5.02,4.6,-10.6,.035,2,1,glass,true);
 branch([3.22,4.6,-10],[3.22,6.1,-10],.025,steel);branch([3.22,6.1,-10],[3.8,6.1,-10],.025,steel);cyl(3.8,6.08,-10,.19,.035,steel);cyl(3.75,3.67,-10.25,.08,.015,dark);
 // Front-loading washer, circular glass hatch and laundry basket.
 cabinet(3.85,-12.1,1,3.6,.95,.85);box(3.85,4.08,-11.66,.92,.85,.025,ceramic);const hatch=cyl(3.85,4.05,-11.625,.28,.035,steel);hatch.rotation.x=Math.PI/2;const drum=cyl(3.85,4.05,-11.60,.21,.035,dark);drum.rotation.x=Math.PI/2;box(3.9,4.4,-11.61,.29,.09,.03,dark);
 for(let i=0;i<3;i++)box(3.85,4.6+i*.075,-12.1,.65,.065,.4,i%2?linen:fabric);
 cyl(3.9,3.91,-10,.23,.6,fabric);for(let i=0;i<4;i++)box(3.9,4.21+i*.055,-10,.34,.05,.28,linen);
 box(3.18,5.1,-12.5,.05,.7,.8,steel);for(let z of [-12.7,-12.3])box(3.25,4.8,z,.045,.6,.28,linen);
 // Bed head at the north wall; side-wall storage leaves the middle open.
 box(-.6,3.81,-15.7,2.4,.42,3.8,oak,true);box(-.6,4.055,-15.7,2.3,.07,3.7,mat('榻榻米草编',0xb8b68a));box(-.6,4.17,-15.7,2.05,.17,3.5,linen);
 for(const x of [-1.38,-.6,.18]){box(x,3.81,-13.775,.7,.27,.025,wood);box(x,3.84,-13.75,.15,.02,.025,dark);}
 seats.push({x:-.6,z:-15.7,y:3.6,rotation:0,type:'lie'});
 shelf(-2.83,-11.8,2.6,3.6,1.8,false,Math.PI/2);shelf(2.83,-12.1,2.4,3.6,1.2,true,-Math.PI/2);
 table(1.85,-17.2,1.5,.8,3.6);chair(1.85,-16.5,Math.PI,3.6);box(1.85,4.43,-17.2,.42,.025,.3,linen);
 // Main bedroom: conversation corner, exercise area and a dressing bench.
 sofa(-5.2,-12.5,Math.PI/2,3.6);table(-4,-12.5,.7,1.35,3.6);
 box(-3.2,4.05,-12.5,.4,.9,2,wood,true);box(-3.2,5.15,-12.5,.07,1,1.65,dark);box(-3.245,5.15,-12.5,.015,.91,1.53,mat('电视画面',0x739591));plant(-3.7,-17,.7,3.6);
 box(-9.4,3.72,-12,1.1,.24,2,dark,true);box(-9.4,3.86,-12,.85,.035,1.75,fabric);
 for(const x of [-9.86,-8.94])branch([x,3.85,-12.85],[x,4.8,-12.85],.035,steel);box(-9.4,4.8,-12.85,1,.05,.06,steel);box(-9.4,4.94,-12.88,.55,.25,.045,dark);
 for(const z of [-15.2,-14.6]){branch([-4.25,3.88,z],[-3.65,3.88,z],.035,steel);for(const x of [-4.23,-3.67])ell(x,3.88,z,.12,.14,.14,dark);}rug(-4,-16,1.4,2,3.6);
 // A flat west roof terrace, with no rail across the bedroom doorway.
 box(-16,3.50,-6,10,.20,26,mat('阳台防滑石',0xb9b4a3));
 for(const z of [-18.95,6.95]){box(-16,4.17,z,10,1.15,.06,glass,true);box(-16,4.77,z,10,.05,.08,dark);}
 box(-20.95,4.17,-6,.06,1.15,26,glass,true);box(-20.95,4.77,-6,.08,.05,26,dark);
 for(const [z,d] of [[(-19-10-BALCONY_DOOR_WIDTH/2)/2,9-BALCONY_DOOR_WIDTH/2],[(-10+BALCONY_DOOR_WIDTH/2+7)/2,17-BALCONY_DOOR_WIDTH/2]]){box(-11.05,4.17,z,.06,1.15,d,glass,true);box(-11.05,4.77,z,.08,.05,d,dark);}
 table(-16,-6,2.1,1.1,3.6);chair(-16,-4.9,Math.PI,3.6);chair(-16,-7.1,0,3.6);seats.push({x:-16,z:-4.9,y:3.6,rotation:Math.PI,type:'sit'});
 for(const [x,z] of [[-20,-17],[-20,5],[-12,5]])plant(x,z,1.1,3.6);
 cyl(-16,4.46,-6,.12,.16,ceramic);for(const x of [-16.4,-15.6])cyl(x,4.42,-6,.07,.1,ceramic);
 sofa(-18,1,Math.PI,3.6);table(-18,-.2,1.3,.7,3.6);
 // Furnished edges keep the existing central circulation clear on every floor.
 cabinet(19,-5.5,2.2);shelf(19,-6.4,2.6,0,2.25);plant(20,4,.9);
 cabinet(-18,5.9,3);cabinet(-19,-16.9,2,0,1.1);
 cabinet(3.5,-17.4,2.1);plant(3,-5.3,.65);cabinet(18,5.8,3.2);
 shelf(-12,-18.1,1.2,-3.6,2);cabinet(-12.1,-8.1,1.2,-3.6,1);
 for(const [x,z,y]of [[19,-5.5,0],[-18,5.9,0],[3.5,-17.4,0],[-12.1,-8.1,-3.6]]){cyl(x,y+1.2,z,.11,.22,ceramic);branch([x,y+1.25,z],[x+.13,y+1.65,z],.015,wood);ell(x+.13,y+1.65,z,.17,.09,.08,fabric);}
 for(const [x,z,y]of ROOM_LIGHTS){box(x,y+3.02,z,1.4,.07,.6,dark);box(x,y+2.975,z,1.3,.025,.5,lightmat);}
 for(const x of [-20,-12])for(const z of [-15,-5,5]){box(x,3.98,z,.16,.65,.16,dark);box(x,4.25,z,.18,.15,.18,lightmat);}
}
