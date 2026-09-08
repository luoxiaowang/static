import * as T from 'three';
export function placeShape(id){if(['pond','pool','river'].includes(id))return 'water';if(['tea','rooftea'].includes(id))return 'pavilion';if(['orchard','flowers','roofgarden'].includes(id))return 'garden';if(['garage','market'].includes(id))return 'building';return 'room';}
export const DESTINATIONS=[
 ['entry','庭院入口',0,0,27,'ground'],['hall','一楼客厅',0,0,-8,'ground'],['coffee','咖啡吧',5,0,-13.5,'ground'],['kitchen','厨房',-3.5,0,-14.8,'ground'],['library','书房',-17,0,2.8,'ground'],['annex','西翼会客厅',-19,0,-15,'ground'],['dining','客餐厅',12,0,3,'ground'],['tea','庭院茶席',8,0,14.1,'ground'],['pond','锦鲤池',-5,0,13.55,'ground'],['pool','泳池',15.3,0,7.8,'ground'],['flowers','庭院花圃',15,0,16.9,'ground'],['orchard','果园',-28,0,11,'ground'],['garage','越野车车库',-14.3,0,23,'ground'],['swing','庭院秋千',-9.5,0,23.4,'ground'],['market','街道集市',0,0,36,'ground'],['river','河畔步道',0,0,48,'ground'],
 ['master','二楼主卧',-7,3.6,-7,'upper'],['child','儿童房',0,3.6,-8.9,'upper'],['bath','二楼卫浴',6,3.6,-15.4,'upper'],
 ['rooftea','天台茶亭',-4,7.2,-7.8,'roof'],['roofgarden','天台花园',3,7.2,-10,'roof'],['roofswing','天台秋千',2,7.2,-5.5,'roof'],
 ['storage','地下储物间',-20,-3.6,-15,'basement'],['games','电竞房',-14,-3.6,-15,'basement'],['ktv','KTV',-20,-3.6,-11.7,'basement'],['cinema','地下影音客厅',-14,-3.6,-11.7,'basement']
].map(([id,name,x,y,z,level])=>({id,name,x,y,z,level}));
export function createGuide({dialog,host,list,tabs,onTeleport,onOpen,onClose}){
 let renderer,scene,camera,objects=[],level='ground',yaw=.45,pitch=.85,zoom=1,frame=0,drag,hasMoved=false;
 const labels=document.createElement('div');labels.className='guide-labels';host.append(labels);let labelItems=[];const target=new T.Vector3(),ray=new T.Raycaster(),pointer=new T.Vector2();
 function box(x,y,z,w,h,d,color){const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),new T.MeshStandardMaterial({color,roughness:.85}));mesh.position.set(x,y,z);scene.add(mesh);return mesh;}
 function draw(){if(!dialog.open)return;const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();const distance=(level==='ground'?95:30)*zoom;camera.position.copy(target).add(new T.Vector3(Math.sin(yaw)*Math.cos(pitch)*distance,Math.sin(pitch)*distance,Math.cos(yaw)*Math.cos(pitch)*distance));camera.lookAt(target);renderer.render(scene,camera);const occupied=[];for(const item of labelItems){const p=item.marker.position.clone().project(camera);const bw=item.button.offsetWidth||80,bh=24;let x=Math.max(bw/2,Math.min(w-bw/2,(p.x*.5+.5)*w)),y=Math.max(0,Math.min(h-bh,(-p.y*.5+.5)*h));for(let n=0;n<30&&occupied.some(r=>Math.abs(r.x-x)<(r.w+bw)/2+3&&Math.abs(r.y-y)<bh);n++){y+=bh+3;if(y>h-bh){y=0;x=Math.max(bw/2,Math.min(w-bw/2,x+bw+6));}}occupied.push({x,y,w:bw});item.button.style.left=x+'px';item.button.style.top=y+'px';item.button.style.display=Math.abs(p.x)>1.1||Math.abs(p.y)>1.1?'none':'';}frame=requestAnimationFrame(draw);}
 function selectLevel(next){level=next;zoom=1;objects=[];labelItems=[];labels.replaceChildren();scene?.traverse(o=>{o.geometry?.dispose();if(o.material)o.material.dispose();});scene=new T.Scene();scene.background=new T.Color('#172d29');scene.add(new T.HemisphereLight(0xf1eee2,0x385249,2.5));const light=new T.DirectionalLight(0xffdec0,3);light.position.set(-20,40,20);scene.add(light);
  if(level==='ground'){target.set(0,0,13);box(0,-.7,12,68,1,78,0x52705a);box(0,1.8,-11,22,3.6,14,0xc6c2ac);box(-16,1.5,-6,10,3,26,0xbba989);box(16,1.5,-.5,10,3,15,0xbba989);box(-17,1.5,20,8,3,8,0x8c9e92);box(0,.02,40,10,.12,20,0x9b9584);box(0,.02,52,68,.12,6,0x528f9b);box(20.5,.05,11,7,.15,16,0x528f9b);box(-5,.05,10,8,.15,5,0x528f9b);}
  else {target.set(level==='basement'?-18:0,0,level==='basement'?-13:-11);box(target.x,-.3,target.z,level==='basement'?14:22,.5,level==='basement'?12:14,0x8e9d86);}
  list.replaceChildren();for(const dest of DESTINATIONS.filter(d=>d.level===level)){
   const shape=placeShape(dest.id),geometry=shape==='water'?new T.CylinderGeometry(1.5,1.5,.12,32):shape==='pavilion'?new T.ConeGeometry(1.5,1,32):shape==='garden'?new T.IcosahedronGeometry(1.1,1):new T.BoxGeometry(2.3,shape==='building'?1.4:.22,1.6);
   const marker=new T.Mesh(geometry,new T.MeshStandardMaterial({color:shape==='water'?0x69a9ba:shape==='garden'?0x87a865:0xefc78a,roughness:.8}));marker.position.set(dest.x,level==='ground'?4.1:.5,dest.z);if(shape==='water')marker.scale.z=.65;marker.userData.destination=dest;scene.add(marker);objects.push(marker);
   const label=document.createElement('button');label.textContent=dest.name;label.onclick=e=>{e.stopPropagation();close();onTeleport(dest);};label.onpointerdown=e=>e.stopPropagation();labels.append(label);labelItems.push({button:label,marker});
   const b=document.createElement('button');b.textContent=dest.name+' ↗';b.onclick=()=>{close();onTeleport(dest);};b.onmouseenter=()=>marker.material.color.setHex(0xffffff);b.onmouseleave=()=>marker.material.color.setHex(0xefc78a);list.append(b);
  }
  tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.level===level)));
 }
 function init(){renderer=new T.WebGLRenderer({antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));host.append(renderer.domElement);camera=new T.PerspectiveCamera(48,1,.1,220);
  host.onpointerdown=e=>{drag={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY};hasMoved=false;host.setPointerCapture(e.pointerId);};
  host.onpointermove=e=>{if(!drag)return;if(Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy)>5)hasMoved=true;if(hasMoved){yaw-=(e.clientX-drag.x)*.006;pitch=T.MathUtils.clamp(pitch+(e.clientY-drag.y)*.005,.3,1.45);}drag.x=e.clientX;drag.y=e.clientY;};
  host.onpointerup=e=>{if(!drag)return;drag=null;if(hasMoved)return;const r=host.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(objects)[0];if(hit){close();onTeleport(hit.object.userData.destination);}};host.onpointercancel=()=>drag=null;
  host.onwheel=e=>{e.preventDefault();zoom=T.MathUtils.clamp(zoom+e.deltaY*.001,.5,1.8);};host.style.touchAction='none';
 }
 function open(){if(dialog.open)return;onOpen();dialog.showModal();if(!renderer)init();selectLevel(level);draw();}
 function close(){dialog.close();cancelAnimationFrame(frame);drag=null;onClose();}
 tabs.querySelectorAll('button').forEach(b=>b.onclick=()=>selectLevel(b.dataset.level));dialog.querySelector('[data-close]').onclick=close;dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
 return{open,close};
}
