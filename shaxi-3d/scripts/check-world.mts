import { indexObstacles } from '../lib/shaxi/obstacle-index.ts';
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import * as T from 'three';
import { createTownLife } from '../lib/shaxi/town-life.ts';
import { mapPlaces } from '../lib/shaxi/map-data.ts';
import { createHeroine } from '../lib/shaxi/heroine.ts';
import { buildWorld, createPerson } from '../lib/shaxi/world.ts';
import {
  canWalk,
  moveWithCollision,
  STOPS,
  BOUNDS,
  createBody,
  stepBody,
  roofHeight,
  jump,
} from '../lib/shaxi/navigation.ts';

// Geometry-only check; the Canvas2D stand-in does not claim to test WebGL rendering.
const context = { fillRect() {}, strokeRect() {}, fillText() {} };
Object.defineProperty(globalThis, 'document', {
  value: {
    createElement: () => ({
      width: 256,
      height: 256,
      getContext: () => context,
    }),
  },
  configurable: true,
});
const start = performance.now();
const world = buildWorld();
let meshes = 0,
  instances = 0,
  vertices = 0;
world.root.traverse((object) => {
  if (!(object instanceof T.Mesh)) return;
  meshes++;
  const position = object.geometry.getAttribute('position');
  vertices += position.count;
  assert.ok(position.count > 0, '几何体不能为空');
  for (let i = 0; i < position.array.length; i++)
    assert.ok(Number.isFinite(position.array[i]), '几何坐标必须是有限值');
  if (object instanceof T.InstancedMesh) {
    instances += object.count;
    for (const value of object.instanceMatrix.array)
      assert.ok(Number.isFinite(value));
  }
});
const life = createTownLife(world.interiors, world.obstacles, world.vendors);
indexObstacles(world.obstacles);
assert.equal(life.dogs.length, 6);
for (const role of [
  '小二',
  '掌柜',
  '食客',
  '房客',
  '买家',
  '摊主',
  '放烟花的街坊',
])
  assert.ok(
    life.cast.some((p) => p.role === role),
    role + '必须实际存在',
  );
for (const room of world.interiors)
  assert.ok(
    canWalk(room.x, room.z, world.obstacles),
    room.name + '新增家具不能堵住传送落点',
  );
for (const stop of STOPS)
  assert.ok(
    canWalk(stop.x, stop.z, world.obstacles),
    `${stop.name}落脚点不能位于障碍内`,
  );
let pos = { x: 0, z: 18 };
for (let i = 0; i < 400; i++)
  pos = moveWithCollision(pos.x, pos.z, 0, -0.1, world.obstacles);
assert.ok(pos.z < -21, '青石巷必须连通广场');
pos = { x: 0, z: -21 };
for (let i = 0; i < 450; i++)
  pos = moveWithCollision(pos.x, pos.z, 0.1, 0, world.obstacles);
assert.ok(pos.x > 44, '广场必须连通石桥和对岸');
// Flood fill actual ground navigation, so new districts must be reachable on foot.
const key = (x: number, z: number) => `${x},${z}`;
const reachable = new Set<string>([key(0, 18)]),
  queue: [[number, number]] = [[0, 18]];
for (let head = 0; head < queue.length; head++) {
  const [x, z] = queue[head];
  for (const [dx, dz] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]) {
    const nx = x + dx,
      nz = z + dz,
      k = key(nx, nz);
    if (
      reachable.has(k) ||
      nx < BOUNDS.minX ||
      nx > BOUNDS.maxX ||
      nz < BOUNDS.minZ ||
      nz > BOUNDS.maxZ
    )
      continue;
    if (
      !canWalk(nx, nz, world.obstacles) ||
      !canWalk(x + dx * 0.5, z + dz * 0.5, world.obstacles)
    )
      continue;
    reachable.add(k);
    queue.push([nx, nz]);
  }
}
for (const stop of STOPS)
  assert.ok(
    reachable.has(key(stop.x, stop.z)),
    `${stop.name}必须可以从起点步行到达`,
  );
let roofsChecked = 0;
for (const obstacle of world.obstacles.filter((o) => o.roof)) {
  const body = createBody(obstacle.x, obstacle.z);
  body.y = 20;
  body.grounded = false;
  for (let i = 0; i < 600; i++) stepBody(body, 0, 0, 1 / 120, world.obstacles);
  assert.ok(body.grounded, '必须落稳屋顶');
  assert.ok(
    body.y >= roofHeight(obstacle, body.x, body.z) - 0.05,
    '不得穿透屋顶',
  );
  roofsChecked++;
}
const ascent = createBody(0, 13.6);
for (let i = 0; i < 750; i++) {
  if (i === 0 || i === 65 || i === 135) jump(ascent);
  stepBody(
    ascent,
    ascent.x > -10.1 ? -6.8 / 120 : 0,
    0,
    1 / 120,
    world.obstacles,
  );
}
assert.ok(
  ascent.x < -9 && ascent.y > 4 && ascent.grounded,
  '必须能从街道通过三段轻功登上真实房屋',
);
for (const room of world.interiors) {
  assert.ok(
    reachable.has(key(Math.round(room.x), Math.round(room.z))),
    room.name + '室内必须步行可达',
  );
  let entered = false;
  for (const side of room.balcony ? [1] : [1, -1]) {
    const offset = room.depth / 2 + 1.5;
    const body = createBody(
      room.x + Math.sin(room.yaw) * offset * side,
      room.z + Math.cos(room.yaw) * offset * side,
    );
    if (!canWalk(body.x, body.z, world.obstacles)) continue;
    for (let i = 0; i < 100; i++) {
      stepBody(
        body,
        -Math.sin(room.yaw) * 0.065 * side,
        -Math.cos(room.yaw) * 0.065 * side,
        1 / 60,
        world.obstacles,
      );
      const local =
        (body.x - room.x) * Math.sin(room.yaw) +
        (body.z - room.z) * Math.cos(room.yaw);
      if (Math.abs(local) < room.depth / 2 - 0.5) entered = true;
    }
    const local =
      (body.x - room.x) * Math.sin(room.yaw) +
      (body.z - room.z) * Math.cos(room.yaw);
    if (Math.abs(local) < room.depth / 2 - 0.5) entered = true;
  }
  assert.ok(entered, room.name + '必须能够穿过门洞');
  if (room.balcony) {
    const body = createBody(room.x, room.z + 5);
    body.y = 12;
    body.grounded = false;
    for (let i = 0; i < 400; i++)
      stepBody(body, 0, 0, 1 / 120, world.obstacles);
    assert.ok(
      body.grounded && Math.abs(body.y - 3.19) < 0.06,
      room.name + '阳台必须可落脚',
    );
  }
}
const heroine = createHeroine();
for (const time of [0, 0.2, 2, 5]) {
  heroine.animate(time, 0.8, time === 2, 1);
  heroine.root.traverse((o) => {
    if (o instanceof T.Mesh) {
      const p = o.geometry.getAttribute('position');
      for (const value of p.array)
        assert.ok(Number.isFinite(value), '人物动画不能产生非法顶点');
    }
  });
}
const scalpCheck = createHeroine();
for (const time of [0, 0.23, 1.1, 2.7]) {
  scalpCheck.startFlip(2);
  scalpCheck.animate(time, 0.8, time > 0, 1, 0.2);
  scalpCheck.root.updateMatrixWorld(true);
  for (const y of [-0.16, 0, 0.15])
    for (const angle of [-0.9, 0, 0.9]) {
      const origin = scalpCheck.head.localToWorld(
        new T.Vector3(Math.sin(angle) * 0.55, y, -Math.cos(angle) * 0.55),
      );
      const target = scalpCheck.head.localToWorld(new T.Vector3(0, y, 0));
      const ray = new T.Raycaster(origin, target.sub(origin).normalize());
      const hit = ray.intersectObject(scalpCheck.head, true)[0];
      assert.ok(hit, '后脑覆盖必须连续');
      const material = (hit.object as T.Mesh).material as T.Material;
      assert.notEqual(
        material.name,
        '肌肤',
        '站立、摆头、翻转时后脑不能露出皮肤',
      );
    }
}
assert.ok(meshes < 250, '合批后绘制对象数量应控制在250以内');
const person = createPerson();
person.animate(2, 1);
assert.equal(person.arms.length, 2);
assert.equal(person.legs.length, 2);
console.log(
  JSON.stringify(
    {
      status: '通过',
      reachableDistricts: STOPS.length,
      roofsChecked,
      interiors: world.interiors.length,
      vendors: world.vendors.length,
      addedCharacters: life.cast.length,
      dogs: life.dogs.length,
      mapPlaces: mapPlaces(world.interiors).length,
      geometryMeshes: meshes,
      instancedObjects: instances,
      baseVertices: vertices,
      obstacles: world.obstacles.length,
      buildMs: Math.round(performance.now() - start),
    },
    null,
    2,
  ),
);
// During every aerial-turn frame the torso stays upright; only heading changes.
const dancer = createHeroine();
for (const stage of [2, 3]) {
  dancer.startFlip(stage);
  let turns = false;
  for (let frame = 0; frame < 65; frame++) {
    dancer.animate(frame / 90, 0, true, 1, 1 / 90);
    const spin = dancer.root.getObjectByName('轻功旋身')!;
    assert.ok(spin, '必须存在独立旋身节点');
    assert.equal(spin.rotation.x, 0, '不能前后翻转');
    assert.equal(spin.rotation.z, 0, '不能侧翻');
    if (Math.abs(spin.rotation.y) > 0.4) turns = true;
  }
  assert.ok(turns, '二三段必须实际产生空中转身');
}
const frontCheck = createHeroine();
frontCheck.root.updateMatrixWorld(true);
for (const [x, y] of [
  [0, -0.04],
  [-0.07, 0.045],
  [0.07, 0.045],
  [0, -0.14],
  [0, 0.09],
]) {
  const origin = frontCheck.head.localToWorld(new T.Vector3(x, y, 0.8));
  const target = frontCheck.head.localToWorld(new T.Vector3(x, y, -0.1));
  const hit = new T.Raycaster(
    origin,
    target.sub(origin).normalize(),
  ).intersectObject(frontCheck.head, true)[0];
  assert.ok(hit, '眼鼻唇前方不能留洞');
  assert.notEqual(
    ((hit.object as T.Mesh).material as T.Material).name,
    '头发',
    '五官不能被发帽遮住',
  );
}
console.log('面部可见性、直立旋身逐帧检查通过');
world.root.updateMatrixWorld(true);
const atticRay = new T.Raycaster(
  new T.Vector3(-6.3, 5.55, 31),
  new T.Vector3(-1, 0, 0),
  0,
  2,
);
assert.ok(
  atticRay.intersectObject(world.root, true).length > 0,
  '屋顶与主体之间应有封闭阁楼墙，不得透空',
);

const places = mapPlaces(world.interiors);
assert.equal(new Set(places.map((p) => p.id)).size, places.length);
for (const place of places)
  assert.ok(
    canWalk(place.x, place.z, world.obstacles),
    place.name + '传送坐标必须通畅',
  );
