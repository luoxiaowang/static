import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {Script} from 'node:vm';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const result=await build({entryPoints:[resolve(root,'src/main.mjs')],bundle:true,write:false,format:'iife',minify:true,target:'es2020',legalComments:'eof'});
const script=result.outputFiles[0].text.replace(/[ \t]+\n/g,'\n').replace(/^ +(?=\t)/gm,'');new Script(script);
const manifest={},embedded={};
async function asset(id,path,type){const bytes=await readFile(resolve(root,path));const hash=createHash('sha256').update(bytes).digest('hex').slice(0,12);manifest[id]=path+'?v='+hash;embedded[id]=(type?'data:'+type+';base64,':'')+bytes.toString('base64');}
for(const key of ['grass','road','wood','plaster','stone','roof'])for(const type of ['color','normal','roughness']){if(key==='road'&&type==='color'||key==='roof'&&type!=='roughness')continue;await asset(key+'-'+type,'assets/'+key+'-'+type+'.jpg','image/jpeg');}
for(const id of ['tree_small_02','fern_02','shrub_01','modern_arm_chair_01','modern_coffee_table_01','potted_plant_02'])await asset(id,'assets/'+(['tree_small_02','fern_02','shrub_01','potted_plant_02'].includes(id)?'runtime/':'')+id+'.glb');
await asset('environment','assets/environment.hdr');await asset('interior','assets/interior.glb');
const template=(await readFile(resolve(root,'src/template.html'),'utf8')).replace('/*STYLE*/',await readFile(resolve(root,'src/style.css'),'utf8'));
const hash=createHash('sha256').update(script).digest('hex').slice(0,12);
const html=template.replace('/*ASSETS*/','globalThis.MANSION_ASSETS='+JSON.stringify(manifest)+';').replace('<script>/*SCRIPT*/</script>',`<script defer src="app.js?v=${hash}"></script>`);
const offline=template.replace('/*ASSETS*/','globalThis.MANSION_ASSETS='+JSON.stringify(embedded)+';').replace('/*SCRIPT*/',()=>script.replace(/<\/script/gi,'<\\/script'));
await writeFile(resolve(root,'app.js'),script);await writeFile(resolve(root,'index.html'),html);await writeFile(resolve(root,'offline.html'),offline);
await writeFile(resolve(root,'assets/runtime/startup-report.json'),JSON.stringify({entryBytes:Buffer.byteLength(html),appBytes:Buffer.byteLength(script),initialBytes:Buffer.byteLength(html)+Buffer.byteLength(script),offlineBytes:Buffer.byteLength(offline),deferredAssets:Object.keys(manifest).length,initialModelRequests:0,note:'静态构建体积，不是设备实测加载时间；基础几何进入后按需加载模型和贴图。'},null,2)+'\n');
console.log(`网页首屏：HTML ${(Buffer.byteLength(html)/1024).toFixed(1)} KiB + JS ${(Buffer.byteLength(script)/1024).toFixed(1)} KiB；${Object.keys(manifest).length} 项素材延迟加载。离线完整版：${(Buffer.byteLength(offline)/1024/1024).toFixed(2)} MiB。`);
