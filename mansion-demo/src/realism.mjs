import * as T from 'three';
import {PLAN_SCALE,excludeWildPlants} from './layout.mjs';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {HDRLoader} from 'three/addons/loaders/HDRLoader.js';
import {Water} from 'three/addons/objects/Water.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {createVegetation} from './vegetation.mjs';
import {PROFILES} from './performance.mjs';
import {stableTexture,stabilizeModelTextures} from './surface-stability.mjs';
import {assetBuffer} from './asset-queue.mjs';
export function loadModel(id){return assetBuffer(id).then(buffer=>new Promise((resolve,reject)=>new GLTFLoader().parse(buffer,'',r=>{if(!globalThis.MANSION_ASSETS[id].startsWith('assets/'))delete globalThis.MANSION_ASSETS[id];resolve(r.scene);},reject)));}
export function addRealism(scene,world,renderer,sky,{parent,queue,onLoaded=()=>{}}){
 const templates=[],vegetation=createVegetation(parent);
 const near=(x,z,r=14)=>c=>c.bird||Math.hypot(c.x-x,c.z-z)<r;
 function normalize(model){const b=new T.Box3().setFromObject(model),size=b.getSize(new T.Vector3()),c=b.getCenter(new T.Vector3());const g=new T.Group();model.position.add(new T.Vector3(-c.x,-b.min.y,-c.z));g.add(model);g.userData.height=size.y;stabilizeModelTextures(model,renderer);return g;}
 function place(template,x,y,z,height,rotation=0){const g=template.clone(true);g.scale.set(height/template.userData.height/PLAN_SCALE,height/template.userData.height,height/template.userData.height/PLAN_SCALE);g.position.set(x,y,z);g.rotation.y=rotation;g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});parent.add(g);return g;}
 const placeholder=new T.Group();parent.add(placeholder);const crownGeo=new T.IcosahedronGeometry(1,1),trunkGeo=new T.CylinderGeometry(.08,.12,1,6),crownMat=new T.MeshStandardMaterial({color:0x586f49}),trunkMat=new T.MeshStandardMaterial({color:0x6d5942});
 const crowns=new T.InstancedMesh(crownGeo,crownMat,world.trees.length),trunks=new T.InstancedMesh(trunkGeo,trunkMat,world.trees.length);placeholder.add(crowns,trunks);world.trees.forEach((p,i)=>{const m=new T.Matrix4();m.compose(new T.Vector3(p.x,p.height*.7,p.z),new T.Quaternion(),new T.Vector3(p.height*.25,p.height*.32,p.height*.25));crowns.setMatrixAt(i,m);m.compose(new T.Vector3(p.x,p.height*.25,p.z),new T.Quaternion(),new T.Vector3(1,p.height*.5,1));trunks.setMatrixAt(i,m);});crowns.computeBoundingSphere();trunks.computeBoundingSphere();
 queue.add('树木模型',async()=>{templates[0]=normalize(await loadModel('tree_small_02'));vegetation.add(templates[0],world.trees);parent.remove(placeholder);crownGeo.dispose();trunkGeo.dispose();crownMat.dispose();trunkMat.dispose();onLoaded();},{priority:2});
 let seed=99;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;},ferns=[],shrubs=[];
 for(let i=0;i<95;i++){const x=(rand()-.5)*51,z=(rand()-.5)*43;if(excludeWildPlants(x,z)||z<7&&Math.abs(x)<22)continue;if(Math.abs(x)<3||x>3&&x<25&&z>7||x>-10&&x<0&&z<14)continue;ferns.push({x,z,height:.3+rand()*.75,rotation:rand()*7});if(i%2===0)shrubs.push({x:x+.5,z:z+.3,height:.7+rand()*.5,rotation:rand()*7});}
 for(let i=0;i<15;i++){const angle=i/15*6.28;ferns.push({x:Math.cos(angle)*2.1,z:3+Math.sin(angle)*1.2,height:.45,rotation:angle});}
 for(const [id,index,spots]of [['fern_02',1,ferns],['shrub_01',2,shrubs],['potted_plant_02',5,world.plantSpots]])queue.add(id,async()=>{templates[index]=normalize(await loadModel(id));vegetation.add(templates[index],spots,{small:true});onLoaded();},{when:c=>c.bird||spots.some(p=>Math.hypot(p.x-c.x,p.z-c.z)<14),priority:8});
 queue.add('室内单椅',async()=>{templates[3]=normalize(await loadModel('modern_arm_chair_01'));place(templates[3],12.8,0,2.8,1.12,.5);place(templates[3],-12.7,0,3.7,1.12,-.7);place(templates[3],-4.5,3.6,-6.3,1.05,1.3);onLoaded();},{when:c=>c.bird||c.z<9,priority:9});
 queue.add('客厅茶几',async()=>{templates[4]=normalize(await loadModel('modern_coffee_table_01'));place(templates[4],17.1,0,3.4,.5,-.2);onLoaded();},{when:near(17,3),priority:10});
 queue.add('书房壁炉',async()=>{const g=await loadModel('interior');g.position.set(-20,0,.3);stabilizeModelTextures(g,renderer);g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});parent.add(g);onLoaded();},{when:near(-20,.3,13),priority:7});
 let environment=null;
 queue.add('环境光',async()=>{const hdr=new HDRLoader().parse(await assetBuffer('environment'));const tex=new T.DataTexture(hdr.data,hdr.width,hdr.height,T.RGBAFormat,hdr.type);tex.mapping=T.EquirectangularReflectionMapping;tex.needsUpdate=true;environment=tex;scene.background=tex;scene.backgroundBlurriness=.04;scene.environment=tex;scene.environmentRotation.y=1.2;scene.backgroundRotation.y=1.2;sky.visible=false;onLoaded();},{priority:1});
 // Ripple normals and reflected trees/building on the pool surface.
 const size=128,data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4;data[i]=128+Math.sin(x*.24+y*.09)*18;data[i+1]=128+Math.cos(y*.21+x*.06)*18;data[i+2]=250;data[i+3]=255;}
 const normal=new T.DataTexture(data,size,size);normal.wrapS=normal.wrapT=T.RepeatWrapping;stableTexture(normal,Math.min(4,renderer.capabilities.getMaxAnisotropy()));
 const pool=new Water(new T.PlaneGeometry(6.7,15.7),{textureWidth:384,textureHeight:384,waterNormals:normal,sunDirection:new T.Vector3(-.7,.5,.4),sunColor:0xffe0ae,waterColor:0x173f3b,distortionScale:1.1,fog:true});pool.rotation.x=-Math.PI/2;pool.position.set(20.5,.135,11);parent.add(pool);
 const mirrorMaterial=pool.material;
 const simpleWater=new T.MeshStandardMaterial({color:0x295a54,metalness:.48,roughness:.18,normalMap:normal,normalScale:new T.Vector2(.12,.12)});
 let profile=PROFILES.flow,lastReflection=-Infinity,lastLod=-Infinity,clock=0;
 const before=pool.onBeforeRender;
 pool.onBeforeRender=function(...args){
  if(args[1].overrideMaterial||!Number.isFinite(profile.reflectionInterval))return;
  // Eye-dependent highlights must track every frame even when the reflection image is cached.
  mirrorMaterial.uniforms.eye.value.setFromMatrixPosition(args[2].matrixWorld);
  if(clock-lastReflection<profile.reflectionInterval)return;
  lastReflection=clock;before.apply(this,args);
 };
 return{pool,templates,normal,get environment(){return environment;},vegetation,
  setQuality(next){profile=next;pool.material=Number.isFinite(next.reflectionInterval)?mirrorMaterial:simpleWater;lastReflection=-Infinity;lastLod=-Infinity;},
  update(now,dt,camera){clock=now;mirrorMaterial.uniforms.time.value+=dt*.45;if(now-lastLod>200){const planCamera={position:camera.position.clone()};planCamera.position.x/=PLAN_SCALE;planCamera.position.z/=PLAN_SCALE;vegetation.update(planCamera,profile);lastLod=now;}}
 };
}
export function postProcessing(renderer,scene,camera){
 let composer,ao,bloom,profile=PROFILES.flow;
 function ensure(){if(composer)return;composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));ao=new GTAOPass(scene,camera,Math.max(1,innerWidth>>1),Math.max(1,innerHeight>>1));ao.updateGtaoMaterial({radius:.55,thickness:1,distanceFallOff:1,samples:6});ao.blendIntensity=.58;composer.addPass(ao);bloom=new UnrealBloomPass(new T.Vector2(innerWidth,innerHeight),.15,.45,1.15);composer.addPass(bloom);composer.addPass(new OutputPass());}
 function sizeAo(){if(!ao)return;const p=renderer.getPixelRatio();ao.setSize(Math.max(1,Math.round(innerWidth*p*.5)),Math.max(1,Math.round(innerHeight*p*.5)));}
 return{setQuality(next){profile=next;renderer.setPixelRatio(Math.min(devicePixelRatio,profile.pixelRatio));if(profile.ao||profile.bloom)ensure();if(composer){ao.enabled=profile.ao;bloom.enabled=profile.bloom;composer.setPixelRatio(renderer.getPixelRatio());sizeAo();}},resize(w,h){composer?.setSize(w,h);sizeAo();},render(){if(!profile.ao&&!profile.bloom)renderer.render(scene,camera);else composer.render();}};
}
