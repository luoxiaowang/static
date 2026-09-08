import * as T from 'three';
export function addAmenities(a){
 const {box,cyl,mat,wood,linen,dark,glass,plaster,architecture,root,seats,obstacle}=a;
 // The garage opens toward the entrance; the driveway replaces the west planting strip.
 box(-17,-.025,20,8,.05,8,plaster);
 for(const x of [-21,-13])box(x,1.65,20,.2,3.3,8,plaster,true);
 box(-17,1.65,16,8,3.3,.2,plaster,true);
 box(-17,3.4,20,8.6,.18,8.6,dark);box(-17,3.25,24,8.3,.1,.12,wood);
 box(-17,.005,27,5,.04,6,plaster);
 // Detailed stationary SUV: cabin, wheel arches, tyres, hubs, grille and lamps.
 const paint=mat('越野车漆',0x3d514b,{metalness:.72,roughness:.23}),rubber=mat('轮胎',0x202424),chrome=mat('车身饰件',0x929fa1,{metalness:.9,roughness:.22});
 box(-17,.8,20,2.15,.65,4.5,paint);box(-17,1.5,19.8,1.92,.85,2.65,paint);
 box(-17,1.62,21.14,1.73,.53,.035,glass);box(-17,1.62,18.45,1.73,.53,.035,glass);
 for(const x of [-18.0,-16.0]){box(x,1.63,19.8,.03,.51,2.2,glass);box(x,1.62,19.7,.05,.57,.06,dark);box(x,1.19,20.3,.04,.04,.2,chrome);}
 for(const x of [-18.13,-15.87])for(const z of [18.55,21.4]){let wheel=cyl(x,.54,z,.49,.27,rubber);wheel.rotation.z=Math.PI/2;let hub=cyl(x+(x<-17?-.15:.15),.54,z,.26,.035,chrome);hub.rotation.z=Math.PI/2;}
 box(-17,.72,22.29,1.1,.32,.045,dark);for(let x=-17.45;x<-16.5;x+=.15)box(x,.72,22.32,.045,.27,.035,chrome);
 for(const x of [-17.78,-16.22])box(x,.95,22.28,.4,.16,.05,mat('车灯',0xffefcc,{emissive:0xffd590,emissiveIntensity:.5}));
 box(-17,.46,22.28,2.25,.17,.12,chrome);for(const x of [-17.73,-16.27])box(x,1.98,19.8,.055,.06,2.8,dark);
 obstacle(-17,20,2.5,4.8,0,2.1);
 const swings=[];root.userData.swings=swings;
 function swing(id,x,z,y){
  for(const side of [-1,1])box(x+side*1.4,y+1.45,z,.09,2.9,.09,dark,true);
  box(x,y+2.9,z,3,.10,.12,wood);
  const pivot=new T.Group();pivot.position.set(x,y+2.8,z);root.add(pivot);
  box(0,-2.22,0,1.8,.12,.65,wood,false,pivot);box(0,-2.08,0,1.72,.18,.6,linen,false,pivot);box(0,-1.77,-.28,1.72,.55,.10,linen,false,pivot);
  for(const dx of [-.8,.8])box(dx,-1.1,0,.018,2.2,.018,dark,false,pivot);
  const seat={x,z,y,rotation:0,type:'sit',swingId:id};seats.push(seat);swings.push({id,pivot,seat,position:new T.Vector3()});
 }
 swing('roof',2,-7.2,7.2);swing('garden',-9.5,22,0);
}
