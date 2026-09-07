import { readFile, writeFile, rename } from 'node:fs/promises';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';
import assert from 'node:assert/strict';
import { build } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = resolve(root, 'shaxi-3d.html');
const manifestPath = '/assets/pbr/manifest.json';
const manifest = JSON.parse(
  await readFile(resolve(root, 'public' + manifestPath), 'utf8'),
);
const paths = new Set([manifestPath, '/assets/pbr/sky-4k.hdr']);
for (const entry of Object.values(manifest)) {
  for (const key of ['color', 'normal', 'roughness']) paths.add(entry[key]);
}
const assets = {};
const mime = {
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.hdr': 'application/octet-stream',
};
for (const path of paths) {
  assert(
    path.startsWith('/assets/') && !path.includes('..'),
    `无效素材路径：${path}`,
  );
  const bytes = await readFile(resolve(root, 'public' + path));
  assets[path] =
    `data:${mime[extname(path)]};base64,${bytes.toString('base64')}`;
}
const result = await build({
  configFile: false,
  root,
  publicDir: false,
  plugins: [react()],
  resolve: { alias: { '@': root } },
  css: { postcss: { plugins: [tailwindcss()] } },
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    write: false,
    sourcemap: false,
    cssCodeSplit: false,
    assetsInlineLimit: Infinity,
    lib: {
      entry: resolve(root, 'standalone/main.tsx'),
      name: 'Shaxi',
      formats: ['iife'],
    },
    rolldownOptions: { output: { codeSplitting: false } },
  },
});
const output = (Array.isArray(result) ? result : [result]).flatMap(
  (item) => item.output,
);
const chunks = output.filter((item) => item.type === 'chunk');
assert.equal(chunks.length, 1, '必须仅输出一段内嵌脚本');
assert.equal(chunks[0].imports.length, 0, '禁止外部脚本依赖');
assert(
  chunks[0].dynamicImports.every((name) => name === chunks[0].fileName),
  '禁止外部动态分块',
);
assert(!/\bimport\s*\(/.test(chunks[0].code), '禁止动态加载外部脚本');
const styles = output.filter(
  (item) => item.type === 'asset' && item.fileName.endsWith('.css'),
);
assert(
  output.every(
    (item) => item.type === 'chunk' || item.fileName.endsWith('.css'),
  ),
  '存在未嵌入文件',
);
const css = styles.map((item) => item.source.toString()).join('\n');
assert(
  !/@import\s|url\(\s*["']?(?!data:)[^\s"')]/i.test(css),
  '样式存在外部资源',
);
const script = chunks[0].code.replace(/<\/script/gi, '<\\/script');
new Script(script); // 验证作为普通脚本执行，不需要 file:// ES module 加载。
const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="可离线探索的三维沙溪古镇"><title>沙溪 · 旧时游</title><link rel="icon" href="data:,"><style>${css.replace(/<\/style/gi, '<\\/style')}</style></head>
<body><div id="root"></div><noscript>请启用 JavaScript，探索沙溪古镇。</noscript>
<script>globalThis.__SHAXI_ASSETS__=${JSON.stringify(assets).replace(/</g, '\\u003c')};</script>
<script>${script}</script></body></html>`;
// 写入成功后再替换成品，构建失败时保留上次可用版本。
await writeFile(target + '.tmp', html);
await rename(target + '.tmp', target);
console.log(
  `单文件已生成：${target}\n${paths.size} 个内嵌素材，${(Buffer.byteLength(html) / 1024 / 1024).toFixed(1)} MiB；无外部脚本或样式。`,
);
