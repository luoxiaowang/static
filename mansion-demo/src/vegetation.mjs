import * as T from 'three';
import {partitionPlaces,lodForDistance} from './performance.mjs';
function indexFromBase64(s){const raw=atob(s),arr=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)arr[i]=raw.charCodeAt(i);return new T.BufferAttribute(new Uint32Array(arr.buffer),1);}
export function createVegetation(scene){
 const cells=[];
 function add(template,places,{small=false}={}){
  template.updateMatrixWorld(true);const parts=[];
  template.traverse(o=>{if(!o.isMesh)return;const geometries=[o.geometry];for(const name of['medium','far']){const g=new T.BufferGeometry();g.setIndex(o.geometry.userData.lod?.[name]?indexFromBase64(o.geometry.userData.lod[name]):o.geometry.index);for(const [key,attr]of Object.entries(o.geometry.attributes))g.setAttribute(key,attr);g.boundingBox=o.geometry.boundingBox?.clone()||null;g.boundingSphere=o.geometry.boundingSphere?.clone()||null;geometries.push(g);}parts.push({geometries,material:o.material,matrix:o.matrixWorld.clone()});});
  for(const placesInCell of partitionPlaces(places)){
   const center=new T.Vector3();for(const p of placesInCell)center.add(new T.Vector3(p.x,p.y||0,p.z));center.divideScalar(placesInCell.length);
   const levels=[];for(let level=0;level<3;level++){
    const group=new T.Group();let triangles=0;
    for(const part of parts){const inst=new T.InstancedMesh(part.geometries[level],part.material,placesInCell.length);inst.receiveShadow=true;inst.castShadow=level<2;
     const matrix=new T.Matrix4(),rotation=new T.Quaternion();for(let i=0;i<placesInCell.length;i++){const p=placesInCell[i],scale=p.height/template.userData.height;rotation.setFromAxisAngle(new T.Vector3(0,1,0),p.rotation||0);matrix.compose(new T.Vector3(p.x,p.y||0,p.z),rotation,new T.Vector3(scale,scale,scale));matrix.multiply(part.matrix);inst.setMatrixAt(i,matrix);}inst.instanceMatrix.needsUpdate=true;inst.computeBoundingSphere();group.add(inst);triangles+=(inst.geometry.index?.count||inst.geometry.attributes.position.count)/3*placesInCell.length;
    }
    group.visible=false;scene.add(group);levels.push({group,triangles});
   }
   cells.push({center,small,levels,current:-1});
  }
 }
 function update(camera,profile){let changed=false;for(const cell of cells){const distance=camera.position.distanceTo(cell.center);const level=lodForDistance(distance,profile,cell.small,cell.current);if(level===cell.current)continue;cell.current=level;for(let i=0;i<3;i++)cell.levels[i].group.visible=i===level;changed=true;}return changed;}
 return{add,update,get stats(){return{cells:cells.length,triangles:cells.reduce((n,c)=>n+(c.levels[c.current]?.triangles||0),0),nearCells:cells.filter(c=>c.current===0).length};}};
}
