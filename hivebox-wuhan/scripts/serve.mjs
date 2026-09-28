import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,dirname,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const port=Number(process.env.PORT||4175);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png'};
createServer(async(request,response)=>{
 try {
  const pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname);
  let path=resolve(root,`.${pathname}`);
  if(path!==root&&!path.startsWith(root+sep)) {response.writeHead(403);response.end();return;}
  if((await stat(path)).isDirectory()) {path=resolve(path,'index.html');}
  response.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-store'});response.end(await readFile(path));
 } catch {response.writeHead(404);response.end('文件不存在');}
}).listen(port,'127.0.0.1',()=>console.log(`本地预览：http://127.0.0.1:${port}`));
