import * as T from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { Refractor } from 'three/addons/objects/Refractor.js';
import { Water } from 'three/addons/objects/Water2.js';

const riverShader = (
  Water as unknown as {
    WaterShader: {
      uniforms: Record<string, T.IUniform>;
      vertexShader: string;
      fragmentShader: string;
    };
  }
).WaterShader;
function waveNormals(phase: number) {
  const size = 128,
    data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      const u = (x / size) * Math.PI * 2,
        v = (y / size) * Math.PI * 2;
      let dx = 0,
        dy = 0;
      for (let j = 1; j <= 5; j++) {
        const a = j * 2 - 1,
          b = j + 2,
          q = Math.cos(u * a + v * b + phase + j * 0.7);
        dx += ((q * a) / (j * j)) * 0.032;
        dy += ((q * b) / (j * j)) * 0.032;
      }
      const normal = new T.Vector3(-dx, -dy, 1).normalize(),
        i = (y * size + x) * 4;
      data.set(
        [
          (normal.x * 0.5 + 0.5) * 255,
          (normal.y * 0.5 + 0.5) * 255,
          normal.z * 255,
          255,
        ],
        i,
      );
    }
  const texture = new T.DataTexture(data, size, size);
  texture.wrapS = texture.wrapT = T.RepeatWrapping;
  texture.magFilter = T.LinearFilter;
  texture.minFilter = T.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}
export function createRiver() {
  const geometry = new T.PlaneGeometry(15.3, 240);
  const reflector = new Reflector(geometry, {
    textureWidth: 512,
    textureHeight: 512,
    clipBias: 0.003,
  });
  const refractor = new Refractor(geometry, {
    textureWidth: 512,
    textureHeight: 512,
    clipBias: 0.003,
  });
  reflector.matrixAutoUpdate = refractor.matrixAutoUpdate = false;
  const matrix = new T.Matrix4(),
    normal0 = waveNormals(0),
    normal1 = waveNormals(2.4);
  const uniforms = T.UniformsUtils.merge([
    T.UniformsLib.fog,
    riverShader.uniforms,
  ]);
  Object.assign(uniforms, {
    flowDirection: { value: new T.Vector2(0, 1) },
    uTime: { value: 0 },
    color: { value: new T.Color('#c4d7cd') },
    reflectivity: { value: 0.045 },
    textureMatrix: { value: matrix },
    tReflectionMap: { value: reflector.getRenderTarget().texture },
    tRefractionMap: { value: refractor.getRenderTarget().texture },
    tNormalMap0: { value: normal0 },
    tNormalMap1: { value: normal1 },
    config: { value: new T.Vector4(0, 0.075, 0.075, 1) },
  });
  let fragment = riverShader.fragmentShader.replace(
    'uniform vec3 color;',
    'uniform vec3 color;uniform float uTime;',
  );
  fragment = fragment.replaceAll(
    '( vUv * scale )',
    '( vUv * vec2(3.8,60.) * scale )',
  );
  fragment = fragment.replace(
    '#include <tonemapping_fragment>',
    `
float edge=1.-smoothstep(.0,.035,min(vUv.x,1.-vUv.x));
float foam=pow(max(0.,sin(vUv.y*450.-uTime*2.5+sin(vUv.x*80.))),18.);
gl_FragColor.rgb+=edge*foam*.065;
#include <tonemapping_fragment>`,
  );
  const material = new T.ShaderMaterial({
    name: '流动河水',
    uniforms,
    vertexShader: riverShader.vertexShader,
    fragmentShader: fragment,
    transparent: true,
    fog: true,
  });
  const water = new T.Mesh(geometry, material);
  water.rotation.x = -Math.PI / 2;
  water.position.set(33, -0.22, 0);
  water.name = '黑潓江流动水面';
  water.onBeforeRender = (renderer, scene, camera, geo, mat, group) => {
    matrix
      .set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1)
      .multiply(camera.projectionMatrix)
      .multiply(camera.matrixWorldInverse)
      .multiply(water.matrixWorld);
    water.visible = false;
    try {
      reflector.matrixWorld.copy(water.matrixWorld);
      refractor.matrixWorld.copy(water.matrixWorld);
      reflector.onBeforeRender(renderer, scene, camera, geo, mat, group);
      refractor.onBeforeRender(renderer, scene, camera, geo, mat, group);
    } finally {
      water.visible = true;
    }
  };
  return {
    water,
    update(time: number, rain = false) {
      const offset = (time * (rain ? 0.055 : 0.032)) % 0.15;
      uniforms.config.value.set(offset, (offset + 0.075) % 0.15, 0.075, 1);
      uniforms.uTime.value = time;
    },
    dispose() {
      reflector.getRenderTarget().dispose();
      refractor.getRenderTarget().dispose();
      [reflector.material, refractor.material]
        .flat()
        .forEach((m) => m.dispose());
      normal0.dispose();
      normal1.dispose();
    },
  };
}
