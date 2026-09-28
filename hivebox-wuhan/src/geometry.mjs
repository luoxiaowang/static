import * as T from 'three';
const materials=new Map();
const shapes=new Map();
export const material=(color,metalness=0,roughness=.72)=>{
 const key=`${color}-${metalness}-${roughness}`;
 if(!materials.has(key)) {materials.set(key,new T.MeshStandardMaterial({color,metalness,roughness}));}
 return materials.get(key);
};
function mesh(parent,geo,mat,x,y,z,sx=1,sy=1,sz=1) {
 const m=new T.Mesh(geo,typeof mat==='number'?material(mat):mat);
 m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;
}
export function box(parent,x,y,z,w,h,d,mat) {
 if(!shapes.has('box')) {shapes.set('box',new T.BoxGeometry(1,1,1));}
 return mesh(parent,shapes.get('box'),mat,x,y,z,w,h,d);
}
export function ball(parent,x,y,z,sx,sy,sz,mat) {
 if(!shapes.has('sphere')) {shapes.set('sphere',new T.SphereGeometry(1,20,14));}
 return mesh(parent,shapes.get('sphere'),mat,x,y,z,sx,sy,sz);
}
export function cylinder(parent,x,y,z,top,bottom,height,mat,segments=16) {
 return mesh(parent,new T.CylinderGeometry(top,bottom,height,segments),mat,x,y,z);
}
export function beam(parent,a,b,r,mat) {
 const from=new T.Vector3(...a),to=new T.Vector3(...b),mid=from.clone().add(to).multiplyScalar(.5);
 const m=cylinder(parent,mid.x,mid.y,mid.z,r,r,from.distanceTo(to),mat,8);
 m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),to.sub(from).normalize());return m;
}
export function canvasTexture(width,height,draw) {
 const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
 draw(canvas.getContext('2d'),width,height);
 const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;return texture;
}
export function sign(parent,text,x,y,z,w,h,fg='#ebefdf',bg='#294539',font=72) {
 const texture=canvasTexture(1024,Math.max(64,Math.round(1024*h/w)),(c,cw,ch)=>{
  if(bg) {c.fillStyle=bg;c.fillRect(0,0,cw,ch);}
  c.fillStyle=fg;c.textAlign='center';c.textBaseline='middle';c.font=`600 ${Math.min(ch*.66,950/Math.max(1,text.length))}px "PingFang SC","Microsoft YaHei",sans-serif`;c.fillText(text,cw/2,ch/2,cw-60);
 });
 const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,side:T.DoubleSide}));
 m.position.set(x,y,z);parent.add(m);return m;
}
export function glowMaterial(color,intensity=1) {return new T.MeshStandardMaterial({color,emissive:color,emissiveIntensity:intensity,roughness:.35});}
