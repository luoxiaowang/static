import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {SCHOOL_BUILDINGS,SCHOOL_ROOMS,STUDENT_SEATS,roomAt,SCHOOL_STAIRS} from './school-layout.mjs';
import {createSchool} from './school.mjs';
test('eight distinct four-storey buildings and 192 reachable classroom destinations',()=>{
 assert.equal(new Set(SCHOOL_BUILDINGS.map(b=>b.name)).size,8);assert.equal(new Set(SCHOOL_ROOMS.map(r=>r.id)).size,192);
 for(let b=0;b<8;b++)for(let f=0;f<4;f++)for(let r=0;r<6;r++)assert.ok(roomAt(b,f,r));
 assert.equal(STUDENT_SEATS.length,30);assert.equal(new Set(STUDENT_SEATS.map(s=>`${s.x},${s.z}`)).size,30);
 for(const b of SCHOOL_BUILDINGS){assert.ok(b.x-24>70);assert.ok(b.z+6<4);}
});
test('actual interior geometry contains 31 heads and 30 books in every classroom; only selected interior renders',()=>{
 const nodes=new Map();const node=()=>({hidden:true,innerHTML:'',value:'0',textContent:'',append(){},getContext:()=>({fillRect(){},fillText(){}})});
 const oldDoc=globalThis.document,oldEvent=globalThis.addEventListener;
 globalThis.document={createElement:node,body:{append(){},classList:{add(){},remove(){}}},getElementById:id=>{if(!nodes.has(id))nodes.set(id,node());return nodes.get(id);}};globalThis.addEventListener=()=>{};
 try{const scene=new T.Scene(),school=createSchool(scene);assert.equal(school.interiors.length,192);scene.updateMatrixWorld(true);const ray=new T.Raycaster();for(const stair of SCHOOL_STAIRS)for(let i=1;i<20;i++){const z=stair.z1+i*.5,y=stair.base+(stair.reverse?i:20-i)*3.6/20;ray.set(new T.Vector3((stair.x1+stair.x2)/2,y+.16,z),new T.Vector3(0,1,0));const hit=ray.intersectObjects(school.shells,true)[0];assert.ok(!hit||hit.distance>1.9,`stair head clearance ${hit?.distance}`);}
 for(const g of school.interiors){const heads=g.children.find(m=>m.geometry.type==='SphereGeometry'&&m.material.color.getHex()===0xe9b38e);assert.equal(heads.count,31);const books=g.children.find(m=>m.material.color.getHex()===0xfff7df);assert.equal(books.count,30);assert.ok(g.children.every(m=>m.isInstancedMesh));}
 school.open(()=>{});['schoolBuilding','schoolFloor','schoolRoom'].forEach(id=>document.getElementById(id));for(let b=0;b<8;b++)for(let f=0;f<4;f++)for(let r=0;r<6;r++){nodes.get('schoolBuilding').value=String(b);nodes.get('schoolFloor').value=String(f);nodes.get('schoolRoom').value=String(r);nodes.get('schoolEnter').onclick();assert.equal(school.stats().current,`${b+1}-${f+1}-${r+1}`);assert.equal(school.stats().visibleRooms,1);}
 school.close();school.open(()=>{});const camera=new T.PerspectiveCamera(62,390/844,.08,650);school.update(camera,0);camera.updateMatrixWorld();for(const b of SCHOOL_BUILDINGS){const point=new T.Vector3(b.x*1.6263455967,0,b.z*1.6263455967).project(camera);assert.ok(point.z<1,'mobile campus fits far plane');assert.ok(Math.abs(point.x)<1,'mobile campus fits viewport');}school.close();assert.equal(school.stats().visibleRooms,0);assert.ok(school.shells.every(s=>s.visible));
 }finally{globalThis.document=oldDoc;globalThis.addEventListener=oldEvent;}
});
