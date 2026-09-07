import * as T from 'three';
import { createMountains } from './landscape.ts';
import { createRiver } from './river.ts';
import { surface } from './surfaces.ts';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { groundHeight, type Obstacle } from './navigation.ts';

// Fixed seed makes the town repeatable across devices and reloads.
let seed = 82731;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};
const range = (a: number, b: number) => a + rand() * (b - a);
const mats = new Map<string, T.MeshStandardMaterial>();
function mat(color: string, roughness = 0.88) {
  const key = color + roughness;
  if (!mats.has(key))
    mats.set(key, new T.MeshStandardMaterial({ color, roughness }));
  return mats.get(key)!;
}
const unitBox = new T.BoxGeometry(1, 1, 1);
const unitSphere = new T.SphereGeometry(1, 12, 9);
const unitCylinder = new T.CylinderGeometry(1, 1, 1, 12);
function mesh(
  parent: T.Object3D,
  geo: T.BufferGeometry,
  material: T.Material,
  x: number,
  y: number,
  z: number,
  sx = 1,
  sy = 1,
  sz = 1,
) {
  const m = new T.Mesh(geo, material);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
function box(
  p: T.Object3D,
  x: number,
  y: number,
  z: number,
  w: number,
  h: number,
  d: number,
  color: string | T.Material,
) {
  return mesh(
    p,
    unitBox,
    typeof color === 'string' ? mat(color) : color,
    x,
    y,
    z,
    w,
    h,
    d,
  );
}
function beam(
  p: T.Object3D,
  a: T.Vector3,
  b: T.Vector3,
  width: number,
  color: string | T.Material,
) {
  const m = mesh(
    p,
    unitCylinder,
    typeof color === 'string' ? mat(color) : color,
    (a.x + b.x) / 2,
    (a.y + b.y) / 2,
    (a.z + b.z) / 2,
    width,
    a.distanceTo(b),
    width,
  );
  m.quaternion.setFromUnitVectors(
    new T.Vector3(0, 1, 0),
    b.clone().sub(a).normalize(),
  );
  return m;
}
const V = (x: number, y: number, z: number) => new T.Vector3(x, y, z);

function sign(
  parent: T.Object3D,
  text: string,
  x: number,
  y: number,
  z: number,
  w: number,
  h: number,
  paper = false,
) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 192;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = paper ? '#d7b87b' : '#302b24';
  ctx.fillRect(0, 0, 512, 192);
  ctx.strokeStyle = paper ? '#967040' : '#bda173';
  ctx.lineWidth = 6;
  ctx.strokeRect(9, 9, 494, 174);
  ctx.fillStyle = paper ? '#453223' : '#ecddb3';
  ctx.font = '64px "Songti SC", "SimSun", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 98, 465);
  const map = new T.CanvasTexture(c);
  map.colorSpace = T.SRGBColorSpace;
  return mesh(
    parent,
    new T.PlaneGeometry(w, h),
    new T.MeshStandardMaterial({ map, roughness: 0.9 }),
    x,
    y,
    z,
  );
}

type InstanceBatch = {
  geometry: T.BufferGeometry;
  material: T.Material;
  matrices: T.Matrix4[];
  colors: T.Color[];
};
export function buildWorld() {
  seed = 82731;
  mats.clear();
  const root = new T.Group();
  const obstacles: Obstacle[] = [];
  const interiors: {
    x: number;
    z: number;
    name: string;
    yaw: number;
    width: number;
    depth: number;
    balcony: boolean;
  }[] = [];
  const interactables: {
    x: number;
    z: number;
    y: number;
    name: string;
    lines: string[];
  }[] = [];
  const vendors: { x: number; z: number; yaw: number; kind: string }[] = [];
  const batches = new Map<string, InstanceBatch>();
  const dummy = new T.Object3D();
  function inst(
    key: string,
    geometry: T.BufferGeometry,
    material: T.Material,
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
    rx = 0,
    ry = 0,
    rz = 0,
    color?: T.Color,
  ) {
    if (!batches.has(key))
      batches.set(key, { geometry, material, matrices: [], colors: [] });
    dummy.position.set(x, y, z);
    dummy.scale.set(sx, sy, sz);
    dummy.rotation.set(rx, ry, rz);
    dummy.updateMatrix();
    batches.get(key)!.matrices.push(dummy.matrix.clone());
    batches.get(key)!.colors.push(color ?? new T.Color(0xffffff));
  }
  const plaster = surface('plaster', '#d9ccb5', 0.35),
    wood = surface('wood', '#856849', 0.3),
    stone = surface('stone', '#a19e90');
  const bark = surface('bark', '#736353');
  const routes: {
    ax: number;
    az: number;
    bx: number;
    bz: number;
    width: number;
  }[] = [];
  const terrain = surface('grass', '#798665', 0.27),
    street = surface('road', '#aba590', 0.65);
  const glow = new T.MeshStandardMaterial({
    color: '#e99c4d',
    emissive: '#ff8d2e',
    emissiveIntensity: 0.28,
    roughness: 0.6,
  });
  const leafParts: T.BufferGeometry[] = [];
  for (let i = 0; i < 36; i++) {
    const g = new T.BufferGeometry();
    const verts: number[] = [],
      uv: number[] = [];
    const outline = [
      [-0.0, 0.29],
      [-0.075, 0.16],
      [-0.12, 0],
      [-0.07, -0.15],
      [0, -0.25],
      [0.07, -0.15],
      [0.12, 0],
      [0.075, 0.16],
    ];
    for (let k = 0; k < outline.length; k++) {
      const a = outline[k],
        b = outline[(k + 1) % outline.length];
      verts.push(0, 0, 0.035, a[0], a[1], 0, b[0], b[1], 0);
      uv.push(
        0.5,
        0.5,
        a[0] / 0.24 + 0.5,
        a[1] / 0.54 + 0.46,
        b[0] / 0.24 + 0.5,
        b[1] / 0.54 + 0.46,
      );
    }
    g.setAttribute('position', new T.Float32BufferAttribute(verts, 3));
    g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    g.rotateX(range(-1.1, 1.1));
    g.rotateY(rand() * Math.PI * 2);
    g.rotateZ(rand() * Math.PI * 2);
    g.translate(range(-0.72, 0.72), range(-0.55, 0.55), range(-0.72, 0.72));
    leafParts.push(g);
  }
  const leafGeo = mergeGeometries(leafParts)!;
  leafParts.forEach((g) => g.dispose());
  const leafMat = new T.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.92,
  });
  leafMat.side = T.DoubleSide;
  const wind = { value: 0 };
  leafMat.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = wind;
    shader.vertexShader =
      'uniform float uWindTime;varying vec2 vLeafUv;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
vLeafUv=uv;
#ifdef USE_INSTANCING
float phase=instanceMatrix[3].x*.4+instanceMatrix[3].z*.3;
transformed.x+=sin(uWindTime*1.65+phase+position.y*2.)*.07;
transformed.z+=cos(uWindTime*1.2+phase)*.04;
#endif`,
    );
    shader.fragmentShader = 'varying vec2 vLeafUv;\n' + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
float midrib=1.-smoothstep(.005,.024,abs(vLeafUv.x-.5));
float veins=pow(max(0.,cos((vLeafUv.y-abs(vLeafUv.x-.5)*.7)*105.)),20.);
float mottling=sin(vLeafUv.x*173.+sin(vLeafUv.y*79.))*sin(vLeafUv.y*137.);
diffuseColor.rgb*=.76+.13*mottling+.13*veins+.16*midrib;
if(!gl_FrontFacing)diffuseColor.rgb*=1.16;`,
    );
  };
  const tileGeo = new T.CylinderGeometry(
    0.115,
    0.115,
    0.63,
    7,
    1,
    true,
    Math.PI / 2,
    Math.PI,
  );
  const tileMat = surface('stone', '#657069');
  const cobbleGeo = new T.DodecahedronGeometry(1, 0);
  const cobbleMat = mat('#d0c5ad');
  box(root, -41.5, -0.37, 0, 133, 0.6, 230, terrain);
  box(root, 74.5, -0.37, 0, 67, 0.6, 230, terrain);
  box(root, 0, -0.09, 7, 13, 0.16, 68, street);
  box(root, 1, -0.1, -27, 42, 0.17, 26, street);
  box(root, 17, -0.1, -21, 26, 0.16, 7, street);
  box(root, 47, -0.09, -21, 12, 0.16, 7, street);
  // Individually raised flagstones catch the low afternoon sun.
  for (let z = -39; z < 40; z += 1.22)
    for (let x = -5.7; x < 6; x += 1.22) {
      const plaza = z < -15;
      inst(
        'paving',
        unitBox,
        stone,
        x + (Math.round(z / 1.22) % 2) * 0.4,
        range(-0.018, 0.016),
        z,
        range(1.08, 1.16),
        range(0.07, 0.11),
        range(1.08, 1.16),
        0,
        range(-0.025, 0.025),
        0,
        new T.Color().setHSL(0.115, 0.12, range(0.69, 0.9)),
      );
      if (plaza)
        for (const side of [-1, 1])
          for (let ex = 7; ex < 19; ex += 1.35)
            inst(
              'paving',
              unitBox,
              stone,
              ex * side,
              0,
              z,
              1.26,
              0.09,
              1.14,
              0,
              range(-0.015, 0.015),
            );
    }
  for (let i = 0; i < 6600; i++) {
    const z = range(-14, 39),
      side = rand() < 0.5 ? -1 : 1,
      x = side * range(4.65, 6.9);
    inst(
      'cobbles',
      cobbleGeo,
      cobbleMat,
      x,
      0.025,
      z,
      range(0.08, 0.2),
      range(0.025, 0.07),
      range(0.08, 0.2),
      rand(),
      rand(),
      rand(),
      new T.Color().setHSL(0.11, 0.13, range(0.52, 0.94)),
    );
  }
  for (let x = 6; x < 25; x += 1.2)
    for (let z = -23.8; z < -18; z += 1.2)
      inst('paving', unitBox, stone, x, 0, z, 1.12, 0.08, 1.12);
  const redGlow = new T.MeshStandardMaterial({
    color: '#b94326',
    emissive: '#b92c12',
    emissiveIntensity: 0.18,
  });
  const roofMaterial = surface('roof', '#505c56');
  roofMaterial.side = T.DoubleSide;
  function lantern(
    p: T.Object3D,
    x: number,
    y: number,
    z: number,
    red = false,
  ) {
    beam(p, V(x, y + 0.7, z), V(x, y + 0.3, z), 0.022, '#554a30');
    mesh(p, unitSphere, red ? redGlow : glow, x, y, z, 0.29, 0.4, 0.29);
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      beam(
        p,
        V(x + Math.cos(a) * 0.2, y - 0.26, z + Math.sin(a) * 0.2),
        V(x + Math.cos(a) * 0.2, y + 0.26, z + Math.sin(a) * 0.2),
        0.012,
        '#8c4b25',
      );
    }
    mesh(p, unitCylinder, mat('#79502a'), x, y + 0.33, z, 0.18, 0.065, 0.18);
    mesh(p, unitCylinder, mat('#79502a'), x, y - 0.33, z, 0.18, 0.065, 0.18);
    beam(
      p,
      V(x, y - 0.33, z),
      V(x, y - 0.65, z),
      0.022,
      red ? '#a73c23' : '#c19343',
    );
  }
  // Swept roof slopes, upturned corners, ridge and overlapping half-round tiles.
  function roof(
    p: T.Group,
    width: number,
    depth: number,
    base: number,
    rotation = 0,
  ) {
    const half = depth / 2 + 0.7,
      peak = 1.85;
    const height = (t: number) => base + peak * (1 - t) + 0.43 * Math.pow(t, 6);
    // Solid attic continues the wall into the curved roof; side gables and
    // front/back infill share the exact roof profile instead of leaving a gap.
    const attic: number[] = [];
    const top = (x: number, z: number) =>
      height(Math.abs(z) / half) +
      (0.28 * Math.pow(Math.abs(x / ((width + 1.5) / 2)), 8) * Math.abs(z)) /
        half -
      0.045;
    const quad = (a: number[], b: number[], c: number[], d: number[]) =>
      attic.push(...a, ...b, ...c, ...a, ...c, ...d);
    for (const side of [-1, 1]) {
      for (let j = 0; j < 20; j++) {
        const z0 = -depth / 2 + (depth * j) / 20,
          z1 = -depth / 2 + (depth * (j + 1)) / 20,
          x = (side * width) / 2;
        quad(
          [x, base - 0.15, z0],
          [x, top(x, z0), z0],
          [x, top(x, z1), z1],
          [x, base - 0.15, z1],
        );
      }
      for (let j = 0; j < 16; j++) {
        const x0 = -width / 2 + (width * j) / 16,
          x1 = -width / 2 + (width * (j + 1)) / 16,
          z = (side * depth) / 2;
        quad(
          [x0, base - 0.15, z],
          [x0, top(x0, z), z],
          [x1, top(x1, z), z],
          [x1, base - 0.15, z],
        );
      }
      box(
        p,
        0,
        base - 0.02,
        (side * depth) / 2,
        width + 0.12,
        0.22,
        0.18,
        wood,
      );
      for (let x = -width / 2; x <= width / 2; x += 0.55)
        beam(
          p,
          V(x, top(x, (side * depth) / 2) - 0.08, (side * depth) / 2),
          V(x, height(1) - 0.08, side * half),
          0.055,
          wood,
        );
    }
    const atticGeo = new T.BufferGeometry();
    atticGeo.setAttribute('position', new T.Float32BufferAttribute(attic, 3));
    atticGeo.computeVertexNormals();
    const atticMat = plaster;
    atticMat.side = T.DoubleSide;
    mesh(p, atticGeo, atticMat, 0, 0, 0);
    for (const side of [-1, 1]) {
      const g = new T.BufferGeometry();
      const pos: number[] = [];
      const uv: number[] = [];
      const idx: number[] = [];
      for (let row = 0; row <= 10; row++)
        for (let col = 0; col <= 16; col++) {
          const t = row / 10,
            x = (col / 16 - 0.5) * (width + 1.5),
            corner = 0.28 * Math.pow(Math.abs(col / 8 - 1), 8) * t;
          pos.push(x, height(t) + corner, side * t * half);
          uv.push(col / 16, t);
        }
      for (let r = 0; r < 10; r++)
        for (let c = 0; c < 16; c++) {
          const a = r * 17 + c;
          idx.push(a, a + 17, a + 1, a + 1, a + 17, a + 18);
        }
      g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      const rm = roofMaterial;
      mesh(p, g, rm, 0, 0, 0);
      for (let x = -(width + 1.35) / 2; x < (width + 1.35) / 2; x += 0.26)
        for (let row = 0; row < 9; row++) {
          const t = (row + 0.5) / 9,
            t2 = Math.min(1, t + 0.01),
            slope = (height(t2) - height(t)) / (0.01 * half);
          const pos = V(
            x,
            height(t) +
              0.05 +
              0.28 * Math.pow(Math.abs(x / ((width + 1.5) / 2)), 8) * t,
            side * t * half,
          );
          pos.applyAxisAngle(V(0, 1, 0), rotation).add(p.position);
          // Cylinder's long axis follows the down-slope direction.
          const ry = rotation;
          const rx =
            side > 0
              ? Math.PI / 2 - Math.atan(slope)
              : Math.PI / 2 + Math.atan(slope);
          inst(
            'roofTiles',
            tileGeo,
            tileMat,
            pos.x,
            pos.y,
            pos.z,
            1,
            1,
            1,
            rx,
            ry,
            0,
            new T.Color().setHSL(0.13, 0.045, range(0.63, 1)),
          );
        }
      beam(
        p,
        V(-(width + 1.5) / 2, height(1) + 0.16, side * half),
        V((width + 1.5) / 2, height(1) + 0.16, side * half),
        0.12,
        '#554d3c',
      );
    }
    beam(
      p,
      V(-width / 2 - 0.8, base + peak + 0.12, 0),
      V(width / 2 + 0.8, base + peak + 0.12, 0),
      0.16,
      '#687069',
    );
    for (const side of [-1, 1]) {
      beam(
        p,
        V(side * (width / 2 + 0.6), base + peak + 0.1, 0),
        V(side * (width / 2 + 1), base + peak + 0.48, 0),
        0.12,
        '#626b61',
      );
    }
  }
  function house(
    x: number,
    z: number,
    w: number,
    d: number,
    h: number,
    rotation: number,
    title: string,
  ) {
    const p = new T.Group();
    p.position.set(x, 0, z);
    p.rotation.y = rotation;
    root.add(p);
    interiors.push({
      x,
      z,
      name: title,
      yaw: rotation,
      width: w,
      depth: d,
      balcony: false,
    });
    obstacles.push({
      x,
      z,
      bottom: h + 0.25,
      height: h + 0.35,
      roof: { rotation, width: w, depth: d, base: h + 0.35 },
      halfX:
        (Math.abs(Math.cos(rotation)) * w + Math.abs(Math.sin(rotation)) * d) /
          2 +
        0.18,
      halfZ:
        (Math.abs(Math.cos(rotation)) * d + Math.abs(Math.sin(rotation)) * w) /
          2 +
        0.18,
    });
    function wall(
      lx: number,
      lz: number,
      sx: number,
      sz: number,
      top = h + 0.3,
      bottom = 0,
    ) {
      box(p, lx, (top + bottom) / 2, lz, sx, top - bottom, sz, plaster);
      const pt = V(lx, 0, lz).applyAxisAngle(V(0, 1, 0), rotation);
      obstacles.push({
        x: x + pt.x,
        z: z + pt.z,
        halfX:
          (Math.abs(Math.cos(rotation)) * sx +
            Math.abs(Math.sin(rotation)) * sz) /
          2,
        halfZ:
          (Math.abs(Math.cos(rotation)) * sz +
            Math.abs(Math.sin(rotation)) * sx) /
          2,
        height: top,
        bottom,
      });
    }
    box(p, 0, -0.04, 0, w, 0.08, d, wood);
    wall(-w / 2, 0, 0.18, d);
    wall(w / 2, 0, 0.18, d);
    const wing = (w - 2.4) / 2;
    for (const side of [-1, 1]) {
      wall(side * (1.2 + wing / 2), d / 2, wing, 0.18);
      wall(side * (1.2 + wing / 2), -d / 2, wing, 0.18);
    }
    wall(0, -d / 2, 2.4, 0.18, h + 0.3, 2.5);
    wall(0, d / 2, 2.4, 0.18, h + 0.3, 2.5);
    // Furnishings stay beside the central route from doorway to the room.
    box(p, -w * 0.29, 0.4, -d * 0.15, 1.15, 0.8, 0.8, wood);
    box(p, -w * 0.29, 0.84, -d * 0.15, 0.95, 0.06, 0.6, '#cbb98f');
    for (const side of [-1, 1]) {
      const panel = box(
        p,
        side * 1.27,
        1.2,
        d / 2 + 0.4,
        0.85,
        2.4,
        0.08,
        wood,
      );
      panel.rotation.y = side * 0.95;
    }
    for (let xx = -w / 2 + 0.35; xx <= w / 2; xx += 1.35) {
      if (Math.abs(xx + 0.48) < 1.7) continue;
      box(p, xx, 1.65, d / 2 + 0.14, 0.105, 2.7, 0.15, wood);
      box(p, xx + 0.48, 1.93, d / 2 + 0.18, 0.8, 1.05, 0.1, '#342e22');
      for (let k = 0; k < 4; k++)
        box(
          p,
          xx + 0.18 + k * 0.2,
          1.93,
          d / 2 + 0.25,
          0.028,
          1.03,
          0.04,
          wood,
        );
      for (let k = 0; k < 4; k++)
        box(
          p,
          xx + 0.48,
          1.54 + k * 0.25,
          d / 2 + 0.25,
          0.8,
          0.028,
          0.04,
          wood,
        );
      box(p, xx + 0.48, 0.93, d / 2 + 0.2, 0.8, 0.57, 0.065, wood);
    }
    for (const xx of [-w / 2 + 0.2, w / 2 - 0.2])
      box(p, xx, h / 2, d / 2 + 0.23, 0.19, h, 0.22, '#62452e');
    for (const yy of [2.65, h - 0.23])
      box(p, 0, yy, d / 2 + 0.22, w, 0.16, 0.19, wood);
    if (h > 4) {
      box(p, 0, 3.86, d / 2 + 0.05, w - 0.6, 1.42, 0.08, wood);
      for (let xx = -w / 2 + 0.8; xx < w / 2; xx += 1.15) {
        box(p, xx, 4.03, d / 2 + 0.13, 0.75, 0.75, 0.07, '#373827');
        for (let j = 0; j < 4; j++) {
          box(
            p,
            xx - 0.28 + j * 0.18,
            4.03,
            d / 2 + 0.18,
            0.032,
            0.75,
            0.04,
            wood,
          );
          box(p, xx, 3.75 + j * 0.18, d / 2 + 0.18, 0.75, 0.032, 0.04, wood);
        }
      }
      // A small separate eave shelters the shop front.
      const awning = box(
        p,
        0,
        3.08,
        d / 2 + 0.38,
        w + 0.55,
        0.18,
        1.9,
        '#5c6257',
      );
      awning.rotation.x = 0.17;
      for (let xx = -w / 2; xx < w / 2; xx += 0.26)
        beam(
          p,
          V(xx, 3.22, d / 2 - 0.5),
          V(xx, 2.93, d / 2 + 1.25),
          0.065,
          '#798074',
        );
    }
    box(p, 0, 0.12, d / 2 + 0.65, w * 0.75, 0.2, 1, stone);
    sign(
      p,
      title,
      0,
      h > 4 ? 3.55 : 2.78,
      d / 2 + 0.31,
      Math.min(2.4, w * 0.5),
      0.59,
    );
    for (const side of [-1, 1])
      lantern(
        p,
        side * (w / 2 - 0.75),
        h > 4 ? 2.42 : 2.6,
        d / 2 + 0.8,
        rand() > 0.45,
      );
    roof(p, w, d, h + 0.35, rotation);
  }
  const names = [
    '山月茶舍',
    '巷里人家',
    '青石客栈',
    '布衣坊',
    '四方小院',
    '马帮驿站',
    '闲云书屋',
  ];
  for (let i = 0; i < 6; i++) {
    const z = 31 - i * 8.7;
    house(-10.2, z, 7.8, 6.6, i % 3 === 0 ? 4.9 : 3.15, Math.PI / 2, names[i]);
    if (i !== 5)
      house(
        10.3,
        z + 0.5,
        7.6,
        6.8,
        i % 2 === 0 ? 4.8 : 3.2,
        -Math.PI / 2,
        names[(i + 3) % 7],
      );
  }
  house(-13, -36, 8, 6, 4.7, 0, '寺登旧巷');
  house(13, -36, 8, 6, 4.6, 0, '古道客栈');
  // A timber stage forms the square's focal point.
  house(0, -40, 11, 7, 5.9, 0, '古 戏 台');
  const stage = new T.Group();
  stage.position.set(0, 0, -40);
  root.add(stage);
  box(stage, 0, 0.8, 4, 10, 1.5, 2.8, stone);
  box(stage, 0, 2.75, 3.6, 8.9, 2.4, 0.1, '#382f24');
  for (const xx of [-4.3, 4.3])
    box(stage, xx, 3.15, 4.85, 0.23, 4.6, 0.23, '#79462c');
  for (let i = 0; i < 4; i++)
    box(stage, 0, 0.12 + i * 0.16, 6.4 - i * 0.32, 6.4, 0.2, 1, stone);
  const porch = new T.Group();
  porch.position.set(0, 3, -35.6);
  root.add(porch);
  roof(porch, 10, 2.1, 0);
  obstacles.push({ x: 0, z: -35.8, halfX: 5.4, halfZ: 1.7 });
  function tree(x: number, z: number, size: number, autumn = false) {
    const trunk = bark;
    beam(
      root,
      V(x, 0, z),
      V(x + 0.23 * size, 3.5 * size, z),
      0.22 * size,
      trunk,
    );
    for (let i = 0; i < 7; i++) {
      const a = i * 2.4,
        top = V(
          x + Math.cos(a) * 1.8 * size,
          range(3.4, 5.4) * size,
          z + Math.sin(a) * 1.8 * size,
        );
      beam(root, V(x + 0.15 * size, 2.2 * size, z), top, 0.09 * size, trunk);
      for (let j = 0; j < 9; j++) {
        const xx = top.x + range(-1.4, 1.4) * size,
          yy = top.y + range(-0.15, 1.25) * size,
          zz = top.z + range(-1.4, 1.4) * size;
        inst(
          'leaves',
          leafGeo,
          leafMat,
          xx,
          yy,
          zz,
          range(0.5, 1) * size,
          range(0.35, 0.7) * size,
          range(0.5, 1) * size,
          rand(),
          rand(),
          rand(),
          new T.Color().setHSL(
            autumn ? range(0.08, 0.14) : range(0.18, 0.26),
            autumn ? 0.58 : 0.3,
            range(0.27, 0.48),
          ),
        );
      }
    }
    obstacles.push({
      x,
      z,
      halfX: 0.26 * size,
      halfZ: 0.26 * size,
      height: 5 * size,
    });
  }
  tree(-5.8, -25, 1.8);
  tree(11.5, -27, 1.3);
  // Stone seating under the old tree.
  for (const side of [-1, 1]) {
    box(root, -5.8 + side * 2.5, 0.48, -25, 0.5, 0.85, 4.9, stone);
    box(root, -5.8, 0.48, -25 + side * 2.5, 5.5, 0.85, 0.5, stone);
    obstacles.push(
      { x: -5.8 + side * 2.5, z: -25, halfX: 0.3, halfZ: 2.5 },
      { x: -5.8, z: -25 + side * 2.5, halfX: 2.8, halfZ: 0.3 },
    );
  }
  for (let i = 0; i < 13; i++) {
    tree(22 + range(-1, 1), -40 + i * 6, 0.8 + rand() * 0.35, i % 3 !== 0);
    tree(45 + range(-1.5, 1.5), -46 + i * 7, range(0.9, 1.35), i % 3 !== 0);
  }
  for (let i = 0; i < 12; i++)
    tree(-21 + range(-1, 1), -39 + i * 7, range(0.8, 1.2));
  function pot(x: number, z: number, flowers = false) {
    mesh(
      root,
      new T.CylinderGeometry(0.35, 0.23, 0.55, 10),
      mat('#786f51'),
      x,
      0.3,
      z,
    );
    for (let i = 0; i < 9; i++) {
      const a = i * 2.4;
      const tip = V(
        x + Math.cos(a) * 0.47,
        0.7 + rand() * 0.5,
        z + Math.sin(a) * 0.47,
      );
      beam(root, V(x, 0.45, z), tip, 0.025, '#4a6840');
      inst(
        'leaves',
        leafGeo,
        leafMat,
        tip.x,
        tip.y,
        tip.z,
        0.15,
        0.35,
        0.09,
        0,
        a,
        0.5,
        new T.Color(flowers ? '#bd8da1' : '#6c854a'),
      );
    }
  }
  for (let z = -12; z < 37; z += 4.2)
    for (const side of [-1, 1]) {
      pot(side * 5.85, z, z % 3 > 1);
    }
  // Quiet market details: cloth canopy, tea tables and stacked baskets.
  for (const z of [14, -4]) {
    const p = new T.Group();
    p.position.set(-5.75, 0, z);
    root.add(p);
    box(p, 0, 0.95, 0, 1.2, 0.12, 2.1, wood);
    for (const xx of [-0.48, 0.48])
      for (const zz of [-0.9, 0.9])
        box(p, xx, 0.48, zz, 0.09, 0.9, 0.09, '#5e4b30');
    for (let i = 0; i < 6; i++) {
      mesh(
        p,
        new T.CylinderGeometry(0.14, 0.12, 0.2, 10),
        mat('#b4a57f'),
        range(-0.4, 0.4),
        1.12,
        range(-0.75, 0.75),
      );
    }
    obstacles.push({ x: -5.75, z, halfX: 0.6, halfZ: 1.05 });
  }
  // River has lowered water, stone banks, and a genuinely walkable arched deck.
  box(root, 33, -1.45, 0, 15.8, 0.12, 240, stone);
  for (const x of [24.8, 41.2]) {
    box(root, x, -0.18, 0, 0.55, 0.6, 240, stone);
    for (let z = -62; z < 64; z += 1.4)
      inst(
        'bank',
        cobbleGeo,
        stone,
        x,
        -0.15,
        z,
        0.45,
        0.4,
        0.72,
        rand(),
        rand(),
      );
  }
  const arch = new T.Shape();
  arch.moveTo(25, -0.3);
  for (let i = 0; i <= 40; i++) {
    const x = 25 + (16 * i) / 40;
    arch.lineTo(x, groundHeight(x, -21) + 0.06);
  }
  arch.lineTo(41, -0.3);
  for (let i = 40; i >= 0; i--) {
    const x = 25 + (16 * i) / 40;
    arch.lineTo(x, Math.max(-0.3, groundHeight(x, -21) - 0.8));
  }
  arch.closePath();
  const bridgeGeo = new T.ExtrudeGeometry(arch, {
    depth: 4,
    bevelEnabled: false,
    steps: 1,
  });
  mesh(root, bridgeGeo, stone, 0, 0, -23);
  for (let x = 25; x <= 41; x += 0.8) {
    const y = groundHeight(x, -21);
    for (const z of [-23, -19]) {
      box(root, x, y + 0.55, z, 0.2, 1.05, 0.25, stone);
      mesh(root, unitSphere, stone, x, y + 1.12, z, 0.17, 0.16, 0.17);
      if (x < 40.9) {
        const nx = Math.min(x + 0.8, 41);
        beam(
          root,
          V(x, y + 0.88, z),
          V(nx, groundHeight(nx, -21) + 0.88, z),
          0.095,
          '#b9b19a',
        );
      }
    }
    box(root, x, y + 0.05, -21, 0.065, 0.025, 3.8, '#8e9182');
  }
  for (let i = 0; i < 110; i++) {
    const x = rand() < 0.5 ? range(23.4, 24.7) : range(41.5, 43),
      z = range(-61, 61);
    if (Math.abs(z + 21) < 4) continue;
    inst(
      'reeds',
      unitBox,
      mat('#a69e60'),
      x,
      0.27,
      z,
      0.035,
      range(0.35, 0.85),
      0.035,
      range(-0.4, 0.4),
      rand(),
      range(-0.3, 0.3),
    );
  }
  root.add(createMountains());
  // Connected districts inspired by the supplied map, adapted to this game's scale.
  function road(ax: number, az: number, bx: number, bz: number, width = 4) {
    routes.push({ ax, az, bx, bz, width });
    const length = Math.hypot(bx - ax, bz - az),
      angle = Math.atan2(bx - ax, bz - az);
    const base = box(
      root,
      (ax + bx) / 2,
      -0.035,
      (az + bz) / 2,
      width,
      0.07,
      length,
      street,
    );
    base.rotation.y = angle;
    const steps = Math.ceil(length / 1.25);
    for (let i = 0; i < steps; i++)
      for (let c = -Math.floor(width / 2); c < Math.ceil(width / 2); c++) {
        const t = (i + 0.5) / steps,
          offset = c + 0.5;
        inst(
          'paving',
          unitBox,
          stone,
          ax + (bx - ax) * t + Math.cos(angle) * offset,
          0.013,
          az + (bz - az) * t - Math.sin(angle) * offset,
          range(0.87, 0.94),
          range(0.055, 0.08),
          length / steps - range(0.05, 0.1),
          0,
          angle,
          0,
          new T.Color().setHSL(0.12, 0.09, range(0.78, 1)),
        );
      }
  }
  road(0, -21, -39, -21, 5);
  road(-30, -21, -30, 49, 5);
  road(-30, 18, -43, 18, 7);
  road(-39, -21, -39, -39, 4);
  road(18, -21, 18, -69, 5);
  road(18, -54, 0, -54, 4);
  road(0, -54, 0, -62, 7);
  road(0, 38, 0, 60, 6);
  road(-30, 49, 0, 49, 4);
  road(43, -21, 51, -21, 5);
  road(51, -21, 51, -39, 4);
  road(51, -21, 51, 49, 4);
  function gate(
    x: number,
    z: number,
    rotation: number,
    label: string,
    w = 5.5,
  ) {
    const p = new T.Group();
    p.position.set(x, 0, z);
    p.rotation.y = rotation;
    root.add(p);
    for (const side of [-1, 1]) {
      box(p, side * (w / 2 + 0.55), 1.9, 0, 1.1, 3.8, 1.6, plaster);
      box(p, side * (w / 2 + 0.55), 0.3, 0, 1.3, 0.6, 1.8, stone);
      const local = V(side * (w / 2 + 0.55), 0, 0).applyAxisAngle(
        V(0, 1, 0),
        rotation,
      );
      obstacles.push({
        x: x + local.x,
        z: z + local.z,
        halfX: rotation === 0 ? 0.6 : 0.85,
        halfZ: rotation === 0 ? 0.85 : 0.6,
        height: 4,
      });
    }
    box(p, 0, 3.6, 0, w + 2, 0.6, 1.5, wood);
    sign(p, label, 0, 3.58, 0.78, 2.8, 0.67);
    roof(p, w + 1.6, 2, 3.9, rotation);
    for (const side of [-1, 1])
      lantern(p, side * (w / 2 - 0.25), 2.9, 0.85, true);
  }
  gate(0, 45, 0, '南 寨 门');
  gate(18, -68, 0, '北 寨 门');
  gate(20, -21, Math.PI / 2, '东 寨 门', 4.5);
  // Temple courtyard and layered eaves, reached by the eastern lane.
  house(0, -67, 12, 8, 6.1, 0, '兴 教 寺');
  house(-10, -63, 5, 8, 3.1, Math.PI / 2, '禅 茶');
  house(10, -65, 5, 7, 3.1, -Math.PI / 2, '听 风');
  const upper = new T.Group();
  upper.position.set(0, 6.3, -67);
  root.add(upper);
  roof(upper, 7, 5, 2.3);
  obstacles.push({
    x: 0,
    z: -67,
    halfX: 4.25,
    halfZ: 3.2,
    height: 8.6,
    bottom: 6.3,
    roof: { rotation: 0, width: 7, depth: 5, base: 8.6 },
  });
  for (const side of [-1, 1]) {
    mesh(
      root,
      new T.CylinderGeometry(0.6, 0.8, 0.9, 12),
      stone,
      side * 4,
      -0.01 + 0.45,
      -59,
    );
    mesh(
      root,
      unitSphere,
      mat('#888978'),
      side * 4,
      1.25,
      -59,
      0.43,
      0.45,
      0.4,
    );
  }
  tree(-15, -58, 1.25);
  tree(12, -54, 0.8);
  // Ouyang courtyard: three wings, an open entrance and a shaded tea table.
  house(-39, -46, 11, 6, 4.9, 0, '欧 阳 大 院');
  house(-49, -39, 8, 5, 3.5, Math.PI / 2, '听 雨 轩');
  house(-29, -41, 7, 5, 3.5, -Math.PI / 2, '花 窗 居');
  gate(-39, -29, 0, '一 院 清 风', 5.5);
  tree(-45, -34, 0.75);
  box(root, -42, 0.65, -37, 1.7, 0.13, 1.2, wood);
  for (const z of [-36, -38]) box(root, -42, 0.33, z, 1.8, 0.13, 0.4, wood);
  // Busy market along the western road. Stalls leave a continuous central passage.
  function stall(
    x: number,
    z: number,
    rotation: number,
    label: string,
    color: string,
    kind: string,
  ) {
    const p = new T.Group();
    p.position.set(x, 0, z);
    p.rotation.y = rotation;
    root.add(p);
    box(p, 0, 0.9, 0, 2.8, 0.14, 1.5, wood);
    box(p, 0, 0.48, 0.65, 2.8, 0.82, 0.1, wood);
    for (const xx of [-1.3, 1.3])
      for (const zz of [-0.6, 0.6])
        box(p, xx, 1.4, zz, 0.07, 2.8, 0.07, '#725039');
    for (let i = 0; i < 9; i++) {
      const canopy = box(
        p,
        -1.42 + i * 0.355,
        2.64,
        0,
        0.355,
        0.065,
        2.3,
        i % 2 === 0 ? color : ivoryColor,
      );
      canopy.rotation.x = 0.12;
      box(
        p,
        -1.42 + i * 0.355,
        2.4,
        1.12,
        0.355,
        0.27,
        0.035,
        i % 2 === 0 ? color : ivoryColor,
      );
    }
    sign(p, label, 0, 2.13, 1.13, 2.15, 0.43, true);
    for (let i = 0; i < 3; i++) {
      const xx = -0.86 + i * 0.86;
      mesh(
        p,
        new T.CylinderGeometry(0.34, 0.29, 0.15, 16),
        mat('#9c7d49'),
        xx,
        1.025,
        0.04,
      );
      for (let j = 0; j < 9; j++) {
        const a = j * 2.4,
          rr = 0.07 * Math.sqrt(j),
          px = xx + Math.cos(a) * rr,
          pz = Math.sin(a) * rr;
        if (kind === 'produce' || kind === 'food')
          mesh(
            p,
            unitSphere,
            mat(['#d88835', '#71864d', '#b54930'][i]),
            px,
            1.14 + (j % 3) * 0.04,
            pz,
            0.085,
            0.075,
            0.085,
          );
        else if (kind === 'pottery')
          mesh(
            p,
            new T.CylinderGeometry(0.065, 0.09, 0.21, 12),
            mat(['#a67757', '#8caa9a', '#d0bda1'][i]),
            px,
            1.17,
            pz,
          );
        else {
          const fabric = box(
            p,
            xx,
            1.1 + j * 0.025,
            0.02,
            0.65,
            0.035,
            0.7,
            ['#a95540', '#627e87', '#c6ac72'][i],
          );
          fabric.rotation.y = 0.03 * j;
        }
      }
    }
    for (const side of [-1, 1]) {
      mesh(
        p,
        new T.CylinderGeometry(0.31, 0.26, 0.47, 12, 1, true),
        mat('#997346'),
        side * 1.8,
        0.24,
        0,
      );
    }
    const v = V(0, 0, -1.1).applyAxisAngle(V(0, 1, 0), rotation);
    vendors.push({ x: x + v.x, z: z + v.z, yaw: rotation, kind });
    obstacles.push({
      x,
      z,
      halfX:
        Math.abs(Math.cos(rotation)) * 1.4 +
        Math.abs(Math.sin(rotation)) * 0.75,
      halfZ:
        Math.abs(Math.cos(rotation)) * 0.75 +
        Math.abs(Math.sin(rotation)) * 1.4,
      height: 2.75,
    });
  }
  const ivoryColor = '#d9cda7';
  const goods = [
    ['山野鲜果', '#ad6244', 'produce'],
    ['热气蒸饼', '#847945', 'food'],
    ['白族扎染', '#5c7981', 'cloth'],
    ['土陶小器', '#92714e', 'pottery'],
    ['古道茶摊', '#5e7960', 'food'],
    ['时令蔬菜', '#8b7844', 'produce'],
  ];
  for (let i = 0; i < 6; i++) {
    const z = 4 + i * 6;
    const g = goods[i];
    stall(-39, z, Math.PI / 2, g[0], g[1], g[2]);
    stall(
      -24.5,
      z,
      -Math.PI / 2,
      goods[(i + 3) % 6][0],
      goods[(i + 3) % 6][1],
      goods[(i + 3) % 6][2],
    );
  }
  stall(7, -19, 0, '花饼飘香', '#aa6648', 'food');
  stall(14, -18, 0, '马帮茶叶', '#6e7d54', 'produce');
  house(-48, 10, 7, 8, 4.8, Math.PI / 2, '有 风 小 馆');
  house(-48, 26, 8, 8, 4.2, Math.PI / 2, '马 帮 客 舍');
  // River bookshop and a flower-lined field on the opposite bank.
  house(51, -44, 9, 6, 4.5, 0, '河 畔 书 舍');
  house(55, -6, 7, 5, 3.1, -Math.PI / 2, '五 柳 小 居');
  for (let i = 0; i < 4; i++) {
    box(root, 48 + i * 0.7, 0.6, -39, 0.52, 1.2, 0.3, wood);
    for (let j = 0; j < 5; j++)
      box(
        root,
        48 + i * 0.7,
        0.15 + j * 0.22,
        -38.81,
        0.45,
        0.04,
        0.18,
        ['#a26b48', '#718774', '#cab180'][i % 3],
      );
  }
  for (let i = 0; i < 11; i++) {
    tree(58, -31 + i * 7, 0.65 + (i % 3) * 0.12, i % 3 === 0);
  }
  for (let x = 43; x < 60; x += 0.65)
    for (let z = 13; z < 43; z += 0.7) {
      if (Math.abs(x - 51) < 2.8) continue;
      inst(
        'wheat',
        unitBox,
        mat('#baa865'),
        x,
        0.35,
        z,
        0.025,
        0.65,
        0.025,
        range(-0.12, 0.12),
        rand(),
        range(-0.15, 0.15),
      );
      inst(
        'flowers',
        leafGeo,
        mat('#dfc67b'),
        x,
        0.69,
        z,
        0.13,
        0.13,
        0.13,
        rand(),
        rand(),
      );
    }
  for (const x of [47.7, 54.3])
    for (let z = 9; z < 46; z += 2) {
      pot(x, z, true);
    }

  // The added districts contain routes, buildings and playable interiors, not empty terrain.
  road(-30, -21, -77, -21, 5);
  road(-70, -21, -70, -86, 5);
  road(-70, -72, -81, -72, 4);
  road(-30, 49, -70, 49, 5);
  road(-70, 49, -70, -21, 5);
  road(-50, 49, -50, 83, 5);
  road(51, 46, 51, 96, 5);
  road(51, 2, 91, 2, 6);
  road(82, -21, 82, 62, 5);
  road(51, -35, 75, -35, 5);
  road(75, -35, 75, -89, 5);
  road(-77, -21, -77, -8, 4);
  road(-70, 62, -50, 62, 4);
  house(-87, -16, 8, 6, 4.3, Math.PI / 2, '桃 花 茶 舍');
  house(-80, -82, 9, 7, 4.9, 0, '松 风 书 院');
  house(-61, -83, 8, 6, 3.8, 0, '翰 墨 斋');
  house(-57, 72, 8, 7, 4.8, Math.PI / 2, '南 郊 驿 站');
  house(-42, 74, 7, 6, 4, -Math.PI / 2, '旧 道 客 舍');
  house(89, 18, 8, 6, 4.6, -Math.PI / 2, '东 街 布 庄');
  house(90, -13, 8, 6, 4.5, -Math.PI / 2, '香 饼 铺');
  house(67, 85, 9, 7, 4, -Math.PI / 2, '竹 影 小 筑');
  house(88, -81, 8, 7, 3.4, -Math.PI / 2, '望 山 茶 馆');
  gate(-70, -94, 0, '山 间 古 道');
  gate(82, 52, 0, '东 街');
  for (let i = 0; i < 15; i++) {
    tree(-90 + (i % 3) * 5, -62 + Math.floor(i / 3) * 8, 0.8, i % 2 === 0);
  }
  for (let x = -92; x < -72; x += 2)
    for (let z = -6; z < 15; z += 2) {
      inst(
        'tea',
        leafGeo,
        leafMat,
        x,
        0.45,
        z,
        0.7,
        0.35,
        0.7,
        0,
        rand(),
        0,
        new T.Color('#76915d'),
      );
    }
  for (let i = 0; i < 38; i++) {
    const x = 43 + (i % 5) * 2.5,
      z = 69 + Math.floor(i / 5) * 4;
    if (Math.abs(x - 51) < 2.8) continue;
    beam(root, V(x, 0, z), V(x + 0.15, 5, z), 0.07, '#687e43');
    for (let y = 1; y < 5; y += 0.65)
      mesh(root, unitCylinder, mat('#9eae68'), x, y, z, 0.09, 0.045, 0.09);
    for (let k = 0; k < 4; k++)
      inst(
        'bamboo',
        leafGeo,
        leafMat,
        x + Math.sin(k * 2) * 0.7,
        3 + k * 0.45,
        z + Math.cos(k * 2) * 0.7,
        0.65,
        0.25,
        0.6,
        rand(),
        rand(),
      );
  }
  // Four genuinely hollow houses: individual walls, open doors and overhead surfaces.
  function openHouse(x: number, z: number, label: string) {
    interiors.push({
      x,
      z,
      name: label,
      yaw: 0,
      width: 8,
      depth: 7,
      balcony: true,
    });
    const lodging = /栈|客舍|行舍/.test(label.replaceAll(' ', ''));
    vendors.push({
      x: x - 2.8,
      z: z + 1.3,
      yaw: 0.3,
      kind: label.replaceAll(' ', ''),
    });
    const w = 8,
      d = 7,
      ceil = 3.1;
    function solid(
      lx: number,
      y: number,
      lz: number,
      sx: number,
      sy: number,
      sz: number,
      color: T.Material | string,
      bottom = 0,
    ) {
      box(root, x + lx, y, z + lz, sx, sy, sz, color);
      obstacles.push({
        x: x + lx,
        z: z + lz,
        halfX: sx / 2,
        halfZ: sz / 2,
        height: y + sy / 2,
        bottom,
      });
    }
    box(root, x, -0.01, z, w, 0.06, d, wood);
    solid(-w / 2, ceil / 2, 0, 0.22, ceil, d, plaster);
    solid(w / 2, ceil / 2, 0, 0.22, ceil, d, plaster);
    solid(0, ceil / 2, -d / 2, w, ceil, 0.22, plaster);
    for (const side of [-1, 1])
      solid(side * 2.55, ceil / 2, d / 2, 2.9, ceil, 0.22, plaster);
    solid(0, 2.8, d / 2, 2.2, 0.6, 0.23, wood, 2.5);
    solid(0, 3.13, 0, w, 0.18, d, wood, 3.04);
    const r = new T.Group();
    r.position.set(x, 0, z);
    root.add(r);
    roof(r, w, d, 3.3);
    obstacles.push({
      x,
      z,
      halfX: 4.75,
      halfZ: 4.2,
      height: 5.3,
      bottom: 3.22,
      roof: { rotation: 0, width: w, depth: d, base: 3.3 },
    });
    sign(root, label, x, 2.8, z + d / 2 + 0.14, 2, 0.45);
    // Projecting balcony with a landable floor and rails on the sides.
    solid(0, 3.1, 5, 7, 0.18, 3, wood, 3.01);
    for (const side of [-1, 1]) {
      solid(side * 3.4, 3.65, 5, 0.12, 1, 3, wood, 3.15);
      for (let bz = 3.6; bz < 6.6; bz += 0.5)
        box(root, x + side * 3.4, 3.65, z + bz, 0.08, 1, 0.08, wood);
    }
    for (const side of [-1, 1]) {
      solid(side * 2.35, 3.65, 6.45, 2.2, 1, 0.1, wood, 3.15);
    }
    solid(-1.8, 0.45, -0.8, 1.5, 0.9, 1, wood);
    if (lodging) {
      solid(2, 0.28, -1.6, 2.2, 0.56, 2.5, wood);
      box(root, x + 2, 0.61, z - 1.6, 2.1, 0.14, 2.4, '#c4b491');
      box(root, x + 2, 0.73, z - 2.4, 1.4, 0.18, 0.5, '#eee2cb');
      box(root, x + 2, 0.72, z - 1.1, 2.05, 0.08, 1.25, '#8d6257');
      solid(2, 0.9, -2.95, 2.2, 1.8, 0.12, wood);
    } else {
      solid(1.8, 0.35, -1.5, 1.4, 0.7, 0.7, wood);
      for (let i = 0; i < 3; i++)
        mesh(
          root,
          new T.CylinderGeometry(0.08, 0.055, 0.13, 12),
          mat('#c1c7ba'),
          x + 1.4 + i * 0.3,
          0.77,
          z - 1.5,
        );
    }
    for (let i = 0; i < 4; i++) {
      box(root, x - 2.8, 0.35 + i * 0.55, z - 3.25, 1.5, 0.08, 0.4, wood);
      for (let j = 0; j < 6; j++)
        box(
          root,
          x - 3.4 + j * 0.22,
          0.53 + i * 0.55,
          z - 3.22,
          0.12,
          0.3,
          0.26,
          mat(['#87664c', '#91744d', '#6b8771'][j % 3]),
        );
    }
    mesh(
      root,
      new T.CylinderGeometry(0.12, 0.1, 0.18, 12),
      mat('#b4bda5'),
      x - 1.8,
      0.98,
      z - 0.8,
    );
    lantern(root, x, 2.2, z, false);
    interactables.push({
      x: x - 1.8,
      z: z + 0.1,
      y: 0,
      name: label + ' · 茶席',
      lines: [
        '坐一坐，尝一口刚泡好的山茶。',
        '掌柜：前面的门廊通着阳台，轻功好便上去看看山。',
        '茶汤微温，窗外的风把竹叶吹得沙沙作响。',
      ],
    });
    road(x, z + 7, x, z + 10, 4);
  }
  openHouse(-82, -48, '桃 源 茶 居');
  road(-82, -38, -70, -38, 4);
  openHouse(-46, 37, '听 雨 客 栈');
  road(-46, 47, -30, 47, 4);
  openHouse(86, 33, '临 街 书 屋');
  road(86, 43, 82, 43, 4);
  openHouse(68, -63, '望 山 小 楼');
  road(68, -53, 75, -53, 4);
  // Smaller blocks fill the outer town; each open doorway joins a continuous street.
  road(0, 60, 0, 103, 5);
  road(-50, 83, 0, 83, 5);
  road(-50, 83, -50, 101, 5);
  road(0, 86, 17, 86, 4);
  road(51, 50, 94, 50, 5);
  road(82, 62, 82, 103, 5);
  road(51, 96, 51, 103, 4);
  road(51, 94, 94, 94, 4);
  road(-70, -88, -18, -88, 4);
  road(-70, -94, -70, -86, 4);
  road(75, -94, 75, -89, 4);
  const newRooms: [number, number, string, number, number][] = [
    [-82, -65, '杏 花 酒 肆', -70, -55],
    [-58, -62, '云 归 客 栈', -70, -52],
    [-58, -4, '青 瓷 茶 坊', -70, 6],
    [-82, 9, '白 族 绣 坊', -70, 19],
    [-82, 28, '山 野 药 铺', -70, 38],
    [-60, 30, '花 间 饼 铺', -70, 40],
    [-63, 83, '马 帮 行 舍', -50, 93],
    [-36, 89, '南 山 小 栈', -50, 99],
    [-15, 72, '栖 云 茶 院', 0, 82],
    [10, 77, '听 松 琴 舍', 0, 87],
    [63, 40, '水 岸 茶 室', 63, 50],
    [92, 53, '东 篱 客 栈', 82, 63],
    [67, 60, '竹 里 书 斋', 82, 70],
    [89, 78, '稻 香 食 肆', 82, 88],
    [63, 7, '花 灯 工 坊', 51, 17],
    [89, -47, '山 色 茶 寮', 75, -37],
    [89, -65, '望 月 客 舍', 75, -55],
  ];
  for (const [x, z, label, rx, rz] of newRooms) {
    openHouse(x, z, label);
    road(x, z + 10, rx, rz, 3.8);
  }
  const infill: [number, number, string][] = [
    [-59, -94, '墨 香 笔 庄'],
    [-57, -32, '土 陶 作 坊'],
    [-42, -94, '松 风 客 舍'],
    [-42, -78, '古 道 酒 家'],
    [-42, -60, '香 木 作 坊'],
    [-25, -83, '山 茶 铺'],
    [-25, -98, '北 坡 民 居'],
    [-15, 58, '南 街 布 庄'],
    [11, 59, '清 露 药 房'],
    [11, 95, '桃 溪 小 院'],
    [94, -97, '望 山 小 栈'],
    [61, -96, '听 风 书 屋'],
    [61, -80, '竹 纸 工 坊'],
    [60, 97, '稻 田 民 居'],
    [94, 97, '东 门 茶 铺'],
    [92, -32, '果 脯 铺'],
    [69, 22, '青 蓝 染 坊'],
  ];
  for (const [x, z, label] of infill) {
    house(x, z, 7, 6, 3.4 + rand() * 1.6, 0, label);
    const nearX = x < -18 ? -70 : x < 25 ? 0 : 82;
    // A short lane takes the shopfront back to the nearest main route.
    road(x, z + 4, x, z + 6, 3);
    road(x, z + 6, nearX, z + 6, 3);
  }
  // An open pavilion and a bell invite a pause at the end of the northern route.
  const pavilion = new T.Group();
  pavilion.position.set(75, 0, -84);
  root.add(pavilion);
  roof(pavilion, 7, 6, 3.8);
  for (const sx of [-3, 3])
    for (const sz of [-2.5, 2.5]) {
      box(root, 75 + sx, 1.8, -84 + sz, 0.2, 3.6, 0.2, wood);
      obstacles.push({
        x: 75 + sx,
        z: -84 + sz,
        halfX: 0.1,
        halfZ: 0.1,
        height: 3.6,
      });
    }
  mesh(
    root,
    new T.CylinderGeometry(0.22, 0.4, 0.7, 16, 1, true),
    mat('#9e8150'),
    75,
    2.6,
    -84,
  );
  interactables.push({
    x: 75,
    z: -82,
    y: 0,
    name: '望山亭 · 风铃',
    lines: [
      '你轻轻叩响铜铃，余音沿山谷散开。',
      '举目望去，古镇的青瓦一直连到远山。',
    ],
  });
  for (let i = 0; i < 3; i++)
    stall(
      87,
      -3 + i * 8,
      -Math.PI / 2,
      ['甜米糕', '春茶', '竹编'][i],
      ['#aa6652', '#628266', '#a09362'][i],
      i === 2 ? 'pottery' : 'food',
    );

  // Low clumps break up the lawn silhouette; do not cover paths or interiors.
  const grassGeo = new T.BufferGeometry();
  grassGeo.setAttribute(
    'position',
    new T.Float32BufferAttribute(
      [
        -0.045, 0, 0, 0.035, 0, 0, 0.035, 0.28, 0.025, 0.035, 0.28, 0.025, 0.01,
        0.48, 0.06, -0.045, 0, 0,
      ],
      3,
    ),
  );
  grassGeo.computeVertexNormals();
  const grassMat = mat('#7e8962');
  grassMat.side = T.DoubleSide;
  grassMat.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = wind;
    shader.vertexShader =
      'uniform float uWindTime;varying vec2 vLeafUv;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
#ifdef USE_INSTANCING
transformed.x+=sin(uWindTime*1.4+instanceMatrix[3].x*.4+instanceMatrix[3].z*.3)*position.y*.2;
#endif`,
    );
  };
  for (let i = 0; i < 16000; i++) {
    const x = range(-99, 99),
      z = range(-103, 103);
    if (
      (x > 24 && x < 43) ||
      (Math.abs(x) < 8 && z > -43 && z < 42) ||
      (x > -21 && x < 23 && z > -41 && z < -13)
    )
      continue;
    if (
      obstacles.some(
        (o) =>
          Math.abs(x - o.x) < o.halfX + 0.6 &&
          Math.abs(z - o.z) < o.halfZ + 0.6,
      )
    )
      continue;
    if (
      routes.some((r) => {
        const dx = r.bx - r.ax,
          dz = r.bz - r.az,
          l = dx * dx + dz * dz,
          t = Math.max(
            0,
            Math.min(1, ((x - r.ax) * dx + (z - r.az) * dz) / (l || 1)),
          );
        return (
          Math.hypot(x - r.ax - t * dx, z - r.az - t * dz) < r.width / 2 + 0.3
        );
      })
    )
      continue;
    const scale = range(0.25, 0.85);
    for (let j = 0; j < 3; j++)
      inst(
        'meadow-grass',
        grassGeo,
        grassMat,
        x + range(-0.15, 0.15),
        -0.045,
        z + range(-0.15, 0.15),
        scale,
        scale,
        scale,
        0,
        rand() * 6.28,
        0,
        new T.Color().setHSL(range(0.17, 0.24), 0.22, range(0.6, 0.95)),
      );
  }
  // Merge static architecture by material to keep draw calls bounded.
  root.updateMatrixWorld(true);
  const grouped = new Map<T.Material, T.BufferGeometry[]>();
  root.traverse((o) => {
    if (o instanceof T.Mesh) {
      const material = o.material as T.Material;
      let g = o.geometry.clone().applyMatrix4(o.matrixWorld);
      if (g.index) g = g.toNonIndexed();
      g.deleteAttribute('uv1');
      if (material.userData.worldScale) {
        const pos = g.getAttribute('position'),
          normal = g.getAttribute('normal'),
          uvs: number[] = [];
        const scale = material.userData.worldScale as number;
        for (let i = 0; i < pos.count; i++) {
          const nx = Math.abs(normal.getX(i)),
            ny = Math.abs(normal.getY(i)),
            nz = Math.abs(normal.getZ(i));
          if (ny > nx && ny > nz)
            uvs.push(pos.getX(i) * scale, pos.getZ(i) * scale);
          else if (nx > nz) uvs.push(pos.getZ(i) * scale, pos.getY(i) * scale);
          else uvs.push(pos.getX(i) * scale, pos.getY(i) * scale);
        }
        g.setAttribute('uv', new T.Float32BufferAttribute(uvs, 2));
      }
      if (!g.getAttribute('uv'))
        g.setAttribute(
          'uv',
          new T.Float32BufferAttribute(
            new Float32Array(g.getAttribute('position').count * 2),
            2,
          ),
        );
      if (!grouped.has(material)) grouped.set(material, []);
      grouped.get(material)!.push(g);
    }
  });
  root.clear();
  for (const [material, geometries] of grouped) {
    const g = mergeGeometries(geometries);
    geometries.forEach((g) => g.dispose());
    if (g) {
      const m = new T.Mesh(g, material);
      m.castShadow = true;
      m.receiveShadow = true;
      root.add(m);
    }
  }
  for (const batch of batches.values()) {
    const m = new T.InstancedMesh(
      batch.geometry,
      batch.material,
      batch.matrices.length,
    );
    batch.matrices.forEach((matrix, i) => {
      m.setMatrixAt(i, matrix);
      m.setColorAt(i, batch.colors[i]);
    });
    m.castShadow = true;
    m.receiveShadow = true;
    m.computeBoundingSphere();
    root.add(m);
  }
  const river = createRiver();
  const water = river.water;
  root.add(water);
  return {
    root,
    obstacles,
    routes,
    water,
    updateWater: (time: number, rain: boolean) => river.update(time, rain),
    disposeWater: () => river.dispose(),
    glow,
    wind,
    vendors,
    interiors,
    interactables,
    setWet(wet: boolean) {
      stone.roughness = wet ? 0.34 : 1;
      street.roughness = wet ? 0.38 : 0.95;
      terrain.roughness = wet ? 0.65 : 1;
      wood.roughness = wet ? 0.55 : 0.9;
      tileMat.roughness = wet ? 0.35 : 0.88;
    },
  };
}

export function createPerson(
  color = '#547773',
  secondary = '#e7dfc0',
  scale = 1,
) {
  const root = new T.Group();
  root.scale.setScalar(scale);
  const cloth = mat(color, 0.98),
    lining = mat(secondary, 0.98),
    skin = mat('#d5ac87'),
    hair = mat('#282e28');
  const robeGeo = new T.CylinderGeometry(0.23, 0.44, 0.95, 16, 4);
  const positions = robeGeo.getAttribute('position');
  for (let i = 0; i < positions.count; i++) {
    const angle = Math.atan2(positions.getZ(i), positions.getX(i));
    const k = 1 + 0.06 * Math.sin(angle * 8);
    positions.setX(i, positions.getX(i) * k);
    positions.setZ(i, positions.getZ(i) * k);
  }
  robeGeo.computeVertexNormals();
  const skirt = mesh(root, robeGeo, cloth, 0, 0.74, 0);
  mesh(root, new T.CylinderGeometry(0.3, 0.24, 0.55, 12), cloth, 0, 1.38, 0);
  box(root, 0, 1.13, 0, 0.54, 0.085, 0.42, '#b6a16b');
  const collar1 = box(root, -0.09, 1.52, 0.215, 0.09, 0.42, 0.04, lining);
  collar1.rotation.z = 0.52;
  const collar2 = box(root, 0.09, 1.52, 0.215, 0.09, 0.42, 0.04, lining);
  collar2.rotation.z = -0.52;
  mesh(root, unitCylinder, skin, 0, 1.74, 0, 0.09, 0.2, 0.09);
  mesh(
    root,
    new T.SphereGeometry(1, 32, 24),
    skin,
    0,
    1.92,
    0,
    0.18,
    0.24,
    0.17,
  );
  mesh(
    root,
    new T.SphereGeometry(1, 20, 16, 0, Math.PI * 2, 0, 1.35),
    hair,
    0,
    1.95,
    -0.015,
    0.196,
    0.239,
    0.178,
  );
  mesh(
    root,
    new T.SphereGeometry(1, 20, 16, Math.PI, Math.PI),
    hair,
    0,
    1.92,
    -0.01,
    0.196,
    0.245,
    0.18,
  );
  const eyes = mat('#e8dfcf'),
    iris = mat('#392820'),
    mouth = mat('#99584a');
  for (const side of [-1, 1]) {
    mesh(
      root,
      unitSphere,
      eyes,
      side * 0.076,
      1.963,
      0.155,
      0.046,
      0.021,
      0.016,
    );
    mesh(
      root,
      unitSphere,
      iris,
      side * 0.076,
      1.963,
      0.17,
      0.017,
      0.018,
      0.008,
    );
    mesh(
      root,
      unitSphere,
      mat('#fff8e3'),
      side * 0.072,
      1.969,
      0.177,
      0.004,
      0.004,
      0.003,
    );
    const brow = box(
      root,
      side * 0.077,
      2.011,
      0.154,
      0.085,
      0.013,
      0.013,
      hair,
    );
    brow.rotation.z = -side * 0.11;
    mesh(root, unitSphere, skin, side * 0.181, 1.92, 0, 0.025, 0.045, 0.025);
  }
  mesh(root, unitSphere, skin, 0, 1.907, 0.167, 0.024, 0.048, 0.033);
  mesh(root, unitSphere, mouth, 0, 1.834, 0.163, 0.048, 0.014, 0.008);
  mesh(root, unitSphere, hair, 0, 2.23, -0.035, 0.095, 0.085, 0.09);
  const hairPin = box(root, 0, 2.23, -0.035, 0.33, 0.023, 0.025, '#b29b67');
  hairPin.rotation.z = 0.12;
  const backHair = mesh(
    root,
    unitSphere,
    hair,
    0,
    1.69,
    -0.13,
    0.12,
    0.22,
    0.07,
  );
  backHair.rotation.x = -0.1;
  const arms: T.Group[] = [];
  const legs: T.Group[] = [];
  for (const side of [-1, 1]) {
    const arm = new T.Group();
    arm.position.set(side * 0.3, 1.58, 0);
    root.add(arm);
    mesh(
      arm,
      new T.CylinderGeometry(0.115, 0.22, 0.56, 9),
      cloth,
      side * 0.09,
      -0.27,
      0,
    );
    mesh(arm, unitSphere, skin, side * 0.11, -0.53, 0.055, 0.075, 0.105, 0.07);
    arm.rotation.z = side * 0.15;
    arms.push(arm);
    const leg = new T.Group();
    leg.position.set(side * 0.13, 0.4, 0);
    root.add(leg);
    mesh(leg, unitCylinder, lining, 0, -0.14, 0, 0.09, 0.3, 0.09);
    mesh(leg, unitSphere, mat('#393a2c'), 0, -0.33, 0.08, 0.1, 0.065, 0.19);
    legs.push(leg);
  }
  const sash = box(root, 0.19, 0.76, 0.19, 0.09, 0.64, 0.025, lining);
  sash.rotation.z = 0.1;
  const groups = new Map<T.Material, T.BufferGeometry[]>();
  for (const o of root.children.slice())
    if (o instanceof T.Mesh && o !== skirt && o !== sash) {
      o.updateMatrix();
      let g = o.geometry.clone().applyMatrix4(o.matrix);
      if (g.index) g = g.toNonIndexed();
      const m = o.material as T.Material;
      if (!groups.has(m)) groups.set(m, []);
      groups.get(m)!.push(g);
      root.remove(o);
    }
  for (const [m, gs] of groups) {
    const g = mergeGeometries(gs);
    gs.forEach((v) => v.dispose());
    if (g) mesh(root, g, m, 0, 0, 0);
  }
  return {
    root,
    arms,
    legs,
    skirt,
    sash,
    animate(t: number, speed: number) {
      const a = Math.sin(t * 8) * speed;
      arms[0].rotation.x = a * 0.5;
      arms[1].rotation.x = -a * 0.5;
      legs[0].rotation.x = -a * 0.65;
      legs[1].rotation.x = a * 0.65;
      skirt.rotation.z = a * 0.035;
      sash.rotation.x = a * 0.16;
    },
  };
}
