import * as T from 'three';
import data from './face-data.json' with { type: 'json' };
import { getFaceTexture } from './surfaces.ts';

// Image landmarks locate the likeness; canonical face depth supplies continuous
// nose, sockets, lips and cheek geometry. This is an image-based reconstruction,
// not a full multi-view scan. The original image is kept unchanged on disk.
export function createReferenceFace() {
  const eyeY = (data.landmarks[33][1] + data.landmarks[263][1]) / 2;
  const eyeX = (data.landmarks[33][0] + data.landmarks[263][0]) / 2;
  const scale = 0.00046;
  const positions: number[] = [],
    uv: number[] = [];
  data.landmarks.forEach((p) => {
    positions.push(
      (p[0] - eyeX) * data.width * scale,
      (eyeY - p[1]) * data.height * scale + 0.045,
      -p[2] * data.width * scale + 0.1,
    );
    uv.push(p[0], 1 - p[1]);
  });
  const triangles = [...data.triangles];
  // Close the eye and mouth apertures with convex, photo-textured surfaces.
  for (const ring of [
    [
      33, 7, 163, 144, 145, 153, 154, 155, 133, 173, 157, 158, 159, 160, 161,
      246,
    ],
    [
      263, 249, 390, 373, 374, 380, 381, 382, 362, 398, 384, 385, 386, 387, 388,
      466,
    ],
    [
      78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, 415, 310, 311, 312, 13,
      82, 81, 80, 191,
    ],
  ]) {
    const center = positions.length / 3;
    let x = 0,
      y = 0,
      z = 0,
      u = 0,
      v = 0;
    for (const i of ring) {
      x += positions[i * 3];
      y += positions[i * 3 + 1];
      z += positions[i * 3 + 2];
      u += uv[i * 2];
      v += uv[i * 2 + 1];
    }
    positions.push(x / ring.length, y / ring.length, z / ring.length + 0.002);
    uv.push(u / ring.length, v / ring.length);
    for (let j = 0; j < ring.length; j++) {
      const a = ring[j],
        b = ring[(j + 1) % ring.length];
      const cross =
        (positions[a * 3] - x / ring.length) *
          (positions[b * 3 + 1] - y / ring.length) -
        (positions[a * 3 + 1] - y / ring.length) *
          (positions[b * 3] - x / ring.length);
      triangles.push(center, ...(cross > 0 ? [a, b] : [b, a]));
    }
  }
  // Continue the same image-space boundary into a closed head shell. There is
  // no second ellipsoid protruding through the cheeks or chin.
  const outline = [
    10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379,
    378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127,
    162, 21, 54, 103, 67, 109,
  ];
  const back = positions.length / 3;
  for (const i of outline) {
    positions.push(positions[i * 3] * 0.91, positions[i * 3 + 1], -0.115);
    uv.push(uv[i * 2], uv[i * 2 + 1]);
  }
  const center = positions.length / 3;
  positions.push(0, 0, -0.17);
  uv.push(0.47, 0.23);
  for (let j = 0; j < outline.length; j++) {
    const next = (j + 1) % outline.length,
      a = outline[j],
      b = outline[next];
    triangles.push(
      a,
      back + j,
      b,
      b,
      back + j,
      back + next,
      center,
      back + next,
      back + j,
    );
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
  geometry.setIndex(triangles);
  geometry.computeVertexNormals();
  const material = new T.MeshPhysicalMaterial({
    ...(getFaceTexture() ? { map: getFaceTexture() } : {}),
    color: getFaceTexture() ? '#ffffff' : '#e6baa4',
    roughness: 0.82,
    sheen: 0.12,
    sheenColor: new T.Color('#e9b29b'),
    envMapIntensity: 0.6,
    side: T.DoubleSide,
  });
  material.name = '参考图重建面部';
  const face = new T.Mesh(geometry, material);
  face.castShadow = true;
  face.receiveShadow = true;
  face.name = '连续曲面五官';
  return face;
}
