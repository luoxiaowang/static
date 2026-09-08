import * as T from 'three';
import {createFestival,toggleDoor,DOORS} from './festival.mjs';
import {PLAN_SCALE,DEFAULT_VIEW,DEFAULT_QUALITY} from './layout.mjs';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createWorld} from './world.mjs';
import {createGuide} from './guide.mjs';
import {createWeather,WEATHER_NAMES} from './weather.mjs';
import {movePlayer,canMove,solids,startJump,advanceJump} from './navigation.mjs';
import {human,dog,fish,turtle} from './characters.mjs';
import {addRealism,postProcessing} from './realism.mjs';
import {AdaptiveQuality,PROFILES,TIERS} from './performance.mjs';
const $=id=>document.getElementById(id),scene=new T.Scene();const spatialRoot=new T.Group();
const camera=new T.PerspectiveCamera(52,innerWidth/innerHeight,.08,230);
let renderer;
try{renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});}catch(e){$('loading').innerHTML='<h2>当前浏览器无法开启 3D</h2><p>请使用支持 WebGL 2 的 Chrome、Edge 或 Safari，并开启硬件加速。</p>';throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,1));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.93;renderer.outputColorSpace=T.SRGBColorSpace;$('scene').appendChild(renderer.domElement);
scene.fog=new T.FogExp2(0xb6baa9,.006);
const hemi=new T.HemisphereLight(0xd2e8eb,0x777052,.8);scene.add(hemi);
const sun=new T.DirectionalLight(0xffd19a,2.4);sun.position.set(-24,23,16);sun.castShadow=true;sun.shadow.mapSize.set(1536,1536);Object.assign(sun.shadow.camera,{left:-55,right:55,top:50,bottom:-50,near:1,far:150});sun.shadow.bias=-.0003;sun.shadow.normalBias=.06;scene.add(sun);
const sky=new T.Mesh(new T.SphereGeometry(160,32,16),new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{top:{value:new T.Color('#739dba')},bottom:{value:new T.Color('#efd0a1')}},vertexShader:'varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec3 v;uniform vec3 top;uniform vec3 bottom;void main(){float h=clamp(normalize(v).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.65)),1.);}'}));scene.add(sky);
const sunDisc=new T.Mesh(new T.SphereGeometry(3,20,12),new T.MeshBasicMaterial({color:0xffe4ad}));sunDisc.position.set(-64,26,-103);scene.add(sunDisc);
const textureLoader=new T.TextureLoader();const textures=[],textureCache=new Map();
const mappings={'草地':['grass',1,0x919581],'石板':['road',1,0xd0cec3],'浅橡木':['wood',1,0xbbae95],'胡桃木':['wood',1,0x967553],'米色墙面':['plaster',1,0xebe1cc],'石材':['stone',1,0xa9afa0],'深灰瓦':['roof',1,0x363d3a]};
const materials={};for(const[name,[key,repeat,color]]of Object.entries(mappings)){const m=new T.MeshStandardMaterial({name,color,roughness:.88});for(const[kind,slot]of [['color','map'],['normal','normalMap'],['roughness','roughnessMap']]){const data=globalThis.MANSION_ASSETS[key+'-'+kind];if(!data||(key==='road'&&kind==='color')||(key==='roof'&&kind!=='roughness'))continue;const textureKey=key+'-'+kind;const tex=textureCache.get(textureKey)||textureLoader.load(data);if(!textureCache.has(textureKey)){textureCache.set(textureKey,tex);textures.push(tex);}tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.repeat.set(repeat,repeat);tex.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());if(kind==='color')tex.colorSpace=T.SRGBColorSpace;m[slot]=tex;}m.normalScale.set(.3,.3);materials[name]=m;}
const world=createWorld(materials);scene.add(world.root);let realism;const realismReady=addRealism(scene,world,renderer,sky).then(r=>{realism=r;realism.setQuality(PROFILES[TIERS[adaptive.level]]);});const fx=postProcessing(renderer,scene,camera);const weatherSystem=createWeather(scene,world);const festival=createFestival(world.root);
// Real Blender-exported furnishings, embedded in the single-file build.
const assetReady=globalThis.MANSION_ASSETS.interior?new Promise((resolve,reject)=>{const bytes=Uint8Array.from(atob(globalThis.MANSION_ASSETS.interior),c=>c.charCodeAt(0));new GLTFLoader().parse(bytes.buffer,'',gltf=>{gltf.scene.position.set(-20,0,.3);gltf.scene.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(gltf.scene);resolve();},reject);}):Promise.reject(Error('缺少 Blender 资产'));
const flameMat=new T.MeshBasicMaterial({color:0xffa437,transparent:true,opacity:.8});const flames=[];for(let i=0;i<7;i++){const f=new T.Mesh(new T.ConeGeometry(.08,.55,7),flameMat);f.position.set(-19.95+(i%2)*.2,.65,.3+(i-3)*.2);scene.add(f);flames.push(f);}const firelight=new T.PointLight(0xffa44e,6,5);firelight.position.set(-19.3,1,.3);scene.add(firelight);
// Local screen artwork remains available in the offline build.
for(const [key,title] of [['电视画面','山水之间 · 风景频道'],['电竞屏幕','游戏大厅 · 准备就绪']]){
 const canvas=document.createElement('canvas');canvas.width=640;canvas.height=360;const c=canvas.getContext('2d'),g=c.createLinearGradient(0,0,0,360);g.addColorStop(0,'#283f55');g.addColorStop(1,'#b2c5ac');c.fillStyle=g;c.fillRect(0,0,640,360);
 for(let layer=0;layer<3;layer++){c.fillStyle=['#7b9a99','#526f72','#304e53'][layer];c.beginPath();c.moveTo(0,360);for(let x=0;x<=640;x+=20)c.lineTo(x,170+layer*45+Math.sin(x*.012+layer)*55+Math.cos(x*.026)*18);c.lineTo(640,360);c.fill();}
 c.fillStyle='#f4e9c9';c.font='24px sans-serif';c.fillText(title,28,43);c.font='16px sans-serif';c.fillText(key==='电竞屏幕'?'欢迎回家，放松一下':'乡村生活 · 慢享时光',28,326);const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;world.mats[key].map=tex;world.mats[key].needsUpdate=true;
}
const basementLight=new T.PointLight(0xffdab5,95,19,2);basementLight.position.set(-18,-1.3,-13);scene.add(basementLight);
const vendors=world.root.userData.vendors.map((v,i)=>{const h=human({shirt:[0x947b60,0x718c78,0xb89179][i%3],pants:0x404b48,female:i%2===1});h.g.position.set(v.x,0,v.z);h.g.rotation.y=v.rotation;scene.add(h.g);return h;});
const player=human({shirt:0xc4b794,pants:0x40534c});scene.add(player.g);const pos=new T.Vector3(0,0,19);player.g.position.copy(pos);player.g.rotation.y=Math.PI;
const wife=human({shirt:0xc0a08c,pants:0xede2ce,female:true});wife.g.position.set(-6,0,-15.1);scene.add(wife.g);
const child=human({shirt:0x789dab,pants:0x455b64,scale:.69});scene.add(child.g);
const grandpa=human({shirt:0x9d9479,pants:0x5d6356,hair:0xc9c7b9,scale:.97});grandpa.g.position.set(-14,-.08,-3);scene.add(grandpa.g);
const grandma=human({shirt:0xa494ad,pants:0x666b60,hair:0xbdbeb4,female:true,scale:.93});grandma.g.position.set(12,0,16.9);scene.add(grandma.g);
const dogs=[dog(0xc79a63),dog(0xe0ddd0)];dogs.forEach(d=>scene.add(d.g));const fishes=Array.from({length:9},(_,i)=>fish([0xe6a34b,0xe5e1d2,0xbd6545][i%3]));fishes.forEach(f=>scene.add(f));const turtles=[turtle(),turtle()];turtles.forEach(t=>scene.add(t));
// A book held by grandpa, a kitchen bowl, and the child's ball make activities readable.
const book=new T.Mesh(new T.BoxGeometry(.45,.04,.32),new T.MeshStandardMaterial({color:0xdfd1ad}));book.position.set(0,1.08,.4);book.rotation.x=-.3;grandpa.g.add(book);
const ball=new T.Mesh(new T.SphereGeometry(.22,16,12),new T.MeshStandardMaterial({color:0xd6a666}));scene.add(ball);
const bloomGroups=[];let planted=0,fedUntil=0,dogPetUntil=0,mode=DEFAULT_VIEW,night=false,nearest=null,elapsed=0,active=false;
let posture='stand',anchor=null;const jump={height:0,velocity:0};const birdTarget=new T.Vector3(0,0,9);let birdDistance=100,birdPitch=.67;let yaw=0,pitch=.24,distance=5,drag=false,lastX=0,lastY=0;const keys=new Set();let toastTimer;
function toast(msg){$('toast').textContent=msg;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3800);}
const activities=[
 ...[['gate',0,28.4,0,'开关庭院大门'],['gate',0,31.6,0,'开关庭院大门'],['basementDoor',-23.5,-18,-3.6,'开关地下室入口门'],['basementDoor',-21.2,-18,-3.6,'开关地下室入口门']].map(([id,x,z,y,title])=>({id,x,z,y,title,hint:'按 E 开关 · 请避开门扇范围'})),
 ...[
 ['rooftea',-4,-7.8,7.2,'在天台喝茶','天台茶席','端起青瓷杯，俯瞰果园、街道与河岸。'],
 ['roofplant',3,-11,7.2,'在天台种花','天台花园','把新花苗种进天台的小花圃。'],
 ['coffee',5,-14,0,'磨一杯咖啡','一楼咖啡吧','咖啡机温热起来，杯中散出香气。'],
 ['tv',1.6,-10,0,'切换电视风景画面','一楼起居厅','电视切换到另一幅山水色调的画面。'],
 ['tv',-14,-11.7,-3.6,'切换电视风景画面','地下影音客厅','在沙发旁看看电视，慢慢度过闲暇时光。'],
 ['ktv',-19,-11.7,-3.6,'播放一段示范伴奏','地下 KTV','本地合成的短伴奏正在播放，麦克风就在茶几旁。'],
 ['game',-14,-15,-3.6,'启动电竞桌面','地下电竞房','显示器点亮，今晚可以在这里休闲一下。'],
 ['storage',-20,-15,-3.6,'查看储物间','地下储物间','整齐的架子上分放着换季物品、园艺用品与生活备品。'],
 ['peach',-28,11,0,'看看树上的桃子','庭院果园','枝头挂着粉嫩的桃子，果香混着草木的气息。'],
 ['orange',-28,21,0,'看看树上的橘子','庭院果园','橘子在叶间泛着暖色，等家人一起过来采收。'],
 ['market',-7,33.5,0,'逛逛鲜果摊','乡间集市','摊主招呼你看看今天刚摘下来的时令水果。'],
 ['market',7,38.5,0,'看看乡村点心','乡间集市','摊主正在整理点心，河岸就在街道前方。']
 ].map(([id,x,z,y,title,heading,body])=>({id,x,z,y,title,heading,hint:heading+' · 按 E 互动',type:heading,body:'<p>'+body+'</p>',mood:title})),
 {id:'read',x:-17,z:2.8,y:0,title:'坐下来，读一本书',hint:'书房 · 木香与壁炉',type:'阅读时光',heading:'把时间留给一页书',body:'<p class="quote">山静似太古，日长如小年。</p><p>你翻开桌上的诗集。窗外的树影轻轻晃动，壁炉里传来木柴细碎的声响。爷爷抬头笑了笑，又低头读起手里的书。</p>',mood:'读了一页书，心也静了下来'},
 {id:'tea',x:8,z:14.1,y:0,title:'坐下喝一杯茶',hint:'庭院茶席 · 热茶刚好',type:'一盏茶的时间',heading:'晚风，和一杯温热的茶',body:'<p>你在茶席旁坐下，端起青瓷杯。温热的茶香散开，池塘的水声在远处响起。</p><p class="quote">今天也辛苦了。慢一点，再慢一点。</p>',mood:'喝过一杯茶，身心舒展'},
 {id:'plant',x:15,z:16.9,y:0,title:'在花圃种一株花',hint:'庭院花圃 · 亲手种下小小期待',type:'花园日记',heading:'让花园再多一点颜色',body:'<p>你松了松土，种下花苗，浇上一点水。奶奶在旁边提醒你：“每天来看看，别浇太多。”</p><p>新种的花已经出现在花圃中。你可以继续种下更多花。</p>',mood:'种下了一点新的期待'},
 {id:'fish',x:-5,z:13.55,y:0,title:'投喂锦鲤，看看乌龟',hint:'锦鲤池 · 鱼儿会游过来',type:'池塘边',heading:'水面下的小小邻居',body:'<p>你撒下一把鱼粮，锦鲤慢慢聚拢过来，金色的尾鳍划出一道道涟漪。石头上的乌龟正在晒太阳。</p>',mood:'鱼儿吃饱了，水面泛起涟漪'},
 {id:'cook',x:-3.5,z:-14.8,y:0,title:'和妻子聊聊晚餐',hint:'厨房 · 今晚一起吃饭',type:'厨房里的对话',heading:'“回来啦？再等一会儿。”',body:'<p>妻子正在料理台前准备晚餐。你帮她递过碗，她笑着说：“今天做了大家爱吃的，待会儿叫孩子洗手吃饭。”</p>',mood:'帮忙准备了晚餐'},
 {id:'rest',x:-7,z:-10.8,y:3.6,title:'在卧室休息片刻',hint:'二层主卧 · 远离喧闹',type:'休息片刻',heading:'属于自己的安静角落',body:'<p>柔软的床品、温暖的木色和窗外的晚霞。你坐在床边，伸了个懒腰。</p>',mood:'休息了一会儿，精神焕发'},
 {id:'kid',x:0,z:-8.9,y:3.6,title:'看看孩子的积木',hint:'二层儿童房 · 小小建筑师',type:'小小世界',heading:'一座还没完成的城堡',body:'<p>地毯上散落着彩色积木。孩子给你留了个位置，等吃完饭再一起完成这座城堡。</p>',mood:'发现了孩子的小小世界'}
];
function flowers(){if(planted>=12){toast('这块花圃已经种满了，来欣赏一下吧。');return false;}const g=new T.Group();const x=14.35+(planted%3)*.65,z=18+Math.floor(planted/3)*.62;for(let i=0;i<5;i++){const stem=new T.Mesh(new T.CylinderGeometry(.018,.025,.5,5),new T.MeshStandardMaterial({color:0x648448}));stem.position.set(x+Math.sin(i)*.1,.65,z+Math.cos(i)*.1);g.add(stem);const flower=new T.Mesh(new T.SphereGeometry(.105,8,6),new T.MeshStandardMaterial({color:[0xe3b0a4,0xe7d799,0xbba1ce][planted%3]}));flower.position.copy(stem.position);flower.position.y=.95;flower.scale.y=.55;g.add(flower);}spatialRoot.add(g);bloomGroups.push(g);planted++;return true;}
function openDialog(a){keys.clear();active=true;$('modalType').textContent=a.type;$('modalTitle').textContent=a.heading;$('modalBody').innerHTML=a.body;$('modalDone').textContent='继续散步';$('modal').showModal();$('mood').textContent=a.mood||'闲庭漫步';}
let roofPlanted=0;
function roofFlowers(){if(roofPlanted>=8){toast('天台这块花圃已经种满了。');return false;}const x=2.6+(roofPlanted%2)*.55,z=-12.6+Math.floor(roofPlanted/2)*.35;const g=new T.Group();const stem=new T.Mesh(new T.CylinderGeometry(.016,.018,.45,6),new T.MeshStandardMaterial({color:0x647a4e}));stem.position.set(x,7.95,z);g.add(stem);const bloom=new T.Mesh(new T.SphereGeometry(.12,10,8),new T.MeshStandardMaterial({color:0xe1a8b0}));bloom.position.set(x,8.2,z);bloom.scale.y=.55;g.add(bloom);spatialRoot.add(g);roofPlanted++;return true;}
function playKtv(){const ctx=new(window.AudioContext||window.webkitAudioContext)();ctx.resume();[262,330,392,330,294,349,440,349,262,330,392,523,440,392,330,262].forEach((hz,i)=>{const osc=ctx.createOscillator(),gain=ctx.createGain(),t=ctx.currentTime+i*.32;osc.type='sine';osc.frequency.value=hz;gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.075,t+.025);gain.gain.exponentialRampToValueAtTime(.001,t+.3);osc.connect(gain);gain.connect(ctx.destination);osc.start(t);osc.stop(t+.31);});setTimeout(()=>ctx.close(),6000);}
function interact(){if(!nearest||$('modal').open)return;const a=nearest;if(DOORS.some(d=>d.id===a.id)){if(toggleDoor(a.id,pos)){const d=DOORS.find(d=>d.id===a.id);toast(d.name+(d.open?'正在打开':'正在关闭'));}else toast('请稍微退后，再关闭门');return;}if(a.id==='roofplant'&&!roofFlowers())return;if(a.id==='rooftea')setPosture('sit');if(a.id==='ktv')playKtv();if(a.id==='tv'){const m=world.mats['电视画面'];m.color.setHex(m.color.getHex()===0x739591?0xbe9470:0x739591);m.emissive.copy(m.color).multiplyScalar(.4);}if(a.id==='game')world.mats['电竞屏幕'].emissiveIntensity=1.2;if(a.id==='plant'&&!flowers())return;if(a.id==='fish')fedUntil=elapsed+25;if(a.id==='dog'){dogPetUntil=elapsed+15;toast('豆豆和团团开心地摇起了尾巴，跟着你一起散步。');return;}if(a.id==='tea'||a.id==='read'){player.legs.forEach(l=>{l.rotation.x=-1.25;l.lower.rotation.x=1.25;});player.arms.forEach(l=>l.rotation.x=-1);player.g.position.set(a.id==='tea'?8:-17,-.10,a.id==='tea'?13.2:2.1);player.g.rotation.y=Math.PI;}openDialog(a);}
function setPosture(type){
 if(jump.height>0)return;
 if(type==='stand'||posture===type){posture='stand';anchor=null;player.g.rotation.x=0;player.g.position.copy(pos);$('mood').textContent='闲庭漫步';return;}
 const options=world.seats.filter(a=>a.type===type&&Math.abs(a.y-pos.y)<.5&&Math.hypot(a.x-pos.x,a.z-pos.z)<3.3);
 const seat=options.sort((a,b)=>Math.hypot(a.x-pos.x,a.z-pos.z)-Math.hypot(b.x-pos.x,b.z-pos.z))[0];
 posture=type;keys.clear();anchor=seat?{...seat}:{x:pos.x,z:pos.z,y:pos.y,rotation:player.g.rotation.y,type,ground:true};
 $('mood').textContent=type==='sit'?'坐下歇一会儿':'躺下来，看看天空';toast(type==='sit'?'已坐下 · 按 R 或再次按 C 起身':'已躺下 · 按 R 或再次按 L 起身');
}
$('sitBtn').onclick=()=>setPosture('sit');$('lieBtn').onclick=()=>setPosture('lie');$('jumpBtn').onclick=()=>{if(posture!=='stand')setPosture('stand');startJump(jump);};
$('birdBtn').onclick=()=>{mode=mode===2?0:2;updateView();};
$('roofBtn').onclick=()=>{world.roofs.visible=!world.roofs.visible;$('roofBtn').textContent=world.roofs.visible?'隐藏屋顶':'显示屋顶';renderer.shadowMap.needsUpdate=true;};
const adaptive=new AdaptiveQuality();adaptive.setMode(DEFAULT_QUALITY);let quality=PROFILES.balanced,lastShadow=-Infinity,lastMetrics=0;
renderer.info.autoReset=false;
function applyQuality(tier){
 quality=PROFILES[tier];fx.setQuality(quality);realism?.setQuality(quality);
 if(sun.shadow.mapSize.x!==quality.shadowSize){sun.shadow.map?.dispose();sun.shadow.map=null;sun.shadow.mapPass?.dispose();sun.shadow.mapPass=null;sun.shadow.mapSize.set(quality.shadowSize,quality.shadowSize);}
 renderer.shadowMap.needsUpdate=true;lastShadow=-Infinity;
 $('qualityBtn').textContent=(adaptive.mode==='auto'?'自动：':'画质：')+quality.name;
}
$('qualityBtn').onclick=()=>{const modes=['auto','flow','balanced','high'];const next=modes[(modes.indexOf(adaptive.mode)+1)%modes.length];applyQuality(adaptive.setMode(next));toast(next==='auto'?'自动调节画质，优先保持流畅':'已切换'+quality.name+'画质');};
applyQuality(DEFAULT_QUALITY);
Object.defineProperty(window,'mansionPerformance',{configurable:true,get:()=>({fps:Math.round(adaptive.fps),mode:adaptive.mode,quality:quality.name,drawCalls:renderer.info.render.calls,renderedTriangles:renderer.info.render.triangles,vegetation:realism?.vegetation.stats})});
function updateView(){if(mode!==2){world.roofs.visible=true;$('roofBtn').textContent='隐藏屋顶';}document.body.dataset.view=mode===2?'bird':'walk';$('viewBtn').querySelector('span').textContent=['第三人称','第一人称','鸟瞰全景'][mode];$('birdBtn').textContent=mode===2?'进入漫游':'鸟瞰全景';$('roofBtn').classList.toggle('hidden',mode!==2);}
function closeDialog(){$('modal').close();active=false;keys.clear();setPosture('stand');player.g.position.copy(pos);}
$('closeModal').onclick=closeDialog;$('modalDone').onclick=closeDialog;$('modal').addEventListener('cancel',e=>{e.preventDefault();closeDialog();});$('interactBtn').onclick=interact;
$('helpBtn').onclick=()=>openDialog({type:'如何在家中漫步',heading:'随心走走，不必着急',body:'<p><b>W A S D / 方向键</b>：相对镜头方向移动<br><b>按住鼠标拖动</b>：环顾四周<br><b>鼠标滚轮</b>：调整跟随距离<br><b>空格</b>：跳跃　<b>C / L / R</b>：坐下 / 躺下 / 起身<br><b>B</b>：鸟瞰全景，拖动旋转、滚轮缩放、WASD 平移<br><b>Shift</b>：奔跑　<b>V</b>：切换视角<br><b>E</b>：在提示出现时互动<br><b>Esc</b>：关闭互动</p><p>从庭院进入后方主宅，东侧窄楼梯可以步行上二楼，从二楼北侧转到相邻楼梯可上天台。西侧庭院带路牌的楼梯通向地下室；出南门沿集市前行到河岸。左右两翼的入口都朝向庭院前方。手机可使用左下角方向键，拖动场景转动视角。</p>'});
function changeView(){mode=(mode+1)%3;updateView();$('viewBtn').querySelector('span').textContent=['第三人称','第一人称','鸟瞰全景'][mode];toast(['第三人称 · 拖动鼠标环顾','第一人称 · 适合室内探索','鸟瞰全景 · 拖动旋转，滚轮缩放，方向键平移'][mode]);}
$('viewBtn').onclick=changeView;
const originalLights=new Map();scene.traverse(o=>{if(o.isPointLight)originalLights.set(o,o.intensity);});
function applyAtmosphere(){const wet=weatherSystem.kind==='rain',snowy=weatherSystem.kind==='snow';sun.intensity=night?.32:wet?.85:snowy?1.5:2.4;hemi.intensity=night?.5:.8;scene.backgroundIntensity=night?.2:wet?.38:.65;scene.environmentIntensity=night?.32:wet?.42:.62;renderer.toneMappingExposure=night?1.15:.98;sky.material.uniforms.top.value.set(night?'#203449':wet?'#647781':snowy?'#b8cbd2':'#739dba');sky.material.uniforms.bottom.value.set(night?'#627484':wet?'#a0afb0':'#efd0a1');scene.fog.color.set(night?0x526576:wet?0x9eaeb2:snowy?0xcbd8dc:0xaab7a2);scene.fog.density=snowy?.012:wet?.009:.006;sunDisc.visible=!wet&&!snowy;sunDisc.material.color.set(night?0xe2ecff:0xffe4ad);originalLights.forEach((value,l)=>l.intensity=value*(night?1.5:1));$('timeLabel').textContent=night?'入夜 · 19:30':'傍晚 · 17:40';$('weatherLabel').textContent=WEATHER_NAMES[weatherSystem.kind]+' / '+(night?'灯火可亲':'宜归家');renderer.shadowMap.needsUpdate=true;}
$('dayBtn').onclick=()=>{night=!night;applyAtmosphere();};$('weatherSelect').onchange=e=>{weatherSystem.set(e.target.value);applyAtmosphere();toast('已切换'+WEATHER_NAMES[e.target.value]);};
const guide=createGuide({dialog:$('guideDialog'),host:$('guideScene'),list:$('guidePlaces'),tabs:$('guideTabs'),onOpen:()=>{active=true;keys.clear();drag=false;},onClose:()=>{active=false;keys.clear();adaptive.reset();},onTeleport:d=>{
 if(!canMove(d.x,d.z,d.y,d.y)){toast('该落点暂不可通行，请选择相邻地点');return;}pos.set(d.x,d.y,d.z);posture='stand';anchor=null;jump.height=0;jump.velocity=0;mode=0;keys.clear();player.g.position.copy(pos);player.g.rotation.x=0;camera.position.set(d.x*PLAN_SCALE,d.y+2.2,d.z*PLAN_SCALE+3);yaw=0;pitch=.24;updateView();renderer.shadowMap.needsUpdate=true;toast('已到达'+d.name);
}});
$('mapExpand').onclick=$('guideBtn').onclick=guide.open;$('mapExpand').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();guide.open();}};
$('homeBtn').onclick=()=>{pos.set(0,0,19);yaw=.12;pitch=.24;mode=0;posture='stand';anchor=null;jump.height=0;jump.velocity=0;updateView();$('viewBtn').querySelector('span').textContent='第三人称';keys.clear();toast('已回到庭院入口');};
// All ambience is synthesized locally; no audio is fetched or played without a click.
let audioCtx,audioGain,audioEnabled=false;
$('soundBtn').onclick=()=>{if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)();audioGain=audioCtx.createGain();audioGain.gain.value=0;audioGain.connect(audioCtx.destination);const buffer=audioCtx.createBuffer(1,audioCtx.sampleRate*4,audioCtx.sampleRate);const arr=buffer.getChannelData(0);let last=0;for(let i=0;i<arr.length;i++){last=(last+(Math.random()*2-1)*.025)/1.02;arr[i]=last;}const src=audioCtx.createBufferSource();src.buffer=buffer;src.loop=true;const filter=audioCtx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=800;src.connect(filter);filter.connect(audioGain);src.start();}audioEnabled=!audioEnabled;audioCtx.resume();audioGain.gain.setTargetAtTime(audioEnabled?.7:0,audioCtx.currentTime,.3);$('soundBtn').querySelector('span').textContent=audioEnabled?'声音已开启':'环境声音';};
addEventListener('keydown',e=>{if($('modal').open||$('guideDialog').open)return;if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();keys.add(e.code);if(e.repeat)return;if(e.code==='KeyE')interact();if(e.code==='KeyV')changeView();if(e.code==='KeyB'){mode=mode===2?0:2;updateView();}if(e.code==='Space'&&mode!==2){setPosture('stand');startJump(jump);}if(e.code==='KeyC')setPosture('sit');if(e.code==='KeyL')setPosture('lie');if(e.code==='KeyR')setPosture('stand');});addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',()=>{keys.clear();drag=false;});document.addEventListener('visibilitychange',()=>{keys.clear();drag=false;adaptive.reset();renderer.shadowMap.needsUpdate=true;});
renderer.domElement.addEventListener('pointerdown',e=>{drag=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId);});renderer.domElement.addEventListener('pointermove',e=>{if(!drag)return;yaw-=(e.clientX-lastX)*.005;if(mode===2)birdPitch=T.MathUtils.clamp(birdPitch+(e.clientY-lastY)*.004,.25,1.48);else pitch=T.MathUtils.clamp(pitch+(e.clientY-lastY)*.004,-.35,.85);lastX=e.clientX;lastY=e.clientY;});renderer.domElement.addEventListener('pointerup',()=>drag=false);renderer.domElement.addEventListener('pointercancel',()=>drag=false);renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();if(mode===2)birdDistance=T.MathUtils.clamp(birdDistance+e.deltaY*.035,22,110);else distance=T.MathUtils.clamp(distance+e.deltaY*.005,2,9);},{passive:false});renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());
for(const b of document.querySelectorAll('[data-key]')){b.onpointerdown=e=>{e.preventDefault();keys.add(b.dataset.key);b.setPointerCapture(e.pointerId);};b.onpointerup=b.onpointercancel=()=>keys.delete(b.dataset.key);}
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);fx.resize(innerWidth,innerHeight);});
// Camera ray against architectural solids prevents following through exterior walls.
const cameraWalls=solids.map(s=>new T.Box3(new T.Vector3((s.x1-.1)*PLAN_SCALE,s.y,(s.z1-.1)*PLAN_SCALE),new T.Vector3((s.x2+.1)*PLAN_SCALE,s.y+s.h,(s.z2+.1)*PLAN_SCALE)));
const cameraRay=new T.Ray(),cameraHit=new T.Vector3(),cameraDelta=new T.Vector3();
function clipCamera(target,desired){cameraDelta.subVectors(desired,target);const length=cameraDelta.length();if(length<.001)return desired;cameraRay.set(target,cameraDelta.clone().normalize());let distance=length;for(const wall of cameraWalls){if(cameraRay.intersectBox(wall,cameraHit)){const d=cameraHit.distanceTo(target);if(d>.12)distance=Math.min(distance,Math.max(.08,d-.18));}}return target.clone().addScaledVector(cameraDelta,distance/length);}
const mapCtx=$('map').getContext('2d');
function mapDraw(){const c=mapCtx;c.clearRect(0,0,240,224);c.save();c.translate(120,63);const sc=2.8;const rect=(x,z,w,d,col)=>{c.fillStyle=col;c.fillRect((x-w/2)*sc,(z-d/2)*sc,w*sc,d*sc);};rect(0,5,66,50,'#3e5548');rect(0,40,10,20,'#777970');rect(0,53,68,7,'#568b8d');rect(-16,-13.5,10,11,'#9c9d81');rect(0,-11,22,14,'#9c9d81');rect(-16,-.5,10,15,'#9c9d81');rect(16,-.5,10,15,'#9c9d81');rect(0,0,22,8,'#65705b');rect(20.5,11,7,16,'#568b8d');c.fillStyle='#6a9a92';c.beginPath();c.ellipse(-5*sc,10*sc,4.1*sc,2.7*sc,0,0,7);c.fill();rect(8,12,7,4,'#89785e');rect(13.5,19,5.2,3,'#79905a');rect(9.75,-10.25,1.5,8.5,'#c8b38a');rect(-23.5,-12,2,10,'#c8b38a');c.font='11px sans-serif';c.textAlign='center';c.fillStyle='#263f33';c.fillText(pos.y<0?'地下一层':pos.y>6?'屋顶花园':'主宅 · 二层',0,-12*sc);c.fillText('集市',0,40*sc);c.fillText('河岸',0,49*sc);c.fillText('书房',-16*sc,0);c.fillText('客餐厅',16*sc,0);c.fillStyle='#e7e7d2';c.fillText('茶席',8*sc,12*sc+4);c.fillText('鱼塘',-5*sc,10*sc+4);c.fillText('花圃',13.5*sc,19*sc+4);for(const a of [wife,child,grandpa,grandma]){c.fillStyle='#dfb890';c.beginPath();c.arc(a.g.position.x*sc,a.g.position.z*sc,2.6,0,7);c.fill();}c.translate(pos.x*sc,pos.z*sc);c.rotate(-yaw);c.fillStyle='#f5edcf33';c.beginPath();c.moveTo(0,0);c.lineTo(-8,-15);c.lineTo(8,-15);c.closePath();c.fill();c.fillStyle='#fff7da';c.beginPath();c.arc(0,0,4,0,7);c.fill();c.restore();}
function placeUpdate(){let name='庭院',desc='树影、水声，还有家人的陪伴。',floor=pos.y>3?'二层':'一层';if(pos.y<-.2){floor='地下一层';name=pos.x<-22?'地下室楼梯':pos.z<-13?(pos.x<-18?'储物间':'电竞房'):(pos.x<-18?'KTV':'地下影音客厅');desc='沿楼梯下到底部，再从东侧进入各个房间。';}else if(pos.y>6.95){floor='天台';name='天台花园与茶席';desc='坐下喝茶，种花，俯瞰院外街道与河岸。';}else if(pos.y>3.85){name='天台楼梯';floor='二层 → 天台';desc='继续向南走到天台平台。';}else if(pos.y>3){name=pos.x<-3?'主卧':pos.x<3?'儿童房':'二层卫浴';desc='暖木、亚麻与安静的私人时光。';}else if(pos.y>.2){name='楼梯';desc='拾级而上，去二楼看看。';}else if(pos.z<-4&&Math.abs(pos.x)<11){name=pos.x<-3?'开放式厨房':'主宅起居厅';desc='东侧窄木楼梯通往二层，左右通道连接书房与客厅。';}else if(pos.x> -21&&pos.x< -13&&pos.z>16&&pos.z<24){name='车库';desc='越野车停在这里，车道通向庭院南门。';}else if(pos.z>46){name='河畔步道';desc='沿河散步，身后是热闹的小集市。';}else if(pos.z>30){name='乡间集市';desc='街道两边有鲜果、点心与花草摊位。';}else if(pos.x<-11&&pos.z< -8){name='西翼会客厅';desc='新增的大空间，会客、阅读与观影。';}else if(pos.x<-11&&pos.z<7){name='暖木书房';desc='书墙、皮椅和一盏不急着熄灭的灯。';}else if(pos.x>11&&pos.z<7){name='客餐厅';desc='相聚的日常，从一顿晚餐开始。';}else if(pos.z>16){name='庭院入口';desc='沿着石径，去看看家人的日常。';}$('place').textContent=name;$('description').textContent=desc;$('floor').textContent=floor+' · '+name;}
let last=performance.now(),frame=0;camera.position.set(0,2.7,19*PLAN_SCALE+5);camera.lookAt(0,1.45,19*PLAN_SCALE);
function animate(now){requestAnimationFrame(animate);const rawDt=(now-last)/1000;last=now;if(document.hidden||$('guideDialog').open)return;const next=adaptive.sample(rawDt);if(next)applyQuality(next);let dt=Math.min(rawDt,.075);elapsed+=dt;frame++;const t=elapsed;
 if(!active){
 let f=(keys.has('KeyW')||keys.has('ArrowUp')?1:0)-(keys.has('KeyS')||keys.has('ArrowDown')?1:0),r=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0);const len=Math.hypot(f,r)||1;
 const speed=(keys.has('ShiftLeft')||keys.has('ShiftRight')?8:4.8)/PLAN_SCALE;
 const dx=(r*Math.cos(yaw)-f*Math.sin(yaw))/len*speed*dt,dz=(-f*Math.cos(yaw)-r*Math.sin(yaw))/len*speed*dt;
 if(mode===2){birdTarget.x=T.MathUtils.clamp(birdTarget.x+dx*2,-34,34);birdTarget.z=T.MathUtils.clamp(birdTarget.z+dz*2,-22,52);}
 else if(posture==='stand'){movePlayer(pos,dx,dz);if(jump.height>0||jump.velocity>0)advanceJump(jump,dt);player.g.position.copy(pos);player.g.position.y+=jump.height;player.g.rotation.x=0;if(f||r){const angle=Math.atan2(dx,dz);player.g.rotation.y+=Math.atan2(Math.sin(angle-player.g.rotation.y),Math.cos(angle-player.g.rotation.y))*Math.min(1,dt*12);}player.animate(t,!!(f||r));}
 if(posture!=='stand'&&anchor){player.g.position.set(anchor.x,anchor.y+(posture==='lie'?(anchor.ground?.22:anchor.outdoor?.7:.99):(anchor.ground?-.72:-.25)),anchor.z);player.g.rotation.y=anchor.rotation;if(posture==='sit'){player.g.rotation.x=0;player.animate(t,false,'sit');player.arms.forEach(a=>a.rotation.x=-.65);}else{player.g.position.x+=Math.sin(anchor.rotation)*.7;player.g.position.z+=Math.cos(anchor.rotation)*.7;player.g.rotation.set(-Math.PI/2,0,anchor.rotation);player.animate(t,false);}}
 }
 const target=(anchor?new T.Vector3(anchor.x,anchor.y,anchor.z):pos.clone()).add(new T.Vector3(0,posture==='lie'?.8:1.45+jump.height,0));target.x*=PLAN_SCALE;target.z*=PLAN_SCALE;let desired;
 if(mode===2){const birdWorld=birdTarget.clone();birdWorld.x*=PLAN_SCALE;birdWorld.z*=PLAN_SCALE;desired=birdWorld.clone().add(new T.Vector3(Math.sin(yaw)*Math.cos(birdPitch)*birdDistance,Math.sin(birdPitch)*birdDistance,Math.cos(yaw)*Math.cos(birdPitch)*birdDistance));camera.position.lerp(desired,1-Math.exp(-dt*7));camera.lookAt(birdWorld);player.g.visible=true;}
 else{const d=mode===1?.12:distance;desired=target.clone().add(new T.Vector3(Math.sin(yaw)*d,mode===1?.12:Math.sin(pitch)*d,Math.cos(yaw)*d));const clipped=clipCamera(target,desired);camera.position.lerp(clipped,1-Math.exp(-dt*12));if(mode===1){camera.position.copy(desired);camera.lookAt(target.clone().add(new T.Vector3(-Math.sin(yaw)*6,-pitch*5,-Math.cos(yaw)*6)));}else camera.lookAt(target);player.g.visible=mode!==1&&camera.position.distanceTo(target)>1;}
 festival.update(dt,weatherSystem.kind==='snow');weatherSystem.update(dt,t,camera);
 for(const swing of world.root.userData.swings){swing.pivot.rotation.x=Math.sin(t*1.6)*(anchor?.swingId===swing.id ? .18 : .035);swing.pivot.updateMatrixWorld(true);if(anchor?.swingId===swing.id){swing.position.set(0,-2.8,0).applyMatrix4(swing.pivot.matrixWorld);swing.position.x/=PLAN_SCALE;swing.position.z/=PLAN_SCALE;player.g.position.copy(swing.position).add(new T.Vector3(0,-.05,0));player.g.rotation.x=swing.pivot.rotation.x;}}
 if(realism)realism.update(now,dt,camera);
 basementLight.visible=pos.y<-.3;vendors.forEach((v,i)=>v.animate(t+i,false,'cook'));
 // Family activities are independent of the player.
 wife.animate(t,false,'cook');wife.g.rotation.y=.3+Math.sin(t*.4)*.1;
 child.g.position.set(-.5+Math.sin(t*.45)*2.6,0,16+Math.cos(t*.45)*1.1);child.g.rotation.y=Math.atan2(Math.cos(t*.45)*2.6,-Math.sin(t*.45)*1.1);child.animate(t,true);ball.position.set(child.g.position.x+Math.sin(child.g.rotation.y)*.7,.23+Math.abs(Math.sin(t*2))*.12,child.g.position.z+Math.cos(child.g.rotation.y)*.7);
 grandpa.animate(t,false,'read');grandpa.legs.forEach(l=>{l.rotation.x=-1.3;l.lower.rotation.x=1.3;});grandma.animate(t,false,'garden');grandma.g.rotation.y=Math.sin(t*.35)*.15;
 dogs.forEach((d,i)=>{if(t<dogPetUntil&&pos.y<.1&&pos.z>7){const a=t+i*3;d.g.position.set(pos.x+Math.sin(a)*1.1,0,pos.z+Math.cos(a)*1.1);d.g.rotation.y=a+Math.PI/2;}else{const a=t*.3+i*2.4;d.g.position.set(3+Math.sin(a)*2,0,8+Math.cos(a)*3.5);d.g.rotation.y=Math.atan2(Math.cos(a)*2,-Math.sin(a)*3.5);}d.animate(t+i);});
 fishes.forEach((f,i)=>{let a=t*(.24+i*.01)+i*.8;const feeding=t<fedUntil;const x=-5+Math.cos(a)*(feeding?1:2.8),z=(feeding?11.6:10)+Math.sin(a)*(feeding?.35:1.65);f.position.set(x,.135+Math.sin(a*3)*.012,z);f.rotation.y=Math.atan2(-Math.sin(a)*(feeding?1:2.8),Math.cos(a)*(feeding?.35:1.65));});
 turtles[0].position.set(-3.1,.25,10.7);turtles[0].rotation.y=.5+Math.sin(t*.15)*.15;turtles[1].position.set(-6.3+Math.sin(t*.07)*.6,.13,9.1+Math.cos(t*.07)*.7);turtles[1].rotation.y=t*.07;
 flames.forEach((f,i)=>{f.scale.y=.65+Math.sin(t*7+i)*.24+Math.sin(t*13+i)*.17;});firelight.intensity=(night?9:6)+Math.sin(t*9)*.8;
 if(frame%6===0){nearest=null;let best=2.15;for(const a of activities){const d=Math.hypot(a.x-pos.x,a.z-pos.z);if(d<best&&Math.abs(pos.y-a.y)<.5){best=d;nearest=a;}}for(const d of dogs){if(pos.y<.1&&d.g.position.distanceTo(pos)<1.6&&!nearest)nearest={id:'dog',title:'摸摸豆豆和团团',hint:'小狗 · 想和你一起散步'};}$('prompt').classList.toggle('hidden',!nearest||active||mode===2);if(nearest){$('actionName').textContent=nearest.title;$('actionHint').textContent=nearest.hint;}mapDraw();placeUpdate();}
 if(now-lastShadow>=quality.shadowInterval){renderer.shadowMap.needsUpdate=true;lastShadow=now;}
 renderer.info.reset();fx.render();
 if(now-lastMetrics>1000){$('qualityBtn').title='点击切换：自动 / 流畅 / 均衡 / 精细；当前 '+Math.round(adaptive.fps)+' 帧/秒';$('frameRate').textContent=Math.round(adaptive.fps)+' 帧/秒';lastMetrics=now;}
}
updateView();
Promise.all([assetReady,realismReady,...textures.map(tex=>tex.image?.complete?Promise.resolve():new Promise(resolve=>{const check=setInterval(()=>{if(tex.image?.complete){clearInterval(check);resolve();}},40);setTimeout(()=>{clearInterval(check);resolve();},6000);} ))]).then(async()=>{for(const o of [...scene.children])spatialRoot.add(o);spatialRoot.scale.set(PLAN_SCALE,1,PLAN_SCALE);scene.add(spatialRoot);
 for(const h of [player,wife,child,grandpa,grandma,...vendors,...dogs]){h.g.scale.x/=PLAN_SCALE;h.g.scale.z/=PLAN_SCALE;}
 weatherSystem.attachWind();applyAtmosphere();realism.update(performance.now(),0,camera);await renderer.compileAsync(scene,camera);$('loading').style.opacity='0';setTimeout(()=>$('loading').remove(),800);globalThis.MANSION_ASSETS={};last=performance.now();adaptive.reset();toast('欢迎回家 · 当前为流畅画质，WASD 漫步，导览地图可直接传送。');requestAnimationFrame(animate);}).catch(error=>{console.error(error);$('loading').innerHTML='<h2>模型未能载入</h2><p>请重新打开完整的 index.html 文件。</p>';});
