import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {PLAN_SCALE} from './layout.mjs';
import {SCHOOL_BUILDINGS,SCHOOL_ROOMS,STUDENT_SEATS,roomAt} from './school-layout.mjs';
// All 192 classrooms have their own instance transforms. Only the visited interior is drawn.
export function createSchool(scene){
 const root=new T.Group();root.name='向阳小学';scene.add(root);
 const cube=new T.BoxGeometry(1,1,1),sphere=new T.SphereGeometry(1,8,6),dummy=new T.Object3D();
 const mats=Object.fromEntries(Object.entries({wall:0xeee6d3,wood:0xb98c59,green:0x416d57,blue:0x608eae,skin:0xe9b38e,hair:0x343835,white:0xfff7df,track:0xab6452,dark:0x425660}).map(([k,color])=>[k,new T.MeshStandardMaterial({color,roughness:.88})]));
 function box(parent,key,x,y,z,w,h,d){const m=new T.Mesh(cube,mats[key]);m.position.set(x,y,z);m.scale.set(w,h,d);parent.add(m);return m;}
 function sign(parent,text,x,y,z,w=6,h=.7,bg='#e9e1ca',fg='#284a40'){const c=document.createElement('canvas');c.width=1024;c.height=256;const ctx=c.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle=fg;ctx.font='bold 68px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';text.split('\n').forEach((line,i,lines)=>ctx.fillText(line,512,128+(i-(lines.length-1)/2)*85,990));const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:texture}));m.position.set(x,y,z);parent.add(m);return m;}
 box(root,'green',128,-.24,-1,116,.3,152);box(root,'wall',128,-.06,-1,110,.12,148);
 // Walkway joins the company east forecourt without crossing the original road or river.
 box(root,'wood',74,-.02,23,10,.1,4);box(root,'wood',128,.02,7,108,.1,3);
 box(root,'track',128,.04,42,94,.12,58);
 const track=new T.Group();root.add(track);
 for(let i=0;i<6;i++){const pts=[];const rx=44-i*1.2,rz=26-i*1.2;for(let j=0;j<=120;j++){const a=j/120*Math.PI*2;pts.push(new T.Vector3(128+rx*Math.cos(a),.12,42+rz*Math.sin(a)));}track.add(new T.Line(new T.BufferGeometry().setFromPoints(pts),new T.LineBasicMaterial({color:0xffedce})));}
 box(root,'green',128,.13,42,59,.12,30);
 for(const z of [27,57])box(root,'white',128,.21,z,58,.03,.12);
 for(const x of [99,157,128])box(root,'white',x,.21,42,.12,.03,30);
 for(const x of [99,157]){box(root,'white',x,1.3,38.8,.15,2.6,.15);box(root,'white',x,1.3,45.2,.15,2.6,.15);box(root,'white',x,2.6,42,.15,.15,6.5);}
 box(root,'wood',88,1.7,8,.5,3.4,.5);box(root,'wood',108,1.7,8,.5,3.4,.5);sign(root,'向阳小学',98,3.4,8,18,1.5);sign(root,'大操场 · 快乐运动',128,1,72,17,1.2);
 const shells=SCHOOL_BUILDINGS.map((b,i)=>{const g=new T.Group();g.position.set(b.x,0,b.z);root.add(g);
 for(let f=0;f<4;f++){box(g,'wall',0,f*3.6-.08,0,48,.16,12);box(g,'wall',0,f*3.6+1.7,-5.1,48,3.4,.2);box(g,'blue',0,f*3.6+1.55,5.12,48,1.4,.1);box(g,'wood',0,f*3.6+.45,5.2,48,.8,.22);for(let r=0;r<=6;r++)box(g,'wall',-24+r*8,f*3.6+1.7,0,.18,3.4,10.4);}
 box(g,'dark',0,14.4,0,49,.3,12.5);const batches=new Map();for(const m of [...g.children]){m.updateMatrix();const geometry=m.geometry.clone().applyMatrix4(m.matrix);if(!batches.has(m.material))batches.set(m.material,[]);batches.get(m.material).push(geometry);g.remove(m);}for(const [material,geometries] of batches){g.add(new T.Mesh(mergeGeometries(geometries),material));geometries.forEach(geo=>geo.dispose());}sign(g,b.name,0,15.1,5.6,9,1.1);return g;});
 const interiors=SCHOOL_ROOMS.map(r=>{const g=new T.Group();g.name=r.name;g.userData={...r};g.position.set(r.x,r.y,r.z);g.visible=false;root.add(g);const batches=new Map();
 const part=(key,x,y,z,w,h,d,round=false)=>{const id=key+(round?'Round':'');if(!batches.has(id))batches.set(id,{key,round,items:[]});batches.get(id).items.push([x,y,z,w,h,d]);};
 part('wall',0,-.08,0,8,.16,10);part('wall',-4,1.7,0,.16,3.4,10);part('wall',4,1.7,0,.16,3.4,10);part('wall',0,1.7,-5,8,3.4,.16);
 part('green',0,2,-4.85,5.8,1.6,.1);part('wood',0,.8,-3.7,1.7,.12,.65);
 const person=(x,z,teacher=false)=>{const y=teacher?.43:0;part('blue',x,.97+y,z,.43,.58,.26);part('skin',x,1.43+y,z,.19,.22,.18,true);part('hair',x,1.57+y,z,.2,.09,.19,true);for(const side of [-1,1]){part('dark',x+side*.12,.35+y*.4,z,.14,.64,.16);part('dark',x+side*.12,.08,z-.12,.17,.12,.34);part('skin',x+side*.26,.99+y,z-.22,.12,.12,.46);} };
 for(const s of STUDENT_SEATS){const x=s.x,z=s.z;part('wood',x,.8,z-.45,.96,.1,.6);for(const side of [-1,1])part('dark',x+side*.36,.39,z-.45,.07,.78,.45);part('white',x,.862,z-.45,.55,.025,.34);part('blue',x,.88,z-.45,.012,.009,.3);part('wood',x,.54,z,.53,.09,.5);part('wood',x,.84,z+.2,.53,.6,.06);person(x,z);}
 person(-2.4,-3.7,true);
 for(const {key,round,items} of batches.values()){const m=new T.InstancedMesh(round?sphere:cube,mats[key],items.length);items.forEach(([x,y,z,w,h,d],i)=>{dummy.position.set(x,y,z);dummy.scale.set(w,h,d);dummy.rotation.set(0,0,0);dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix);});m.computeBoundingSphere();if(key==='skin'&&!round){g.userData.writing=m;g.userData.handTransforms=items;}g.add(m);}
 return g;});
 // Reuse one chalk texture and a small animated teacher pointer across visited rooms.
 const chalk=sign(root,'数学 · 乘法的意义\n6 × 5 = 30   认真思考',0,0,0,5.5,1.3,'#254d40','#fff3c7');chalk.visible=false;
 const pointer=box(root,'wood',0,0,0,.035,.035,.9);pointer.visible=false;
 const panel=document.createElement('section');panel.id='schoolPanel';panel.hidden=true;panel.innerHTML=`<div class="school-heading"><b>向阳小学</b><button id="schoolExit">返回原场景</button></div><p>8 栋教学楼 · 每栋 4 层 · 每层 6 间教室</p><div class="school-selectors"><label>教学楼<select id="schoolBuilding">${SCHOOL_BUILDINGS.map((b,i)=>`<option value="${i}">${b.name}</option>`).join('')}</select></label><label>楼层<select id="schoolFloor">${[1,2,3,4].map(n=>`<option value="${n-1}">${n} 层</option>`).join('')}</select></label><label>教室<select id="schoolRoom">${[1,2,3,4,5,6].map(n=>`<option value="${n-1}">${n} 班</option>`).join('')}</select></label></div><div class="school-actions"><button id="schoolEnter">进入教室</button><button id="schoolOverview">校园全景</button><button id="schoolBoard">走近黑板</button><button id="schoolBack">教室后排</button></div><p id="schoolStatus" role="status">公司东侧 · 大操场与八栋教学楼</p><small>拖动环顾 · 选择楼层与教室后点击进入 · Esc 返回</small>`;document.body.append(panel);
 let previousBackground,previousFog,active=false,current=null,look=0,tilt=0,drag=null,closeCallback=()=>{};
 function overview(){current=null;look=tilt=0;interiors.forEach(g=>g.visible=false);shells.forEach(g=>g.visible=true);chalk.visible=pointer.visible=false;document.getElementById('schoolStatus').textContent='公司东侧 · 大操场与八栋教学楼';}
 let closeView=false;
 function enter(){const value=id=>Number(document.getElementById(id).value);current=roomAt(value('schoolBuilding'),value('schoolFloor'),value('schoolRoom'));look=tilt=0;closeView=false;interiors.forEach(g=>g.visible=g.userData.id===current.id);shells.forEach((g,i)=>g.visible=i!==current.building);chalk.visible=pointer.visible=true;chalk.position.set(current.x,current.y+2,current.z-4.78);document.getElementById('schoolStatus').textContent=`${current.name} · 1 名老师授课 · 30 名学生读写学习`;}
 document.getElementById('schoolEnter').onclick=enter;document.getElementById('schoolOverview').onclick=overview;
 document.getElementById('schoolBoard').onclick=()=>{if(!current)enter();closeView=true;look=tilt=0;};document.getElementById('schoolBack').onclick=()=>{if(!current)enter();closeView=false;look=tilt=0;};
 function close(){active=false;scene.background=previousBackground;scene.fog=previousFog;panel.hidden=true;document.body.classList.remove('school-tour');overview();closeCallback();}
 document.getElementById('schoolExit').onclick=close;
 addEventListener('keydown',e=>{if(active&&e.code==='Escape')close();});
 return {root,interiors,shells,get active(){return active;},open(onClose){previousBackground=scene.background;previousFog=scene.fog;scene.background=new T.Color(0xb9d1d6);scene.fog=null;active=true;closeCallback=onClose;panel.hidden=false;document.body.classList.add('school-tour');overview();},close,bind(canvas){canvas.addEventListener('pointerdown',e=>{if(active)drag={id:e.pointerId,x:e.clientX,y:e.clientY};});canvas.addEventListener('pointermove',e=>{if(!active||!drag||drag.id!==e.pointerId)return;look=T.MathUtils.clamp(look+(e.clientX-drag.x)*.004,-1.1,1.1);tilt=T.MathUtils.clamp(tilt+(e.clientY-drag.y)*.003,-.45,.45);drag={id:e.pointerId,x:e.clientX,y:e.clientY};});for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>drag=null);},update(camera,t){if(!active)return;
 if(current){const r=current;const portrait=camera.aspect<1;camera.position.set(r.x*PLAN_SCALE,r.y+(closeView?2.1:4.7),(r.z+(closeView?(portrait?3.8:-.1):(portrait?12:9)))*PLAN_SCALE);camera.lookAt(r.x*PLAN_SCALE+Math.sin(look)*9,r.y+(closeView?1.95:1)+tilt*5,(r.z-2)*PLAN_SCALE);const g=interiors.find(g=>g.visible),m=g.userData.writing;g.userData.handTransforms.forEach(([x,y,z,w,h,d],i)=>{dummy.position.set(x,y+Math.sin(t*3+i)*.018,z+Math.sin(t*3+i)*.025);dummy.scale.set(w,h,d);dummy.rotation.set(0,0,0);dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix);});m.instanceMatrix.needsUpdate=true;pointer.position.set(r.x-2.15,r.y+1.65,r.z-4);pointer.rotation.x=Math.sin(t*1.8)*.15;}
 else{const fit=Math.max(1,1.35/camera.aspect);camera.position.set((128+Math.sin(look)*140*fit)*PLAN_SCALE,(120+tilt*70)*fit,(140*Math.cos(look)*fit+5)*PLAN_SCALE);camera.lookAt(128*PLAN_SCALE,0,-7*PLAN_SCALE);}
 },stats(){return {buildings:8,floors:32,rooms:interiors.length,students:SCHOOL_ROOMS.length*30,teachers:SCHOOL_ROOMS.length,visibleRooms:interiors.filter(g=>g.visible).length,current:current?.id,instancedMeshes:interiors.reduce((n,g)=>n+g.children.filter(c=>c.isInstancedMesh).length,0)};}};
}
