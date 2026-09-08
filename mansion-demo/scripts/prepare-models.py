"""Convert downloaded CC0 models to optimized embedded GLB assets using Blender."""
import bpy,math,json
from pathlib import Path
BASE=Path(__file__).resolve().parent.parent/'assets'
ids=['tree_small_02','fern_02','shrub_01','modern_arm_chair_01','modern_coffee_table_01','potted_plant_02']
for key in ids:
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
 bpy.ops.import_scene.gltf(filepath=str(BASE/'downloaded'/key/(key+'.gltf')))
 # Split material islands so dense leaves cannot consume the entire mesh budget.
 if key in ['tree_small_02','shrub_01']:
  for o in list(bpy.context.scene.objects):
   if o.type!='MESH':continue
   bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.separate(type='MATERIAL');bpy.ops.object.mode_set(mode='OBJECT')
 for o in list(bpy.context.scene.objects):
  if o.type!='MESH':continue
  n=len(o.data.polygons);target=22000 if key=='tree_small_02' else 14000
  if n>target:
   mod=o.modifiers.new('网页细节优化','DECIMATE');mod.ratio=target/n;bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=mod.name)
  print(key,o.name,len(o.data.polygons),flush=True)
 bpy.ops.export_scene.gltf(filepath=str(BASE/(key+'.glb')),export_format='GLB',export_apply=True,export_cameras=False,export_lights=False)
 # Release orphan geometry and images before processing the next model.
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
 bpy.ops.outliner.orphans_purge(do_recursive=True)
