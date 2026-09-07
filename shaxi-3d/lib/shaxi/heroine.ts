import * as T from 'three';
import { createSculptedFace } from './sculpted-face.ts';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Sculpted facial geometry, fitted hair and animated silk clothing.
export function createHeroine() {
  const root = new T.Group();
  root.name = '红衣女侠';
  const skin = new T.MeshPhysicalMaterial({
    color: '#ecc2ac',
    roughness: 0.63,
    sheen: 0.18,
    sheenColor: new T.Color('#efb3a2'),
  });
  const silk = new T.MeshPhysicalMaterial({
    color: '#ad3e2c',
    roughness: 0.52,
    sheen: 0.75,
    sheenColor: new T.Color('#f7aa82'),
    side: T.DoubleSide,
  });
  const ivory = new T.MeshPhysicalMaterial({
    color: '#f4e5d2',
    roughness: 0.75,
    sheen: 0.45,
    sheenColor: new T.Color('#fff2dc'),
    side: T.DoubleSide,
  });
  const hair = new T.MeshStandardMaterial({ color: '#261d1b', roughness: 0.4 });
  hair.name = '头发';
  skin.name = '肌肤';
  const hairLight = new T.MeshStandardMaterial({
    color: '#473026',
    roughness: 0.48,
  });
  const gold = new T.MeshStandardMaterial({
    color: '#d1a562',
    metalness: 0.72,
    roughness: 0.32,
  });
  const lip = new T.MeshStandardMaterial({ color: '#b7665e', roughness: 0.55 });
  const head = new T.Group();
  head.position.y = 1.83;
  head.scale.setScalar(0.72);
  root.add(head);
  function mesh(
    p: T.Object3D,
    g: T.BufferGeometry,
    m: T.Material,
    x: number,
    y: number,
    z: number,
    sx = 1,
    sy = 1,
    sz = 1,
  ) {
    const o = new T.Mesh(g, m);
    o.position.set(x, y, z);
    o.scale.set(sx, sy, sz);
    o.castShadow = true;
    o.receiveShadow = true;
    p.add(o);
    return o;
  }
  const sphere = new T.SphereGeometry(1, 24, 20);
  const ell = (
    p: T.Object3D,
    m: T.Material,
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
  ) => mesh(p, sphere, m, x, y, z, sx, sy, sz);
  function curve(
    p: T.Object3D,
    points: number[][],
    radius: number,
    m: T.Material,
    segments = 18,
  ) {
    const path = new T.CatmullRomCurve3(
      points.map((v) => new T.Vector3(...(v as [number, number, number]))),
    );
    return mesh(
      p,
      new T.TubeGeometry(path, segments, radius, 6, false),
      m,
      0,
      0,
      0,
    );
  }
  // Sculpted head and facial features use material colours, never portrait textures.

  head.add(createSculptedFace());
  for (const side of [-1, 1]) {
    ell(head, skin, side * 0.16, -0.001, -0.006, 0.028, 0.053, 0.025);
    curve(
      head,
      [
        [side * 0.174, -0.041, 0.006],
        [side * 0.179, -0.09, 0.016],
        [side * 0.167, -0.127, 0.017],
      ],
      0.0028,
      gold,
    );
    ell(
      head,
      new T.MeshPhysicalMaterial({ color: '#9abbad', roughness: 0.25 }),
      side * 0.168,
      -0.134,
      0.017,
      0.009,
      0.017,
      0.008,
    );
  }
  // Cap leaves the forehead open, with a centre part and flowing back hair.
  // A sealed scalp follows the head; loose hair can move without revealing skin.
  mesh(
    head,
    new T.SphereGeometry(1, 48, 40, Math.PI, Math.PI),
    hair,
    0,
    0,
    -0.008,
    0.176,
    0.244,
    0.16,
  );
  const cap = new T.SphereGeometry(1, 36, 24, 0, Math.PI * 2, 0, 1.02);
  mesh(head, cap, hair, 0, 0.018, -0.011, 0.17, 0.23, 0.15);
  const hairBack = new T.Group();
  head.add(hairBack);
  for (let i = 0; i < 32; i++) {
    const a = (i / 31) * Math.PI,
      x = Math.cos(a) * 0.142,
      z = -Math.sin(a) * 0.13 - 0.015;
    curve(
      hairBack,
      [
        [x, 1.97, z],
        [x * 1.08, 1.69, z - 0.035],
        [x * 0.86, 1.34, z - 0.07],
        [x * 0.77 + 0.024 * Math.sin(i), 1.05 + (i % 4) * 0.025, z - 0.05],
      ],
      0.012,
      i % 4 === 0 ? hairLight : hair,
      22,
    );
  }
  for (const side of [-1, 1])
    for (let i = 0; i < 8; i++) {
      const offset = i * 0.009;
      curve(
        head,
        [
          [side * 0.015, 0.235, -0.004],
          [side * (0.1 + offset * 0.5), 0.192, 0.09],
          [side * (0.144 + offset * 0.3), 0.045, 0.112],
          [side * (0.149 + offset * 0.2), -0.14, 0.078],
          [side * (0.11 + offset * 0.25), -0.31, 0.062],
        ],
        0.0032,
        i % 3 === 0 ? hairLight : hair,
        28,
      );
    }
  for (let i = 0; i < 12; i++)
    curve(
      head,
      [
        [0, 0.244, -0.005],
        [(i - 6) * 0.02, 0.223, -0.09],
        [(i - 6) * 0.025, 0.13, -0.146],
      ],
      0.003,
      i % 3 === 0 ? hairLight : hair,
    );
  ell(head, hair, 0, 0.216, -0.105, 0.081, 0.059, 0.072);
  curve(
    head,
    [
      [-0.17, 0.2, -0.09],
      [0, 0.245, -0.12],
      [0.18, 0.225, -0.085],
    ],
    0.006,
    gold,
  );
  for (let i = 0; i < 5; i++) {
    const a = (i * Math.PI * 2) / 5;
    ell(
      head,
      gold,
      0.145 + Math.cos(a) * 0.019,
      0.228 + Math.sin(a) * 0.018,
      -0.067,
      0.014,
      0.009,
      0.006,
    );
  }
  ell(head, lip, 0.145, 0.228, -0.058, 0.008, 0.009, 0.006);
  // Neck, fitted cross-collar bodice and fine waist sash.
  mesh(root, new T.CylinderGeometry(0.064, 0.082, 0.19, 20), skin, 0, 1.576, 0);
  const bodice = mesh(
    root,
    new T.CylinderGeometry(0.171, 0.121, 0.42, 32, 8),
    silk,
    0,
    1.3,
    0,
    1,
    1,
    0.7,
  );
  ell(root, silk, 0, 1.465, -0.005, 0.222, 0.06, 0.112);
  for (const side of [-1, 1]) {
    curve(
      root,
      [
        [side * 0.078, 1.535, 0.07],
        [side * 0.13, 1.43, 0.101],
        [side * 0.02, 1.2, 0.101],
      ],
      0.032,
      ivory,
    );
    curve(
      root,
      [
        [side * 0.093, 1.535, 0.074],
        [side * 0.151, 1.43, 0.096],
        [side * 0.04, 1.205, 0.105],
      ],
      0.004,
      gold,
    );
  }
  mesh(
    root,
    new T.CylinderGeometry(0.128, 0.134, 0.085, 36),
    gold,
    0,
    1.09,
    0,
    1,
    1,
    0.82,
  );
  ell(root, gold, 0, 1.091, 0.122, 0.056, 0.035, 0.008);
  ell(
    root,
    new T.MeshStandardMaterial({ color: '#5c9182', roughness: 0.3 }),
    0,
    1.091,
    0.131,
    0.027,
    0.024,
    0.007,
  );
  const legs: T.Group[] = [];
  const arms: T.Group[] = [];
  for (const side of [-1, 1]) {
    const leg = new T.Group();
    leg.position.set(side * 0.082, 0.67, 0);
    root.add(leg);
    legs.push(leg);
    mesh(
      leg,
      new T.CylinderGeometry(0.055, 0.045, 0.52, 12),
      ivory,
      0,
      -0.25,
      0,
    );
    ell(leg, silk, 0, -0.6, 0.047, 0.064, 0.064, 0.137);
    curve(
      leg,
      [
        [0, -0.584, 0.16],
        [0, -0.557, 0.173],
        [0, -0.54, 0.15],
      ],
      0.009,
      gold,
    );
    const arm = new T.Group();
    arm.position.set(side * 0.208, 1.455, 0);
    arm.rotation.z = side * 0.17;
    root.add(arm);
    arms.push(arm);
    const sleeveGeo = new T.CylinderGeometry(0.085, 0.18, 0.49, 24, 6, true);
    mesh(arm, sleeveGeo, silk, side * 0.029, -0.236, 0, 1, 1, 0.72);
    mesh(
      arm,
      new T.CylinderGeometry(0.177, 0.176, 0.035, 24, 1, true),
      ivory,
      side * 0.029,
      -0.469,
      0,
      1,
      1,
      0.72,
    );
    mesh(
      arm,
      new T.CylinderGeometry(0.179, 0.178, 0.009, 24, 1, true),
      gold,
      side * 0.029,
      -0.45,
      0,
      1,
      1,
      0.72,
    );
    ell(arm, skin, side * 0.03, -0.525, 0.015, 0.041, 0.073, 0.024);
    for (let j = 0; j < 4; j++)
      ell(
        arm,
        skin,
        side * 0.008 + j * 0.014,
        -0.579 - (j === 1 ? 0.008 : 0),
        0.019,
        0.007,
        0.035,
        0.007,
      );
    ell(arm, skin, side * 0.077, -0.54, 0.023, 0.012, 0.033, 0.012);
  }
  // Layered skirt uses a continuous, pleated surface rather than a rigid cone.
  const skirts: {
    mesh: T.Mesh;
    geometry: T.BufferGeometry;
    base: Float32Array;
    phase: number;
  }[] = [];
  for (let layer = 0; layer < 2; layer++) {
    const g = new T.CylinderGeometry(
      0.127,
      0.34 + layer * 0.035,
      0.98,
      64,
      20,
      true,
      layer === 0 ? 0 : 0.65,
      layer === 0 ? Math.PI * 2 : Math.PI * 1.6,
    );
    const p = g.getAttribute('position');
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i),
        a = Math.atan2(p.getZ(i), p.getX(i)),
        f = (0.49 - y) / 0.98;
      const fold = 1 + 0.055 * Math.sin(a * 12) * f;
      p.setXYZ(i, p.getX(i) * fold, p.getY(i), p.getZ(i) * fold * 0.78);
    }
    g.computeVertexNormals();
    const clothMesh = mesh(root, g, layer === 0 ? ivory : silk, 0, 0.59, 0);
    skirts.push({
      mesh: clothMesh,
      geometry: g,
      base: new Float32Array(p.array),
      phase: layer,
    });
  }
  const embroidery = new T.Group();
  root.add(embroidery);
  // Embroidered branches on the outer robe, all real raised metallic stitching.
  for (const side of [-1, 1])
    for (let i = 0; i < 5; i++) {
      const yy = 0.28 + i * 0.125,
        xx = side * (0.245 - i * 0.023),
        zz = 0.18 - i * 0.008;
      curve(
        embroidery,
        [
          [xx, yy, zz],
          [xx - side * 0.021, yy + 0.05, zz + 0.012],
          [xx - side * 0.034, yy + 0.095, zz + 0.006],
        ],
        0.0023,
        gold,
        8,
      );
      for (let petal = 0; petal < 5; petal++) {
        const a = (petal * Math.PI * 2) / 5;
        ell(
          embroidery,
          gold,
          xx + Math.cos(a) * 0.018,
          yy + 0.04 + Math.sin(a) * 0.02,
          zz + 0.009,
          0.012,
          0.006,
          0.0025,
        );
      }
    }
  const ribbons: { mesh: T.Mesh; base: Float32Array; phase: number }[] = [];
  for (const side of [-1, 1]) {
    const g = new T.PlaneGeometry(0.058, 0.89, 3, 24);
    g.translate(0, -0.445, 0);
    const m = mesh(root, g, side < 0 ? ivory : silk, side * 0.12, 1.1, 0.135);
    ribbons.push({
      mesh: m,
      base: new Float32Array(g.getAttribute('position').array),
      phase: side,
    });
  }
  for (const child of hairBack.children) {
    child.position.y -= 1.83;
  }
  // Merge the many tiny facial/hair details within each animated group.
  for (const group of [head, hairBack]) {
    group.updateMatrix();
    const grouped = new Map<T.Material, T.BufferGeometry[]>();
    for (const o of group.children.slice())
      if (o instanceof T.Mesh) {
        o.updateMatrix();
        let g = o.geometry.clone().applyMatrix4(o.matrix);
        if (g.index) g = g.toNonIndexed();
        const m = o.material as T.Material;
        if (!grouped.has(m)) grouped.set(m, []);
        grouped.get(m)!.push(g);
        group.remove(o);
      }
    for (const [m, geos] of grouped) {
      const g = mergeGeometries(geos);
      geos.forEach((v) => v.dispose());
      if (g) mesh(group, g, m, 0, 0, 0);
    }
  }
  const spin = new T.Group();
  spin.name = '轻功旋身';
  spin.position.y = 1.05;
  for (const child of root.children.slice()) {
    root.remove(child);
    child.position.y -= 1.05;
    spin.add(child);
  }
  root.add(spin);
  let seated = false,
    sitBlend = 0;
  let airBlend = 0;
  let flipAge = 9,
    flipStage = 0;
  return {
    root,
    setSeated(value: boolean) {
      seated = value;
    },
    startFlip(stage: number) {
      flipAge = 0;
      flipStage = stage;
    },
    arms,
    legs,
    head,
    animate(
      time: number,
      speed: number,
      airborne = false,
      wind = 1,
      dt = 1 / 60,
    ) {
      flipAge += dt;
      sitBlend = T.MathUtils.damp(sitBlend, seated && !airborne ? 1 : 0, 8, dt);
      const f = Math.min(1, flipAge / 0.66),
        ease = f * f * (3 - 2 * f);
      spin.rotation.set(0, 0, 0);
      spin.position.y = 1.05;
      if (airborne && flipStage > 1 && f < 1) {
        spin.rotation.y = (flipStage === 2 ? 1 : -1) * Math.PI * 2 * ease;
      }
      if (!airborne) {
        flipStage = 0;
        spin.position.y = 1.05 - Math.max(0, 0.14 - flipAge * 0.3);
      }
      spin.position.y -= sitBlend * 0.65;
      const phase = time * (speed > 1 ? 10 : 7.4),
        s = Math.sin(phase) * speed;
      airBlend = T.MathUtils.damp(airBlend, airborne ? 1 : 0, 12, dt);
      const lift = Math.sin(Math.PI * f),
        blend = (walk: number, air: number) =>
          T.MathUtils.lerp(walk, air, airBlend);
      legs[0].rotation.x = blend(-s * 0.55, -0.28 - 0.22 * lift);
      legs[1].rotation.x = blend(s * 0.55, 0.25 + 0.25 * lift);
      arms[0].rotation.x = blend(s * 0.32, -0.25 - 0.2 * lift);
      arms[1].rotation.x = blend(-s * 0.32, -0.35 + 0.15 * lift);
      arms[0].rotation.z = blend(-0.1, -0.5 - 0.18 * lift);
      arms[1].rotation.z = blend(0.1, 0.5 + 0.18 * lift);
      const fold = 1 - 0.68 * sitBlend;
      for (let i = 0; i < legs.length; i++) {
        legs[i].position.y = T.MathUtils.lerp(-0.38, -0.12, sitBlend);
        legs[i].rotation.x = T.MathUtils.lerp(
          legs[i].rotation.x,
          -1.2,
          sitBlend,
        );
        legs[i].rotation.z = (i === 0 ? 1 : -1) * 0.65 * sitBlend;
        arms[i].rotation.x = T.MathUtils.lerp(
          arms[i].rotation.x,
          -0.85,
          sitBlend,
        );
        arms[i].rotation.z = T.MathUtils.lerp(
          arms[i].rotation.z,
          i === 0 ? -0.2 : 0.2,
          sitBlend,
        );
      }
      embroidery.position.y = -1.05 * fold;
      embroidery.scale.set(1 + 0.45 * sitBlend, fold, 1 + 0.35 * sitBlend);
      for (const skirt of skirts) {
        skirt.mesh.position.y = -0.46 * fold;
        skirt.mesh.scale.set(1 + 0.45 * sitBlend, fold, 1 + 0.35 * sitBlend);
      }
      for (const ribbon of ribbons) {
        ribbon.mesh.position.y = 0.05 * fold;
        ribbon.mesh.scale.y = fold;
      }
      head.rotation.y =
        Math.sin(time * 0.65) * 0.045 * (speed < 0.01 ? 1 : 0.2);
      head.rotation.z = Math.sin(time * 0.85) * 0.012;
      hairBack.rotation.x =
        Math.sin(time * 1.7) * 0.025 * wind + (airborne ? -0.13 : 0);
      bodice.scale.y = 1 + Math.sin(time * 2.1) * 0.007;
      for (const skirt of skirts) {
        const p = skirt.geometry.getAttribute('position');
        for (let i = 0; i < p.count; i++) {
          const k = i * 3,
            f = (0.49 - skirt.base[k + 1]) / 0.98;
          p.setX(
            i,
            skirt.base[k] +
              Math.sin(time * 2.5 + skirt.base[k + 2] * 9) * 0.012 * f * wind,
          );
          p.setZ(
            i,
            skirt.base[k + 2] +
              Math.sin(phase + skirt.phase) * 0.018 * f * speed +
              (airborne ? -0.035 * f : 0),
          );
        }
        p.needsUpdate = true;
      }
      for (const r of ribbons) {
        const p = r.mesh.geometry.getAttribute('position');
        for (let i = 0; i < p.count; i++) {
          const k = i * 3,
            f = -r.base[k + 1] / 0.89;
          p.setX(
            i,
            r.base[k] + Math.sin(time * 3 - f * 5 + r.phase) * 0.035 * f * wind,
          );
          p.setZ(
            i,
            r.base[k + 2] +
              Math.sin(time * 2 - f * 4) * 0.045 * f +
              (airborne ? -0.22 * f : 0),
          );
        }
        p.needsUpdate = true;
      }
    },
  };
}
