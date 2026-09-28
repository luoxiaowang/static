import * as T from 'three';
export function createEnvironment(scene,renderer) {
 const hemi=new T.HemisphereLight(0xf4f8ed,0x94a28d,2.1);scene.add(hemi);
 const sun=new T.DirectionalLight(0xffefd3,3.2);sun.position.set(-23,44,28);sun.castShadow=true;
 sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-40,right:40,top:45,bottom:-30,near:1,far:110});sun.shadow.normalBias=.045;sun.shadow.bias=-.00015;sun.shadow.radius=3;sun.target.position.set(0,5,0);scene.add(sun,sun.target);
 const fill=new T.DirectionalLight(0xb2c9dc,.55);fill.position.set(30,20,-15);scene.add(fill);
 const skyMaterial=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{top:{value:new T.Color(0xa4c9d8)},bottom:{value:new T.Color(0xe7ecd9)}},vertexShader:'varying vec3 vPosition;void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec3 vPosition;uniform vec3 top;uniform vec3 bottom;void main(){float h=clamp(normalize(vPosition).y*.95,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.5)),1.);}'});
 const sky=new T.Mesh(new T.SphereGeometry(190,32,20),skyMaterial);scene.add(sky);
 const stars=[];for(let i=0;i<600;i++) {const a=Math.random()*Math.PI*2,y=.08+Math.random()*.92,r=Math.sqrt(1-y*y);stars.push(Math.cos(a)*r*155,y*155,Math.sin(a)*r*155);}
 const starGeometry=new T.BufferGeometry();starGeometry.setAttribute('position',new T.Float32BufferAttribute(stars,3));
 const starMaterial=new T.PointsMaterial({color:0xfaf2d0,size:.27,transparent:true,opacity:0,depthWrite:false});scene.add(new T.Points(starGeometry,starMaterial));
 scene.fog=new T.Fog(0xdde4d6,70,150);
 const dayTop=new T.Color(0xa4c9d8),dayBottom=new T.Color(0xe7ecd9),nightTop=new T.Color(0x0e1731),nightBottom=new T.Color(0x354655);
 let night=0;
 function update(dt,isNight) {
  night=T.MathUtils.damp(night,isNight?1:0,1.4,dt);
  skyMaterial.uniforms.top.value.copy(dayTop).lerp(nightTop,night);skyMaterial.uniforms.bottom.value.copy(dayBottom).lerp(nightBottom,night);
  hemi.intensity=2.1-night*1.6;sun.intensity=3.2-night*3;fill.intensity=.55+night*.13;
  scene.fog.color.copy(dayBottom).lerp(nightBottom,night);starMaterial.opacity=night*.9;renderer.toneMappingExposure=1.05+night*.08;
 }
 return {update};
}
