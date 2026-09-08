"""Blender 4.x: create editable furnishing assets and export glTF to the web demo."""
import bpy, math, os
from pathlib import Path
BASE=Path(__file__).resolve().parent.parent
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def material(name,color,metal=0,rough=.65):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
 return m
stone=material('壁炉·深色天然石',(.15,.18,.17));wood=material('皮椅·胡桃木',(.23,.12,.065));leather=material('皮椅·焦糖皮革',(.39,.19,.085),0,.4);metal=material('壁炉·黑钢',(.035,.044,.042),.7,.3)
def box(name,loc,scale,mat,bevel=.03):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat)
 if bevel:
  mod=o.modifiers.new('柔化边缘','BEVEL');mod.width=bevel;mod.segments=3
  o.modifiers.new('加权法线','WEIGHTED_NORMAL')
 return o
# Blender Z up => glTF Y up, library fireplace at Three (-20,0,.3).
# asset local origin. Fireplace long axis along glTF z.
for y in [-1.05,1.05]:box('石壁炉侧柱',(-.1,y,1.1),(.8,.35,2.2),stone)
box('石壁炉顶',(-.1,0,2.3),(.8,2.45,.35),stone)
box('石壁炉底座',(.05,0,.16),(1.3,2.7,.3),stone)
box('耐火后壁',(-.45,0,1.1),(.15,2.2,2),metal)
for y in [-.75,-.25,.25,.75]:box('炉栅',(.48,y,.62),(.025,.025,.9),metal,.008)
for z in [.26,1.03]:box('横栏',(.48,0,z),(.025,2,.025),metal,.008)
for i in range(4):
 bpy.ops.mesh.primitive_cylinder_add(vertices=12,radius=.105,depth=1.2,location=(0,(i%2-.5)*.4,.4+(i//2)*.18),rotation=(math.pi/2,.15*(i%2),0));bpy.context.object.name='壁炉木柴';bpy.context.object.data.materials.append(wood)
# Caramel leather lounge nearby: extra mesh collection.
box('皮椅底座',(2,-2,.27),(1.25,1.4,.3),wood,.08)
box('皮椅坐垫',(2,-2,.52),(1.22,1.25,.28),leather,.12)
o=box('皮椅靠背',(2,-2.57,.99),(1.22,.3,1),leather,.12);o.rotation_euler.x=-.12
for x in [1.38,2.62]:box('皮椅扶手',(x,-2,.77),(.16,1.4,.3),leather,.07)
box('脚凳',(2,-.65,.36),(1.2,.9,.5),leather,.1)
# Save a usable studio camera and lights in native .blend.
bpy.ops.object.light_add(type='AREA',location=(4,-4,6));bpy.context.object.data.energy=700;bpy.context.object.data.shape='DISK';bpy.context.object.data.size=5
bpy.ops.object.camera_add(location=(7,-8,5));cam=bpy.context.object
from mathutils import Vector
cam.rotation_euler=(Vector((.8,-.7,1))-cam.location).to_track_quat('-Z','Y').to_euler();bpy.context.scene.camera=cam
bpy.context.scene.render.engine='CYCLES';bpy.context.scene.cycles.samples=24
bpy.ops.wm.save_as_mainfile(filepath=str(BASE/'assets/interior.blend'))
bpy.ops.export_scene.gltf(filepath=str(BASE/'assets/interior.glb'),export_format='GLB',export_apply=True,export_cameras=False,export_lights=False)
print('Blender 模型与 GLB 已导出')
