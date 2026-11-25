import * as T from "three";
import { cottageFinish, laneMaterial, lane, lanternPool } from "./finishes.js";
import { walkingRoute } from "./walking.js";

import { villager } from "./villagers.js";
import {
  places,
  riverX,
  roads,
  bridgeZ as brZ,
  bridgeX as brX,
  span,
  deck,
  buildBridge,
  meadow,
  dressVillage,
  canopyMaterial,
  streamSurface,
} from "./landscape.js";
export { places };
export function createWorld(host, events) {
  const r = new T.WebGLRenderer({ antialias: true, alpha: false });
  host.append(r.domElement);
  r.setPixelRatio(Math.min(devicePixelRatio, 1.65));
  r.shadowMap.enabled = true;
  r.shadowMap.type = T.PCFSoftShadowMap;
  const scene = new T.Scene(),
    cam = new T.OrthographicCamera(),
    focus = new T.Vector3(),
    light = new T.DirectionalLight(0xffe6b4, 2.2),
    ambient = new T.HemisphereLight(0xfff5df, 0xb8b699, 1.8);
  scene.add(ambient, light, light.target);
  light.castShadow = true;
  Object.assign(light.shadow.camera, {
    left: -32,
    right: 32,
    top: 32,
    bottom: -32,
    near: 1,
    far: 140,
  });
  light.shadow.mapSize.set(2048, 2048);
  light.shadow.normalBias = 0.045;
  light.shadow.bias = -0.0004;
  const material = new T.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      flatShading: false,
      side: T.DoubleSide,
    }),
    root = new T.Group();
  scene.add(root);
  let seed = 732;
  const rand = () =>
      (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296,
    pick = (a) => a[Math.floor(rand() * a.length)];
  const cube = new T.BoxGeometry(),
    ball = new T.IcosahedronGeometry(1, 0),
    leaf = new T.IcosahedronGeometry(1, 1),
    cyl = new T.CylinderGeometry(1, 1, 1, 9),
    cone = new T.ConeGeometry(1, 1, 8);
  const foliage = new T.PlaneGeometry(),
    paintedLeaves = canopyMaterial();
  const matrix = new T.Object3D(),
    batches = new Map(),
    palette = new Map();
  let parent = root;
  function shape(g, x, y, z, w, h, d, color, rx = 0, ry = 0, rz = 0) {
    if (!palette.has(color)) palette.set(color, new T.Color(color));
    matrix.position.set(x, y, z);
    matrix.rotation.set(rx, ry, rz);
    matrix.scale.set(w, h, d);
    matrix.updateMatrix();
    if (parent === root) {
      if (!batches.has(g)) batches.set(g, []);
      batches.get(g).push([matrix.matrix.clone(), palette.get(color)]);
      return;
    }
    const m = new T.Mesh(
      g,
      new T.MeshStandardMaterial({ color, flatShading: true }),
    );
    m.position.copy(matrix.position);
    m.rotation.copy(matrix.rotation);
    m.scale.copy(matrix.scale);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  function box(...a) {
    return shape(cube, ...a);
  }
  function oval(...a) {
    return shape(leaf, ...a);
  }
  function beam(a, b, w, c) {
    const start = new T.Vector3(...a),
      end = new T.Vector3(...b),
      v = end.clone().sub(start),
      p = start.addScaledVector(v, 0.5),
      e = new T.Euler().setFromQuaternion(
        new T.Quaternion().setFromUnitVectors(
          new T.Vector3(0, 1, 0),
          v.clone().normalize(),
        ),
      );
    box(p.x, p.y, p.z, w, v.length(), w, c, e.x, e.y, e.z);
  }
  const localMonth = Number(
    new Intl.DateTimeFormat("en", {
      month: "numeric",
      timeZone: "Asia/Shanghai",
    }).format(new Date()),
  );
  const autumn = localMonth >= 9 && localMonth <= 11,
    spring = localMonth >= 3 && localMonth <= 5;
  const wood = "#77573b",
    dark = "#57453a",
    cream = "#fff4dd",
    greens = autumn
      ? ["#779652", "#a8b653", "#c7af5b", "#929e48", "#638555"]
      : spring
        ? ["#80ae64", "#9ebc69", "#b4c96b", "#87ae65", "#6a995d"]
        : ["#71965a", "#86a965", "#a4b767", "#83a05d", "#608056"];
  const obstacles = [],
    spots = [];
  const site = (id, name, x, z, y = 1.5) => spots.push({ id, name, x, z, y });
  const paintCottage = cottageFinish(),
    roadPaint = laneMaterial(),
    litGlass = cube.clone(),
    glassPaint = new T.MeshStandardMaterial({
      color: 0xffffff,
      vertexColors: true,
      emissive: 0xffb56c,
      emissiveIntensity: 0,
    }),
    poolPaint = lanternPool(),
    poolGeometry = new T.PlaneGeometry(4.6, 3);

  function house(x, z, w = 6, d = 4.2, col = "#566966") {
    const h = 3.35;
    obstacles.push([x, z, w / 2 + 0.25, d / 2 + 0.22]);
    box(x, 0.21, z, w + 0.45, 0.42, d + 0.5, "#a4a18a");
    box(x, h / 2 + 0.3, z, w, h, d, cream);
    paintCottage(scene, x, z, w, d, x === -2 && z === -3);
    for (let side of [-1, 1]) {
      let zz = z + side * d * 0.25;
      box(x, h + 0.79, zz, w + 1.05, 0.26, d * 0.59 + 0.42, col, side * 0.42);
      for (let i = -w / 2 - 0.45; i <= w / 2 + 0.45; i += 0.19) {
        let c = pick([col, "#677b76", "#71827b", "#586e69"]);
        beam(
          [x + i, h + 1.49, z],
          [x + i, h + 0.22, z + side * (d / 2 + 0.45)],
          0.115,
          c,
        );
      }
      box(x, h + 0.17, z + side * (d / 2 + 0.36), w + 1.15, 0.18, 0.14, dark);
    }
    box(x, h + 1.53, z, w + 1.2, 0.22, 0.25, "#657c79");
    for (let side of [-1, 1]) {
      for (let j = 1; j < 6; j++) {
        const t = j / 6;
        box(
          x,
          h + 1.47 - 1.25 * t,
          z + side * (d / 2 + 0.45) * t,
          w + 0.9,
          0.048,
          0.074,
          "#86948b",
        );
      }
    }
    for (let end of [-1, 1]) {
      beam(
        [x + end * (w / 2 + 0.42), h + 1.5, z],
        [x + end * (w / 2 + 0.76), h + 1.72, z],
        0.17,
        "#627672",
      );
    }
    for (let s of [-1, 1]) {
      let xx = x + s * (w / 2 - 0.04);
      box(xx, h + 0.18, z, 0.22, 0.65, d + 0.18, cream);
      box(xx, h + 0.62, z, 0.23, 0.6, d * 0.6, cream);
      box(xx, h + 1.02, z, 0.25, 0.54, d * 0.31, cream);
      for (let [hh, dd] of [
        [h + 0.52, d + 0.35],
        [h + 0.95, d * 0.66],
        [h + 1.34, d * 0.37],
      ])
        box(xx, hh, z, 0.41, 0.13, dd, col);
    }
    let front = z + d / 2 + 0.05;
    const pool = new T.Mesh(poolGeometry, poolPaint);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(x, 0.102, front + 1.42);
    scene.add(pool);
    for (let xx of [-w / 2 + 0.15, 0, w / 2 - 0.15])
      box(x + xx, 1.9, front, 0.16, 3.25, 0.12, wood);
    box(x, 1.46, front + 0.03, 1.14, 2.55, 0.1, dark);
    box(x, 1.43, front + 0.1, 0.92, 2.25, 0.1, "#846348");
    box(x, 2.99, front + 0.06, w, 0.17, 0.14, wood);
    for (let s of [-1, 1]) {
      const wx = x + s * w * 0.31;
      box(wx, 1.97, front + 0.09, 1.15, 1.4, 0.12, wood);
      shape(litGlass, wx, 1.97, front + 0.17, 0.93, 1.17, 0.08, "#c3b493");
      for (let m of [-0.31, 0, 0.31])
        box(wx + m, 1.97, front + 0.23, 0.055, 1.2, 0.04, dark);
      for (let n of [-0.33, 0.15, 0.48])
        box(wx, 1.97 + n, front + 0.23, 1, 0.05, 0.04, dark);
    }
    box(x, 0.17, front + 0.53, 1.8, 0.32, 1.05, "#b5ae97");
    for (let s of [-1, 1]) {
      const lx = x + s * 0.92;
      beam([lx, 3.05, front + 0.4], [lx, 2.76, front + 0.4], 0.04, dark);
      oval(lx, 2.52, front + 0.4, 0.24, 0.34, 0.24, "#be5137");
      box(lx, 2.13, front + 0.4, 0.045, 0.2, 0.045, "#e1aa53");
    }
  }
  function tree(x, z, h = 4, c = pick(greens)) {
    const leafTints = ["#6c994f", "#94b75d", "#b2c86a", "#719656"];
    let trunk = h * 0.62;
    shape(
      cyl,
      x,
      trunk * 0.49,
      z,
      h * 0.044,
      trunk,
      h * 0.044,
      wood,
      0,
      0,
      0.055,
    );
    for (let j = 0; j < 5; j++) {
      const a = j * 2.4,
        dx = Math.cos(a) * h * 0.2,
        dz = Math.sin(a) * h * 0.2,
        cy = h * (0.68 + rand() * 0.2);
      for (let k = 0; k < 5; k++) {
        let angle = k * 2.4 + j,
          yy = cy + (k % 3) * h * 0.065,
          xx = x + dx + Math.cos(angle) * h * 0.17,
          zz = z + dz + Math.sin(angle) * h * 0.17;
        shape(
          foliage,
          xx,
          yy,
          zz,
          h * 0.75,
          h * 0.62,
          1,
          k % 3 ? c : leafTints[(k + j) % 4],
          -0.33,
          0.31 + ((k % 3) - 1) * 0.36,
          0.1 * Math.sin(angle),
        );
      }
      beam([x, trunk * 0.58, z], [x + dx, cy, z + dz], h * 0.03, wood);
    }
    shape(foliage, x, h, z, h * 0.86, h * 0.68, 1, c, -0.34, 0.32);
  }

  function strip(points, width, color, y) {
    if (y >= 0.04) {
      lane(scene, points, width, y, roadPaint);
      return;
    }
    let verts = [];
    for (let i = 0; i < points.length - 1; i++) {
      let [a, b] = points[i],
        [c, d] = points[i + 1],
        l = Math.hypot(c - a, d - b),
        nx = ((b - d) * width) / l / 2,
        nz = ((c - a) * width) / l / 2;
      verts.push(
        a + nx,
        y,
        b + nz,
        a - nx,
        y,
        b - nz,
        c + nx,
        y,
        d + nz,
        c + nx,
        y,
        d + nz,
        a - nx,
        y,
        b - nz,
        c - nx,
        y,
        d - nz,
      );
    }
    let g = new T.BufferGeometry();
    g.setAttribute("position", new T.Float32BufferAttribute(verts, 3));
    g.computeVertexNormals();
    g.userData.surface = true;
    shape(g, 0, 0, 0, 1, 1, 1, color);
  }
  box(0, -0.46, 0, 300, 0.8, 260, "#abc17c");
  meadow(scene, rand);
  const river = [];
  for (let z = -90; z <= 90; z += 1.5) river.push([riverX(z), z]);
  strip(river, 8.4, "#c8bf91", 0.005);
  const flow = streamSurface(scene);
  function brLeft() {
    return riverX(3.65) - 4.15;
  }
  const road = [];
  for (let x = -66; x < 67; x += 0.8)
    road.push([
      x,
      Math.abs(x - riverX(3.65)) < 6 ? 3.65 : 4 + Math.sin(x * 0.16) * 1.15,
    ]);
  strip(
    road.filter((p) => p[0] < brLeft()),
    2.7,
    "#e0c995",
    0.044,
  );
  strip(
    road.filter((p) => p[0] > 22),
    2.7,
    "#e0c995",
    0.044,
  );
  strip(
    [
      [-28, -12],
      [-20, -9],
      [-13, -2],
      [-6, 2],
      [0, 4],
    ],
    2.5,
    "#ddc89b",
    0.048,
  );
  strip(
    [
      [0, 4],
      [1, 0],
      [0, -4],
    ],
    3,
    "#e0c995",
    0.05,
  );
  strip(
    [
      [23, 4],
      [25, -2],
      [23, -8],
    ],
    2,
    "#deca9d",
    0.05,
  );
  for (let i = 0; i < 480; i++) {
    let z = rand() * 92 - 46,
      x = riverX(z) + (rand() - 0.5) * 6.8;
    box(
      x,
      0.043,
      z,
      0.09 + rand() * 0.55,
      0.012,
      0.035,
      pick(["#a4c9b8", "#92bcb1", "#83b6ac"]),
    );
  }
  function fence(x, z, n, axis = 0) {
    for (let j = 0; j <= n; j++) {
      let xx = x + (axis ? 0 : j * 1.15),
        zz = z + (axis ? j * 1.15 : 0);
      box(xx, 0.5, zz, 0.17, 1, 0.16, "#a48353", 0, 0, 0.045 * Math.sin(j));
      if (j < n)
        for (let y of [0.32, 0.72])
          box(
            xx + (axis ? 0 : 0.58),
            y,
            zz + (axis ? 0.58 : 0),
            axis ? 0.12 : 1.22,
            0.13,
            axis ? 1.22 : 0.12,
            "#b09162",
          );
    }
  }
  function flowers(x, z, n = 9) {
    let cl = pick(["#e5a744", "#f5df9a", "#ee9c89", "#cab3da"]);
    for (let i = 0; i < n; i++) {
      let a = x + (rand() - 0.5) * 1.35,
        b = z + (rand() - 0.5) * 1.1,
        h = 0.22 + rand() * 0.34;
      shape(cone, a, h * 0.46, b, 0.085, h, 0.09, "#67824b", 0, 0, 0.15);
      shape(ball, a, h, b, 0.098, 0.08, 0.09, cl);
    }
  }
  function pot(x, z) {
    shape(cyl, x, 0.24, z, 0.33, 0.48, 0.33, "#b67c51");
    oval(x, 0.62, z, 0.42, 0.31, 0.38, "#728a49");
    flowers(x, z, 5);
  }
  house(-2, -3, 7, 4.6);
  box(-4.15, 4.5, -3.45, 0.46, 0.92, 0.51, "#989581");
  box(-4.15, 4.96, -3.45, 0.55, 0.14, 0.6, "#697972");
  house(-10, -8, 4.6, 3.9);
  house(7, -12, 5.7, 4);
  house(25, -8, 5, 4);
  house(-29, -15, 5.8, 4);
  house(-17, -20, 6, 4);
  house(3, -25, 6, 4);
  house(32, -21, 4.6, 4);
  fence(-8, 0.5, 4);
  fence(2, -0.5, 4);
  fence(7, -5, 5, 1);
  pot(-3.5, -0.15);
  pot(0.5, -0.25);
  function table(x, z) {
    shape(cyl, x, 0.86, z, 0.87, 0.16, 0.87, "#af8556");
    shape(cyl, x, 0.44, z, 0.22, 0.85, 0.22, wood);
    for (let s of [-1, 1]) {
      shape(cyl, x + s * 1.18, 0.27, z, 0.33, 0.52, 0.33, wood);
    }
    oval(x, 0.99, z, 0.19, 0.16, 0.19, "#984f32");
    for (let s of [-1, 1])
      shape(cyl, x + s * 0.4, 0.99, z, 0.1, 0.13, 0.1, "#f6ebd3");
  }
  table(4, 0.4);
  table(-27, -10);
  site("house", "林家老宅", -2, 0.4, 3.4);
  site("tea", "院中茶席", 4, 1, 1.45);
  site("garden", "自家菜畦", -4, 7, 0.85);
  site("river", "柳溪钓台", 23, -4, 1);
  site("leaves", "南山茶园", -31, -10, 1.5);
  // Slate stepping stones, irrigation beds and tied bamboo frames.
  for (let i = 0; i < 11; i++)
    shape(
      cyl,
      -1.95 + Math.sin(i) * 0.23,
      0.085,
      -0.2 + i * 0.39,
      0.53,
      0.1,
      0.25,
      pick(["#c0b49b", "#b9ac91"]),
      0,
      rand() * 0.3,
    );
  const beds = Array.from({ length: 6 }, (_, i) => ({
    x: -7.8 + (i % 3) * 2.2,
    z: 6.55 + Math.floor(i / 3) * 2.35,
  }));
  const teaTables = [
    { x: 4, z: 0.4 },
    { x: -27, z: -10 },
  ];
  fence(-9.2, 5.2, 3, 1);
  fence(-9.2, 10.6, 6);
  flowers(-7, 10.95, 18);
  for (let i = 0; i < 350; i++) {
    let x = rand() * 85 - 42,
      z = rand() * 50 - 29;
    if (
      Math.abs(riverX(z) - x) < 4 ||
      Math.abs(z - 4 - Math.sin(x * 0.16) * 1.15) < 1.8 ||
      (x > -10 && x < 9 && z > -6 && z < 11)
    )
      continue;
    shape(
      cyl,
      x,
      -0.013,
      z,
      0.3 + rand() * 1.4,
      0.025,
      0.3 + rand() * 0.7,
      pick(["#adc27f", "#afc27b", "#a5bc75", "#a8bf77"]),
      0,
      rand() * 3,
    );
  }
  const bridgeMesh = buildBridge(scene);
  dressVillage({
    shape,
    box,
    oval,
    beam,
    ball,
    cyl,
    cone,
    rand,
    pick,
    house,
    table,
    site,
    strip,
    scene,
  });
  for (let j = 0; j < 5; j++)
    for (let i = 0; i < 12; i++)
      oval(
        -37 + i * 0.95,
        0.55,
        -13 + j * 1.7,
        0.8,
        0.65,
        0.59,
        pick(["#81954b", "#79904a", "#98aa58"]),
      );
  // Curved rows of flowering hedges, drying rack, bamboo and stacked firewood.
  function shrub(x, z, c) {
    shape(ball, x, 0.34, z, 0.58, 0.47, 0.48, c, 0, rand());
    for (let k = 0; k < 10; k++) {
      let a = rand() * 6.28,
        rr = rand() * 0.47;
      shape(
        ball,
        x + Math.cos(a) * rr,
        0.53 + rand() * 0.23,
        z + Math.sin(a) * rr,
        0.073,
        0.062,
        0.074,
        pick(["#f6dda4", "#f0b37e", "#f2c39e"]),
      );
    }
  }
  for (let i = 0; i < 9; i++)
    shrub(-8.9 + i * 0.55, 0.96 + Math.sin(i) * 0.09, pick(greens));
  for (let i = 0; i < 7; i++) shrub(2.7 + i * 0.59, -0.87, pick(greens));
  for (let i = 0; i < 12; i++) {
    let a = i % 6,
      j = Math.floor(i / 6);
    shape(
      cyl,
      -5.95 + a * 0.29,
      0.22 + j * 0.29,
      -0.74,
      0.16,
      0.8,
      0.16,
      "#956e46",
      1.57,
    );
    shape(
      cyl,
      -5.95 + a * 0.29,
      0.22 + j * 0.29,
      -0.33,
      0.134,
      0.045,
      0.134,
      "#cca16c",
      1.57,
    );
  }
  for (let s of [-1, 1]) {
    beam([1.7 + s * 0.17, 0, -2.0], [1.7, 1.7, -2], 0.09, wood);
    beam([1.7 + s * 0.17, 0, -4.1], [1.7, 1.7, -4.1], 0.09, wood);
  }
  beam([1.7, 1.6, -1.85], [1.7, 1.6, -4.25], 0.095, wood);
  for (let i = 0; i < 3; i++)
    box(
      1.72,
      1.12,
      -2.35 - i * 0.55,
      0.08,
      0.98,
      0.39,
      ["#b4bba0", "#d5b590", "#859b9b"][i],
    );
  for (let j = 0; j < 9; j++) {
    let x = 9.4 + rand() * 1.5,
      z = -8 + rand() * 3,
      h = 3 + rand() * 2;
    shape(cyl, x, h / 2, z, 0.07, h, 0.07, "#879c56");
    for (let k = 1; k < 7; k++) {
      let a = k * 2.4;
      shape(cyl, x, (k * h) / 7, z, 0.081, 0.055, 0.081, "#a2ad6d");
      shape(
        ball,
        x + 0.22 * Math.cos(a),
        (h * k) / 7 + 0.15,
        z + 0.22 * Math.sin(a),
        0.51,
        0.09,
        0.16,
        "#759650",
        0,
        -a,
        0.35,
      );
    }
  }
  const featured = [
    [-8, -2, 5.8],
    [4, -5, 5.8],
    [10, 1, 4.8],
    [-12, 5, 5.4],
    [9, 10, 4.6],
    [-13, -13, 6],
    [-6, -12, 5.2],
    [27, -2, 6],
    [-24, -9, 5.5],
  ];
  for (let [x, z, h] of featured) tree(x, z, h);
  tree(-6.7, -0.8, 3.6, autumn ? "#d8a75e" : spring ? "#e8b9af" : "#8eac68");
  for (let i = 0; i < 175; i++) {
    let x = rand() * 115 - 57,
      z = rand() * 83 - 56;
    if (
      Math.abs(x - riverX(z)) < 4.7 ||
      (x > -15 && x < 14 && z > -16 && z < 14) ||
      (x < -18 && x > -39 && z > -21 && z < -5) ||
      (x > 19 && x < 30 && z > -14 && z < 8) ||
      Math.abs(z - 4 - Math.sin(x * 0.16)) < 2
    )
      continue;
    // Keep the foreground of the six working beds open to the courtyard camera.
    if (z >= 14 && z < 27 && x > -13 && x < 7) x -= 18;
    tree(x, z, 2.5 + rand() * 3.8);
  }
  const grassBlade = new T.BufferGeometry();
  const blades = [];
  for (let k = 0; k < 7; k++) {
    let a = k * 2.4,
      dx = Math.cos(a),
      dz = Math.sin(a),
      h = 0.5 + (k % 3) * 0.2;
    blades.push(
      dx * 0.09,
      0,
      dz * 0.09,
      dx * 0.09 + dz * 0.12,
      0,
      dz * 0.09 - dx * 0.12,
      dx * 0.48,
      h,
      dz * 0.48,
    );
  }
  grassBlade.setAttribute("position", new T.Float32BufferAttribute(blades, 3));
  grassBlade.computeVertexNormals();
  for (let i = 0; i < 1600; i++) {
    let x = rand() * 100 - 50,
      z = rand() * 60 - 34;
    if (
      Math.abs(x - riverX(z)) < 4.1 ||
      Math.abs(z - 4 - Math.sin(x * 0.16)) < 1.7 ||
      obstacles.some(
        ([a, b, w, d]) => Math.abs(x - a) < w && Math.abs(z - b) < d,
      ) ||
      (x > -10 && x < 6 && z > -4 && z < 11)
    )
      continue;
    shape(
      grassBlade,
      x,
      0,
      z,
      0.65,
      0.36 + rand() * 0.28,
      0.65,
      pick(greens),
      0,
      rand() * 6,
    );
    if (i % 37 === 0) flowers(x, z);
  }
  for (let z = -32; z < 35; z += 0.8) {
    let x = riverX(z) + (rand() > 0.5 ? 1 : -1) * (3.8 + rand() * 0.4);
    shape(
      ball,
      x,
      0.13,
      z,
      0.25 + rand() * 0.35,
      0.2 + rand() * 0.24,
      0.36,
      pick(["#a6aa91", "#969a88", "#b6b398"]),
      0,
      rand(),
    );
  }
  for (let j = 0; j < 3; j++)
    for (let i = 0; i < 26; i++) {
      let x = -130 + i * 10,
        z = -64 - j * 18 - rand() * 7;
      shape(
        leaf,
        x,
        0,
        z,
        9 + rand() * 8,
        6 + j * 3 + rand() * 7,
        9 + rand() * 7,
        ["#819879", "#99ad97", "#acbfac"][j],
        0,
        rand(),
      );
    }
  let child;
  const hero = villager(scene, 0, 3, "#758d81", "lin", 1.37);
  const npc = villager(scene, 7.8, 3.5, "#b17c69", "tang", 1.07);
  const fisherman = villager(scene, 23, -4, "#6f8186", "zhou", 1.08);
  const teaGirl = villager(scene, -27, -9, "#a68965", "xu", 1.03);
  npc.obj.rotation.y = -0.45;
  fisherman.obj.rotation.y = -1.4;
  site("neighbor", "阿棠", 7.8, 3.5, 2.3);
  beam([22.6, 1.02, -4], [19.0, 2.48, -3.5], 0.036, wood);
  beam([19, 2.48, -3.5], [18.65, 0.06, -3.35], 0.012, "#a2ada1");
  const hens = [];
  function hen(x, z) {
    const body = new T.Group(),
      head = new T.Group();
    scene.add(body);
    body.add(head);
    body.position.set(x, 0, z);
    head.position.set(0, 0.43, 0.16);
    parent = body;
    oval(0, 0.37, 0, 0.29, 0.26, 0.38, "#eee2c4");
    oval(0, 0.46, -0.31, 0.12, 0.21, 0.14, "#e2d4b6");
    for (const sign of [-1, 1]) {
      oval(sign * 0.23, 0.35, 0.01, 0.09, 0.17, 0.22, "#e0cda9");
      box(sign * 0.093, 0.11, 0, 0.045, 0.19, 0.045, "#ad864b");
    }
    parent = head;
    oval(0, 0.18, 0.08, 0.155, 0.18, 0.15, "#f2e5c7");
    shape(cone, 0, 0.36, 0.09, 0.075, 0.13, 0.08, "#b8553e");
    shape(ball, 0, 0.17, 0.24, 0.065, 0.045, 0.1, "#dc9f4d");
    for (const sign of [-1, 1])
      oval(sign * 0.124, 0.205, 0.14, 0.019, 0.018, 0.017, "#423e30");
    parent = root;
    hens.push({ body, head, x, z });
  }
  hen(1, 5.1);
  hen(1.6, 5.5);
  hen(-5, 2.4);
  function flush() {
    for (let [geo, allItems] of batches) {
      let g = geo.index ? geo.toNonIndexed() : geo.clone();
      if (geo !== foliage) g.deleteAttribute("uv");
      let cols = new Float32Array(g.attributes.position.count * 3);
      cols.fill(1);
      g.setAttribute("color", new T.BufferAttribute(cols, 3));
      const cells = new Map();
      for (const item of allItems) {
        const e = item[0].elements,
          key = Math.floor(e[12] / 24) + "," + Math.floor(e[14] / 24);
        if (!cells.has(key)) cells.set(key, []);
        cells.get(key).push(item);
      }
      for (const items of cells.values()) {
        const mesh = new T.InstancedMesh(
          g,
          geo === foliage
            ? paintedLeaves
            : geo === litGlass
              ? glassPaint
              : material,
          items.length,
        );
        items.forEach(([m, c], i) => {
          mesh.setMatrixAt(i, m);
          mesh.setColorAt(i, c);
        });
        mesh.castShadow = !geo.userData.surface;
        mesh.receiveShadow = true;
        scene.add(mesh);
      }
    }
    batches.clear();
  }
  flush();
  const ring = new T.Mesh(
    new T.RingGeometry(0.53, 0.59, 48),
    new T.MeshBasicMaterial({ color: 0xffedab, side: T.DoubleSide }),
  );
  ring.rotation.x = -Math.PI / 2;
  scene.add(ring);
  let target = null,
    keys = new Set(),
    zoom = 1.12,
    area = 0,
    on = true,
    after = null,
    route = [],
    weather = "未知",
    phase = "",
    season = "",
    last = performance.now(),
    elapsed = 0,
    repairGroup = null;
  const markers = [];
  let previousSpot;
  for (let s of spots) {
    let b = document.createElement("button");
    b.className = "marker";
    b.textContent = s.name;
    b.onclick = () => go(s);
    host.append(b);
    markers.push(b);
  }
  function legal(x, z) {
    if (Math.abs(x) > 80 || z < -48 || z > 48) return false;
    if (Math.abs(z - brZ) < 1.78 && Math.abs(x - brX) < span - 0.1)
      return Math.abs(z - brZ) <= 1.22;
    if (Math.abs(x - riverX(z)) < 4) return false;
    return !obstacles.some(
      ([a, b, w, d]) => Math.abs(x - a) < w && Math.abs(z - b) < d,
    );
  }
  const anchors = [];
  for (const [cx, cz, w, d] of obstacles)
    for (const sx of [-1, 1])
      for (const sz of [-1, 1])
        anchors.push({ x: cx + sx * (w + 0.55), z: cz + sz * (d + 0.55) });
  for (const sign of [-1, 1]) {
    anchors.push({ x: brX + sign * (span + 0.42), z: brZ });
    for (let z = -46; z <= 46; z += 6)
      anchors.push({ x: riverX(z) + sign * 5.1, z });
  }
  const findRoute = walkingRoute(legal, anchors);
  const destination = new T.Mesh(
    new T.RingGeometry(0.29, 0.36, 36),
    new T.MeshBasicMaterial({
      color: 0xffe8a0,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    }),
  );
  destination.rotation.x = -Math.PI / 2;
  destination.visible = false;
  scene.add(destination);
  let activeChore = null;
  function cancelChore() {
    if (activeChore) hero.chores.clear();
    activeChore = null;
    if (typeof after === "function") {
      after = null;
      target = null;
      route = [];
    }
  }
  function navigate(x, z, id = null) {
    cancelChore();
    const steps = findRoute(hero.obj.position, { x, z });
    if (!steps) {
      events.hint("这里没有通路，试试附近的小径");
      return;
    }
    route = steps;
    after = id;
    target = route.shift();
    const onBridge = Math.abs(x - brX) <= span && Math.abs(z - brZ) < 1.46;
    destination.position.set(x, onBridge ? deck(x) + 0.12 : 0.095, z);
    destination.visible = true;
    return true;
  }
  function perform(kind, index, commit) {
    let look, stand;
    if (kind === "饮茶") {
      look = teaTables[index];
      const side = hero.obj.position.x < look.x ? -1 : 1;
      stand = { x: look.x + side * 1.18, z: look.z };
    } else {
      look = beds[index];
      stand = { x: look.x + 0.91, z: look.z + 0.09 };
    }
    return navigate(stand.x, stand.z, () => {
      hero.obj.position.set(stand.x, 0, stand.z);
      const heading = Math.atan2(look.x - stand.x, look.z - stand.z);
      events.hint(
        {
          饮茶: "坐下，捧一盏热茶",
          耕作: "挥锄翻土",
          播种: "蹲下撒种",
          浇水: "提壶浇水",
          收获: "俯身采收",
        }[kind],
      );
      activeChore = {
        kind,
        look,
        heading,
        time: 0,
        duration: kind === "饮茶" ? 4.4 : kind === "浇水" ? 3.1 : 2.65,
        commit,
      };
    });
  }
  function go(s) {
    if (s.id === "tea") return events.tea(0);
    if (legal(s.x, s.z)) navigate(s.x, s.z, s.id);
    else events.hint("沿小径靠近后按 E 互动");
  }
  function reset(i) {
    cancelChore();
    area = i;
    let p = places[i];
    hero.obj.position.set(p.x, 0, p.z);
    focus.set(p.x, 0, p.z);
    target = null;
    destination.visible = false;
    route = [];
    after = null;
    keys.clear();
    events.area(i);
  }
  reset(0);
  const ray = new T.Raycaster(),
    plane = new T.Plane(new T.Vector3(0, 1, 0), 0);
  function clickGround(e) {
    let bounds = r.domElement.getBoundingClientRect();
    ray.setFromCamera(
      new T.Vector2(
        ((e.clientX - bounds.left) / bounds.width) * 2 - 1,
        1 - ((e.clientY - bounds.top) / bounds.height) * 2,
      ),
      cam,
    );
    const pick = ray.intersectObjects(crops.children, false)[0];
    if (pick && Number.isInteger(pick.object.userData.bed)) {
      events.plot(pick.object.userData.bed);
      return;
    }
    const top = ray.ray.intersectPlane(
      new T.Plane(new T.Vector3(0, 1, 0), -0.94),
      new T.Vector3(),
    );
    const teaIndex = top
      ? teaTables.findIndex((t) => Math.hypot(top.x - t.x, top.z - t.z) < 0.93)
      : -1;
    if (teaIndex >= 0) return events.tea(teaIndex);
    let p = ray.ray.intersectPlane(plane, new T.Vector3());
    const hit = ray.intersectObject(bridgeMesh, false)[0];
    if (hit) {
      p = hit.point.clone();
      p.z = T.MathUtils.clamp(p.z, brZ - 1.1, brZ + 1.1);
    }
    if (p && legal(p.x, p.z)) {
      navigate(p.x, p.z);
    } else events.hint("沿小径行走，过溪请走石桥");
  }
  let yaw = Math.atan2(8.5, 28.4),
    drag = null;
  const canvas = r.domElement;
  canvas.onpointerdown = (e) => {
    if (!e.isPrimary || e.button !== 0) return;
    drag = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      start: yaw,
      moved: false,
    };
    canvas.setPointerCapture(e.pointerId);
  };
  canvas.onpointermove = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x,
      dy = e.clientY - drag.y;
    if (Math.hypot(dx, dy) > 7) drag.moved = true;
    if (drag.moved)
      yaw = T.MathUtils.clamp(drag.start - dx * 0.006, -0.68, 1.05);
  };
  canvas.onpointerup = (e) => {
    if (drag?.id !== e.pointerId) return;
    const clicked = !drag.moved;
    drag = null;
    if (clicked) clickGround(e);
  };
  canvas.onlostpointercapture = canvas.onpointercancel = () => {
    drag = null;
  };
  canvas.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      zoom = T.MathUtils.clamp(zoom * Math.exp(-e.deltaY * 0.001), 0.75, 1.65);
      resize();
    },
    { passive: false },
  );
  function closestSpot() {
    let p = hero.obj.position;
    let s = spots
      .slice()
      .sort(
        (a, b) =>
          Math.hypot(a.x - p.x, a.z - p.z) - Math.hypot(b.x - p.x, b.z - p.z),
      )[0];
    return Math.hypot(s.x - p.x, s.z - p.z) < 4.2 ? s : null;
  }
  function near() {
    const s = closestSpot();
    if (s) {
      target = null;
      route = [];
      after = null;
      events.use(s.id);
    } else events.hint("走近地名标记，再按 E 互动");
  }
  // A few low-cost moving details keep the village alive while the player rests.
  const smoke = new T.InstancedMesh(
    ball,
    new T.MeshBasicMaterial({
      color: 0xf6efdc,
      transparent: true,
      opacity: 0.26,
      depthWrite: false,
    }),
    8,
  );
  scene.add(smoke);
  const insects = new T.InstancedMesh(
    ball,
    new T.MeshBasicMaterial({ color: 0xffe5a0 }),
    14,
  );
  scene.add(insects);
  const wind = new T.Object3D();
  function ambientLife(t) {
    hens.forEach(({ body, head, x, z }, i) => {
      const a = t * 0.27 + i * 2.4,
        pace = 0.5 + 0.5 * Math.sin(a),
        step = pace * pace;
      body.position.set(
        x + 0.38 * Math.sin(a),
        step * 0.028 * Math.abs(Math.sin(t * 6 + i)),
        z + 0.25 * Math.cos(a),
      );
      body.rotation.y = Math.atan2(0.38 * Math.cos(a), -0.25 * Math.sin(a));
      head.rotation.x =
        0.08 + (1 - step) * 1.22 * Math.pow(0.5 + 0.5 * Math.cos(t * 3 + i), 3);
    });
    for (let i = 0; i < 8; i++) {
      let f = (t * 0.105 + i / 8) % 1;
      wind.position.set(
        -4.15 + f * 0.8 + Math.sin(t * 0.75 + i) * 0.08,
        4.92 + f * 2.2,
        -3.45,
      );
      wind.scale.setScalar(0.09 + f * 0.22);
      wind.updateMatrix();
      smoke.setMatrixAt(i, wind.matrix);
    }
    smoke.instanceMatrix.needsUpdate = true;
    for (let i = 0; i < 14; i++) {
      let a = i * 2.4 + t * 0.6;
      wind.position.set(
        -5 + Math.sin(a) * 4 + (i % 3) * 1.5,
        0.7 + Math.sin(t * 1.6 + i) * 0.35,
        2.1 + Math.cos(a) * 2 + (i % 5),
      );
      wind.scale.set(
        0.037,
        0.025 + Math.abs(Math.sin(t * 7 + i)) * 0.035,
        0.027,
      );
      wind.updateMatrix();
      insects.setMatrixAt(i, wind.matrix);
    }
    insects.instanceMatrix.needsUpdate = true;
  }
  const weatherGeo = new T.BufferGeometry(),
    pos = new Float32Array(450 * 3);
  for (let i = 0; i < pos.length; i += 3) {
    pos[i] = rand() * 42 - 21;
    pos[i + 1] = rand() * 20;
    pos[i + 2] = rand() * 36 - 18;
  }
  weatherGeo.setAttribute("position", new T.BufferAttribute(pos, 3));
  let drops = new T.Points(
    weatherGeo,
    new T.PointsMaterial({
      color: 0xdce9e7,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
    }),
  );
  scene.add(drops);
  function sky(ph, we, se) {
    if (ph === phase && we === weather && se === season) return;
    phase = ph;
    weather = we;
    season = se;
    const night = ph === "夜晚",
      warm = ["夕阳", "日出"].includes(ph),
      cloud = ["阴天", "雨天", "雾天", "雷雨", "雪天"].includes(we);
    let sky = night
      ? "#8191a4"
      : warm
        ? "#f2d4a3"
        : cloud
          ? "#c4d2c6"
          : "#c8dfd2";
    scene.background = new T.Color(sky);
    scene.fog = new T.FogExp2(sky, night ? 0.012 : 0.009);
    light.color.set(night ? "#c9ddff" : warm ? "#ffc68a" : "#fff0ce");
    glassPaint.emissiveIntensity = night ? 0.86 : warm ? 0.24 : 0;
    poolPaint.opacity = night ? 0.62 : warm ? 0.17 : 0;
    light.intensity = night ? 0.88 : cloud ? 1.65 : 2.35;
    ambient.intensity = night ? 1.28 : 1.75;
    ambient.color.set(night ? "#c6d5ec" : "#fff5de");
    drops.visible = ["雨天", "雷雨", "雪天"].includes(we);
    drops.material.size = we === "雪天" ? 0.12 : 0.075;
  }
  sky("白天", "未知", "春");
  function resize() {
    let w = host.clientWidth,
      h = host.clientHeight;
    let hh = Math.max(8.9, (10.3 * h) / w) / zoom;
    cam.left = (-hh * w) / h;
    cam.right = -cam.left;
    cam.top = hh;
    cam.bottom = -hh;
    cam.near = 0.1;
    cam.far = 220;
    cam.updateProjectionMatrix();
    r.setSize(w, h, false);
  }
  new ResizeObserver(resize).observe(host);
  resize();
  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden || !on) return;
    let dt = Math.min((now - last) / 1000, 0.12);
    last = now;
    elapsed += dt;
    let p = hero.obj.position,
      dx = 0,
      dz = 0;
    if (on) {
      let lr =
          Number(keys.has("d") || keys.has("arrowright")) -
          Number(keys.has("a") || keys.has("arrowleft")),
        fb =
          Number(keys.has("s") || keys.has("arrowdown")) -
          Number(keys.has("w") || keys.has("arrowup"));
      if (lr || fb) {
        cancelChore();
        target = null;
        route = [];
        after = null;
        dx = lr * Math.cos(yaw) + fb * Math.sin(yaw);
        dz = -lr * Math.sin(yaw) + fb * Math.cos(yaw);
      } else if (target) {
        dx = target.x - p.x;
        dz = target.z - p.z;
        if (Math.hypot(dx, dz) < 0.065) {
          target = route.shift() || null;
          dx = dz = 0;
          if (!target && after) {
            const id = after;
            after = null;
            if (typeof id === "function") id();
            else events.use(id);
          }
        }
      }
    }
    const startX = p.x,
      startZ = p.z;
    let len = Math.hypot(dx, dz);
    if (len) {
      let step = Math.min(4.2 * dt, target ? len : 100);
      dx = (dx / len) * step;
      dz = (dz / len) * step;
      let ox = p.x,
        oz = p.z;
      if (legal(p.x + dx, p.z)) p.x += dx;
      if (legal(p.x, p.z + dz)) p.z += dz;
      if (target && Math.hypot(p.x - ox, p.z - oz) < 0.001) {
        target = null;
        after = null;
        events.hint("小路被挡住了，试着绕一下");
      }
    }
    const travelled = Math.hypot(p.x - startX, p.z - startZ);
    if (travelled > 0) {
      let heading = Math.atan2(p.x - startX, p.z - startZ),
        delta = heading - hero.obj.rotation.y;
      hero.obj.rotation.y +=
        Math.atan2(Math.sin(delta), Math.cos(delta)) * (1 - Math.exp(-dt * 14));
    }
    hero.animate(travelled, dt, elapsed);
    if (activeChore) {
      const a = activeChore;
      a.time += dt;
      const t = Math.min(1, a.time / a.duration);
      hero.obj.rotation.y +=
        Math.atan2(
          Math.sin(a.heading - hero.obj.rotation.y),
          Math.cos(a.heading - hero.obj.rotation.y),
        ) *
        (1 - Math.exp(-dt * 14));
      hero.chores.pose(a.kind, t, a.look);
      if (t >= 0.62 && a.commit) {
        const apply = a.commit;
        a.commit = null;
        apply();
      }
      if (t >= 1) cancelChore();
    }
    const framing = activeChore ? 1.52 : 1,
      next = cam.zoom + (framing - cam.zoom) * (1 - Math.exp(-dt * 3));
    if (Math.abs(next - cam.zoom) > 0.0001) {
      cam.zoom = next;
      cam.updateProjectionMatrix();
    }
    npc.animate(0, dt, elapsed + 1.4);
    fisherman.animate(0, dt, elapsed + 2);
    teaGirl.animate(0, dt, elapsed + 3);
    child?.animate(0, dt, elapsed);
    const bridge = Math.abs(p.x - brX) <= span && Math.abs(p.z - brZ) < 1.46;
    p.y = bridge ? deck(p.x) + 0.075 : 0;
    ring.position.set(p.x, p.y + 0.07, p.z);
    destination.visible = Boolean(target);
    destination.scale.setScalar(1 + 0.16 * Math.sin(elapsed * 4));
    let spot = activeChore ? null : closestSpot();
    if (spot !== previousSpot) {
      events.nearby?.(spot);
      previousSpot = spot;
    }
    let nearest = places.reduce(
      (best, q, i) =>
        Math.hypot(q.x - p.x, q.z - p.z) <
        Math.hypot(places[best].x - p.x, places[best].z - p.z)
          ? i
          : best,
      area,
    );
    if (nearest !== area) {
      area = nearest;
      events.area(area);
    }
    focus.x += (p.x - focus.x) * (1 - Math.exp(-dt * 2.4));
    focus.z += (p.z - focus.z) * (1 - Math.exp(-dt * 2.4));
    cam.position.set(
      focus.x + 29.65 * Math.sin(yaw),
      15.5 + (cam.zoom - 1) * 9,
      focus.z - 2.4 + 29.65 * Math.cos(yaw),
    );
    cam.lookAt(focus.x, 1.1, focus.z - 2.4);
    cam.updateMatrixWorld();
    light.position.set(focus.x - 14, 25, focus.z + 9);
    light.target.position.copy(focus);
    for (let i = 0; i < spots.length; i++) {
      let s = spots[i],
        v = new T.Vector3(s.x, s.y + 0.6, s.z).project(cam),
        el = markers[i];
      el.style.display =
        !activeChore &&
        Math.hypot(s.x - p.x, s.z - p.z) < 13 &&
        Math.abs(v.x) < 0.94 &&
        v.y < 0.78 &&
        v.y > -0.7
          ? "block"
          : "none";
      el.style.left = (v.x + 1) * 50 + "%";
      el.style.top = (1 - v.y) * 50 + "%";
    }
    if (drops.visible) {
      drops.position.set(p.x, 0, p.z);
      for (let i = 1; i < pos.length; i += 3) {
        pos[i] -= dt * (weather === "雪天" ? 1.2 : 7);
        if (pos[i] < 0) pos[i] = 20;
      }
      weatherGeo.attributes.position.needsUpdate = true;
    }
    flow(elapsed);
    ambientLife(elapsed);
    r.render(scene, cam);
  }
  requestAnimationFrame(frame);
  let crops = new T.Group();
  scene.add(crops);
  function disposeGroup(g) {
    g.traverse((m) => {
      if (m.material) m.material.dispose();
    });
    scene.remove(g);
  }
  return {
    family(stage) {
      if (stage === 4 && !child) {
        child = villager(scene, -3.6, 1.1, "#c69c65", "child", 0.66);
        child.obj.rotation.y = 0.32;
      }
    },
    perform,
    cancelChore,
    travel: reset,
    walkTo(i) {
      const p = places[i];
      navigate(p.x, p.z);
    },
    position() {
      return { x: hero.obj.position.x, z: hero.obj.position.z };
    },
    key: (k, v) => (v ? keys.add(k) : keys.delete(k)),
    pause(v) {
      on = !v;
      keys.clear();
    },
    near,
    sky,
    zoom(v) {
      zoom = Math.max(0.75, Math.min(1.65, zoom + v));
      resize();
    },
    outfit(c) {
      hero.dye(c);
    },
    repair(l) {
      if (repairGroup) disposeGroup(repairGroup);
      repairGroup = new T.Group();
      scene.add(repairGroup);
      parent = repairGroup;
      if (l > 0) {
        box(-2, 2.95, -0.23, 3.1, 0.15, 1.25, "#71827b", 0.12);
        for (let s of [-1, 1])
          box(-2 + s * 1.38, 1.48, 0.19, 0.12, 2.92, 0.12, wood);
      }
      if (l > 1) {
        pot(-4, 0.15);
        pot(0.2, 0.35);
      }
      if (l > 2) table(-5.8, -0.05);
      parent = root;
    },
    crops(plots) {
      disposeGroup(crops);
      crops = new T.Group();
      scene.add(crops);
      parent = crops;
      plots.forEach((p, i) => {
        const { x, z } = beds[i],
          start = crops.children.length;
        box(
          x,
          0.13,
          z,
          1.78,
          0.24,
          1.72,
          p.water ? "#69503d" : p.tilled ? "#92704e" : "#ac966d",
        );
        for (let k = -1; k <= 1; k++)
          box(
            x,
            0.26,
            z + k * 0.43,
            1.56,
            0.055,
            p.tilled ? 0.16 : 0.065,
            p.water ? "#77573f" : p.tilled ? "#b18a5b" : "#a99069",
          );
        if (p.kind) {
          let ready = Date.now() >= p.end;
          for (let j = -1; j <= 1; j++) {
            let xx = x + j * 0.3;
            oval(xx, 0.42, z, 0.17, ready ? 0.38 : 0.19, 0.16, "#76914a");
            if (ready)
              oval(
                xx,
                0.72,
                z,
                0.18,
                0.14,
                0.17,
                p.kind === "菊花" ? "#f1be51" : "#e1d2a5",
              );
          }
        }
        for (let k = start; k < crops.children.length; k++)
          crops.children[k].userData.bed = i;
      });
      parent = root;
    },
  };
}
