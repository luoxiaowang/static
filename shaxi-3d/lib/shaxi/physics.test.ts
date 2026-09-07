import test from 'node:test';
import assert from 'node:assert/strict';
import * as nav from './navigation.ts';

void test('三段轻功有次数限制，落地恢复', () => {
  assert.equal(typeof nav.jump, 'function', '需要轻功跳跃实现');
  const body = nav.createBody(0, 18);
  assert.ok(nav.jump(body));
  assert.equal(body.jumps, 1);
  assert.ok(nav.jump(body));
  assert.ok(nav.jump(body));
  assert.equal(nav.jump(body), false);
  for (let i = 0; i < 800; i++) nav.stepBody(body, 0, 0, 1 / 120, []);
  assert.equal(body.grounded, true);
  assert.equal(body.jumps, 0);
  assert.ok(nav.jump(body));
});
void test('房屋顶部可落脚，不穿过屋顶且能从边缘落下', () => {
  const roof = {
    x: 0,
    z: 0,
    halfX: 4,
    halfZ: 4,
    height: 4,
    roof: { rotation: 0, width: 8, depth: 8, base: 4.35 },
  };
  const body = nav.createBody(0, 0);
  body.y = 13;
  body.grounded = false;
  body.velocityY = -2;
  for (let i = 0; i < 500; i++) nav.stepBody(body, 0, 0, 1 / 120, [roof]);
  assert.ok(body.y > 6);
  assert.equal(body.grounded, true);
  for (let i = 0; i < 360; i++) nav.stepBody(body, 0.035, 0, 1 / 120, [roof]);
  assert.ok(body.x > 9);
  assert.ok(body.y < 0.1);
});
void test('单段跳与三段跳的高度有实际差异，三段足够登楼', () => {
  const a = nav.createBody(0, 18),
    b = nav.createBody(0, 18);
  nav.jump(a);
  nav.jump(b);
  let maxA = 0,
    maxB = 0;
  for (let i = 0; i < 500; i++) {
    if (i === 65 || i === 135) nav.jump(b);
    nav.stepBody(a, 0, 0, 1 / 120, []);
    nav.stepBody(b, 0, 0, 1 / 120, []);
    maxA = Math.max(maxA, a.y);
    maxB = Math.max(maxB, b.y);
  }
  assert.ok(maxA > 1 && maxA < 4);
  assert.ok(maxB > 9);
  assert.equal(b.grounded, true);
});
void test('空中低于屋面不能穿墙，高于屋面可跨越', () => {
  const block = { x: 3, z: 18, halfX: 1, halfZ: 2, height: 4 };
  const low = nav.createBody(0, 18);
  nav.stepBody(low, 8, 0, 0.016, [block]);
  assert.ok(low.x < 1.7);
  const high = nav.createBody(0, 18);
  high.y = 7;
  high.grounded = false;
  nav.stepBody(high, 8, 0, 0.016, [block]);
  assert.ok(high.x > 7.9);
});
