import {createRequire} from 'node:module';
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
import {Script} from 'node:vm';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
let esbuild;
try {esbuild=require('esbuild');} catch {esbuild=require(resolve(root,'../mansion-demo/node_modules/esbuild'));}
const result=await esbuild.build({entryPoints:[resolve(root,'src/main.mjs')],bundle:true,format:'iife',write:false,minify:true,target:'es2020',legalComments:'eof',nodePaths:[resolve(root,'node_modules'),resolve(root,'../mansion-demo/node_modules')]});
const script=result.outputFiles[0].text.replace(/[ \t]+\n/g,'\n').replace(/^ +(?=\t)/gm,'');new Script(script);
const template=(await readFile(resolve(root,'src/template.html'),'utf8')).replace('/*STYLE*/',await readFile(resolve(root,'src/style.css'),'utf8'));
await writeFile(resolve(root,'app.js'),script);
await writeFile(resolve(root,'index.html'),template.replace('<script>/*SCRIPT*/</script>','<script defer src="app.js"></script>'));
await writeFile(resolve(root,'offline.html'),template.replace('/*SCRIPT*/',()=>script.replace(/<\/script/gi,'<\\/script')));
console.log(`构建完成：index.html + app.js；offline.html 可直接双击打开，${(Buffer.byteLength(script)/1024).toFixed(0)} KiB 脚本，无远程资源。`);
