import * as T from 'three';
import { createPerson } from './world.ts';
import {
  canWalk,
  moveWithCollision,
  moveAroundPeople,
  type Obstacle,
} from './navigation.ts';
type Room = {
  x: number;
  z: number;
  name: string;
  yaw: number;
  width: number;
  depth: number;
};
type Role =
  | '小二'
  | '掌柜'
  | '食客'
  | '房客'
  | '买家'
  | '摊主'
  | '放烟花的街坊';
export function createTownLife(
  rooms: Room[],
  obstacles: Obstacle[],
  existingPeople: { x: number; z: number }[] = [],
) {
  const root = new T.Group();
  root.name = '市井生活';
  const cast: {
    person: ReturnType<typeof createPerson>;
    role: Role;
    x: number;
    z: number;
    yaw: number;
    phase: number;
    room?: Room;
  }[] = [];
  const material = (color: string) =>
    new T.MeshStandardMaterial({ color, roughness: 0.88 });
  const wood = material('#77583c'),
    paper = material('#d6c9ad'),
    food = material('#b88844');
  function part(
    parent: T.Object3D,
    geo: T.BufferGeometry,
    mat: T.Material,
    x: number,
    y: number,
    z: number,
  ) {
    const m = new T.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  function actor(x: number, z: number, yaw: number, role: Role, room?: Room) {
    if (
      !canWalk(x, z, obstacles, 0.25) ||
      existingPeople.some((p) => Math.hypot(p.x - x, p.z - z) < 0.75)
    )
      return;
    const i = cast.length,
      p = createPerson(
        ['#5d7773', '#8a6650', '#ac8980', '#818457', '#655976', '#af8f5f'][
          i % 6
        ],
        '#dbceb6',
        0.76 + (i % 4) * 0.025,
      );
    p.root.position.set(x, 0, z);
    p.root.rotation.y = yaw;
    root.add(p.root);
    if (role === '小二') {
      part(p.root, new T.BoxGeometry(0.43, 0.64, 0.04), paper, 0, 0.98, 0.31);
      part(
        p.arms[0],
        new T.CylinderGeometry(0.29, 0.29, 0.035, 20),
        wood,
        0,
        -0.45,
        0.25,
      );
      for (let n = 0; n < 3; n++)
        part(
          p.arms[0],
          new T.CylinderGeometry(0.065, 0.04, 0.095, 10),
          paper,
          -0.14 + n * 0.14,
          -0.38,
          0.25,
        );
    }
    if (role === '掌柜') {
      part(
        p.root,
        new T.CylinderGeometry(0.19, 0.21, 0.14, 16),
        material('#2e302c'),
        0,
        2.16,
        0,
      );
    }
    if (role === '房客' || role === '买家') {
      part(
        p.arms[1],
        new T.SphereGeometry(0.18, 12, 10),
        material('#9b885c'),
        0.1,
        -0.65,
        0.1,
      );
    }
    if (role === '食客' || role === '摊主') {
      // Compress the lower robe into a seated drape while keeping the upper body anatomical.
      for (const o of p.root.children) {
        if (o === p.skirt || o === p.sash) continue;
        if (o instanceof T.Mesh) o.position.y -= 0.63;
      }
      p.skirt.position.y = 0.32;
      p.skirt.scale.set(1.3, 0.37, 1.2);
      p.sash.visible = false;
      p.arms.forEach((a) => (a.position.y -= 0.63));
      p.legs.forEach((l, j) => {
        l.position.y = 0.19;
        l.rotation.x = -1.1;
        l.rotation.z = j ? -0.5 : 0.5;
      });
      part(
        p.arms[0],
        new T.CylinderGeometry(0.009, 0.009, 0.27, 5),
        wood,
        0,
        -0.5,
        0.16,
      ).rotation.x = -0.5;
    }
    cast.push({ person: p, role, x, z, yaw, phase: i * 1.7, room });
  }
  const local = (r: Room, x: number, z: number) => ({
    x: r.x + x * Math.cos(r.yaw) + z * Math.sin(r.yaw),
    z: r.z - x * Math.sin(r.yaw) + z * Math.cos(r.yaw),
  });
  rooms.forEach((r, i) => {
    const inn = /栈|客|驿|酒|食/.test(r.name);
    if (!inn && i % 5 !== 0) return;
    const place = (x: number, z: number, role: Role, yaw = r.yaw) => {
      const pos = local(r, x, z);
      actor(pos.x, pos.z, yaw, role, r);
    };
    place(-r.width * 0.3, r.depth * 0.24, '掌柜');
    if (inn) {
      place(r.width * 0.25, r.depth * 0.22 - 0.86, '食客', r.yaw);
      place(0, -r.depth * 0.22, '小二');
      place(-r.width * 0.15, -r.depth * 0.3, '房客');
      const table = local(r, r.width * 0.25, r.depth * 0.22);
      part(
        root,
        new T.CylinderGeometry(0.5, 0.5, 0.07, 20),
        wood,
        table.x,
        0.64,
        table.z,
      );
      part(
        root,
        new T.CylinderGeometry(0.1, 0.13, 0.6, 10),
        wood,
        table.x,
        0.3,
        table.z,
      );
      for (let j = 0; j < 3; j++)
        part(
          root,
          new T.SphereGeometry(0.12, 10, 8),
          food,
          table.x + Math.cos(j * 2) * 0.25,
          0.73,
          table.z + Math.sin(j * 2) * 0.25,
        );
      obstacles.push({
        x: table.x,
        z: table.z,
        halfX: 0.48,
        halfZ: 0.48,
        height: 0.72,
      });
    } else place(r.width * 0.25, -r.depth * 0.2, '买家');
  });
  const markets = [
    [-3, 7],
    [3, 24],
    [-34, 39],
    [-27, -5],
    [78, 12],
    [54, 55],
    [-68, 19],
    [-47, 58],
  ];
  for (const [x, z] of markets) {
    const rug = part(
      root,
      new T.BoxGeometry(1.7, 0.035, 1.2),
      material('#9d7657'),
      x,
      0.035,
      z,
    );
    rug.rotation.y = 0.1;
    for (let i = 0; i < 12; i++) {
      const m = part(
        root,
        i % 3 === 0
          ? new T.CylinderGeometry(0.085, 0.1, 0.2, 10)
          : new T.SphereGeometry(0.11, 10, 8),
        material(['#b86b37', '#8b9654', '#d2b366'][i % 3]),
        x - 0.6 + (i % 4) * 0.38,
        0.15,
        z - 0.4 + Math.floor(i / 4) * 0.33,
      );
      m.rotation.z = 0.1 * Math.sin(i);
    }
    obstacles.push({ x, z, halfX: 0.82, halfZ: 0.58, height: 0.26 });
    actor(x, z - 0.98, 0, '摊主');
    actor(x + 0.3, z + 1.15, Math.PI, '买家');
  }
  for (const [x, z] of [
    [49, 47],
    [-22, -12],
    [63, -43],
    [-61, 57],
  ]) {
    actor(x + 1.6, z + 0.7, Math.PI, '放烟花的街坊');
    part(root, new T.CylinderGeometry(0.14, 0.18, 0.3, 8), wood, x, 0.15, z);
  }
  const lamps = [
    new T.PointLight('#ffd08d', 0, 12, 2),
    new T.PointLight('#ffd08d', 0, 12, 2),
  ];
  lamps.forEach((l) => root.add(l));
  const dogs: {
    root: T.Group;
    legs: T.Mesh[];
    tail: T.Mesh;
    x: number;
    z: number;
    phase: number;
  }[] = [];
  for (const [i, [x, z]] of [
    [-2, 33],
    [15, -25],
    [-29, 10],
    [49, 16],
    [79, -12],
    [-69, 42],
  ].entries()) {
    const dog = new T.Group(),
      fur = material(i % 2 ? '#c2a078' : '#cbbd9b'),
      dark = material('#302b26');
    root.add(dog);
    dog.position.set(x, 0, z);
    const body = part(dog, new T.SphereGeometry(1, 16, 12), fur, 0, 0.39, 0);
    body.scale.set(0.2, 0.21, 0.37);
    const head = part(dog, new T.SphereGeometry(1, 16, 12), fur, 0, 0.62, 0.28);
    head.scale.set(0.17, 0.17, 0.2);
    const snout = part(
      dog,
      new T.SphereGeometry(1, 12, 10),
      fur,
      0,
      0.56,
      0.44,
    );
    snout.scale.set(0.11, 0.075, 0.13);
    part(dog, new T.SphereGeometry(0.045, 10, 8), dark, 0, 0.58, 0.55);
    for (const side of [-1, 1]) {
      part(
        dog,
        new T.SphereGeometry(0.023, 8, 8),
        dark,
        side * 0.095,
        0.65,
        0.43,
      );
      const ear = part(
        dog,
        new T.ConeGeometry(0.075, 0.19, 10),
        fur,
        side * 0.13,
        0.79,
        0.23,
      );
      ear.rotation.z = side * 0.3;
    }
    const legs: T.Mesh[] = [];
    for (const sx of [-1, 1])
      for (const sz of [-1, 1])
        legs.push(
          part(
            dog,
            new T.CapsuleGeometry(0.045, 0.19, 4, 8),
            fur,
            sx * 0.13,
            0.17,
            sz * 0.24,
          ),
        );
    const tail = part(
      dog,
      new T.CapsuleGeometry(0.04, 0.32, 4, 8),
      fur,
      0,
      0.59,
      -0.4,
    );
    tail.rotation.x = -0.7;
    dogs.push({ root: dog, legs, tail, x, z, phase: i * 2 });
  }
  const castColliders = cast.map((a) => ({
    get x() {
      return a.person.root.position.x;
    },
    get z() {
      return a.person.root.position.z;
    },
    y: 0,
    radius: 0.3,
    height: 1.95,
  }));
  const people = [
    ...cast.map((a) => ({
      get x() {
        return a.person.root.position.x;
      },
      get z() {
        return a.person.root.position.z;
      },
      y: 0,
      radius: 0.3,
      height: a.role === '食客' || a.role === '摊主' ? 1.3 : 1.95,
    })),
    ...dogs.map((d) => ({
      get x() {
        return d.root.position.x;
      },
      get z() {
        return d.root.position.z;
      },
      y: 0,
      radius: 0.28,
      height: 0.8,
    })),
  ];
  return {
    root,
    cast,
    dogs,
    getPeople() {
      return people;
    },
    getInteractions() {
      return cast.map((a) => ({
        x: a.person.root.position.x,
        z: a.person.root.position.z,
        y: 0,
        name: a.role,
        lines:
          a.role === '小二'
            ? ['客官，热茶来啦！', '菜马上就好，您先坐。']
            : a.role === '食客'
              ? ['这碗菌子汤鲜得很。']
              : a.role === '摊主'
                ? ['铺子外也摆一摊，新鲜山货，来挑一挑！']
                : a.role === '买家'
                  ? ['这块扎染配裙子正好，掌柜怎么卖？']
                  : a.role === '房客'
                    ? ['赶路一整天，在这里歇一宿。']
                    : ['欢迎光临，楼里请。'],
      }));
    },
    update(time: number, dt: number, focus: T.Vector3, night = false) {
      const nearbyRooms = rooms
        .slice()
        .sort(
          (a, b) =>
            Math.hypot(a.x - focus.x, a.z - focus.z) -
            Math.hypot(b.x - focus.x, b.z - focus.z),
        );
      lamps.forEach((lamp, i) => {
        const room = nearbyRooms[i];
        lamp.intensity = night ? 12 : 0;
        if (room) lamp.position.set(room.x, 2.4, room.z);
      });
      cast.forEach((a, actorIndex) => {
        const near = a.person.root.position.distanceTo(focus) < 52;
        a.person.root.visible = near;
        if (!near) return;
        const seated = a.role === '食客' || a.role === '摊主';
        a.person.animate(time + a.phase, 0);
        if (seated) {
          a.person.legs.forEach((l, j) => {
            l.rotation.x = -1.1;
            l.rotation.z = j ? -0.5 : 0.5;
          });
          a.person.arms[0].rotation.x =
            -0.75 + Math.sin(time * 2 + a.phase) * 0.2;
        } else if (a.role === '放烟花的街坊') {
          a.person.arms[0].rotation.x =
            (time + a.phase) % 7 < 1.2 ? -1.3 : -0.2;
        } else if (a.role === '小二') {
          a.person.arms[0].rotation.x = -1.0;
          const target = local(
            a.room!,
            0,
            Math.sin(time * 0.45 + a.phase) * a.room!.depth * 0.18,
          );
          const at = a.person.root.position,
            dx = T.MathUtils.clamp(target.x - at.x, -dt * 0.7, dt * 0.7),
            dz = T.MathUtils.clamp(target.z - at.z, -dt * 0.7, dt * 0.7),
            clear = moveAroundPeople(
              at.x,
              at.z,
              0,
              dx,
              dz,
              castColliders,
              0.32,
              castColliders[actorIndex],
            ),
            p = moveWithCollision(
              at.x,
              at.z,
              clear.x - at.x,
              clear.z - at.z,
              obstacles,
            );
          at.x = p.x;
          at.z = p.z;
        } else
          a.person.arms[1].rotation.x =
            -0.4 + Math.sin(time * 1.8 + a.phase) * 0.22;
      });
      dogs.forEach((d) => {
        const at = d.root.position;
        d.root.visible = at.distanceTo(focus) < 55;
        if (!d.root.visible) return;
        const tx = d.x + Math.sin(time * 0.24 + d.phase) * 1.8,
          tz = d.z + Math.cos(time * 0.23 + d.phase) * 1.5,
          dx = T.MathUtils.clamp(tx - at.x, -dt, dt),
          dz = T.MathUtils.clamp(tz - at.z, -dt, dt),
          p = moveWithCollision(at.x, at.z, dx, dz, obstacles);
        at.set(p.x, 0, p.z);
        d.root.rotation.y = Math.atan2(dx, dz);
        d.tail.rotation.z = Math.sin(time * 7 + d.phase) * 0.45;
        d.legs.forEach(
          (l, i) =>
            (l.rotation.x = Math.sin(time * 8 + (i % 2) * Math.PI) * 0.35),
        );
      });
    },
  };
}
