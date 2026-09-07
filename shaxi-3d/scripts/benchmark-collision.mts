import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { buildWorld } from '../lib/shaxi/world.ts';
import { createTownLife } from '../lib/shaxi/town-life.ts';
import {
  indexObstacles,
  nearbyObstacles,
} from '../lib/shaxi/obstacle-index.ts';
import {
  createBody,
  stepBody,
  type Obstacle,
} from '../lib/shaxi/navigation.ts';
Object.defineProperty(globalThis, 'document', {
  value: {
    createElement: () => ({
      width: 256,
      height: 256,
      getContext: () => ({ fillRect() {}, strokeRect() {}, fillText() {} }),
    }),
  },
});
const world = buildWorld();
createTownLife(world.interiors, world.obstacles, world.vendors);
const full = world.obstacles.slice();
indexObstacles(world.obstacles);
const samples = Array.from({ length: 6000 }, (_, i) => ({
  x: ((i * 7.131) % 194) - 97,
  z: ((i * 11.271) % 204) - 102,
}));
function run(obstacles: Obstacle[]) {
  const start = performance.now();
  let checksum = 0;
  for (const p of samples) {
    const b = createBody(p.x, p.z);
    stepBody(b, 0.05, -0.02, 1 / 60, obstacles);
    checksum += b.x + b.y + b.z;
  }
  return { ms: performance.now() - start, checksum };
}
run(full);
run(world.obstacles);
const before: number[] = [],
  after: number[] = [];
for (let i = 0; i < 5; i++) {
  const a = run(full),
    b = run(world.obstacles);
  assert.equal(a.checksum, b.checksum);
  before.push(a.ms);
  after.push(b.ms);
}
const median = (a: number[]) => a.sort((x, y) => x - y)[2];
console.log(
  JSON.stringify(
    {
      scope: '实际古镇 6000 次碰撞步进，5 轮中位数；不代表浏览器帧率',
      fullMs: +median(before).toFixed(2),
      indexedMs: +median(after).toFixed(2),
      obstacles: full.length,
      averageCandidates: +(
        samples.reduce(
          (sum, p) => sum + nearbyObstacles(world.obstacles, p.x, p.z).length,
          0,
        ) / samples.length
      ).toFixed(1),
      identicalResults: true,
    },
    null,
    2,
  ),
);
