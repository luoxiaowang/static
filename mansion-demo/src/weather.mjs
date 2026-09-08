import * as T from 'three';
import {PLAN_SCALE} from './layout.mjs';
export const WEATHER_NAMES={clear:'晴天',rain:'雨天',snow:'雪天',wind:'大风'};
// Heights of sheltered regions: used for both particles and exposed snow coverage.
export function shelterHeight(x,z){
 if((x+4)**2+(z+10)**2<3.8**2)return 10.2;
 if(x>-11&&x<11&&z>-18&&z<-4)return 7.2;
 if(x>-21&&x<-11&&z>-19&&z<7||x>11&&x<21&&z>-8&&z<7)return 3.8;
 if(x>-21.3&&x<-12.7&&z>15.7&&z<24.3)return 3.6;
 if((x+4)**2+(z+10)**2<3.8**2)return 10.2;
 return -.05;
}
export function createWeather(scene,world){
 let kind='clear';const wind={value:0},time={value:0},snow={value:0};
 const n=1000,positions=new Float32Array(n*6),state=Array.from({length:n},()=>({x:Math.random()*60-30,y:Math.random()*25,z:Math.random()*75-22}));
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));
 const lines=new T.LineSegments(geometry,new T.LineBasicMaterial({color:0xb9d5df,transparent:true,opacity:.55,depthWrite:false}));lines.frustumCulled=false;scene.add(lines);
 const points=new T.Points(geometry,new T.PointsMaterial({color:0xf3f6fa,size:.12,transparent:true,opacity:.9,depthWrite:false}));points.frustumCulled=false;scene.add(points);
 // Snow only coats upward-facing exposed surfaces, without a second coplanar mesh.
 for(const m of Object.values(world.mats).filter(m=>!m.transparent&&!m.name.includes('屏幕')&&!m.name.includes('电视'))){
  m.onBeforeCompile=shader=>{shader.uniforms.uSnow=snow;shader.vertexShader='varying vec3 vSnowWorld; varying vec3 vSnowNormal;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvSnowWorld=(modelMatrix*vec4(position,1.)).xyz;vSnowNormal=normalize(mat3(modelMatrix)*normal);');shader.fragmentShader='uniform float uSnow; varying vec3 vSnowWorld; varying vec3 vSnowNormal;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 vec3 p=vSnowWorld;p.xz/=${PLAN_SCALE.toFixed(8)};float cover=-.05;
 if(p.x>-11.&&p.x<11.&&p.z>-18.&&p.z< -4.)cover=7.2;
 if((p.x> -21.&&p.x< -11.&&p.z> -19.&&p.z<7.)||(p.x>11.&&p.x<21.&&p.z> -8.&&p.z<7.))cover=3.8;
 if(p.x> -21.3&&p.x< -12.7&&p.z>15.7&&p.z<24.3)cover=3.6;
 if(pow(p.x+4.,2.)+pow(p.z+10.,2.)<14.44)cover=10.2;
 float snowMask=smoothstep(.45,.85,vSnowNormal.y)*step(cover-.2,p.y)*uSnow;
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.92,.95,.98),snowMask*.95);`);};m.customProgramCacheKey=()=> 'snow-exposure-v1';m.needsUpdate=true;
 }
 const patched=new Set();
 function attachWind(){scene.traverse(o=>{if(!o.isInstancedMesh)return;const m=o.material;if(patched.has(m))return;patched.add(m);m.onBeforeCompile=s=>{s.uniforms.uWind=wind;s.uniforms.uWeatherTime=time;s.vertexShader='uniform float uWind;uniform float uWeatherTime;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
 transformed.x+=sin(uWeatherTime*2.0+position.y*.65)*uWind*min(max(position.y,0.)*.045,.28);`);};m.customProgramCacheKey=()=> 'weather-wind-v1';m.needsUpdate=true;});}
 function set(next){kind=next;snow.value=kind==='snow'?1:0;wind.value=kind==='wind'?1:kind==='rain'?.35:0;lines.visible=kind==='rain'||kind==='wind';points.visible=kind==='snow';lines.material.opacity=kind==='wind'?.16:.55;lines.material.color.setHex(kind==='wind'?0xccd1b6:0xb9d5df);}
 function update(dt,t,camera){time.value=t;if(kind==='clear')return;const count=kind==='wind'?160:n;geometry.setDrawRange(0,count*2);
  for(let i=0;i<count;i++){const p=state[i];p.y-=dt*(kind==='rain'?17:kind==='snow'?1.6:1);p.x+=dt*(kind==='wind'?12:kind==='snow'?Math.sin(t+i)*.6:3);const roof=shelterHeight(p.x,p.z);if(p.y<roof||p.x>34||p.x< -34){p.x=(Math.random()-.5)*66;p.z=Math.random()*72-22;p.y=12+Math.random()*15;}const k=i*6;positions[k]=p.x;positions[k+1]=p.y;positions[k+2]=p.z;positions[k+3]=p.x+(kind==='wind'?1.5:kind==='rain'?.08:0);positions[k+4]=Math.max(shelterHeight(p.x,p.z)+.03,p.y-(kind==='rain'?.65:0));positions[k+5]=p.z;}
  geometry.attributes.position.needsUpdate=true;
 }
 set('clear');return{set,update,attachWind,get kind(){return kind;}};
}
