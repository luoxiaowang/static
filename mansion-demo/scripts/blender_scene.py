"""Rebuild the full browser architecture in an editable Blender scene."""
import bpy,json,math
from pathlib import Path
from mathutils import Vector
BASE=Path(__file__).resolve().parent.parent
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
for i,item in enumerate(json.loads((BASE/'assets/scene-meshes.json').read_text())):
 p=item['positions'];idx=item['indices'];verts=[(p[j],-p[j+2],p[j+1]) for j in range(0,len(p),3)];faces=[tuple(idx[j:j+3]) for j in range(0,len(idx),3)]
 mesh=bpy.data.meshes.new(item['name']);mesh.from_pydata(verts,[],faces);mesh.update();o=bpy.data.objects.new(item['name'],mesh);bpy.context.collection.objects.link(o)
 m=bpy.data.materials.new(item['name']);m.diffuse_color=(*item['color'],item['opacity']);m.use_nodes=True;pbr=m.node_tree.nodes.get('Principled BSDF');pbr.inputs['Base Color'].default_value=(*item['color'],1);pbr.inputs['Roughness'].default_value=item['roughness'];pbr.inputs['Metallic'].default_value=item['metalness'];
 if item['opacity']<1:pbr.inputs['Transmission Weight'].default_value=.7
 mesh.materials.append(m)
 if item.get('uvs'):
  uv=mesh.uv_layers.new(name='纹理坐标');arr=item['uvs']
  for loop in mesh.loops:
   vi=loop.vertex_index;uv.data[loop.index].uv=(arr[vi*2],arr[vi*2+1])
 texture_key={'草地':'grass','石板':'road','浅橡木':'wood','胡桃木':'wood','米色墙面':'plaster','石材':'stone','深灰瓦':'roof'}.get(item['name'])
 if texture_key:
  nodes=m.node_tree.nodes;tc=nodes.new('ShaderNodeTexCoord');mapping=nodes.new('ShaderNodeVectorMath');mapping.operation='SCALE';mapping.inputs[3].default_value=1/2;m.node_tree.links.new(tc.outputs['Object'],mapping.inputs[0]);tex=nodes.new('ShaderNodeTexImage');tex.image=bpy.data.images.load(str(BASE/'assets'/(texture_key+'-color.jpg')),check_existing=True);tex.projection='BOX';tex.projection_blend=.15;m.node_tree.links.new(mapping.outputs['Vector'],tex.inputs['Vector']);m.node_tree.links.new(tex.outputs['Color'],pbr.inputs['Base Color'])

bpy.ops.import_scene.gltf(filepath=str(BASE/'assets/interior.glb'))
for o in bpy.context.selected_objects:o.location.x-=20;o.location.y-=.3
# Add the same downloaded foliage and furniture as collection instances.
placements=json.loads((BASE/'assets/placements.json').read_text())
def asset_collection(key):
 before=set(bpy.data.objects);bpy.ops.import_scene.gltf(filepath=str(BASE/'assets'/(key+'.glb')));objects=list(set(bpy.data.objects)-before)
 meshes=[o for o in objects if o.type=='MESH'];coords=[o.matrix_world@Vector(c) for o in meshes for c in o.bound_box]
 lo=Vector(tuple(min(c[i]for c in coords)for i in range(3)));hi=Vector(tuple(max(c[i]for c in coords)for i in range(3)));center=Vector(((lo.x+hi.x)/2,(lo.y+hi.y)/2,lo.z));height=hi.z-lo.z
 collection=bpy.data.collections.new(key)
 for o in objects:
  if o.parent is None:o.location-=center
  for parent in list(o.users_collection):parent.objects.unlink(o)
  collection.objects.link(o)
 return collection,height
def instance(collection,height,p):
 obj=bpy.data.objects.new(collection.name+'·实例',None);obj.instance_type='COLLECTION';obj.instance_collection=collection;obj.location=(p['x'],-p['z'],p.get('y',0));obj.scale=(p['height']/height,)*3;obj.rotation_euler.z=p.get('rotation',0);bpy.context.collection.objects.link(obj)
for key,spots in [('tree_small_02',placements['trees']),('potted_plant_02',placements['plants']),('modern_arm_chair_01',[{'x':12.8,'z':2.8,'height':1.12},{'x':-12.7,'z':3.7,'height':1.12}])]:
 collection,height=asset_collection(key)
 for spot in spots:instance(collection,height,spot)
bpy.ops.object.light_add(type='SUN',location=(-22,-18,30));bpy.context.object.rotation_euler=(.45,-.4,-.6);bpy.context.object.data.energy=3;bpy.context.object.data.angle=.1
bpy.ops.object.camera_add(location=(34,-46,29));cam=bpy.context.object;cam.rotation_euler=(Vector((0,2,1.5))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.lens=38;bpy.context.scene.camera=cam
bpy.context.scene.world.color=(.32,.4,.44);bpy.context.scene.render.engine='CYCLES';bpy.context.scene.cycles.samples=32;bpy.context.scene.render.resolution_x=1600;bpy.context.scene.render.resolution_y=1000
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=str(BASE/'assets/mansion.blend'))
print('完整豪宅 Blender 场景已保存')
