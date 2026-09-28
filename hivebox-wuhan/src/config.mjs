// 空间单位为米，正 Z 指向广场，建筑和柜机正面均朝向正 Z。
export const LOCKER = {x: -14, z: 3, width: 8.6, height: 3.5, depth: 1.05};
export const TERMINAL = {x: -14, z: 5.2};
export const FIREWORK = {x: 5, z: 13};
export const SPAWN = {x: 0, z: 25};
export const RING_RADIUS = 4.6;
export const FESTIVAL_DURATION = 10;
export const FUSE_DURATION = 3.2;
export const LAUNCH_DURATION = 1.3;
export const GREETING = '丰巢程序员节日快乐';
export const PEOPLE = [
  {name:'王金枝', female:true, shirt:0xeee7d9, pants:0x394c61, hair:0x29201d, style:'ponytail', accent:0xb3ce42, x:SPAWN.x, z:SPAWN.z, yaw:Math.PI},
  {name:'李萌', female:false, shirt:0x8ca698, pants:0x283642, hair:0x1a2026, style:'short', accent:0xe3e7dc, x:-11.3, z:6.4, yaw:-1.6},
  {name:'林福君', female:true, shirt:0xb88879, pants:0xeee0c8, hair:0x483127, style:'bob', accent:0xffe6c6, x:-13, z:7.3, yaw:1.7},
  {name:'钟知慧', female:true, shirt:0x7f9cbd, pants:0x263f50, hair:0x242023, style:'long', accent:0xe7e8e0, x:-16, z:6.1, yaw:.6},
  {name:'张凯', female:false, shirt:0xeee2c4, pants:0x506175, hair:0x30261f, style:'short', accent:0xa67844, x:2.8, z:3.2, yaw:-.8, glasses:true},
  {name:'尹新月', female:true, shirt:0xd5bac7, pants:0x656576, hair:0x3a2720, style:'ponytail', accent:0xe5eee7, x:4.5, z:4.2, yaw:-2},
  {name:'艾山', female:false, shirt:0x424e66, pants:0x9a9589, hair:0x262122, style:'short', accent:0xf1e5d4, x:-3.2, z:2.9, yaw:.8},
  {name:'邱菊', female:true, shirt:0xb3ba82, pants:0xeee6d7, hair:0x312420, style:'bob', accent:0xeee8d2, x:-1.6, z:4.1, yaw:-2.2}
];
// 碰撞范围与模型共用，保持自动行走、键盘和触屏的空间边界一致。
export const OBSTACLES = [
  {x:-19.8,z:-14.5,w:39.6,d:14.5},
  {x:LOCKER.x-LOCKER.width/2-.15,z:LOCKER.z-.7,w:LOCKER.width+.3,d:1.5},
  {x:4.45,z:12.45,w:1.1,d:1.1},
  ...[-25,25].flatMap(x=>[4,17,29].map(z=>({x:x-1.1,z:z-1.1,w:2.2,d:2.2})))
];
