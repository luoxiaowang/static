import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { createHeroine } from './heroine.ts';
import { createFireworks } from './fireworks.ts';
import { createRiver } from './river.ts';
void test('主角脸部使用立体几何，不加载图片贴图', () => {
  const hero = createHeroine();
  let meshes = 0;
  const face = hero.root.getObjectByName('立体五官');
  assert.ok(face);
  face.traverse((o) => {
    if (o instanceof T.Mesh) {
      meshes++;
      for (const m of [o.material].flat())
        assert.ok(!(m as T.MeshStandardMaterial).map);
    }
  });
  assert.ok(meshes >= 5);
});
void test('盘坐后身高降低，起身恢复，模型不陷入地面', () => {
  const hero = createHeroine();
  assert.equal(typeof hero.setSeated, 'function');
  const before = new T.Box3().setFromObject(hero.root);
  hero.setSeated(true);
  for (let i = 0; i < 90; i++) hero.animate(i / 60, 0, false, 1, 1 / 60);
  const after = new T.Box3().setFromObject(hero.root);
  assert.ok(after.max.y < before.max.y - 0.5);
  assert.ok(after.min.y > -0.08);
  hero.setSeated(false);
  for (let i = 0; i < 90; i++) hero.animate(i / 60, 0, false, 1, 1 / 60);
  assert.ok(
    Math.abs(new T.Box3().setFromObject(hero.root).max.y - before.max.y) < 0.05,
  );
});

void test('河水有连续流向、两层细波法线与独立倒影/折射目标', () => {
  const river = createRiver(),
    u = river.water.material.uniforms;
  river.update(0);
  const initial = u.config.value.x;
  river.update(1);
  assert.notEqual(u.config.value.x, initial);
  for (const time of [1, 4.6, 4.8, 10]) {
    river.update(time);
    const c = u.config.value;
    assert.ok(Math.abs(((c.y - c.x + 0.15) % 0.15) - 0.075) < 1e-6);
  }
  assert.notEqual(u.tReflectionMap.value, u.tRefractionMap.value);
  assert.ok(new Set(u.tNormalMap0.value.image.data).size > 30);
  river.dispose();
  river.water.geometry.dispose();
  river.water.material.dispose();
});

void test('烟花仅在夜间出现，减少动态效果时关闭', () => {
  const fire = createFireworks();
  fire.update(2, false, false);
  assert.equal(fire.root.visible, false);
  fire.update(2, true, false);
  assert.equal(fire.root.visible, true);
  const points = fire.root.getObjectByName('夜空烟花') as T.Points;
  assert.equal(points.visible, true);
  assert.ok(
    [...points.geometry.getAttribute('aAlpha').array].some((v) => v > 0),
  );
  fire.update(2, true, true);
  assert.equal(points.visible, false);
});
