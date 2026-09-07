import test from 'node:test';
import assert from 'node:assert/strict';
import * as nav from './navigation.ts';
void test('同一高度的人物阻挡移动，跳过头顶时不被空气墙挡住', () => {
  assert.equal(typeof nav.moveAroundPeople, 'function');
  const people = [{ x: 2, z: 0, y: 0, radius: 0.4, height: 1.8 }];
  const p = nav.moveAroundPeople(0, 0, 0, 5, 0, people);
  assert.ok(p.x < 1.4);
  const high = nav.moveAroundPeople(0, 0, 3, 5, 0, people);
  assert.ok(high.x > 4.9);
});
void test('入口上方的天花不挡步行，室内跳跃不会穿天花', () => {
  const ceiling = { x: 0, z: 0, halfX: 4, halfZ: 4, bottom: 3, height: 3.3 };
  assert.equal(nav.canWalk(0, 0, [ceiling]), true);
  const body = nav.createBody(0, 0);
  nav.jump(body);
  for (let i = 0; i < 80; i++) {
    nav.stepBody(body, 0, 0, 1 / 120, [ceiling]);
    assert.ok(body.y < 1.1);
  }
});
void test('地图可探索面积至少为上版的两倍', () => {
  assert.ok(
    (nav.BOUNDS.maxX - nav.BOUNDS.minX) * (nav.BOUNDS.maxZ - nav.BOUNDS.minZ) >=
      120 * 142 * 2,
  );
});
