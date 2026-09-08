// Offline only. Keep authored models untouched; add compact LOD index buffers to runtime copies.
import {MeshoptSimplifier as simplifier} from 'meshoptimizer/simplifier';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const assets=new URL('../assets/',import.meta.url);await mkdir(new URL('runtime/',assets),{recursive:true});await simplifier.ready;
const report=[];
for(const id of ['tree_small_02','fern_02','shrub_01','potted_plant_02']){
 const file=await readFile(new URL(id+'.glb',assets));const jsonSize=file.readUInt32LE(12);const doc=JSON.parse(file.toString('utf8',20,20+jsonSize));const bin=file.subarray(28+jsonSize);
 function accessor(index){const a=doc.accessors[index],v=doc.bufferViews[a.bufferView],components={SCALAR:1,VEC2:2,VEC3:3,VEC4:4}[a.type];const C={5126:Float32Array,5125:Uint32Array,5123:Uint16Array,5121:Uint8Array}[a.componentType];const size=C.BYTES_PER_ELEMENT;const result=new C(a.count*components);const start=(v.byteOffset||0)+(a.byteOffset||0),stride=v.byteStride||components*size;for(let i=0;i<a.count;i++){const bytes=bin.subarray(start+i*stride,start+i*stride+components*size);result.set(new C(Uint8Array.from(bytes).buffer),i*components);}return result;}
 const totals={id,near:0,medium:0,far:0};
 for(const mesh of doc.meshes)for(const primitive of mesh.primitives){
  const positions=accessor(primitive.attributes.POSITION),indices=Uint32Array.from(accessor(primitive.indices));totals.near+=indices.length/3;
  const lod={};for(const [name,ratio,error]of [['medium',.19,.012],['far',.055,.04]]){
   const target=Math.max(36,Math.floor(indices.length*ratio/3)*3);
   // Vertex clustering also handles disconnected foliage triangles where edge collapse stalls.
   let [reduced]=indices.length<=72?[indices]:simplifier.simplifySloppy(indices,positions,3,null,target,error);
   if(!reduced.length)reduced=indices;
   for(const index of reduced)if(index>=positions.length/3)throw Error('LOD 索引越界');
   lod[name]=Buffer.from(reduced.buffer,reduced.byteOffset,reduced.byteLength).toString('base64');totals[name]+=reduced.length/3;
  }
  primitive.extras={...primitive.extras,lod};
 }
 const json=Buffer.from(JSON.stringify(doc));const padded=Buffer.alloc(Math.ceil(json.length/4)*4,32);json.copy(padded);
 const out=Buffer.alloc(12+8+padded.length+8+bin.length);out.write('glTF');out.writeUInt32LE(2,4);out.writeUInt32LE(out.length,8);out.writeUInt32LE(padded.length,12);out.writeUInt32LE(0x4e4f534a,16);padded.copy(out,20);const offset=20+padded.length;out.writeUInt32LE(bin.length,offset);out.writeUInt32LE(0x004e4942,offset+4);bin.copy(out,offset+8);
 await writeFile(new URL('runtime/'+id+'.glb',assets),out);report.push(totals);console.log(totals);
}
await writeFile(new URL('runtime/lod-report.json',assets),JSON.stringify(report,null,2));
