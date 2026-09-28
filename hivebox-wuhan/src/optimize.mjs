import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
// 将不动的模型按材质合批；人物的每个骨骼节点分别合批，保留动画能力。
export function bakeStatic(root) {
 root.updateMatrixWorld(true);
 const inverse=root.matrixWorld.clone().invert(),batches=new Map();
 root.traverse(object=>{
  if(!object.isMesh||Array.isArray(object.material)) {return;}
  const key=`${object.material.uuid}/${object.castShadow}`;
  if(!batches.has(key)) {batches.set(key,{material:object.material,shadow:object.castShadow,geometries:[]});}
  const geometry=object.geometry.clone();
  geometry.applyMatrix4(inverse.clone().multiply(object.matrixWorld));
  batches.get(key).geometries.push(geometry);
 });
 root.clear();
 batches.forEach(batch=>{
  const geometry=mergeGeometries(batch.geometries,false);
  if(geometry) {const mesh=new T.Mesh(geometry,batch.material);mesh.castShadow=batch.shadow;mesh.receiveShadow=true;root.add(mesh);}
  batch.geometries.forEach(g=>g.dispose());
 });
}
