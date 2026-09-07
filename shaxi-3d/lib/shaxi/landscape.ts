import * as T from 'three';
// Continuous eroded ridges, with shared vertices and elevation-dependent colours.
export function createMountains() {
  const root = new T.Group();
  root.name = '连绵山脊';
  for (let layer = 0; layer < 3; layer++) {
    const segments = 180,
      rows = 36,
      positions: number[] = [],
      colors: number[] = [],
      indices: number[] = [];
    for (let r = 0; r <= rows; r++)
      for (let i = 0; i <= segments; i++) {
        const x = -280 + (i / segments) * 560,
          t = r / rows;
        const ridge =
          24 +
          layer * 9 +
          14 * Math.sin(x * 0.018 + layer) +
          8 * Math.sin(x * 0.043 + layer * 2) +
          3.5 * Math.sin(x * 0.113) +
          1.8 * Math.sin(x * 0.27);
        const y =
          -3 +
          Math.sin(Math.PI * t) * ridge +
          Math.sin(x * 0.08 + t * 13) * 2 * Math.sin(Math.PI * t);
        positions.push(x, y, -118 - layer * 50 - t * 70);
        const c = new T.Color().setHSL(
          0.29 - layer * 0.015,
          0.34 - layer * 0.055,
          0.27 +
            layer * 0.075 +
            y * 0.0009 +
            Math.sin(x * 0.19 + t * 42) * 0.018,
        );
        colors.push(c.r, c.g, c.b);
        if (r < rows && i < segments) {
          const a = r * (segments + 1) + i;
          indices.push(
            a,
            a + segments + 1,
            a + 1,
            a + 1,
            a + segments + 1,
            a + segments + 2,
          );
        }
      }
    const geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
    geo.setAttribute(
      'uv',
      new T.Float32BufferAttribute(
        positions.flatMap((_, i) =>
          i % 3 === 0 ? [positions[i] * 0.04, positions[i + 2] * 0.04] : [],
        ),
        2,
      ),
    );
    geo.setIndex(indices);
    geo.computeVertexNormals();
    root.add(
      new T.Mesh(
        geo,
        new T.MeshStandardMaterial({
          vertexColors: true,
          roughness: 1,
          side: T.DoubleSide,
        }),
      ),
    );
  }
  return root;
}
