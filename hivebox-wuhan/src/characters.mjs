import * as T from 'three';
import {ball,box,cylinder,beam,material} from './geometry.mjs';
import {bakeStatic} from './optimize.mjs';
import {PEOPLE} from './config.mjs';
const SKIN=0xe4b293,SHOES=0xf1eee1;
function createHead(person) {
 const head=new T.Group();
 ball(head,0,1.68,0,.235,.283,.213,SKIN);
 ball(head,0,1.87,-.042,.241,.15,.21,person.hair);
 for(const side of [-1,1]) {
  ball(head,side*.23,1.68,0,.039,.066,.035,SKIN);
  ball(head,side*.087,1.721,.191,.055,.036,.018,0xfff8e9);
  ball(head,side*.084,1.718,.208,.026,.03,.012,0x3b3026);
  ball(head,side*.083,1.719,.218,.014,.019,.007,0x171b1c);
  ball(head,side*.078-.007,1.73,.224,.008,.008,.004,0xffffff);
  const brow=ball(head,side*.087,1.776,.192,.058,.013,.018,person.hair);brow.rotation.z=-side*.1;
  ball(head,side*.125,1.645,.178,.055,.025,.015,0xd99f88);
  if(person.female) {ball(head,side*.24,1.625,.01,.02,.027,.018,0xe2c484);}
 }
 ball(head,0,1.677,.219,.034,.042,.039,SKIN);
 ball(head,0,1.603,.196,.06,.015,.014,0xa56b60);
 ball(head,0,1.609,.206,.039,.005,.008,0xffeddb);
 for(let i=0;i<7;i++) {
  const x=(i-3)*.058;const fringe=ball(head,x,1.874-Math.abs(x)*.11,.132,.074,.11,.09,person.hair);fringe.rotation.z=-.45;
 }
 if(person.style==='bob'||person.style==='long') {
  const len=person.style==='long'?.31:.19;
  ball(head,0,1.63,-.125,.24,len,.15,person.hair);
  for(const side of [-1,1]) {ball(head,side*.204,1.67,.005,.069,len,.13,person.hair);}
 }
 if(person.style==='ponytail') {
  ball(head,0,1.82,-.22,.1,.12,.09,person.accent);
  const tail=ball(head,0,1.64,-.28,.12,.26,.115,person.hair);tail.rotation.x=-.25;
 }
 if(person.glasses) {addGlasses(head);}
 bakeStatic(head);return head;
}
function addGlasses(head) {
 for(const side of [-1,1]) {
  const rim=new T.Mesh(new T.TorusGeometry(.055,.006,6,20),material(0x3e4a45));rim.scale.y=.78;rim.position.set(side*.087,1.721,.225);head.add(rim);
 }
 beam(head,[-.033,1.727,.226],[.033,1.727,.226],.004,0x3e4a45);
}
function createTorso(person) {
 const torso=new T.Group();
 cylinder(torso,0,1.48,0,.075,.085,.18,SKIN);
 ball(torso,0,1.16,0,.265,.34,.157,person.shirt);
 cylinder(torso,0,1.17,0,.235,.205,.43,person.shirt);
 box(torso,0,1.31,.15,.155,.34,.026,person.accent);
 for(const side of [-1,1]) {
  const lapel=box(torso,side*.098,1.34,.168,.1,.26,.025,person.shirt);lapel.rotation.z=side*.3;
  box(torso,side*.15,1.06,.151,.102,.02,.014,person.accent);
 }
 for(let i=0;i<3;i++) {ball(torso,.035,1.21-i*.065,.184,.012,.012,.008,0x615b4f);}
 box(torso,0,.93,.01,.39,.055,.28,person.pants);
 beam(torso,[-.075,1.46,.17],[0,1.2,.198],.009,0x90af45);
 beam(torso,[.075,1.46,.17],[0,1.2,.198],.009,0x90af45);
 box(torso,0,1.17,.205,.087,.1,.02,0xf6f5e9);
 box(torso,0,1.195,.219,.077,.02,.005,0x9cb52e);
 bakeStatic(torso);return torso;
}
function createArm(person,side) {
 const upper=new T.Group();upper.position.set(side*.285,1.39,0);upper.rotation.z=side*.08;
 ball(upper,0,-.12,0,.093,.2,.09,person.shirt);
 const lower=new T.Group();lower.position.set(0,-.29,0);
 ball(lower,0,-.10,0,.074,.145,.075,person.shirt);
 cylinder(lower,0,-.23,0,.074,.074,.035,person.accent);
 ball(lower,0,-.295,.004,.066,.088,.047,SKIN);
 ball(lower,-side*.06,-.275,.026,.029,.046,.031,SKIN);
 if(side===-1) {box(lower,0,-.229,.071,.074,.048,.025,0x374e46);}
 bakeStatic(upper);bakeStatic(lower);upper.add(lower);return {upper,lower};
}
function createLeg(person,side) {
 const upper=new T.Group();upper.position.set(side*.119,.9,0);
 cylinder(upper,0,-.175,0,.102,.086,.36,person.pants);
 const lower=new T.Group();lower.position.set(0,-.36,0);
 cylinder(lower,0,-.155,0,.085,.072,.33,person.pants);
 ball(lower,0,-.37,.054,.098,.083,.164,SHOES);
 box(lower,0,-.419,.05,.185,.032,.29,0xd1d1c6);
 for(let i=0;i<3;i++) {box(lower,0,-.316,.072+i*.025,.09,.009,.009,0xc4c7be);}
 bakeStatic(upper);bakeStatic(lower);upper.add(lower);return {upper,lower};
}
export function createPeople(scene,labelLayer) {
 return PEOPLE.map((person,index)=>{
  const root=new T.Group();root.position.set(person.x,0,person.z);root.rotation.y=person.yaw;
  const body=new T.Group();root.add(body);const head=createHead(person),torso=createTorso(person);
  body.add(head,torso);const arms=[createArm(person,-1),createArm(person,1)],legs=[createLeg(person,-1),createLeg(person,1)];
  arms.forEach(a=>body.add(a.upper));legs.forEach(l=>body.add(l.upper));
  const label=document.createElement('div');label.className='person-label';label.textContent=person.name;
  if(index===0) {label.classList.add('person-label--hero');}
  labelLayer.append(label);scene.add(root);
  return {root,body,head,arms,legs,label,person,index,moving:false,route:[],home:{x:person.x,z:person.z},animate(time,cheering=false){
   const stride=this.moving?Math.sin(time*10+index):0;
   legs.forEach((l,i)=>{l.upper.rotation.x=stride*(i===0?1:-1)*.55;l.lower.rotation.x=Math.max(0,-stride*(i===0?1:-1))*.7;});
   arms.forEach((a,i)=>{
    a.upper.rotation.x=-stride*(i===0?1:-1)*.5;
    a.upper.rotation.z=(i===0?-1:1)*(.07+(cheering?2.55+Math.sin(time*8+index)*.2:0));
    a.lower.rotation.x=cheering?-.4:-.15;
   });
   body.position.y=cheering?Math.abs(Math.sin(time*5.2+index*.8))*.38:Math.abs(stride)*.035;
   if(!this.moving&&!cheering) {
    head.rotation.y=Math.sin(time*.6+index)*.1;arms[1].lower.rotation.x=-.25-Math.max(0,Math.sin(time*1.5+index*2))*.55;
   }
  }};
 });
}
