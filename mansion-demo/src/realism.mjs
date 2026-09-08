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
export const bytes=s=>{const raw=atob(s),out=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)out[i]=raw.charCodeAt(i);return out.buffer;};
export function loadModel(id){return new Promise((resolve,reject)=>{const asset=globalThis.MANSION_ASSETS[id];if(!asset){reject(Error('缺少模型 '+id));return;}const buffer=bytes(asset);delete globalThis.MANSION_ASSETS[id];new GLTFLoader().parse(buffer,'',r=>resolve(r.scene),reject);});}
export async function addRealism(scene,world,renderer,sky){
 const models=await Promise.all(['tree_small_02','fern_02','shrub_01','modern_arm_chair_01','modern_coffee_table_01','potted_plant_02'].map(loadModel));
 function normalize(model){const b=new T.Box3().setFromObject(model),s=b.getSize(new T.Vector3()),c=b.getCenter(new T.Vector3());const g=new T.Group();model.position.add(new T.Vector3(-c.x,-b.min.y,-c.z));g.add(model);g.userData.height=s.y;return g;}
 const templates=models.map(normalize);for(const model of models)stabilizeModelTextures(model,renderer);
 const vegetation=createVegetation(scene);
 vegetation.add(templates[0],world.trees);
 let seed=99;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
 const ferns=[],shrubs=[];
 for(let i=0;i<95;i++){let x=(rand()-.5)*51,z=(rand()-.5)*43;if(excludeWildPlants(x,z)||z<7&&Math.abs(x)<22)continue;if(Math.abs(x)<3||x>3&&x<25&&z>7||x>-10&&x<0&&z<14)continue;ferns.push({x,z,height:.3+rand()*.75,rotation:rand()*7});if(i%2===0)shrubs.push({x:x+.5,z:z+.3,height:.7+rand()*.5,rotation:rand()*7});}
 for(let i=0;i<15;i++){const angle=i/15*6.28;ferns.push({x:Math.cos(angle)*2.1,z:3+Math.sin(angle)*1.2,height:.45,rotation:angle});}
 vegetation.add(templates[1],ferns,{small:true});vegetation.add(templates[2],shrubs,{small:true});vegetation.add(templates[5],world.plantSpots,{small:true});
 function place(template,x,y,z,height,rotation=0){const g=template.clone(true);g.scale.set(height/template.userData.height/PLAN_SCALE,height/template.userData.height,height/template.userData.height/PLAN_SCALE);g.position.set(x,y,z);g.rotation.y=rotation;g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(g);return g;}
 place(templates[3],12.8,0,2.8,1.12,.5);place(templates[3],-12.7,0,3.7,1.12,-.7);place(templates[3],-4.5,3.6,-6.3,1.05,1.3);
 // Replace the central low coffee table with its downloaded contemporary equivalent.
 place(templates[4],17.1,0,3.4,.5,-.2);
 // Real HDR environment supplies physically meaningful reflections to glass and metal.
 const hdr=new HDRLoader().parse(bytes(globalThis.MANSION_ASSETS.environment));delete globalThis.MANSION_ASSETS.environment;
 const tex=new T.DataTexture(hdr.data,hdr.width,hdr.height,T.RGBAFormat,hdr.type);tex.mapping=T.EquirectangularReflectionMapping;tex.needsUpdate=true;
 scene.background=tex;scene.backgroundIntensity=.65;scene.backgroundBlurriness=.04;scene.environment=tex;scene.environmentIntensity=.62;scene.environmentRotation.y=1.2;scene.backgroundRotation.y=1.2;sky.visible=false;
 // Ripple normals and reflected trees/building on the pool surface.
 const size=128,data=new Uint8Array(size*size*4);for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4;data[i]=128+Math.sin(x*.24+y*.09)*18;data[i+1]=128+Math.cos(y*.21+x*.06)*18;data[i+2]=250;data[i+3]=255;}
 const normal=new T.DataTexture(data,size,size);normal.wrapS=normal.wrapT=T.RepeatWrapping;stableTexture(normal,Math.min(4,renderer.capabilities.getMaxAnisotropy()));
 const pool=new Water(new T.PlaneGeometry(6.7,15.7),{textureWidth:384,textureHeight:384,waterNormals:normal,sunDirection:new T.Vector3(-.7,.5,.4),sunColor:0xffe0ae,waterColor:0x173f3b,distortionScale:1.1,fog:true});pool.rotation.x=-Math.PI/2;pool.position.set(20.5,.135,11);scene.add(pool);
 const mirrorMaterial=pool.material;
 const simpleWater=new T.MeshStandardMaterial({color:0x295a54,metalness:.48,roughness:.18,normalMap:normal,normalScale:new T.Vector2(.12,.12)});
 let profile=PROFILES.balanced,lastReflection=-Infinity,lastLod=-Infinity,clock=0;
 const before=pool.onBeforeRender;
 pool.onBeforeRender=function(...args){
  if(args[1].overrideMaterial||!Number.isFinite(profile.reflectionInterval))return;
  // Eye-dependent highlights must track every frame even when the reflection image is cached.
  mirrorMaterial.uniforms.eye.value.setFromMatrixPosition(args[2].matrixWorld);
  if(clock-lastReflection<profile.reflectionInterval)return;
  lastReflection=clock;before.apply(this,args);
 };
 return{pool,templates,normal,environment:tex,vegetation,
  setQuality(next){profile=next;pool.material=Number.isFinite(next.reflectionInterval)?mirrorMaterial:simpleWater;lastReflection=-Infinity;lastLod=-Infinity;},
  update(now,dt,camera){clock=now;mirrorMaterial.uniforms.time.value+=dt*.45;if(now-lastLod>200){const planCamera={position:camera.position.clone()};planCamera.position.x/=PLAN_SCALE;planCamera.position.z/=PLAN_SCALE;vegetation.update(planCamera,profile);lastLod=now;}}
 };
}
export function postProcessing(renderer,scene,camera){
 const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
 const ao=new GTAOPass(scene,camera,Math.max(1,innerWidth>>1),Math.max(1,innerHeight>>1));ao.updateGtaoMaterial({radius:.55,thickness:1,distanceFallOff:1,samples:6});ao.blendIntensity=.58;composer.addPass(ao);
 const bloom=new UnrealBloomPass(new T.Vector2(innerWidth,innerHeight),.15,.45,1.15);composer.addPass(bloom);composer.addPass(new OutputPass());
 function sizeAo(){const p=renderer.getPixelRatio();ao.setSize(Math.max(1,Math.round(innerWidth*p*.5)),Math.max(1,Math.round(innerHeight*p*.5)));}
 return{composer,ao,bloom,setQuality(profile){ao.enabled=profile.ao;bloom.enabled=profile.bloom;renderer.setPixelRatio(Math.min(devicePixelRatio,profile.pixelRatio));composer.setPixelRatio(renderer.getPixelRatio());sizeAo();},resize(w,h){composer.setSize(w,h);sizeAo();},render(){if(!ao.enabled&&!bloom.enabled)renderer.render(scene,camera);else composer.render();}};
}
