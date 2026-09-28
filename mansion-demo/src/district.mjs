// Added residential spaces share the material batches used by the original house.
export function addDistrict(a){
 const{box,ell,cyl,branch,mat,wood,oak,linen,dark,plaster,lightmat,glass,root,seats,tree,plant,table,chair,sofa,rug}=a;
 const stone=mat('石板',0xb8b5a4),soil=mat('土壤',0x493326),green=mat('叶绿',0x536b3d),pink=mat('桃花粉',0xdfa0ab),orange=mat('橘子',0xe69632,{roughness:.65}),peach=mat('桃子',0xe4a08a),screen=mat('电视画面',0x739591,{emissive:0x315653,emissiveIntensity:.5});
 const labels=[];root.userData.districtLabels=labels;
 const sign=(text,x,y,z)=>labels.push({text,x,y,z});
 function flower(x,y,z,color=pink){cyl(x,y+.25,z,.016,.5,green);for(let i=0;i<5;i++){const t=i*1.256;ell(x+Math.sin(t)*.065,y+.51,z+Math.cos(t)*.065,.065,.035,.065,color);}ell(x,y+.54,z,.035,.035,.035,orange);}
 function planter(x,z,w,d,y=0){box(x,y+.23,z,w,.46,d,wood,true);box(x,y+.47,z,w-.14,.025,d-.14,soil);for(let i=0;i<Math.floor(w*3);i++)for(let k=0;k<2;k++)flower(x-w/2+.22+i*.32,y+.48,z+(k-.5)*d*.48,i%3?pink:linen);}
 function television(x,z,y,w=2.8){box(x,y+1.5,z,w,1.5,.11,dark);box(x,y+1.5,z+.065,w-.12,1.37,.025,screen);box(x,y+.35,z+.1,w+.6,.7,.6,wood,true);}
 // Spacious west annex, connected to the library through a five metre opening.
 rug(-16,-13,7,7);sofa(-16,-11,Math.PI);table(-16,-13,2.5,1.1);television(-16,-17.6,0);plant(-20,-16,.8);sign('西翼会客厅',-16,2.7,-17.3);
 // New south and west gardens, clear circulation around every planted bed.
 box(0,.005,27,4,.05,6,stone);box(-27,.005,5,3,.05,44,stone);
 for(const x of [-10,10,18])planter(x,26,x<0?2:4,1.5);
 for(const [x,z,fruit,name]of [[-28,9,peach,'桃树'],[-28,19,orange,'橘树'],[28,25,orange,'橘树']]){
  tree(x,z,.65);
  for(let i=0;i<22;i++){const t=i*2.4,r=.85+(i%4)*.22;ell(x+Math.sin(t)*r,2.6+(i%5)*.29,z+Math.cos(t)*r,.13,.15,.13,fruit);}
  sign(name,x,1.5,z+2.1);
 }
 sign('地下室入口 ↓',-23.5,1.9,-5.8);
 // Basement: storage and esports to the north, KTV and lounge to the south.
 const b=-3.6;
 box(-18,b-.1,-13,14,.2,12,oak);
 box(-25,b+1.65,-13,.2,3.3,12,plaster,true);box(-11,b+1.65,-13,.2,3.3,12,plaster,true);
 box(-18,b+1.65,-19,14,3.3,.2,plaster,true);box(-18,b+1.65,-7,14,3.3,.2,plaster,true);
 box(-22.4,-2,-12,.10,3.2,10,plaster,true);
 // Central north-south corridor and wide doorways through the room dividers.
 for(const z of [-17.8,-8.7])box(-18,b+1.5,z,.15,3,2.2,wood,true);
 for(const x of [-20.6,-13.2])box(x,b+1.5,-13,3.6,3,.15,plaster,true);
 for(const x of [-21,-19.5]){for(let k=0;k<4;k++)box(x,b+.3+k*.6,-18.35,1.25,.07,.8,wood);for(let k=0;k<3;k++)for(let i=0;i<2;i++)box(x+(i-.5)*.48,b+.53+k*.6,-18.3,.4,.38,.6,mat('储物箱',0xa89372));}
 sign('储物间',-20.2,b+2.4,-18.2);
 for(const x of [-15.6,-12.8]){
  table(x,-17.6,2.1,.9,b);box(x,b+1.22,-17.8,1.1,.66,.08,dark);box(x,b+1.22,-17.75,1,.57,.025,mat('电竞屏幕',0x758fb8,{emissive:0x386cc0,emissiveIntensity:.75}));box(x,b+.86,-17.35,.65,.035,.25,dark);box(x+.83,b+.35,-17.6,.38,.7,.6,dark);
  chair(x,-16.5,Math.PI,b);seats.push({x,z:-16.5,y:b,rotation:Math.PI,type:'sit'});
  for(let k=0;k<3;k++)cyl(x+.83,b+.25+k*.17,-17.28,.05,.02,lightmat).rotation.x=Math.PI/2;
 }
 sign('电竞房',-14,b+2.5,-18.65);
 // KTV furniture is supplied by the pastel room theme.
 for(const x of [-21.8,-18.8]){box(x,b+.55,-12.2,.32,1.1,.35,dark);for(const y of [.3,.7]){const speaker=cyl(x,b+y,-11.99,.1,.02,dark);speaker.rotation.x=Math.PI/2;}}
 cyl(-19.1,b+.85,-10.7,.025,1.7,dark);ell(-19.1,b+1.76,-10.7,.055,.11,.055,dark);sign('KTV · 轻唱时光',-20.2,b+2.5,-12.4);
 sofa(-14.3,-9.1,Math.PI,b);table(-14.3,-10.8,2,.9,b);television(-14,-12.5,b,2.5);sign('地下影音客厅',-14,b+2.5,-12.4);
 // A single broad fill light avoids adding many costly point-light passes.
 // Runtime creates it separately, so it can be disabled while upstairs.
 root.userData.basementLight={x:-18,y:-1.3,z:-13};
 for(const x of [-21,-15])for(const z of [-17,-9])box(x,-.45,z,2.4,.04,.08,lightmat);
 // Roof terrace: continuous walkable slab, railing, tea pergola and flowers.
 for(const z of [-18,-4]){box(0,7.75,z,22,1.1,.04,glass,true);box(0,8.32,z,22,.045,.055,dark);}
 for(const x of [-11,11])for(const [z,d]of (x===-11?[[-15.2,5.6],[-7.5,7]]:[[-11,14]])){box(x,7.75,z,.04,1.1,d,glass,true);box(x,8.32,z,.055,.045,d,dark);}
 for(const x of [-8,-4,0,4])planter(x,-17,2.8,.9,7.2);
 for(const z of [-14,-8])planter(-10,z,.9,2.5,7.2);
 table(-4,-10,2.5,1.3,7.2);for(const x of [-4.8,-3.2]){chair(x,-8.8,Math.PI,7.2);seats.push({x,z:-8.8,y:7.2,rotation:Math.PI,type:'sit'});}chair(-4,-11.2,0,7.2);
 cyl(-4,8.14,-10,.18,.22,mat('青瓷',0x789787));for(const x of [-4.7,-3.3])cyl(x,8.07,-10,.075,.12,linen);
 for(let i=0;i<4;i++){const angle=Math.PI/4+i*Math.PI/2;box(-4+Math.cos(angle)*3.65,8.55,-10+Math.sin(angle)*3.65,.085,2.7,.085,dark,true);}
 cyl(-4,10.04,-10,3.8,.12,dark);cyl(-4,10.13,-10,3.65,.1,wood,undefined,3.4);cyl(-4,9.975,-10,3.55,.025,lightmat);
  box(3,7.43,-12,1.7,.46,2.1,wood,true);box(3,7.67,-12,1.55,.025,1.95,soil);
 sign('天台茶席',-4,8.8,-12);sign('天台花园',1,8.5,-16.5);
 // Street beyond the enlarged entrance; stalls flank the route to the river.
 box(0,-.01,40,10,.04,20,mat('街道路面',0x686d67));
 for(const x of [-6,6])box(x,.015,40,2,.07,20,stone);
 for(let z=32;z<49;z+=4)box(0,.025,z,.12,.008,1.5,linen);
 const vendors=[];root.userData.vendors=vendors;
 for(const side of [-1,1])for(let i=0;i<3;i++){
  const x=side*10,z=33.5+i*5,cloth=mat('摊棚'+i,[0xb87353,0x657e6e,0xd1b57d][i]);
  box(x,.6,z,3,1.2,1.4,wood,true);box(x,1.25,z,3.15,.1,1.5,oak);
  for(const dx of [-1.5,1.5])for(const dz of [-.9,.9])box(x+dx,1.3,z+dz,.055,2.6,.055,dark);
  const canopy=box(x,2.65,z,3.5,.12,2.25,cloth);canopy.rotation.z=side*.06;
  for(let k=0;k<12;k++){const xx=x-1.15+(k%4)*.7,zz=z-.45+Math.floor(k/4)*.45;if(i===2)flower(xx,1.3,zz);else ell(xx,1.42,zz,.18,.13,.16,i===0?orange:peach);}
  sign(['时令鲜果','乡村点心','花草小铺'][i],x,2.25,z+1);vendors.push({x:x+side*2,z,rotation:-side*Math.PI/2});
 }
 sign('乡间集市 · 向前到河岸',0,3,31);sign('河畔步道',0,2.8,48);
 box(0,.01,48,68,.06,3,stone);
 box(0,-.035,55,130,.05,10,mat('河水',0x527e79,{roughness:.15,metalness:.45}));
 for(let i=0;i<20;i++)box(-58+i*6,-.004,52+(i%3)*2,2.5,.007,.035,mat('河面波纹',0x94aea2,{transparent:true,opacity:.4,depthWrite:false}));
 for(const z of [49.6,60.5]){box(0,.9,z,70,.05,.06,dark,true);for(let x=-34;x<=34;x+=2)box(x,.45,z,.04,.9,.04,dark);}
 box(0,.015,62,130,.07,3,stone);
}
