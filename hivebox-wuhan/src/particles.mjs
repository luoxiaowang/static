import * as T from 'three';
// 单一缓冲区复用烟花粒子，避免每次绽放不断创建 GPU 对象。
export function createParticles(scene,capacity=8500) {
 const positions=new Float32Array(capacity*3),colors=new Float32Array(capacity*3),sizes=new Float32Array(capacity),alphas=new Float32Array(capacity);
 const velocities=new Float32Array(capacity*3),lives=new Float32Array(capacity),ages=new Float32Array(capacity),gravities=new Float32Array(capacity);
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));geometry.setAttribute('color',new T.BufferAttribute(colors,3));geometry.setAttribute('size',new T.BufferAttribute(sizes,1));geometry.setAttribute('alpha',new T.BufferAttribute(alphas,1));
 const material=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,vertexColors:true,
  vertexShader:'attribute float size; attribute float alpha; varying vec3 vColor; varying float vAlpha; void main(){vColor=color;vAlpha=alpha;vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=clamp(size*370.0/max(1.0,-mv.z),1.0,42.0);gl_Position=projectionMatrix*mv;}',
  fragmentShader:'varying vec3 vColor;varying float vAlpha;void main(){float r=length(gl_PointCoord-0.5)*2.0;if(r>1.0)discard;float light=exp(-r*r*6.0);gl_FragColor=vec4(vColor*(1.0+light*.8),light*vAlpha);}'
 });
 const points=new T.Points(geometry,material);points.frustumCulled=false;scene.add(points);let cursor=0;
 function emit(position,velocity,color,size,life,gravity=1.6) {
  const i=cursor++%capacity,j=i*3;positions.set(position,j);velocities.set(velocity,j);colors.set([color.r,color.g,color.b],j);sizes[i]=size;lives[i]=life;ages[i]=0;gravities[i]=gravity;
 }
 function update(dt) {
  for(let i=0;i<capacity;i++) {
   ages[i]+=dt;const alive=ages[i]<lives[i];alphas[i]=alive?Math.pow(1-ages[i]/lives[i],.65):0;
   if(alive) {const j=i*3;velocities[j+1]-=gravities[i]*dt;for(let k=0;k<3;k++) {positions[j+k]+=velocities[j+k]*dt;velocities[j+k]*=1-dt*.22;}}
  }
  ['position','color','size','alpha'].forEach(key=>{geometry.attributes[key].needsUpdate=true;});
 }
 return {emit,update};
}
