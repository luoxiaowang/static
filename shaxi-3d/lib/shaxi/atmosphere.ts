import * as T from 'three';
import { getSkyTexture } from './surfaces';
export type Weather = 'clear' | 'mist' | 'rain';
export function createAtmosphere(scene: T.Scene) {
  const uniforms = {
    uTime: { value: 0 },
    uDusk: { value: 0 },
    uCloud: { value: 0.43 },
    uHorizon: { value: new T.Color('#dbe5da') },
    uZenith: { value: new T.Color('#75b4d0') },
  };
  const material = new T.ShaderMaterial({
    side: T.BackSide,
    depthWrite: false,
    uniforms,
    vertexShader: `varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:
      `varying vec3 vDirection;uniform float uTime,uDusk,uCloud;uniform vec3 uHorizon,uZenith;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
    float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*noise(p);p=p*2.03+7.1;a*=.5;}return s;}
    void main(){vec3 d=normalize(vDirection);float h=max(d.y,0.);vec3 col=mix(uHorizon,uZenith,pow(h,.55));vec3 sunDir=normalize(vec3(-.6,.55,.48));float sun=max(dot(d,sunDir),0.);col+=vec3(1.,.66,.29)*pow(sun,30.)*.23;col+=vec3(1.,.85,.55)*smoothstep(.9990,.9997,sun);vec2 p=d.xz/max(d.y+.22,.12)*2.4+vec2(uTime*.008,0.);float n=fbm(p);float cloud=smoothstep(1.-uCloud,1.14-uCloud,n)*smoothstep(.01,.25,h);vec3 c=mix(vec3(.95,.965,.91),vec3(.89,.65,.5),uDusk);c*=.79+.25*fbm(p+vec2(.5));col=mix(col,c,cloud*.93);gl_FragColor=vec4(col,1.);#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}`.replace(
        ';#include',
        ';\n#include',
      ),
  });
  const capturedSky = getSkyTexture();
  const skyMaterial = capturedSky
    ? new T.MeshBasicMaterial({
        map: capturedSky,
        side: T.BackSide,
        depthWrite: false,
        fog: false,
      })
    : null;
  if (skyMaterial) material.dispose();
  const sky = new T.Mesh(
    new T.SphereGeometry(330, 64, 40),
    skyMaterial ?? material,
  );
  sky.renderOrder = -1;
  sky.frustumCulled = false;
  scene.add(sky);
  const rainGeo = new T.BufferGeometry();
  const coords = new Float32Array(900 * 6),
    speeds = new Float32Array(900);
  for (let i = 0; i < 900; i++) {
    const x = Math.sin(i * 74.3) * 24,
      z = Math.cos(i * 32.7) * 24,
      y = ((i % 47) / 47) * 23;
    coords.set([x, y, z, x + 0.035, y - 0.37, z], i * 6);
    speeds[i] = 0.9 + (i % 7) * 0.05;
  }
  rainGeo.setAttribute('position', new T.BufferAttribute(coords, 3));
  const rainMat = new T.LineBasicMaterial({
    color: '#d6e0df',
    transparent: true,
    opacity: 0.25,
    depthWrite: false,
  });
  const rain = new T.LineSegments(rainGeo, rainMat);
  rain.visible = false;
  rain.frustumCulled = false;
  scene.add(rain);
  let weather: Weather = 'clear',
    dusk = false;
  return {
    sky,
    set(weatherValue: Weather, duskValue: boolean) {
      weather = weatherValue;
      skyMaterial?.color.set(
        duskValue
          ? '#263754'
          : weather === 'rain'
            ? '#929ea6'
            : weather === 'mist'
              ? '#c3cccf'
              : '#ffffff',
      );
      dusk = duskValue;
      rain.visible = weather === 'rain';
      uniforms.uDusk.value = dusk ? 1 : 0;
      uniforms.uCloud.value =
        weather === 'rain' ? 0.76 : weather === 'mist' ? 0.61 : 0.43;
      uniforms.uHorizon.value.set(
        dusk ? '#d5b6a3' : weather === 'clear' ? '#dbe5da' : '#cad6d1',
      );
      uniforms.uZenith.value.set(
        dusk ? '#687e99' : weather === 'clear' ? '#75b4d0' : '#a3b6bd',
      );
    },
    update(time: number, dt: number, focus: T.Vector3, reduced: boolean) {
      sky.position.copy(focus);
      if (!reduced) {
        uniforms.uTime.value = time;
        // Keep the photographed solar disc aligned with the directional light.
        sky.rotation.y = 0;
      }
      if (weather !== 'rain' || reduced) return;
      rain.position.set(focus.x, focus.y, focus.z);
      const p = rainGeo.getAttribute('position');
      for (let i = 0; i < 900; i++) {
        const k = i * 6;
        let y = coords[k + 1] - dt * 12 * speeds[i];
        if (y < -0.5) y += 23;
        coords[k + 1] = y;
        coords[k + 4] = y - 0.37;
      }
      p.needsUpdate = true;
    },
  };
}
