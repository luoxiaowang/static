import test from 'node:test';
import assert from 'node:assert/strict';
import { indexObstacles, nearbyObstacles } from './obstacle-index.ts';
import {
  canWalk,
  createBody,
  jump,
  moveWithCollision,
  stepBody,
  moveAroundPeople,
  type Obstacle,
} from './navigation.ts';

const world: Obstacle[] = [];
for (let x = -90; x <= 90; x += 6)
  for (let z = -96; z <= 96; z += 6)
    world.push({
      x,
      z,
      halfX: 1.5,
      halfZ: 1.2,
      height: 3,
      bottom: (x + z) % 4 ? 0 : 2.5,
      ...((x + z) % 3 === 0
        ? { roof: { width: 4, depth: 5, rotation: Math.PI / 3, base: 3 } }
        : {}),
    });
const full = world.slice();
indexObstacles(world);
void test('空间索引与全量碰撞在边界、门洞、斜屋顶和跨格移动时结果一致', () => {
  let seed = 20260908;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 1500; i++) {
    const x = random() * 210 - 105,
      z = random() * 220 - 110;
    const dx = random() * 5 - 2.5,
      dz = random() * 5 - 2.5;
    assert.equal(canWalk(x, z, world), canWalk(x, z, full));
    assert.equal(canWalk(x, z, world, 1.5), canWalk(x, z, full, 1.5));
    assert.deepEqual(
      moveWithCollision(x, z, dx, dz, world),
      moveWithCollision(x, z, dx, dz, full),
    );
    const a = createBody(x, z);
    a.y = random() * 8;
    jump(a);
    if (i % 2) a.velocityY = -8;
    const b = { ...a };
    for (let frame = 0; frame < 8; frame++) {
      stepBody(a, dx / 8, dz / 8, 0.05, world);
      stepBody(b, dx / 8, dz / 8, 0.05, full);
      assert.deepEqual(a, b);
    }
  }
});
void test('索引只选择邻近障碍物，新增对象后安全退回完整列表', () => {
  assert(nearbyObstacles(world, 0, 0).length < full.length / 20);
  const mutable = full.slice();
  indexObstacles(mutable);
  mutable.push({ x: 1, z: 1, halfX: 2, halfZ: 2 });
  assert.equal(nearbyObstacles(mutable, 0, 0), mutable);
});
void test('复用人物碰撞列表时排除自己，仍阻止穿过其他人物', () => {
  const self = { x: 0, z: 0, y: 0, radius: 0.3, height: 1.95 };
  const other = { ...self, x: 0.8 };
  assert.deepEqual(
    moveAroundPeople(0, 0, 0, 1, 0, [self, other], 0.32, self),
    moveAroundPeople(0, 0, 0, 1, 0, [other]),
  );
});
