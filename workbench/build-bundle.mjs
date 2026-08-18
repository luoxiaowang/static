import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('./', import.meta.url);
const sources = [
  'scripts/core/date.mjs',
  'scripts/core/backup.mjs',
  'scripts/core/delete-confirm.mjs',
  'scripts/core/todo-sort.mjs',
  'scripts/core/pomodoro.mjs',
  'scripts/ai/intent-router.mjs',
  'scripts/ai/agnes-client.mjs',
  'scripts/ai/workspace-context.mjs',
  'scripts/storage/db.mjs',
  'scripts/vue-app.mjs',
];

function removeModuleSyntax(source) {
  return source
    .replace(/import\s+[\s\S]*?\s+from\s+['"][^'"]+['"];\s*/g, '')
    .replace(/\bexport\s+(?=(?:async\s+)?(?:function|const|let|class))/g, '');
}

const chunks = await Promise.all(sources.map(async (sourcePath) => {
  const source = await readFile(new URL(sourcePath, root), 'utf8');
  return `\n// ---- ${sourcePath} ----\n${removeModuleSyntax(source).trim()}\n`;
}));

const banner = `/*
 * 我的工作台经典脚本包
 * 由 node workbench/build-bundle.mjs 从模块化源码生成。
 * 可通过 file:// 直接打开，也可托管到任意静态服务器。
 */`;

const bundle = `${banner}\n(() => {\n'use strict';\n${chunks.join('\n')}\n})();\n`;
await writeFile(new URL('scripts/app.bundle.js', root), bundle, 'utf8');
console.log(`已生成 scripts/app.bundle.js（${Buffer.byteLength(bundle)} 字节）`);
