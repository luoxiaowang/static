import subprocess,json,concurrent.futures,pathlib
root=pathlib.Path(__file__).resolve().parent.parent/'assets'/'downloaded';root.mkdir(exist_ok=True)
ids=['tree_small_02','fern_02','shrub_01','modern_arm_chair_01','modern_coffee_table_01','potted_plant_02']
work=[];sources=[]
for key in ids:
 manifest=root/(key+'-files.json');subprocess.run(['curl','-L','--fail','-s','https://api.polyhaven.com/files/'+key,'-o',str(manifest)],check=True);d=json.loads(manifest.read_text())['gltf']['1k']['gltf'];folder=root/key;folder.mkdir(exist_ok=True)
 work.append((d['url'],folder/(key+'.gltf')))
 for n,v in d.get('include',{}).items():work.append((v['url'],folder/n))
 sources.append({'id':key,'source':'https://polyhaven.com/a/'+key,'license':'CC0','format':'glTF 1K'})
def fetch(item):
 url,path=item;path.parent.mkdir(exist_ok=True,parents=True)
 if not path.exists():subprocess.run(['curl','-L','--fail','--retry','2','-s',url,'-o',str(path)],check=True)
 return path.name
with concurrent.futures.ThreadPoolExecutor(max_workers=5)as pool:
 for f in pool.map(fetch,work):print('已下载',f,flush=True)
(root.parent/'model-sources.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2))
