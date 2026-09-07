import * as T from 'three';
import { assetUrl } from './asset-url.ts';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
export type Surface =
  | 'grass'
  | 'road'
  | 'wood'
  | 'plaster'
  | 'stone'
  | 'roof'
  | 'bark';
type RecordEntry = {
  color: string;
  normal: string;
  roughness: string;
  source: string;
  license: string;
};
const maps = new Map<
  Surface,
  { color: T.Texture; normal: T.Texture; roughness: T.Texture }
>();
const face: T.Texture | undefined = undefined;
let sky: T.DataTexture | undefined;
const sunDirection = new T.Vector3(-25, 34, 24).normalize();
let loading: Promise<void> | undefined;
export function preloadSceneAssets() {
  loading ??= (async () => {
    const response = await fetch(assetUrl('/assets/pbr/manifest.json'));
    if (!response.ok) throw new Error('材质清单加载失败');
    const manifest = (await response.json()) as Record<Surface, RecordEntry>;
    const loader = new T.TextureLoader();
    await Promise.all(
      Object.entries(manifest).map(async ([name, entry]) => {
        const [color, normal, roughness] = await Promise.all(
          [entry.color, entry.normal, entry.roughness].map((path) =>
            loader.loadAsync(assetUrl(path)),
          ),
        );
        color.colorSpace = T.SRGBColorSpace;
        for (const tex of [color, normal, roughness]) {
          tex.wrapS = tex.wrapT = T.RepeatWrapping;
          tex.anisotropy = 8;
        }
        maps.set(name as Surface, { color, normal, roughness });
      }),
    );
    sky = await new HDRLoader().loadAsync(assetUrl('/assets/pbr/sky-4k.hdr'));
    sky.mapping = T.EquirectangularReflectionMapping;
    // The light follows the captured solar disc, so highlights and shadows agree.
    const pixels = sky.image.data as Uint16Array,
      w = sky.image.width,
      h = sky.image.height;
    let brightest = 0,
      at = 0;
    for (let y = 0; y < h * 0.48; y += 2)
      for (let x = 0; x < w; x += 2) {
        const i = (y * w + x) * 4,
          l =
            T.DataUtils.fromHalfFloat(pixels[i]) * 0.2126 +
            T.DataUtils.fromHalfFloat(pixels[i + 1]) * 0.7152 +
            T.DataUtils.fromHalfFloat(pixels[i + 2]) * 0.0722;
        if (l > brightest) {
          brightest = l;
          at = y * w + x;
        }
      }
    const theta = (Math.floor(at / w) / h) * Math.PI,
      phi = (1 - (at % w) / w) * Math.PI * 2;
    sunDirection.set(
      -Math.cos(phi) * Math.sin(theta),
      Math.cos(theta),
      Math.sin(phi) * Math.sin(theta),
    );
  })().catch((e: unknown) => {
    loading = undefined;
    throw e;
  });
  return loading;
}
export function getSunDirection() {
  return sunDirection.clone();
}
export function getSkyTexture() {
  return sky;
}
export function getFaceTexture() {
  return face;
}
export function surface(name: Surface, fallback: string, worldScale?: number) {
  const set = maps.get(name);
  const material = new T.MeshStandardMaterial({
    color: set ? '#ffffff' : fallback,
    roughness: 0.9,
    ...(set
      ? { map: set.color, normalMap: set.normal, roughnessMap: set.roughness }
      : {}),
  });
  material.name = '实景材质 · ' + name;
  material.normalScale.set(0.55, 0.55);
  if (worldScale) material.userData.worldScale = worldScale;
  return material;
}
