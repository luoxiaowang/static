import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Script} from 'node:vm';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const result=await build({entryPoints:[resolve(root,'src/main.mjs')],bundle:true,write:false,format:'iife',minify:true,target:'es2020',legalComments:'eof'});
const script=result.outputFiles[0].text.replace(/[ \t]+\n/g,'\n').replace(/^ +(?=\t)/gm,'');new Script(script);
const assets={};for(const key of ['grass','road','wood','plaster','stone','roof'])for(const type of ['color','normal','roughness']){if(key==='road'&&type==='color')continue;assets[key+'-'+type]='data:image/jpeg;base64,'+(await readFile(resolve(root,'assets',key+'-'+type+'.jpg'))).toString('base64');}
for(const id of ['tree_small_02','fern_02','shrub_01','modern_arm_chair_01','modern_coffee_table_01','potted_plant_02'])assets[id]=(await readFile(resolve(root,'assets',['tree_small_02','fern_02','shrub_01','potted_plant_02'].includes(id)?'runtime/'+id+'.glb':id+'.glb'))).toString('base64');
assets.environment=(await readFile(resolve(root,'assets/environment.hdr'))).toString('base64');
assets.interior=(await readFile(resolve(root,'assets/interior.glb'))).toString('base64');
const html=(await readFile(resolve(root,'src/template.html'),'utf8')).replace('/*STYLE*/',await readFile(resolve(root,'src/style.css'),'utf8')).replace('/*ASSETS*/','globalThis.MANSION_ASSETS='+JSON.stringify(assets)+';').replace('/*SCRIPT*/',()=>script.replace(/<\/script/gi,'<\\/script'));
await writeFile(resolve(root,'index.html'),html);console.log('单文件入口已生成：'+resolve(root,'index.html')+'；'+(Buffer.byteLength(html)/1024/1024).toFixed(2)+' MiB；包含 Three.js、Blender GLB 与全部贴图。');
