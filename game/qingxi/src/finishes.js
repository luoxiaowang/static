import * as T from "three";

function painted(w, h, paint) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  let seed = 9823;
  const random = () =>
    (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296;
  paint(canvas.getContext("2d"), random);
  const t = new T.CanvasTexture(canvas);
  t.colorSpace = T.SRGBColorSpace;
  return t;
}
export function cottageFinish() {
  const t = painted(512, 256, (c, r) => {
    c.fillStyle = "#f1ead7";
    c.fillRect(0, 0, 512, 256);
    const wash = c.createLinearGradient(0, 0, 0, 256);
    wash.addColorStop(0, "#998a664d");
    wash.addColorStop(0.32, "#faf2e505");
    wash.addColorStop(0.78, "#f5f0de08");
    wash.addColorStop(1, "#8c846841");
    c.fillStyle = wash;
    c.fillRect(0, 0, 512, 256);
    for (let i = 0; i < 2600; i++) {
      c.fillStyle = i % 2 ? "#aea18318" : "#faf6e333";
      c.fillRect(r() * 512, r() * 256, 1 + r() * 9, 1 + r() * 3);
    }
    c.fillStyle = "#817e6f";
    c.fillRect(0, 222, 512, 34);
    for (let j = 0; j < 3; j++)
      for (let i = -1; i < 19; i++) {
        let k = Math.round(r() * 17);
        c.fillStyle =
          "rgb(" + (133 + k) + "," + (133 + k) + "," + (116 + k) + ")";
        c.fillRect(i * 32 + (j % 2) * 16, 223 + j * 12, 31, 11);
      }
  });
  const wall = new T.MeshLambertMaterial({ map: t });
  const trim = painted(288, 96, (c) => {
    c.fillStyle = "#514033";
    c.fillRect(0, 0, 288, 96);
    c.strokeStyle = "#bc9e67";
    c.lineWidth = 3;
    c.strokeRect(7, 7, 274, 82);
    c.fillStyle = "#e7cf9b";
    c.font = 'bold 62px "Songti SC",serif';
    c.textAlign = "center";
    c.fillText("林 家 宅", 144, 68);
  });
  const sign = new T.MeshLambertMaterial({ map: trim });
  return (scene, x, z, w, d, isHome) => {
    for (const side of [0, 1, 2, 3]) {
      const front = side % 2 === 0;
      const mesh = new T.Mesh(new T.PlaneGeometry(front ? w : d, 3.32), wall);
      mesh.rotation.y = (side * Math.PI) / 2;
      mesh.position.set(
        x + Math.sin(mesh.rotation.y) * (w / 2 + 0.008),
        1.975,
        z + Math.cos(mesh.rotation.y) * (d / 2 + 0.008),
      );
      mesh.receiveShadow = true;
      scene.add(mesh);
    }
    if (isHome) {
      const plaque = new T.Mesh(new T.PlaneGeometry(1.34, 0.43), sign);
      plaque.position.set(x, 2.97, z + d / 2 + 0.17);
      scene.add(plaque);
    }
  };
}
// A soft pool of lantern light at the threshold, shared by all cottages.
export function lanternPool() {
  const t = painted(96, 96, (c) => {
    const g = c.createRadialGradient(48, 48, 2, 48, 48, 47);
    g.addColorStop(0, "#ffd295b0");
    g.addColorStop(0.45, "#f5bd6c50");
    g.addColorStop(1, "#eeb26a00");
    c.fillStyle = g;
    c.fillRect(0, 0, 96, 96);
  });
  return new T.MeshBasicMaterial({
    map: t,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    opacity: 0,
  });
}
export function laneMaterial() {
  const tex = painted(256, 384, (c, r) => {
    c.fillStyle = "#dfc898";
    c.fillRect(0, 0, 256, 384);
    for (let i = 0; i < 7000; i++) {
      let x = r() * 256,
        y = r() * 384;
      c.fillStyle = i % 2 ? "#987e5924" : "#fff1c739";
      c.fillRect(x, y, 0.8 + r() * 3.1, 0.6 + r() * 2);
    }
    for (let i = 0; i < 420; i++) {
      let x = r() * 256,
        y = r() * 384;
      c.fillStyle = ["#ae9f79", "#c6b68d", "#decea5"][i % 3];
      c.beginPath();
      c.ellipse(x, y, 1 + r() * 2.4, 0.7 + r() * 1.4, r() * 3, 0, 7);
      c.fill();
    }
    c.globalCompositeOperation = "destination-out";
    for (let y = 0; y < 384; y++) {
      const v = 4 + 3 * Math.sin((y * Math.PI) / 64) + r() * 3;
      for (const right of [false, true]) {
        let x = right ? 256 - v : v;
        c.fillStyle = "#000";
        c.fillRect(right ? x : 0, y, v, 1);
        for (let k = 0; k < 6; k++) {
          c.fillStyle = "rgba(0,0,0," + (0.87 - k * 0.12) + ")";
          c.fillRect(right ? x - k : x + k, y, 1, 1);
        }
      }
    }
  });
  tex.wrapT = T.RepeatWrapping;
  return new T.MeshLambertMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    side: T.DoubleSide,
  });
}
export function lane(scene, points, width, height, material) {
  if (points.length < 2) return;
  let positions = [],
    uv = [],
    indices = [],
    length = 0;
  for (let i = 0; i < points.length; i++) {
    const [x, z] = points[i],
      a = points[Math.max(0, i - 1)],
      b = points[Math.min(points.length - 1, i + 1)],
      angle = Math.atan2(b[1] - a[1], b[0] - a[0]),
      nx = -Math.sin(angle) * width * 0.5,
      nz = Math.cos(angle) * width * 0.5;
    if (i) length += Math.hypot(x - a[0], z - a[1]);
    positions.push(x + nx, height, z + nz, x - nx, height, z - nz);
    uv.push(0, length / 4.6, 1, length / 4.6);
    if (i) {
      let k = i * 2;
      indices.push(k - 2, k, k - 1, k, k + 1, k - 1);
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
  g.setAttribute("uv", new T.Float32BufferAttribute(uv, 2));
  g.setIndex(indices);
  g.computeVertexNormals();
  const m = new T.Mesh(g, material);
  m.receiveShadow = true;
  m.renderOrder = -1;
  scene.add(m);
}
