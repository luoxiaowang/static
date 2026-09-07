import type { Obstacle } from './navigation.ts';

// Only explicitly registered, completed static worlds are indexed. Mutable test
// fixtures and callers that have not finished construction retain the full scan.
const indexes = new WeakMap<
  Obstacle[],
  { size: number; cells: Map<string, Obstacle[]> }
>();
const cellSize = 8;
export function indexObstacles(obstacles: Obstacle[]) {
  const cells = new Map<string, Obstacle[]>();
  for (const o of obstacles) {
    let hx = o.halfX,
      hz = o.halfZ;
    if (o.roof) {
      const c = Math.abs(Math.cos(o.roof.rotation)),
        s = Math.abs(Math.sin(o.roof.rotation));
      const w = (o.roof.width + 1.5) / 2,
        d = o.roof.depth / 2 + 0.7;
      hx = Math.max(hx, c * w + s * d);
      hz = Math.max(hz, s * w + c * d);
    }
    // Include character/camera clearance and roof overhang, including rotated roofs.
    hx += 1;
    hz += 1;
    for (
      let x = Math.floor((o.x - hx) / cellSize);
      x <= Math.floor((o.x + hx) / cellSize);
      x++
    )
      for (
        let z = Math.floor((o.z - hz) / cellSize);
        z <= Math.floor((o.z + hz) / cellSize);
        z++
      ) {
        const key = `${x},${z}`;
        const bucket = cells.get(key);
        if (bucket) bucket.push(o);
        else cells.set(key, [o]);
      }
  }
  indexes.set(obstacles, { size: obstacles.length, cells });
}
export function nearbyObstacles(
  obstacles: Obstacle[],
  x: number,
  z: number,
  dx = 0,
  dz = 0,
  radius = 0.38,
): Obstacle[] {
  const index = indexes.get(obstacles);
  if (!index || index.size !== obstacles.length || radius > 1) return obstacles;
  const minX = Math.floor(Math.min(x, x + dx) / cellSize),
    maxX = Math.floor(Math.max(x, x + dx) / cellSize);
  const minZ = Math.floor(Math.min(z, z + dz) / cellSize),
    maxZ = Math.floor(Math.max(z, z + dz) / cellSize);
  if (minX === maxX && minZ === maxZ)
    return index.cells.get(`${minX},${minZ}`) ?? empty;
  const candidates = new Set<Obstacle>();
  for (let cx = minX; cx <= maxX; cx++)
    for (let cz = minZ; cz <= maxZ; cz++)
      for (const o of index.cells.get(`${cx},${cz}`) ?? empty)
        candidates.add(o);
  // Preserve collision resolution order across cells, particularly stacked ceilings.
  return obstacles.filter((o) => candidates.has(o));
}
const empty: Obstacle[] = [];
