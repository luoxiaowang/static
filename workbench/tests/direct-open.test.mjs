import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script } from 'node:vm';

const root = new URL('../', import.meta.url);

test('首页使用可在 file URL 下加载的经典脚本', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /<script src="\.\/scripts\/app\.bundle\.js"/);
  assert.doesNotMatch(html, /type="module"/);
});

test('无尾斜杠的目录部署地址会在资源加载前补全斜杠', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  const normalizerIndex = html.indexOf("location.pathname.endsWith('/')");
  const firstRelativeAssetIndex = html.indexOf('./styles/base.css');

  assert.ok(normalizerIndex >= 0, '缺少部署路径规范化脚本');
  assert.ok(normalizerIndex < firstRelativeAssetIndex, '路径规范化必须早于相对资源加载');
  assert.match(html, /location\.replace\(location\.pathname \+ '\/' \+ location\.search \+ location\.hash\)/);
});

test('经典脚本包不包含模块语法且能够通过语法解析', async () => {
  const bundle = await readFile(new URL('scripts/app.bundle.js', root), 'utf8');
  assert.doesNotMatch(bundle, /^\s*(?:import|export)\s/m);
  assert.doesNotThrow(() => new Script(bundle));
});

test('经典脚本包包含新增的效率与 AI 模块', async () => {
  const bundle = await readFile(new URL('scripts/app.bundle.js', root), 'utf8');
  for (const functionName of ['sortTodos', 'createPomodoroState', 'recognizeFavorite', 'buildWorkspaceContext']) {
    assert.match(bundle, new RegExp(`function ${functionName}\\b`));
  }
});
