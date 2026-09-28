import * as T from 'three';
import {createBuilding} from './architecture.mjs';
import {createLandscape} from './landscape.mjs';
import {createLocker,createFireworkProp} from './locker.mjs';
import {createPeople} from './characters.mjs';
import {createEnvironment} from './environment.mjs';
import {createFireworks} from './fireworks.mjs';
import {createControls} from './controls.mjs';
import {createTerminal} from './terminal.mjs';
import {createAudio} from './audio.mjs';
import {createUI,element,show} from './ui.mjs';
import {bakeStatic} from './optimize.mjs';
import {canInteract,advanceFestival,distance,ringPosition,crowdRoute} from './simulation.mjs';
import {TERMINAL,LOCKER,FIREWORK,FESTIVAL_DURATION} from './config.mjs';
function boot() {
 const canvas=element('scene'),scene=new T.Scene();
 const renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=T.SRGBColorSpace;
 renderer.toneMapping=T.ACESFilmicToneMapping;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
 const camera=new T.PerspectiveCamera(57,innerWidth/innerHeight,.08,500);
 const environment=createEnvironment(scene,renderer);
 [createBuilding(scene),createLandscape(scene)].forEach(bakeStatic);createLocker(scene);createFireworkProp(scene);
 const people=createPeople(scene,element('labels')),hero=people[0];
 const fireworks=createFireworks(scene),audio=createAudio(),ui=createUI(camera,people);
 let mode='intro',festival={phase:'idle',elapsed:0},time=0,last=performance.now(),zoomAge=0,zoomFrom=null,zoomRotation=null,activeTarget=null;
 const controls=createControls(canvas,hero,()=>mode,interact,text=>ui.notice(text));
 const terminal=createTerminal(()=>{mode='explore';controls.resetView();ui.showExploration(true);canvas.focus({preventScroll:true});ui.notice('彩蛋已收好，去和伙伴们点亮烟花吧');},()=>{ui.complete('locker');audio.chime();});
 const introCamera=new T.Vector3(),introTarget=new T.Vector3(-1,11,-1);
 function setIntroCamera() {const isPortrait=innerWidth/innerHeight<.85;introCamera.set(isPortrait?34:38,isPortrait?24:21,isPortrait?73:49);}
 setIntroCamera();camera.position.copy(introCamera);camera.lookAt(introTarget);
 function interact() {
  if(mode!=='explore'||festival.phase!=='idle') {return;}
  if(canInteract(mode,festival.phase,hero.root.position,TERMINAL)) {
   controls.stop();mode='terminal-zoom';zoomAge=0;zoomFrom=camera.position.clone();zoomRotation=camera.quaternion.clone();ui.showExploration(false);ui.hint(null);return;
  }
  if(canInteract(mode,festival.phase,hero.root.position,FIREWORK)) {beginFestival();}
 }
 function beginFestival() {
  controls.stop();festival={phase:'fuse',elapsed:0};mode='festival';ui.showExploration(false);ui.hint(null);
  hero.home={x:hero.root.position.x,z:hero.root.position.z};
  people.forEach((person,index)=>{person.route=crowdRoute(person.root.position,ringPosition(index));});
  document.body.classList.add('is-festival');
 }
 function start() {
  if(mode!=='intro') {return;}mode='explore';document.body.classList.remove('is-intro');['intro','intro-badge'].forEach(id=>show(id,false));ui.showExploration(true);canvas.focus({preventScroll:true});ui.notice(matchMedia('(pointer:coarse)').matches?'左手圆盘移动，右侧滑动转向；也可以点击下方步行导航':'拖动鼠标环顾四周，WASD 移动；也可以点击下方步行导航',6);audio.chime();
 }
 element('start').addEventListener('click',start);element('interact').addEventListener('click',interact);
 ['locker','firework'].forEach(destination=>element(`go-${destination}`).addEventListener('click',()=>{
  if(mode!=='explore') {return;}controls.navigate(destination);ui.notice('正在步行前往，按方向键或 Esc 可停止');
 }));
 element('sound').addEventListener('click',async()=>{const enabled=await audio.toggle();element('sound').textContent=enabled?'音效：开':'音效：关';element('sound').setAttribute('aria-pressed',String(enabled));});
 document.addEventListener('visibilitychange',()=>{last=performance.now();});
 window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);setIntroCamera();});
 canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();showError('显卡上下文已中断，请重新加载页面恢复场景。');});
 function updateCrowd(dt) {
  people.forEach(person=>{
   person.moving=false;
   if(person.route.length) {
    const target=person.route[0],dist=distance(person.root.position,target),step=Math.min(dist,dt*3.6);
    if(dist<.025) {person.route.shift();}
    else {const dx=(target.x-person.root.position.x)/dist,dz=(target.z-person.root.position.z)/dist;person.root.position.x+=dx*step;person.root.position.z+=dz*step;person.root.rotation.y=Math.atan2(dx,dz);person.moving=true;}
   } else if(festival.phase!=='returning') {person.root.rotation.y=Math.atan2(FIREWORK.x-person.root.position.x,FIREWORK.z-person.root.position.z);}
   else if(person.index!==0) {person.root.rotation.y=person.person.yaw;}
  });
 }
 function updateFestival(dt,timelineDt) {
  if(mode!=='festival') {return;}
  updateCrowd(dt);const gathered=people.filter(p=>p.route.length===0).length;
  const previous=festival.phase;festival=advanceFestival(festival,timelineDt,gathered===8,gathered===8);
  if(previous!==festival.phase&&festival.phase==='returning') {ui.complete('firework');people.forEach(p=>{p.route=crowdRoute(p.root.position,p.home);});}
  if(festival.phase==='idle') {mode='explore';controls.resetView();ui.showExploration(true);ui.festival('idle',0,0);document.body.classList.remove('is-festival');ui.notice('1024 快乐！可以继续漫步，或再次点燃烟花',6);}
  else {ui.festival(festival.phase,gathered,Math.max(0,Math.ceil(FESTIVAL_DURATION-festival.elapsed)));}
 }
 const cinematicPosition=new T.Vector3(-16,7.2,5),cinematicTarget=new T.Vector3(5,10,13),cameraTarget=new T.Vector3();
 function updateCamera(dt) {
  if(mode==='intro') {camera.position.copy(introCamera);camera.position.x+=Math.sin(time*.12)*.6;camera.lookAt(introTarget);return;}
  if(mode==='terminal-zoom') {
   zoomAge+=dt;const ratio=Math.min(1,zoomAge/.7),smooth=ratio*ratio*(3-2*ratio);
   camera.position.copy(zoomFrom).lerp(new T.Vector3(LOCKER.x,1.94,LOCKER.z+1.9),smooth);
   const targetRotation=new T.Quaternion();const dummy=new T.Object3D();dummy.position.set(LOCKER.x,1.94,LOCKER.z+1.9);dummy.lookAt(LOCKER.x,1.94,LOCKER.z+.76);targetRotation.copy(dummy.quaternion);targetRotation.multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),Math.PI));
   camera.quaternion.copy(zoomRotation).slerp(targetRotation,smooth);
   if(ratio>=1) {mode='terminal';terminal.open();}return;
  }
  if(mode==='terminal') {return;}
  if(mode==='festival') {
   const portrait=innerWidth/innerHeight<1;cinematicPosition.set(portrait?-28:-16,portrait?9:7.2,5);cinematicTarget.set(5,portrait?10:10,13);
   camera.position.lerp(cinematicPosition,1-Math.exp(-dt*2));cameraTarget.copy(cinematicTarget);camera.lookAt(cameraTarget);return;
  }
  const pose=controls.cameraPose();camera.position.lerp(pose.position,1-Math.exp(-dt*12));camera.lookAt(pose.target);
 }
 function animate(now) {
  const timelineDt=Math.max(0,(now-last)/1000),dt=Math.min(.06,timelineDt);last=now;
  if(document.hidden) {requestAnimationFrame(animate);return;}
  time+=dt;controls.update(dt);updateFestival(dt,timelineDt);
  people.forEach(person=>person.animate(time,festival.phase==='celebrating'));
  hero.root.visible=mode==='intro'||mode==='festival'||mode==='explore';
  updateCamera(dt);environment.update(dt,mode==='festival'&&festival.phase!=='returning');fireworks.update(dt,time,festival,camera);terminal.update(dt);audio.update(time,festival.phase);
  activeTarget=null;if(canInteract(mode,festival.phase,hero.root.position,TERMINAL)) {activeTarget='locker';}else if(canInteract(mode,festival.phase,hero.root.position,FIREWORK)) {activeTarget='firework';}
  ui.hint(activeTarget);ui.update(mode,controls.yaw);
  element('player-state').textContent=controls.isNavigating?'正在步行前往':hero.moving?'正在自由漫步':'停下来，看看周围';
  renderer.render(scene,camera);requestAnimationFrame(animate);
 }
 // 只暴露只读诊断快照，方便检查人数、帧状态和集合时序，不提供跳过交互的入口。
 Object.defineProperty(window,'hiveboxScene',{value:{snapshot:()=>({mode,phase:festival.phase,elapsed:festival.elapsed,view:'third',people:people.map(p=>({name:p.person.name,x:p.root.position.x,z:p.root.position.z,moving:p.moving,pending:p.route.length})),calls:renderer.info.render.calls,triangles:renderer.info.render.triangles})},writable:false});
 show('loading',false);element('start').disabled=false;element('start').innerHTML='和王金枝一起出发 <span>↗</span>';requestAnimationFrame(animate);
}
function showError(message) {show('error',true);element('error-message').textContent=message;show('loading',false);}
try {boot();} catch(error) {console.error(error);showError('场景加载失败。请用支持 WebGL 2 的 Chrome、Edge 或 Safari 打开，并开启硬件加速。');}
