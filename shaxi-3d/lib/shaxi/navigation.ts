import { nearbyObstacles } from './obstacle-index.ts';
export type Roof = {
  rotation: number;
  width: number;
  depth: number;
  base: number;
};
export type Obstacle = {
  x: number;
  z: number;
  halfX: number;
  halfZ: number;
  height?: number;
  bottom?: number;
  roof?: Roof;
};
export const BOUNDS = { minX: -100, maxX: 100, minZ: -105, maxZ: 105 };
export const STOPS = [
  {
    id: 'street',
    name: '青石巷',
    caption: '木窗半开，马铃声远。',
    x: 0,
    z: 18,
    yaw: 0.1,
  },
  {
    id: 'square',
    name: '四方街 · 古戏台',
    caption: '古树浓阴，台上弦音。',
    x: -1,
    z: -21,
    yaw: -0.38,
  },
  {
    id: 'bridge',
    name: '玉津桥',
    caption: '黑潓江畔，山色入水。',
    x: 22,
    z: -21,
    yaw: -Math.PI / 2,
  },
  {
    id: 'market',
    name: '蔬果集市',
    caption: '竹筐盛满山野，叫卖穿过长街。',
    x: -35,
    z: 18,
    yaw: 0.1,
  },
  {
    id: 'courtyard',
    name: '欧阳大院',
    caption: '照壁花窗，一院茶香。',
    x: -39,
    z: -35,
    yaw: 0,
  },
  {
    id: 'temple',
    name: '兴教寺',
    caption: '层檐深处，钟声入云。',
    x: 0,
    z: -56,
    yaw: 0,
  },
  {
    id: 'north',
    name: '北寨门',
    caption: '古道向北，马帮归来。',
    x: 18,
    z: -62,
    yaw: 0,
  },
  {
    id: 'south',
    name: '南寨门',
    caption: '穿过门楼，便是旧时光。',
    x: 0,
    z: 49,
    yaw: 0,
  },
  {
    id: 'bookshop',
    name: '河畔书舍',
    caption: '临水一卷书，等风也等你。',
    x: 51,
    z: -35,
    yaw: 0,
  },
  {
    id: 'orchard',
    name: '田园花径',
    caption: '风吹麦浪，花开有声。',
    x: 51,
    z: 27,
    yaw: 0,
  },
  {
    id: 'peach',
    name: '桃林茶田',
    caption: '春色沿山路，一畦新茶香。',
    x: -77,
    z: -15,
    yaw: 0,
  },
  {
    id: 'academy',
    name: '山间书院',
    caption: '竹影映书窗，朗读声悠长。',
    x: -70,
    z: -72,
    yaw: 0,
  },
  {
    id: 'station',
    name: '南郊驿站',
    caption: '马铃响起，挑担人又上路。',
    x: -50,
    z: 62,
    yaw: 0,
  },
  {
    id: 'bamboo',
    name: '竹林听风',
    caption: '走过江桥，去听竹海的风。',
    x: 51,
    z: 85,
    yaw: 0,
  },
  {
    id: 'eastmarket',
    name: '东岸长街',
    caption: '新开的铺子，刚出锅的点心。',
    x: 82,
    z: 2,
    yaw: 0,
  },
  {
    id: 'pavilion',
    name: '望山亭',
    caption: '凭栏远望，古镇尽在山色中。',
    x: 75,
    z: -78,
    yaw: 0,
  },
  {
    id: 'room-0',
    name: '桃源茶居',
    caption: '推门入室，歇脚听风。',
    x: -82,
    z: -48,
    yaw: 0,
  },
  {
    id: 'room-1',
    name: '听雨客栈',
    caption: '推门入室，歇脚听风。',
    x: -46,
    z: 37,
    yaw: 0,
  },
  {
    id: 'room-2',
    name: '临街书屋',
    caption: '推门入室，歇脚听风。',
    x: 86,
    z: 33,
    yaw: 0,
  },
  {
    id: 'room-3',
    name: '望山小楼',
    caption: '推门入室，歇脚听风。',
    x: 68,
    z: -63,
    yaw: 0,
  },
  {
    id: 'room-4',
    name: '杏花酒肆',
    caption: '推门入室，歇脚听风。',
    x: -82,
    z: -65,
    yaw: 0,
  },
  {
    id: 'room-5',
    name: '云归客栈',
    caption: '推门入室，歇脚听风。',
    x: -58,
    z: -62,
    yaw: 0,
  },
  {
    id: 'room-6',
    name: '青瓷茶坊',
    caption: '推门入室，歇脚听风。',
    x: -58,
    z: -4,
    yaw: 0,
  },
  {
    id: 'room-7',
    name: '白族绣坊',
    caption: '推门入室，歇脚听风。',
    x: -82,
    z: 9,
    yaw: 0,
  },
  {
    id: 'room-8',
    name: '山野药铺',
    caption: '推门入室，歇脚听风。',
    x: -82,
    z: 28,
    yaw: 0,
  },
  {
    id: 'room-9',
    name: '花间饼铺',
    caption: '推门入室，歇脚听风。',
    x: -60,
    z: 30,
    yaw: 0,
  },
  {
    id: 'room-10',
    name: '马帮行舍',
    caption: '推门入室，歇脚听风。',
    x: -63,
    z: 83,
    yaw: 0,
  },
  {
    id: 'room-11',
    name: '南山小栈',
    caption: '推门入室，歇脚听风。',
    x: -36,
    z: 89,
    yaw: 0,
  },
  {
    id: 'room-12',
    name: '栖云茶院',
    caption: '推门入室，歇脚听风。',
    x: -15,
    z: 72,
    yaw: 0,
  },
  {
    id: 'room-13',
    name: '听松琴舍',
    caption: '推门入室，歇脚听风。',
    x: 10,
    z: 77,
    yaw: 0,
  },
  {
    id: 'room-14',
    name: '水岸茶室',
    caption: '推门入室，歇脚听风。',
    x: 63,
    z: 40,
    yaw: 0,
  },
  {
    id: 'room-15',
    name: '东篱客栈',
    caption: '推门入室，歇脚听风。',
    x: 92,
    z: 53,
    yaw: 0,
  },
  {
    id: 'room-16',
    name: '竹里书斋',
    caption: '推门入室，歇脚听风。',
    x: 67,
    z: 60,
    yaw: 0,
  },
  {
    id: 'room-17',
    name: '稻香食肆',
    caption: '推门入室，歇脚听风。',
    x: 89,
    z: 78,
    yaw: 0,
  },
  {
    id: 'room-18',
    name: '花灯工坊',
    caption: '推门入室，歇脚听风。',
    x: 63,
    z: 7,
    yaw: 0,
  },
  {
    id: 'room-19',
    name: '山色茶寮',
    caption: '推门入室，歇脚听风。',
    x: 89,
    z: -47,
    yaw: 0,
  },
  {
    id: 'room-20',
    name: '望月客舍',
    caption: '推门入室，歇脚听风。',
    x: 89,
    z: -65,
    yaw: 0,
  },
] as const;
export function groundHeight(x: number, z: number) {
  if (x >= 25 && x <= 41 && Math.abs(z + 21) < 2.5)
    return 2.7 * Math.sin((Math.PI * (x - 25)) / 16);
  return 0;
}
export function roofHeight(o: Obstacle, x: number, z: number, overhang = true) {
  if (!o.roof) {
    if (Math.abs(x - o.x) <= o.halfX && Math.abs(z - o.z) <= o.halfZ)
      return o.height ?? 2;
    return -Infinity;
  }
  const { rotation, width, depth, base } = o.roof,
    dx = x - o.x,
    dz = z - o.z;
  const lx = dx * Math.cos(rotation) - dz * Math.sin(rotation),
    lz = dx * Math.sin(rotation) + dz * Math.cos(rotation);
  const hw = (width + (overhang ? 1.5 : 0)) / 2,
    hd = depth / 2 + (overhang ? 0.7 : 0);
  if (Math.abs(lx) > hw || Math.abs(lz) > hd) return -Infinity;
  const t = Math.min(1, Math.abs(lz) / (depth / 2 + 0.7));
  return (
    base +
    1.85 * (1 - t) +
    0.43 * t ** 6 +
    0.28 * (Math.abs(lx) / ((width + 1.5) / 2)) ** 8 * t +
    0.13
  );
}
export function canWalk(
  x: number,
  z: number,
  obstacles: Obstacle[],
  radius = 0.38,
) {
  if (x < BOUNDS.minX || x > BOUNDS.maxX || z < BOUNDS.minZ || z > BOUNDS.maxZ)
    return false;
  if (x > 25 && x < 41 && Math.abs(z + 21) > 1.95 - radius) return false;
  return !nearbyObstacles(obstacles, x, z, 0, 0, radius).some(
    (o) =>
      (o.bottom ?? 0) < 1.95 &&
      Math.abs(x - o.x) < o.halfX + radius &&
      Math.abs(z - o.z) < o.halfZ + radius,
  );
}
export function moveWithCollision(
  x: number,
  z: number,
  dx: number,
  dz: number,
  obstacles: Obstacle[],
) {
  const steps = Math.max(1, Math.ceil(Math.hypot(dx, dz) / 0.18));
  for (let i = 0; i < steps; i++) {
    if (canWalk(x + dx / steps, z, obstacles)) x += dx / steps;
    if (canWalk(x, z + dz / steps, obstacles)) z += dz / steps;
  }
  return { x, z };
}
export function regionAt(x: number, z: number) {
  const room = STOPS.findIndex(
    (stop, i) =>
      i >= 16 && Math.abs(x - stop.x) < 3.8 && Math.abs(z - stop.z) < 3.3,
  );
  if (room >= 0) return room;
  if (x < -58) return z < -50 ? 11 : 10;
  if (z > 65) return 13;
  if (x > 64) return z < -50 ? 15 : 14;
  if (z > 54 && x < -18) return 12;
  if (x > 41) return z > 0 ? 9 : 8;
  if (x < -23) return z < -18 ? 4 : 3;
  if (z < -49) return x > 10 ? 6 : 5;
  if (z > 42) return 7;
  return x > 19 ? 2 : z < -15 ? 1 : 0;
}
export type Body = {
  x: number;
  y: number;
  z: number;
  velocityY: number;
  jumps: number;
  grounded: boolean;
};
export function createBody(x: number, z: number): Body {
  return {
    x,
    y: groundHeight(x, z),
    z,
    velocityY: 0,
    jumps: 0,
    grounded: true,
  };
}
export function jump(body: Body) {
  if (body.jumps >= 3) return false;
  body.velocityY = [8, 10.4, 12][body.jumps];
  body.jumps++;
  body.grounded = false;
  return true;
}
// Foot height is the source of truth: surfaces only catch descending bodies.
export function stepBody(
  body: Body,
  dx: number,
  dz: number,
  dt: number,
  obstacles: Obstacle[],
  people: PersonCollider[] = [],
) {
  obstacles = nearbyObstacles(obstacles, body.x, body.z, dx, dz);
  const substeps = Math.max(
    1,
    Math.ceil(Math.max(Math.hypot(dx, dz) / 0.14, dt / 0.012)),
  );
  const delta = dt / substeps;
  for (let i = 0; i < substeps; i++) {
    const oldY = body.y;
    const allowed = (x: number, z: number) => {
      if (!canWalk(x, z, [])) return false;
      if (
        people.some(
          (p) =>
            body.y < p.y + p.height &&
            body.y + 1.95 > p.y &&
            Math.hypot(x - p.x, z - p.z) < 0.32 + p.radius,
        )
      )
        return false;
      return !obstacles.some((o) => {
        if (body.y + 1.95 <= (o.bottom ?? 0)) return false;
        if (
          Math.abs(x - o.x) >= o.halfX + 0.3 ||
          Math.abs(z - o.z) >= o.halfZ + 0.3
        )
          return false;
        const sx = Math.max(o.x - o.halfX, Math.min(o.x + o.halfX, x)),
          sz = Math.max(o.z - o.halfZ, Math.min(o.z + o.halfZ, z));
        const top = roofHeight(o, sx, sz);
        return body.y + (body.grounded ? 0.24 : 0.025) < top;
      });
    };
    if (allowed(body.x + dx / substeps, body.z)) body.x += dx / substeps;
    if (allowed(body.x, body.z + dz / substeps)) body.z += dz / substeps;
    let floor = groundHeight(body.x, body.z);
    for (const o of obstacles) {
      const h = roofHeight(o, body.x, body.z);
      if (h <= oldY + (body.grounded ? 0.3 : 0.02)) floor = Math.max(floor, h);
    }
    if (body.grounded && Math.abs(oldY - floor) < 0.32) {
      body.y = floor;
      continue;
    }
    body.grounded = false;
    body.velocityY -= 13.2 * delta;
    body.y += body.velocityY * delta;
    if (body.velocityY > 0)
      for (const o of obstacles) {
        if (o.bottom === undefined || oldY + 1.95 > o.bottom + 0.001) continue;
        if (
          Math.abs(body.x - o.x) < o.halfX + 0.26 &&
          Math.abs(body.z - o.z) < o.halfZ + 0.26 &&
          body.y + 1.95 >= o.bottom
        ) {
          body.y = o.bottom - 1.95;
          body.velocityY = 0;
        }
      }
    if (body.velocityY <= 0 && body.y <= floor) {
      body.y = floor;
      body.velocityY = 0;
      body.grounded = true;
      body.jumps = 0;
    }
  }
}

export type PersonCollider = {
  x: number;
  z: number;
  y: number;
  radius: number;
  height: number;
};
export function moveAroundPeople(
  x: number,
  z: number,
  y: number,
  dx: number,
  dz: number,
  people: PersonCollider[],
  radius = 0.32,
  exclude?: PersonCollider,
) {
  const steps = Math.max(1, Math.ceil(Math.hypot(dx, dz) / 0.1));
  const allowed = (nx: number, nz: number) =>
    !people.some(
      (p) =>
        p !== exclude &&
        y < p.y + p.height &&
        y + 1.9 > p.y &&
        Math.hypot(nx - p.x, nz - p.z) < radius + p.radius,
    );
  for (let i = 0; i < steps; i++) {
    if (allowed(x + dx / steps, z)) x += dx / steps;
    if (allowed(x, z + dz / steps)) z += dz / steps;
  }
  return { x, z };
}
