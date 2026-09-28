import * as T from 'three';
import {createParticles} from './particles.mjs';
import {FIREWORK,GREETING,FUSE_DURATION} from './config.mjs';
const COLORS=[0xffcf62,0xff719e,0x8bbcff,0x8affc6,0xc295ff,0xff9b59];
export function createFireworks(scene) {
 const particles=createParticles(scene),rockets=[],gold=new T.Color(0xffd686),white=new T.Color(0xfff5d6);
 const greeting=createGreeting(scene);let nextLaunch=0,previousPhase='idle',burstCount=0,viewCamera=null;
 const flash=new T.PointLight(0xffb956,0,25,2);flash.position.set(5,7,12);scene.add(flash);
 function launch(time,initial=false) {
  const color=new T.Color(COLORS[burstCount++%COLORS.length]);
  const away=new T.Vector3(FIREWORK.x-viewCamera.position.x,0,FIREWORK.z-viewCamera.position.z).normalize();
  const right=new T.Vector3(1,0,0).applyQuaternion(viewCamera.quaternion);
  const target=new T.Vector3(FIREWORK.x,15+Math.random()*12,FIREWORK.z).addScaledVector(away,7).addScaledVector(right,(Math.random()-.5)*Math.min(24,10+viewCamera.aspect*10));
  rockets.push({start:new T.Vector3(FIREWORK.x,.95,FIREWORK.z),target,age:0,duration:initial?1.25:1.05+Math.random()*.35,color});
  nextLaunch=time+.33+Math.random()*.26;
 }
 function burst(position,color) {
  for(let i=0;i<230;i++) {
   const y=1-(i/229)*2,r=Math.sqrt(1-y*y),angle=i*2.39996,speed=3.4+Math.random()*3.1;
   for(let trail=0;trail<3;trail++) {const velocity=speed*(1-trail*.07);particles.emit(position.toArray(),[Math.cos(angle)*r*velocity,y*velocity,Math.sin(angle)*r*velocity],i%7===0?white:color,.44-trail*.1,1.65+Math.random()*.65,1.15);}
  }
  flash.color.copy(color);flash.intensity=22;
 }
 function update(dt,time,state,camera) {
  const {phase,elapsed}=state;viewCamera=camera;
  if(phase==='fuse') {
   const progress=Math.min(1,elapsed/FUSE_DURATION),x=FIREWORK.x+1.04-progress*.64,y=.2+progress*.34,z=FIREWORK.z+.15*(1-progress);
   for(let i=0;i<6;i++) {particles.emit([x,y,z],[(Math.random()-.5)*1.1,Math.random()*1.3,(Math.random()-.5)*1.1],gold,.1,.25+Math.random()*.2,2);}
  }
  if(phase==='launch'&&previousPhase!=='launch') {launch(time,true);}
  if(phase==='celebrating'&&time>nextLaunch) {launch(time);}
  for(let i=rockets.length-1;i>=0;i--) {
   const rocket=rockets[i];rocket.age+=dt;
   const t=Math.min(1,rocket.age/rocket.duration),p=rocket.start.clone().lerp(rocket.target,t);
   for(let j=0;j<8;j++) {particles.emit([p.x+(Math.random()-.5)*.09,p.y-j*.045,p.z],[(Math.random()-.5)*.1,-.45,0],gold,.19,.35,0);}
   if(t>=1) {burst(p,rocket.color);rockets.splice(i,1);}
  }
  greeting.visible=phase==='celebrating';
  if(greeting.visible) {
   const scale=Math.min(1,.75+elapsed*.6);greeting.scale.setScalar(scale*Math.min(1,camera.aspect/.95));greeting.quaternion.copy(camera.quaternion);
   const away=new T.Vector3(FIREWORK.x-camera.position.x,0,FIREWORK.z-camera.position.z).normalize();greeting.position.set(FIREWORK.x+away.x*10,21,FIREWORK.z+away.z*10);
   greeting.material.uniforms.time.value=time;greeting.material.uniforms.opacity.value=Math.min(1,elapsed*2);
  }
  flash.intensity*=Math.exp(-dt*7);particles.update(dt);previousPhase=phase;
 }
 return {update,greeting};
}
function createGreeting(scene) {
 const canvas=document.createElement('canvas');canvas.width=1400;canvas.height=470;const ctx=canvas.getContext('2d');
 ctx.fillStyle='white';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 225px "Arial",sans-serif';ctx.fillText('1024',700,135);
 ctx.font='bold 98px "PingFang SC","Microsoft YaHei",sans-serif';ctx.fillText(GREETING,700,350);
 const pixels=ctx.getImageData(0,0,1400,470).data,positions=[],phases=[];
 for(let y=0;y<470;y+=5) {for(let x=0;x<1400;x+=5) {if(pixels[(y*1400+x)*4+3]>128) {positions.push((x-700)*.021,(235-y)*.021,0);phases.push(Math.random()*Math.PI*2);}}}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('phase',new T.Float32BufferAttribute(phases,1));
 const material=new T.ShaderMaterial({uniforms:{time:{value:0},opacity:{value:0}},transparent:true,depthWrite:false,blending:T.AdditiveBlending,
 vertexShader:'attribute float phase;uniform float time;varying float sparkle;void main(){sparkle=.55+.45*sin(time*7.0+phase);vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=clamp((2.6+sparkle*1.7)*27.0/-mv.z,1.0,8.0);gl_Position=projectionMatrix*mv;}',
 fragmentShader:'uniform float opacity;varying float sparkle;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;gl_FragColor=vec4(1.,.69+sparkle*.28,.32+sparkle*.45,(1.-d)*opacity);}'
 });
 const points=new T.Points(geometry,material);points.position.set(6,21,25);points.visible=false;scene.add(points);return points;
}
