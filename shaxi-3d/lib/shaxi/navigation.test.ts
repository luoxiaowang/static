import test from 'node:test';
import assert from 'node:assert/strict';
import {
  canWalk,
  groundHeight,
  moveWithCollision,
  regionAt,
  STOPS,
} from './navigation.ts';

void test('河道只能从石桥通过，桥两端与地面连续', () => {
  assert.equal(canWalk(33, 0, []), false);
  assert.equal(canWalk(33, -21, []), true);
  assert.equal(canWalk(33, -18.7, []), false);
  assert.equal(groundHeight(25, -21), 0);
  assert.ok(Math.abs(groundHeight(41, -21)) < 1e-10);
  assert.equal(groundHeight(33, -21), 2.7);
  assert.equal(groundHeight(33, 0), 0);
});
void test('走完整座石桥不会掉入河道或被边界挡住', () => {
  let position = { x: 24, z: -21 };
  for (let i = 0; i < 180; i++)
    position = moveWithCollision(position.x, position.z, 0.1, 0, []);
  assert.ok(Math.abs(position.x - 42) < 1e-8);
  assert.equal(position.z, -21);
});
void test('高速移动也不能穿墙，斜向行走可沿墙滑动', () => {
  const wall = [{ x: 3, z: 0, halfX: 0.2, halfZ: 8 }];
  const fast = moveWithCollision(0, 0, 10, 0, wall);
  assert.ok(fast.x < 2.42);
  const diagonal = moveWithCollision(2.3, 0, 2, 2, wall);
  assert.ok(diagonal.x < 2.42);
  assert.ok(diagonal.z > 1.9);
});
void test('封闭区域与地图边缘阻止通行', () => {
  assert.equal(canWalk(-101, 0, []), false);
  assert.equal(canWalk(101, 0, []), false);
  assert.equal(canWalk(0, -106, []), false);
  assert.equal(canWalk(0, 106, []), false);
  assert.equal(canWalk(0, 0, [{ x: 0, z: 0, halfX: 3, halfZ: 3 }]), false);
});
void test('每个快捷景点位于可走地面且对应正确区域', () => {
  STOPS.forEach((s, i) => {
    assert.equal(canWalk(s.x, s.z, []), true);
    assert.equal(groundHeight(s.x, s.z), 0);
    assert.equal(regionAt(s.x, s.z), i);
  });
});
