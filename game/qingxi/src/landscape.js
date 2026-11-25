import * as T from "three";
export const places = [
  { name: "归家小院", brief: "老宅、花圃与菜畦", x: 0, z: 3 },
  { name: "柳溪石桥", brief: "青石拱桥与溪边钓台", x: 24, z: -3 },
  { name: "南山茶坞", brief: "上山采茶，探望许姨", x: -28, z: -12 },
  { name: "禾香田埂", brief: "沿田埂散步，帮农户收稻", x: -56, z: 29 },
  { name: "竹影山径", brief: "穿过竹林，为竹匠选竹", x: -60, z: -34 },
  { name: "东门小集", brief: "逛山货摊，买种卖菜", x: 62, z: 19 },
];
export const riverX = (z) => 17.1 + Math.sin(z * 0.084) * 2.8;
export const roads = [
  [
    [-56, 29],
    [-48, 25],
    [-41, 18],
    [-36, 12],
    [-30, 5],
  ],
  [
    [-60, -34],
    [-53, -29],
    [-43, -25],
    [-35, -22],
    [-33.5, -16],
    [-33.5, -11.5],
    [-28, -12],
  ],
  [
    [-28, -12],
    [-20, -9],
    [-13, -2],
    [-6, 2],
    [0, 4],
  ],
  [
    [24, 4],
    [34, 5],
    [43, 10],
    [50, 16],
    [62, 19],
    [72, 21],
  ],
];
export const bridgeZ = 3.65,
  bridgeX = riverX(bridgeZ),
  span = 6;
export function deck(x) {
  const t = Math.min(1, Math.abs((x - bridgeX) / span));
  return 0.045 + 2.75 * (1 - t * t);
}
export function buildBridge(scene) {
  const pos = [],
    colors = [];
  function quad(a, b, c, d, col) {
    let color = new T.Color(col);
    for (let q of [a, b, c, a, c, d]) {
      pos.push(...q);
      colors.push(color.r, color.g, color.b);
    }
  }
  function stone(x0, x1, base0, base1, top0, top1, z0, z1, c) {
    let a = [x0, base0, z0],
      b = [x1, base1, z0],
      e = [x0, base0, z1],
      f = [x1, base1, z1],
      g = [x0, top0, z0],
      h = [x1, top1, z0],
      j = [x0, top0, z1],
      k = [x1, top1, z1];
    quad(g, j, k, h, c);
    quad(a, g, h, b, c);
    quad(e, f, k, j, c);
    quad(a, e, j, g, c);
    quad(b, h, k, f, c);
    quad(a, b, f, e, c);
  }
  const under = (x) =>
    0.025 + 1.98 * Math.sqrt(Math.max(0, 1 - ((x - bridgeX) / 4.55) ** 2));
  const shades = [
    "#829085",
    "#969e8e",
    "#83958b",
    "#a3a793",
    "#7d8d82",
    "#b1ad95",
  ];
  for (let i = 0; i < 40; i++) {
    let a = bridgeX - span + i * 0.3,
      b = a + 0.3,
      u = under(a),
      v = under(b);
    stone(
      a,
      b,
      u,
      v,
      deck(a),
      deck(b),
      bridgeZ - 1.45,
      bridgeZ + 1.45,
      "#76857c",
    );
    for (let sign of [-1, 1]) {
      let z = bridgeZ + sign * 1.46;
      let mx = a + 0.012,
        my = b - 0.012;
      for (let j = 0; j < 2; j++) {
        let l = j / 2,
          h = (j + 1) / 2;
        stone(
          mx,
          my,
          T.MathUtils.lerp(u, deck(a), l) + 0.014,
          T.MathUtils.lerp(v, deck(b), l) + 0.014,
          T.MathUtils.lerp(u, deck(a), h) - 0.01,
          T.MathUtils.lerp(v, deck(b), h) - 0.01,
          z - 0.028,
          z + 0.028,
          shades[(i * 7 + j * 3) % 6],
        );
      }
    }
    stone(
      a + 0.008,
      b - 0.008,
      deck(a),
      deck(b),
      deck(a) + 0.075,
      deck(b) + 0.075,
      bridgeZ - 1.53,
      bridgeZ + 1.53,
      i % 4 ? "#c6bda4" : "#b3b099",
    );
  }
  // Radial voussoirs make the opening readable from both banks.
  for (let sign of [-1, 1]) {
    let z = bridgeZ + sign * 1.5;
    for (let i = 0; i < 29; i++) {
      let a = (Math.PI * i) / 29 + 0.002,
        b = (Math.PI * (i + 1)) / 29 - 0.002;
      const at = (t, rx, ry) => [
        bridgeX + Math.cos(t) * rx,
        0.035 + Math.sin(t) * ry,
        z,
      ];
      quad(
        at(a, 4.53, 1.98),
        at(b, 4.53, 1.98),
        at(b, 4.84, 2.26),
        at(a, 4.84, 2.26),
        shades[(i * 5 + 1) % 6],
      );
    }
    for (let i = 0; i < 20; i++) {
      let a = bridgeX - span + i * 0.6,
        b = a + 0.6;
      stone(
        a + 0.009,
        b - 0.009,
        deck(a) + 0.07,
        deck(b) + 0.07,
        deck(a) + 0.39,
        deck(b) + 0.39,
        z - 0.115,
        z + 0.115,
        shades[(i * 7) % 6],
      );
      stone(
        a,
        b,
        deck(a) + 0.39,
        deck(b) + 0.39,
        deck(a) + 0.49,
        deck(b) + 0.49,
        z - 0.17,
        z + 0.17,
        "#bcb8a2",
      );
    }
    for (let i = 0; i <= 6; i++) {
      let a = bridgeX - span + 0.15 + i * 1.95;
      stone(
        a - 0.13,
        a + 0.13,
        deck(a) + 0.1,
        deck(a) + 0.1,
        deck(a) + 0.76,
        deck(a) + 0.76,
        z - 0.17,
        z + 0.17,
        "#a4a998",
      );
      stone(
        a - 0.16,
        a + 0.16,
        deck(a) + 0.76,
        deck(a) + 0.76,
        deck(a) + 0.84,
        deck(a) + 0.84,
        z - 0.2,
        z + 0.2,
        "#c6c2aa",
      );
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new T.Float32BufferAttribute(colors, 3));
  g.computeVertexNormals();
  const m = new T.Mesh(
    g,
    new T.MeshStandardMaterial({
      vertexColors: true,
      side: T.DoubleSide,
      roughness: 1,
    }),
  );
  m.castShadow = m.receiveShadow = true;
  scene.add(m);
  return m;
}
export function meadow(scene, rand) {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const p = c.getContext("2d");
  p.fillStyle = "#99b270";
  p.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 1250; i++) {
    let x = rand() * 512,
      y = rand() * 512,
      rr = 4 + rand() * 34;
    p.fillStyle = ["#6b99571a", "#c9d78027", "#7fa96329", "#c1c98520"][i % 4];
    p.beginPath();
    p.ellipse(x, y, rr, rr * 0.58, rand() * 2, 0, Math.PI * 2);
    p.fill();
  }
  for (let i = 0; i < 12800; i++) {
    let x = rand() * 512,
      y = rand() * 512;
    p.strokeStyle = i % 3 ? "#638f551e" : "#d8df9a50";
    p.lineWidth = 0.7 + rand();
    p.beginPath();
    p.moveTo(x, y);
    p.quadraticCurveTo(x - 1, y - 2, x + rand() * 4 - 1, y - 2 - rand() * 4);
    p.stroke();
  }
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  tex.wrapS = tex.wrapT = T.RepeatWrapping;
  tex.repeat.set(23, 20);
  const plane = new T.Mesh(
    new T.PlaneGeometry(300, 260),
    new T.MeshStandardMaterial({ map: tex, roughness: 1 }),
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -0.049;
  plane.receiveShadow = true;
  scene.add(plane);
}
export function dressVillage({
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
}) {
  const green = ["#47794d", "#63944c", "#82a850", "#99b568"];
  function bouquet(
    x,
    z,
    count,
    colors = ["#ec8c83", "#e7a1a6", "#f7c3a0"],
    size = 1,
  ) {
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2,
        rr = Math.sqrt(rand()) * 0.65 * size,
        bx = x + Math.cos(a) * rr,
        bz = z + Math.sin(a) * rr,
        h = (0.27 + rand() * 0.56) * size,
        dx = (rand() - 0.5) * 0.18;
      beam([bx, 0.035, bz], [bx + dx, h, bz], 0.025 * size, pick(green));
      for (let j = 0; j < 2; j++) {
        let side = j ? 1 : -1;
        shape(
          ball,
          bx + side * 0.075,
          h * (0.35 + j * 0.2),
          bz,
          0.15 * size,
          0.039 * size,
          0.066 * size,
          pick(green),
          0,
          rand() * 2,
          side * 0.52,
        );
      }
      let col = pick(colors),
        r = (0.09 + rand() * 0.055) * size;
      for (let j = 0; j < 5; j++) {
        let b = j * 1.256 + a;
        shape(
          ball,
          bx + dx + Math.cos(b) * r * 0.6,
          h,
          bz + Math.sin(b) * r * 0.6,
          r * 0.7,
          r * 0.42,
          r * 0.69,
          col,
          0,
          b,
        );
      }
      shape(
        ball,
        bx + dx,
        h + 0.023,
        bz,
        r * 0.37,
        r * 0.38,
        r * 0.35,
        "#e3ad45",
      );
    }
  }
  const cream = ["#faf2d5", "#f7e3ae", "#fff6db"],
    rose = ["#df7782", "#ee9c95", "#edb2ac"],
    gold = ["#edbb4e", "#f4ce72", "#efaa50"];
  for (let [x, z, n, c] of [
    [-8, 1.3, 25, cream],
    [-6.8, 1.4, 24, rose],
    [-5.4, 1.55, 20, cream],
    [2.7, -0.1, 20, rose],
    [5.6, -0.1, 26, cream],
    [-8.9, 7, 22, gold],
    [-9, 9, 24, cream],
    [-6.8, 11, 30, rose],
    [-4.7, 11.2, 27, gold],
    [7.7, -1.4, 20, rose],
  ])
    bouquet(x, z, n, c, 1);
  for (let i = 0; i < 120; i++) {
    let z = rand() * 32 - 13,
      s = i % 2 ? 1 : -1,
      x = riverX(z) + s * (3.7 + rand() * 0.6);
    if (Math.abs(z - bridgeZ) < 2) continue;
    for (let j = 0; j < 4; j++) {
      let h = 0.28 + rand() * 0.66;
      shape(
        cone,
        x + rand() * 0.22,
        h / 2,
        z + rand() * 0.22,
        0.039,
        h,
        0.046,
        pick(green),
        0.18,
        0,
        (rand() - 0.5) * 0.72,
      );
    }
    if (i % 8 === 0) bouquet(x, z, 4, cream, 0.75);
  }
  // Bamboo drying pole with strings of peppers and maize outside the kitchen.
  for (let x of [-8.5, -6.5])
    beam([x, 0.03, -1.1], [x, 2.12, -1.1], 0.075, "#a5895a");
  beam([-8.65, 2.08, -1.1], [-6.35, 2.08, -1.1], 0.063, "#b79561");
  for (let j = 0; j < 7; j++) {
    let x = -8.32 + j * 0.24;
    beam([x, 2.08, -1.1], [x, 1.5, -1.1], 0.014, "#a28b68");
    for (let k = 0; k < 5; k++)
      shape(
        cone,
        x + Math.sin(k) * 0.055,
        1.93 - k * 0.092,
        -1.04,
        0.075,
        0.185,
        0.065,
        j % 3 ? "#af513a" : "#dbb353",
        0.22,
        k,
        Math.PI + 0.35 * Math.cos(k),
      );
  }
  // Old roadster, with wire spokes, mudguards and an ochre wicker basket.
  const wheel = new T.TorusGeometry(1, 0.052, 6, 26),
    bx = -4.9,
    bz = -0.12;
  for (let xx of [bx - 0.46, bx + 0.46]) {
    shape(wheel, xx, 0.407, bz, 0.38, 0.38, 0.38, "#484b43");
    for (let k = 0; k < 8; k++) {
      let a = (k * Math.PI) / 8;
      beam(
        [xx - 0.35 * Math.cos(a), 0.407 - 0.35 * Math.sin(a), bz],
        [xx + 0.35 * Math.cos(a), 0.407 + 0.35 * Math.sin(a), bz],
        0.012,
        "#afafa0",
      );
    }
  }
  const axle = [bx, 0.4, bz],
    seat = [bx - 0.18, 0.98, bz],
    fork = [bx + 0.28, 1, bz];
  for (let [a, b] of [
    [[bx - 0.46, 0.41, bz], axle],
    [axle, seat],
    [seat, [bx - 0.46, 0.41, bz]],
    [seat, fork],
    [fork, axle],
    [fork, [bx + 0.46, 0.41, bz]],
  ])
    beam(a, b, 0.046, "#47695d");
  oval(bx - 0.18, 1.02, bz, 0.16, 0.044, 0.1, "#6b5345");
  beam(fork, [bx + 0.31, 1.18, bz - 0.12], 0.034, "#93968a");
  shape(cyl, bx + 0.5, 0.94, bz, 0.145, 0.21, 0.15, "#b59261");
  for (let i = 0; i < 3; i++) {
    let x = -7.6 + i * 0.53;
    shape(cyl, x, 0.25, -0.24, 0.23, 0.45, 0.23, "#b0825b");
    oval(x, 0.47, -0.24, 0.22, 0.042, 0.22, "#604d36");
  }
  // A willow drapes over the upstream shore, leaving the bridge silhouette clear.
  function willow(x, z) {
    beam([x, 0, z], [x - 0.3, 3.7, z], 0.4, "#766b4d");
    for (let i = 0; i < 14; i++) {
      let a = i * 2.4,
        dx = Math.cos(a) * (1.2 + rand() * 0.85),
        dz = Math.sin(a) * 1.8,
        y = 3.7 + rand();
      beam([x - 0.25, 2.8, z], [x + dx, y, z + dz], 0.13, "#7c7352");
      oval(x + dx * 0.72, y, z + dz * 0.72, 1.18, 0.57, 0.98, pick(green));
      for (let k = 0; k < 4; k++) {
        let ex = x + dx + (rand() - 0.5) * 0.8,
          ez = z + dz + (rand() - 0.5) * 0.7,
          drop = 1.2 + rand() * 1.5;
        beam([ex, y, ez], [ex + 0.16, y - drop, ez + 0.1], 0.024, "#829752");
        for (let l = 0; l < 7; l++)
          shape(
            ball,
            ex + l * 0.023,
            y - (drop * l) / 7,
            ez + 0.015 * l,
            0.14,
            0.19,
            0.055,
            pick(green),
            0,
            a,
            0.48,
          );
      }
    }
  }
  willow(bridgeX - 5.6, bridgeZ - 3.7);
  willow(bridgeX + 5.9, bridgeZ + 6.6);
  for (let road of roads) strip(road, 2.45, "#dbc795", 0.054);
  // Raised paddies with irrigation channels, grain heads and straw stacks.
  for (let v = 0; v < 2; v++)
    for (let j = 0; j < 3; j++) {
      let x = -71 + j * 9,
        z = 16 + v * 19;
      box(x, 0.09, z, 8, 0.2, 9, "#899862");
      box(x, 0.202, z, 7.4, 0.018, 8.4, "#a6ad6f");
      for (let row = 0; row < 10; row++)
        for (let k = 0; k < 10; k++) {
          let xx = x - 3.3 + row * 0.74,
            zz = z - 3.9 + k * 0.85,
            tilt = rand() * 0.35;
          shape(cone, xx, 0.53, zz, 0.16, 0.66, 0.14, "#a6b655", 0, 0, tilt);
          shape(
            ball,
            xx - 0.1,
            0.82,
            zz,
            0.17,
            0.072,
            0.08,
            pick(["#d7b653", "#e5c367", "#d0ad50"]),
            0,
            rand(),
            -0.45,
          );
        }
    }
  for (let i = 0; i < 4; i++) {
    let x = -58 + i * 1.45;
    shape(cyl, x, 0.57, 32, 0.66, 1.1, 0.64, "#c9a254");
    shape(cone, x, 1.32, 32, 0.79, 0.6, 0.77, "#d7b465");
    shape(cyl, x, 0.68, 32, 0.67, 0.055, 0.65, "#937c48");
  }
  for (let i = 0; i < 160; i++) {
    let x = -72 + rand() * 25,
      z = -42 + rand() * 19;
    if (Math.abs(z - (x + 60) * 0.55 + 34) < 2.1) continue;
    let h = 4 + rand() * 4;
    shape(cyl, x, h * 0.5, z, 0.1, h, 0.1, "#729758");
    for (let j = 1; j < 6; j++) {
      let a = j * 2.4 + i;
      shape(cyl, x, (j * h) / 6, z, 0.112, 0.038, 0.112, "#c0c78b");
      let ex = x + Math.cos(a) * 0.59,
        ez = z + Math.sin(a) * 0.59;
      beam([x, (h * j) / 6, z], [ex, (h * j) / 6 + 0.39, ez], 0.027, "#6a8f50");
      shape(
        ball,
        ex,
        (h * j) / 6 + 0.42,
        ez,
        0.55,
        0.1,
        0.18,
        pick(green),
        0,
        -a,
        0.3,
      );
    }
  }
  house(62, 12, 5.2, 3.9);
  house(71, 17, 4.4, 3.5);
  house(54, 11, 4.8, 3.7);
  for (let j = 0; j < 3; j++) {
    let x = 58 + j * 4.2,
      z = 22;
    box(x, 0.82, z, 2.8, 0.15, 1.2, "#a08058");
    for (let a of [-1, 1])
      for (let b of [-1, 1])
        box(x + a * 1.2, 1.25, z + b * 0.5, 0.085, 2.5, 0.085, "#816e4e");
    for (let i = 0; i < 7; i++)
      box(
        x - 1.3 + i * 0.43,
        2.54,
        z,
        0.435,
        0.08,
        1.8,
        i % 2 ? "#eddab2" : ["#ad6a51", "#779386", "#898daa"][j],
        0.09,
      );
    for (let k = 0; k < 16; k++)
      oval(
        x + ((k % 6) - 2.5) * 0.32,
        0.98 + Math.floor(k / 12) * 0.18,
        z + ((Math.floor(k / 6) % 2) - 0.5) * 0.35,
        0.16,
        0.14,
        0.16,
        ["#d89b49", "#9bb466", "#cd8465"][j],
      );
  }
  site("rice", "禾场晒谷", -56, 28, 1);
  site("bamboo", "竹匠歇脚处", -60, -33, 1);
  site("shop", "东门山货摊", 62, 20.8, 2);
}

// Layer painted leaf sprays on branching volumes. Their cut-out silhouettes stay crisp
// at the edge of a crown while the solid branches still cast shadows on the lane.
export function canopyMaterial() {
  let c = document.createElement("canvas");
  c.width = c.height = 192;
  let p = c.getContext("2d");
  let seed = 127;
  const rnd = () =>
    (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296;
  function dab(x, y, rx, ry, tilt, color) {
    p.fillStyle = color;
    p.beginPath();
    p.ellipse(x, y, rx, ry, tilt, 0, Math.PI * 2);
    p.fill();
  }
  let clusters = [];
  for (let i = 0; i < 42; i++) {
    let a = rnd() * 6.28,
      r = Math.sqrt(rnd());
    clusters.push([
      96 + Math.cos(a) * r * 63,
      98 + Math.sin(a) * r * 55,
      12 + rnd() * 13,
    ]);
  }
  clusters.sort((a, b) => b[1] - a[1]);
  for (let [x, y, s] of clusters) {
    let l = 68 + (136 - y) * 0.21 + rnd() * 5;
    dab(x, y, s, s * 0.82, -0.3, "hsl(76 18% " + l + "%)");
    for (let i = 0; i < 68; i++) {
      let t = rnd() * 6.28,
        r = Math.sqrt(rnd());
      let lx = Math.cos(t) * r * s,
        ly = Math.sin(t) * r * s * 0.83;
      let L = l + (1 - ly / s) * 6 + rnd() * 10;
      dab(
        x + lx,
        y + ly,
        2.1 + rnd() * 3.7,
        1.4 + rnd() * 2.1,
        -0.55 + rnd() * 0.6,
        "hsl(70 22% " + Math.min(96, L) + "%)",
      );
    }
  }
  const tex = new T.CanvasTexture(c);
  tex.colorSpace = T.SRGBColorSpace;
  return new T.MeshLambertMaterial({
    emissive: 0x203018,
    emissiveIntensity: 0.43,
    map: tex,
    alphaTest: 0.46,
    side: T.DoubleSide,
    vertexColors: true,
  });
}
export function streamSurface(scene) {
  const pos = [],
    cols = [],
    palette = [
      "#aec5a5",
      "#87b8a5",
      "#67a9a0",
      "#4c9995",
      "#499796",
      "#65a69d",
      "#88b8a6",
      "#adc5a4",
    ];
  for (let z = -90; z < 90; z += 0.8) {
    const row = (zz, i) => [riverX(zz) - 3.96 + (i * 7.92) / 7, 0.027, zz];
    for (let i = 0; i < 7; i++) {
      for (let [zz, k] of [
        [z, i],
        [z + 0.8, i],
        [z + 0.8, i + 1],
        [z, i],
        [z + 0.8, i + 1],
        [z, i + 1],
      ]) {
        pos.push(...row(zz, k));
        const col = new T.Color(palette[k]).multiplyScalar(
          0.99 + 0.025 * Math.sin(zz * 1.4 + k * 0.5),
        );
        cols.push(col.r, col.g, col.b);
      }
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new T.Float32BufferAttribute(cols, 3));
  g.computeVertexNormals();
  let m = new T.Mesh(
    g,
    new T.MeshStandardMaterial({ vertexColors: true, roughness: 0.78 }),
  );
  m.receiveShadow = true;
  const clock = { value: 0 };
  m.material.onBeforeCompile = (shader) => {
    shader.uniforms.streamTime = clock;
    shader.vertexShader =
      "varying vec2 streamPos;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nstreamPos=position.xz;",
      );
    shader.fragmentShader =
      "uniform float streamTime; varying vec2 streamPos;\n" +
      shader.fragmentShader.replace(
        "#include <color_fragment>",
        `#include <color_fragment>
      vec2 p=streamPos;
      float swell=sin(p.y*3.5-streamTime*.9+1.6*sin(p.x*1.7+p.y*.4));
      float curl=sin(p.y*9.0+p.x*1.6-streamTime*1.85+.8*sin(p.x*3.0+streamTime*.25));
      float lightBand=smoothstep(.88,1.0,curl)*smoothstep(.15,.85,swell);
      diffuseColor.rgb=diffuseColor.rgb*(.975+.045*swell)+vec3(.11,.15,.13)*lightBand;`,
      );
  };
  scene.add(m);
  return (time) => {
    clock.value = time;
  };
}
