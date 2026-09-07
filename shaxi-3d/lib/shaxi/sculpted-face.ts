import * as T from 'three';
const bump = (
  x: number,
  y: number,
  cx: number,
  cy: number,
  sx: number,
  sy: number,
) => Math.exp(-(((x - cx) / sx) ** 2) - ((y - cy) / sy) ** 2);
function front(x: number, y: number) {
  const jaw = 0.79 + 0.21 * T.MathUtils.smoothstep(y, -0.2, 0.03),
    rx = 0.16 * jaw;
  return (
    0.145 * Math.sqrt(Math.max(0, 1 - (x / rx) ** 2 - (y / 0.235) ** 2)) +
    0.035 * bump(x, y, 0, 0.012, 0.017, 0.073) +
    0.036 * bump(x, y, 0, -0.033, 0.023, 0.023) +
    0.013 *
      (bump(x, y, -0.08, -0.037, 0.048, 0.042) +
        bump(x, y, 0.08, -0.037, 0.048, 0.042)) -
    0.012 *
      (bump(x, y, -0.065, 0.046, 0.036, 0.024) +
        bump(x, y, 0.065, 0.046, 0.036, 0.024))
  );
}
export function createSculptedFace() {
  const root = new T.Group();
  root.name = '立体五官';
  const skin = new T.MeshPhysicalMaterial({
    color: '#ecc2ac',
    roughness: 0.62,
    sheen: 0.24,
    sheenColor: new T.Color('#edbca8'),
    vertexColors: true,
  });
  skin.name = '肌肤';
  const head = new T.SphereGeometry(1, 96, 80),
    p = head.getAttribute('position'),
    colors: number[] = [];
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) * 0.235,
      x =
        p.getX(i) *
        0.16 *
        (0.79 + 0.21 * T.MathUtils.smoothstep(y, -0.2, 0.03)),
      back = p.getZ(i) < 0;
    p.setXYZ(i, x, y, back ? p.getZ(i) * 0.14 : front(x, y));
    const blush = back
      ? 0
      : (bump(x, y, -0.083, -0.04, 0.038, 0.025) +
          bump(x, y, 0.083, -0.04, 0.038, 0.025)) *
        0.09;
    colors.push(1, 1 - blush * 0.8, 1 - blush);
  }
  head.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  head.computeVertexNormals();
  root.add(new T.Mesh(head, skin));
  const dark = new T.MeshStandardMaterial({
      color: '#38251e',
      roughness: 0.75,
    }),
    lip = new T.MeshPhysicalMaterial({ color: '#b8756b', roughness: 0.55 }),
    white = new T.MeshPhysicalMaterial({ color: '#e6ded3', roughness: 0.3 }),
    iris = new T.MeshPhysicalMaterial({
      color: '#503225',
      roughness: 0.2,
      clearcoat: 1,
    }),
    black = new T.MeshBasicMaterial({ color: '#160f0d' });
  function line(points: T.Vector3[], radius: number, material: T.Material) {
    const m = new T.Mesh(
      new T.TubeGeometry(new T.CatmullRomCurve3(points), 24, radius, 5, false),
      material,
    );
    root.add(m);
    return m;
  }
  for (const side of [-1, 1]) {
    const cx = side * 0.064,
      cy = 0.047,
      points: number[] = [],
      indices: number[] = [];
    for (let i = 0; i <= 32; i++) {
      const u = (i / 32) * 2 - 1,
        x = cx + u * 0.034,
        ey = 0.013 * Math.sqrt(Math.max(0, 1 - u * u));
      for (const sign of [-1, 1]) {
        const y = cy + sign * ey + side * u * 0.002;
        points.push(x, y, front(x, y) + 0.003);
      }
      if (i < 32) {
        const k = i * 2;
        indices.push(k, k + 2, k + 1, k + 1, k + 2, k + 3);
      }
    }
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(points, 3));
    g.setIndex(indices);
    g.computeVertexNormals();
    const sclera = new T.Mesh(g, white);
    sclera.material.side = T.DoubleSide;
    root.add(sclera);
    for (const [radius, depth, material] of [
      [0.0105, 0.005, iris],
      [0.0048, 0.0065, black],
    ] as const) {
      const eye = new T.Mesh(new T.SphereGeometry(1, 24, 16), material);
      eye.scale.set(radius, radius, depth);
      eye.position.set(cx, cy, front(cx, cy) + 0.006);
      root.add(eye);
    }
    const glint = new T.Mesh(
      new T.SphereGeometry(0.0019, 10, 8),
      new T.MeshBasicMaterial({ color: '#fff6e4' }),
    );
    glint.position.set(cx - 0.003, cy + 0.004, front(cx, cy) + 0.013);
    root.add(glint);
    const upper: T.Vector3[] = [],
      lower: T.Vector3[] = [];
    for (let i = 0; i <= 16; i++) {
      const u = (i / 16) * 2 - 1,
        x = cx + u * 0.034,
        dy = 0.013 * Math.sqrt(Math.max(0, 1 - u * u));
      upper.push(new T.Vector3(x, cy + dy, front(x, cy + dy) + 0.004));
      lower.push(new T.Vector3(x, cy - dy, front(x, cy - dy) + 0.003));
    }
    line(upper, 0.0014, dark);
    line(lower, 0.0008, lip);
    for (let i = 0; i < 13; i++) {
      const u = i / 12,
        x = cx - 0.037 + u * 0.074,
        y = 0.086 + 0.012 * Math.sin(u * Math.PI) + side * (u - 0.5) * 0.005;
      line(
        [
          new T.Vector3(x, y, front(x, y) + 0.002),
          new T.Vector3(
            x + 0.003,
            y + 0.003,
            front(x + 0.003, y + 0.003) + 0.003,
          ),
        ],
        0.0011,
        dark,
      );
    }
  }
  for (const side of [-1, 1]) {
    const points: T.Vector3[] = [];
    for (let i = 0; i <= 24; i++) {
      const x = -0.038 + (i / 24) * 0.076,
        shape = Math.max(0, 1 - (x / 0.038) ** 2),
        y =
          -0.111 +
          side * 0.009 * shape +
          (side > 0 ? -0.003 * bump(x, 0, 0, 0, 0.01, 1) : 0);
      points.push(new T.Vector3(x, y, front(x, y) + 0.007 * shape));
    }
    line(points, side > 0 ? 0.0035 : 0.0045, lip);
  }
  root.traverse((o) => {
    if (o instanceof T.Mesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return root;
}
