import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
// Static decorations share the normal room/material batches; no extra render passes.
export function addRoomThemes({box,ell,cyl,mat,architecture,seats,obstacle}){
 const cream=mat('主题奶油白',0xffefdb,{roughness:.38}),pink=mat('主题樱花粉',0xe8a9bd),lavender=mat('主题淡紫',0xb8a5d8),blue=mat('主题晴空蓝',0xa9cfe0),gold=mat('主题香槟金',0xc7a267,{metalness:.65,roughness:.28}),glow=mat('主题暖灯带',0xffe6b1,{emissive:0xffd89b,emissiveIntensity:2}),black=mat('主题炭黑',0x26252c),yellow=mat('皮卡丘黄',0xffcf35),red=mat('精灵球红',0xe74b49);
 function round(x,y,z,w,h,d,m){const o=new T.Mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(w,h,d)*.24),m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;architecture.add(o);return o;}
 function star(x,y,z,r){const shape=new T.Shape();for(let i=0;i<10;i++){const a=i*Math.PI/5+Math.PI/2,k=i%2?r*.44:r;const px=Math.cos(a)*k,py=Math.sin(a)*k;if(i===0)shape.moveTo(px,py);else shape.lineTo(px,py);}shape.closePath();const mesh=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.025,bevelEnabled:false}),glow);mesh.position.set(x,y,z);architecture.add(mesh);}
 const b=-3.6;
 // Southern room: pastel acoustic panels, bubble sofa, champagne coffee table.
 box(-20.2,b+.018,-10.1,4.15,.028,5.45,mat('KTV浅色石地面',0xeee1df,{roughness:.3}));
 for(let col=0;col<5;col++)for(let row=0;row<3;row++)round(-21.85+col*.72,b+.58+row*.91,-12.8,.7,.89,.1,[pink,blue,cream,lavender,cream][col]);
 for(const x of [-22.17,-18.22])round(x,b+1.6,-12.68,.04,2.9,.04,glow);
 round(-20.2,b+3.06,-12.65,3.95,.045,.045,glow);
 for(let i=0;i<5;i++){round(-21.6+i*.68,b+.48,-8.8,.72,.52,1.03,cream);round(-21.6+i*.68,b+.98,-8.35,.73,.85,.38,cream);ell(-21.6+i*.68,b+.86,-8.64,.25,.23,.14,i%2?lavender:pink);}
 obstacle(-20.25,-8.65,3.7,1.25,b,1.45);seats.push({x:-20.3,z:-8.9,y:b,rotation:Math.PI,type:'sit'});
 round(-20.4,b+.71,-10.5,1.7,.12,.75,cream);for(const x of [-21.1,-19.7])for(const z of [-10.78,-10.22])cyl(x,b+.34,z,.027,.65,gold);obstacle(-20.4,-10.5,1.7,.75,b,.8);
 round(-20.3,b+.38,-12.15,2.9,.7,.55,cream);obstacle(-20.3,-12.15,2.9,.55,b,.8);
 box(-20.3,b+1.65,-12.43,2.75,1.5,.1,black);box(-20.3,b+1.65,-12.367,2.6,1.35,.018,mat('糖果点歌屏',0xffffff,{emissive:0xe4bfce,emissiveIntensity:.5}));
 for(let i=0;i<9;i++){const x=-22.2+i*.44,y=b+2.65-Math.sin(i/8*Math.PI)*.35;star(x,y,-7.18,.085);if(i<8){const o=box(x+.22,y-.035,-7.19,.46,.015,.015,gold);o.rotation.z=-Math.cos(i/8*Math.PI)*.12;}}
 // Children's room: a Poké Ball headboard, Pikachu plush and collection shelves.
 round(-.6,4.3,-15.3,2.05,.09,2.3,blue);
 const ball=(x,y,z,r)=>{ell(x,y,z,r,r,r,cream);const top=new T.Mesh(new T.SphereGeometry(r,20,12,0,Math.PI*2,0,Math.PI/2),red);top.position.set(x,y,z);architecture.add(top);const ring=new T.Mesh(new T.TorusGeometry(r,.025,6,24),black);ring.rotation.x=Math.PI/2;ring.position.set(x,y,z);architecture.add(ring);ell(x,y,z+r,.1,.1,.04,black);ell(x,y,z+r+.032,.06,.06,.02,cream);};
 ball(-.6,5.23,-17.48,.58);
 round(-.6,5.18,-17.78,3.8,2.25,.12,blue);for(const x of [-2.2,1])star(x,5.7,-17.69,.18);
 const px=-.05,pz=-15.25;ell(px,4.61,pz,.28,.35,.23,yellow);ell(px,4.98,pz,.3,.28,.24,yellow);
 for(const s of [-1,1]){const ear=ell(px+s*.19,5.34,pz,.07,.3,.065,yellow);ear.rotation.z=-s*.22;ell(px+s*.24,5.57,pz,.052,.09,.06,black);ell(px+s*.115,5.04,pz+.22,.035,.042,.025,black);ell(px+s*.22,4.94,pz+.19,.06,.05,.025,red);ell(px+s*.2,4.38,pz+.1,.12,.08,.16,yellow);}

 for(let i=0;i<3;i++)ball(2.6,4.98,-12.8+i*.62,.18);
 const rug=cyl(0,3.622,-10.7,1.32,.03,red);cyl(0,3.64,-10.7,.38,.025,cream);box(0,3.654,-10.7,2.64,.014,.09,black);
}
export function decorateThemeScreens(world){
 const canvas=document.createElement('canvas');canvas.width=768;canvas.height=432;const c=canvas.getContext('2d');const g=c.createLinearGradient(0,0,768,432);g.addColorStop(0,'#f2b8ce');g.addColorStop(1,'#b7c9ec');c.fillStyle=g;c.fillRect(0,0,768,432);c.fillStyle='#574b6b';c.font='bold 32px sans-serif';c.fillText('糖果星光 · 家庭欢唱',40,55);c.font='22px sans-serif';['亲子儿歌','流行金曲','经典老歌','我的歌单','欢乐合唱','轻松伴奏'].forEach((text,i)=>{const x=143+(i%3)*238,y=155+Math.floor(i/3)*150;c.fillStyle='#fff0dc';c.beginPath();c.arc(x,y,53,0,Math.PI*2);c.fill();c.fillStyle='#6a597a';c.textAlign='center';c.fillText(['♫','♪','★'][i%3],x,y+10);c.font='22px sans-serif';c.fillText(text,x,y+85);});const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;world.mats['糖果点歌屏'].map=tex;world.mats['糖果点歌屏'].needsUpdate=true;
}
