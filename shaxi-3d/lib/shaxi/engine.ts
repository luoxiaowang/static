import { indexObstacles, nearbyObstacles } from './obstacle-index';
import * as T from 'three';
import { createTownLife } from './town-life';
import { createFireworks } from './fireworks';
import { mapPlaces, type MapPlace } from './map-data';
import { getSkyTexture, getSunDirection } from './surfaces';
import { buildWorld, createPerson } from './world';
import {
  groundHeight,
  moveWithCollision,
  regionAt,
  STOPS,
  createBody,
  stepBody,
  jump,
  roofHeight,
  BOUNDS,
  moveAroundPeople,
} from './navigation';
import { createResident, type Role } from './crowd';
import { createHeroine } from './heroine';
import { createAtmosphere, type Weather } from './atmosphere';

export type SceneState = {
  region: number;
  position: { x: number; z: number };
  steps: number;
  moving: boolean;
  sitting: boolean;
  jumps: number;
  airborne: boolean;
  altitude: number;
  nearby: string;
  dialogue: string;
  speaker: string;
};
export type WorldEngine = ReturnType<typeof mountWorld>;
export function mountWorld(
  container: HTMLDivElement,
  mapCanvas: HTMLCanvasElement,
  onState: (s: SceneState) => void,
  onError: (message: string) => void,
) {
  const renderer = new T.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.domElement.setAttribute(
    'aria-label',
    '沙溪古镇三维场景：使用方向键或 WASD 行走，拖动场景转动视角',
  );
  renderer.domElement.setAttribute('role', 'img');
  container.appendChild(renderer.domElement);
  const scene = new T.Scene();
  scene.background = new T.Color('#b9d1cf');
  const capturedSky = getSkyTexture();
  const pmrem = new T.PMREMGenerator(renderer);
  const environment = capturedSky
    ? pmrem.fromEquirectangular(capturedSky)
    : null;
  pmrem.dispose();
  scene.environment = environment?.texture ?? null;
  scene.environmentIntensity = 0.65;
  scene.fog = new T.FogExp2('#c1cdb7', 0.0095);
  const camera = new T.PerspectiveCamera(
    52,
    container.clientWidth / container.clientHeight,
    0.1,
    400,
  );
  const ambient = new T.HemisphereLight('#e1eee3', '#6a6552', 0.65);
  scene.add(ambient);
  const sun = new T.DirectionalLight('#fff1dc', 2.7);
  const solarDirection = getSunDirection();
  sun.position.copy(solarDirection).multiplyScalar(52);
  sun.castShadow = true;
  sun.shadow.mapSize.set(
    window.innerWidth < 700 ? 2048 : 3072,
    window.innerWidth < 700 ? 2048 : 3072,
  );
  Object.assign(sun.shadow.camera, {
    left: -35,
    right: 35,
    top: 35,
    bottom: -35,
    near: 0.5,
    far: 110,
  });
  sun.shadow.bias = -0.00025;
  sun.shadow.normalBias = 0.06;
  sun.shadow.radius = 3;
  scene.add(sun);
  scene.add(sun.target);
  const world = buildWorld();
  scene.add(world.root);
  const player = createHeroine();
  const body = createBody(STOPS[0].x, STOPS[0].z);
  const atmosphere = createAtmosphere(scene);
  let weather: Weather = 'clear';
  player.root.position.set(STOPS[0].x, 0, STOPS[0].z);
  player.root.rotation.y = Math.PI;
  scene.add(player.root);
  const residents = [
    { x: 2.5, z: -25, c: '#a58058' },
    { x: 3, z: 1, c: '#958068' },
    { x: -2, z: -11, c: '#849180' },
    { x: 15, z: -24, c: '#9f6b50' },
    { x: -32, z: 8, c: '#527987' },
    { x: -34, z: 21, c: '#9c795f' },
    { x: -31, z: 30, c: '#86794e' },
    { x: 2, z: 33, c: '#856586' },
    { x: 17, z: -46, c: '#8b8f65' },
    { x: 48, z: -24, c: '#7b6b54' },
    { x: -39, z: -32, c: '#9b6957' },
    { x: -27, z: -21, c: '#61746c' },
  ];
  const extra = [
    [-70, -61],
    [-70, -5],
    [-71, 12],
    [-70, 32],
    [-60, 49],
    [-51, 79],
    [-37, 81],
    [-15, 83],
    [10, 86],
    [62, 50],
    [83, 52],
    [78, 69],
    [88, 89],
    [61, 17],
    [82, -47],
    [80, -61],
    [0, 69],
    [0, 91],
    [-2, 7],
    [2, 13],
    [-2, 25],
    [3, 28],
    [-3, -18],
    [3, -29],
    [-33, 12],
    [-35, 25],
    [-31, 34],
    [-32, 0],
    [-27, 8],
    [-29, 27],
    [-70, -28],
    [-70, -47],
    [-73, -70],
    [-76, -18],
    [-51, 59],
    [-48, 65],
    [80, 7],
    [83, 22],
    [77, -46],
    [74, -74],
    [49, 77],
    [52, 89],
    [17, -55],
    [15, -29],
    [47, -18],
    [52, 10],
    [0, 52],
    [-18, 48],
  ];
  extra.forEach(([x, z], i) =>
    residents.push({
      x,
      z,
      c: ['#9a6d55', '#577e77', '#958056', '#ad7675', '#657990'][i % 5],
    }),
  );
  const npcs = residents.map((v, i) => {
    const role: Role =
      i >= 12 && i % 4 === 0 ? 'child' : i % 5 === 0 ? 'porter' : 'walker';
    const person = createResident(role, v.c, i);
    person.root.position.set(v.x, 0, v.z);
    scene.add(person.root);
    return { ...v, person, role, until: 0 };
  });
  const vendors = world.vendors.map((v, i) => {
    const person = createPerson(
      ['#85664b', '#53685c', '#7e655c', '#8c7954'][i % 4],
      '#d3c8a5',
      0.85,
    );
    person.root.position.set(v.x, 0, v.z);
    person.root.rotation.y = v.yaw;
    scene.add(person.root);
    return { ...v, person, until: 0 };
  });
  const life = createTownLife(world.interiors, world.obstacles, world.vendors);
  indexObstacles(world.obstacles);
  const npcColliders = npcs.map((n) => ({
    get x() {
      return n.person.root.position.x;
    },
    get z() {
      return n.person.root.position.z;
    },
    y: 0,
    radius: n.person.radius,
    height: n.person.scale * 2.3,
  }));
  const vendorColliders = vendors.map((v) => ({
    get x() {
      return v.person.root.position.x;
    },
    get z() {
      return v.person.root.position.z;
    },
    y: 0,
    radius: 0.32,
    height: 1.95,
  }));
  const people = [...life.getPeople(), ...npcColliders, ...vendorColliders];
  const blockers = [
    ...life.getPeople(),
    {
      get x() {
        return body.x;
      },
      get z() {
        return body.z;
      },
      get y() {
        return body.y;
      },
      radius: 0.33,
      height: 1.95,
    },
    ...vendorColliders,
    ...npcColliders,
  ];
  const cameraProbe = new T.Vector3();

  scene.add(life.root);
  const fireworks = createFireworks();
  scene.add(fireworks.root);
  const places = mapPlaces(world.interiors);
  const playBalls = [
    [-1, 8],
    [-31, 34],
    [0, 52],
  ].map(([x, z]) => {
    const geo = new T.IcosahedronGeometry(0.18, 1);
    const colors: number[] = [];
    for (let j = 0; j < geo.getAttribute('position').count; j++) {
      const c = new T.Color(
        Math.floor(j / 3) % 3 === 0 ? '#ad6350' : '#e0cba2',
      );
      colors.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
    const ball = new T.Mesh(
      geo,
      new T.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }),
    );
    ball.position.set(x, 0.2, z);
    ball.castShadow = true;
    scene.add(ball);
    return { ball, x, z, kick: 0 };
  });
  const takeoffMaterial = new T.MeshBasicMaterial({
    color: '#f4dfae',
    transparent: true,
    opacity: 0,
    side: T.DoubleSide,
    depthWrite: false,
  });
  const takeoff = new T.Mesh(
    new T.RingGeometry(0.28, 0.34, 48),
    takeoffMaterial,
  );
  takeoff.rotation.x = -Math.PI / 2;
  scene.add(takeoff);
  let sitting = false;
  const setSitting = (value: boolean) => {
    sitting = value;
    player.setSeated(value);
  };
  const toggleSit = () => {
    if (!paused && body.grounded) {
      setSitting(!sitting);
      pressed.clear();
    }
  };
  let takeoffAge = 10;
  const tryJump = () => {
    if (paused) return;
    if (sitting) {
      setSitting(false);
      return;
    }
    if (!jump(body)) return;
    takeoff.position.set(body.x, body.y + 0.05, body.z);
    takeoffAge = 0;
    player.startFlip(body.jumps);
  };
  // Fine drifting motes; no external assets or network requests are needed.
  const particleGeo = new T.BufferGeometry(),
    particlePositions = new Float32Array(150 * 3);
  for (let i = 0; i < 150; i++) {
    particlePositions[i * 3] = Math.sin(i * 71) * 23;
    particlePositions[i * 3 + 1] = 1 + (i % 23) * 0.4;
    particlePositions[i * 3 + 2] = Math.cos(i * 27) * 40;
  }
  particleGeo.setAttribute(
    'position',
    new T.BufferAttribute(particlePositions, 3),
  );
  const particleMaterial = new T.PointsMaterial({
    color: '#ffedb8',
    size: 0.045,
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
  });
  const motes = new T.Points(particleGeo, particleMaterial);
  scene.add(motes);
  let yaw: number = STOPS[0].yaw,
    pitch = 0.39,
    distance = 5.7,
    overview = false,
    dusk = false,
    disposed = false,
    paused = false;
  let frame = 0,
    last = performance.now(),
    elapsed = 0,
    distanceWalked = 0,
    nextReport = 0,
    dragging = false,
    lastX = 0,
    lastY = 0,
    pointerId: number | null = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pressed = new Set<string>();
  const forward = new T.Vector3(),
    right = new T.Vector3(),
    wish = new T.Vector3(),
    target = new T.Vector3(),
    desiredCamera = new T.Vector3();
  const listeners: Array<() => void> = [];
  function listen(
    target: EventTarget,
    type: string,
    fn: EventListener,
    options?: AddEventListenerOptions,
  ) {
    target.addEventListener(type, fn, options);
    listeners.push(() => target.removeEventListener(type, fn, options));
  }
  const moveKeys = [
    'KeyW',
    'KeyA',
    'KeyS',
    'KeyD',
    'ArrowUp',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'ShiftLeft',
    'ShiftRight',
  ];
  listen(window, 'keydown', ((e: KeyboardEvent) => {
    if (paused || e.ctrlKey || e.metaKey || e.altKey) return;
    if (
      e.target instanceof HTMLElement &&
      (e.target.matches('input,textarea,select') || e.target.isContentEditable)
    )
      return;
    if (moveKeys.includes(e.code)) {
      e.preventDefault();
      pressed.add(e.code);
    }
    if (
      e.code === 'Space' &&
      !e.repeat &&
      !(e.target instanceof HTMLButtonElement)
    ) {
      e.preventDefault();
      tryJump();
    }
    if (e.code === 'KeyE' && !e.repeat) {
      interact();
    }
    if (e.code === 'KeyR' && !e.repeat) {
      e.preventDefault();
      toggleSit();
    }
    if (e.code === 'KeyV' && !e.repeat) overview = !overview;
  }) as EventListener);
  listen(window, 'keyup', ((e: KeyboardEvent) => {
    pressed.delete(e.code);
  }) as EventListener);
  listen(window, 'blur', (() => {
    pressed.clear();
    dragging = false;
  }) as EventListener);
  listen(document, 'visibilitychange', (() => {
    pressed.clear();
    last = performance.now();
  }) as EventListener);
  listen(container, 'pointerdown', ((e: PointerEvent) => {
    if (paused || pointerId !== null) return;
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();
    dragging = true;
    pointerId = e.pointerId;
    lastX = e.clientX;
    lastY = e.clientY;
    container.setPointerCapture(e.pointerId);
  }) as EventListener);
  listen(container, 'pointermove', ((e: PointerEvent) => {
    if (!dragging || pointerId !== e.pointerId) return;
    yaw -= (e.clientX - lastX) * 0.005;
    pitch = T.MathUtils.clamp(pitch + (e.clientY - lastY) * 0.004, 0.14, 1.15);
    lastX = e.clientX;
    lastY = e.clientY;
  }) as EventListener);
  const endDrag = ((e: PointerEvent) => {
    if (e.pointerId === pointerId) {
      dragging = false;
      pointerId = null;
    }
  }) as EventListener;
  listen(container, 'pointerup', endDrag);
  listen(container, 'pointercancel', endDrag);
  listen(container, 'lostpointercapture', endDrag);
  listen(
    container,
    'wheel',
    ((e: WheelEvent) => {
      e.preventDefault();
      distance = T.MathUtils.clamp(distance + e.deltaY * 0.01, 3.3, 14);
    }) as EventListener,
    { passive: false },
  );
  listen(renderer.domElement, 'webglcontextlost', ((e: Event) => {
    e.preventDefault();
    paused = true;
    onError('三维画面暂时中断，请点击重新加载恢复场景。');
  }) as EventListener);
  const resizeObserver = new ResizeObserver(() => {
    if (disposed) return;
    const w = container.clientWidth,
      h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);
  const map = mapCanvas.getContext('2d')!;
  mapCanvas.width = 366;
  mapCanvas.height = 286;
  function drawMap() {
    map.clearRect(0, 0, 366, 286);
    map.save();
    map.scale(2, 2);
    map.fillStyle = '#e3e5d1';
    map.fillRect(0, 0, 183, 143);
    const mx = (x: number) =>
        6 + ((x - BOUNDS.minX) * 171) / (BOUNDS.maxX - BOUNDS.minX),
      mz = (z: number) =>
        4 + ((z - BOUNDS.minZ) * 135) / (BOUNDS.maxZ - BOUNDS.minZ);
    map.fillStyle = '#abc9bd';
    map.fillRect(mx(25), 0, mx(41) - mx(25), 143);
    map.strokeStyle = '#f5f0dc';
    map.lineWidth = 8;
    map.beginPath();
    map.moveTo(mx(0), mz(39));
    map.lineTo(mx(0), mz(-29));
    map.lineTo(mx(50), mz(-21));
    map.stroke();
    for (const points of [
      [
        [0, -21],
        [-30, -21],
        [-30, 49],
        [0, 49],
      ],
      [
        [18, -21],
        [18, -68],
      ],
      [
        [18, -54],
        [0, -54],
        [0, -63],
      ],
      [
        [-30, -21],
        [-39, -21],
        [-39, -39],
      ],
      [
        [51, -40],
        [51, 45],
      ],
    ]) {
      map.beginPath();
      points.forEach(([x, z], i) => {
        if (i === 0) map.moveTo(mx(x), mz(z));
        else map.lineTo(mx(x), mz(z));
      });
      map.stroke();
    }
    map.fillStyle = '#f2ebd7';
    map.fillRect(mx(-19), mz(-36), mx(19) - mx(-19), mz(-14) - mz(-36));
    for (const o of world.obstacles) {
      if (o.halfX < 1 && o.halfZ < 1) continue;
      map.fillStyle = '#b3b39a';
      map.fillRect(
        mx(o.x - o.halfX),
        mz(o.z - o.halfZ),
        mx(o.x + o.halfX) - mx(o.x - o.halfX),
        mz(o.z + o.halfZ) - mz(o.z - o.halfZ),
      );
    }
    map.strokeStyle = '#b8ad91';
    map.lineWidth = 6;
    map.beginPath();
    map.moveTo(mx(25), mz(-21));
    map.lineTo(mx(41), mz(-21));
    map.stroke();
    map.fillStyle = '#819c76';
    for (const [x, z, r] of [
      [-5.8, -25, 5],
      [11.5, -27, 3],
      [22, -8, 2.5],
      [44, 6, 3],
      [23, 17, 2],
    ]) {
      map.beginPath();
      map.arc(mx(x), mz(z), r, 0, Math.PI * 2);
      map.fill();
    }
    for (const route of world.routes) {
      map.strokeStyle = '#eee6cc';
      map.lineWidth = Math.max(1, route.width * 0.6);
      map.beginPath();
      map.moveTo(mx(route.ax), mz(route.az));
      map.lineTo(mx(route.bx), mz(route.bz));
      map.stroke();
    }
    const here = regionAt(body.x, body.z);
    STOPS.forEach((stop, i) => {
      map.fillStyle = i === here ? '#ad503b' : i >= 16 ? '#967346' : '#557567';
      map.beginPath();
      map.arc(mx(stop.x), mz(stop.z), i === here ? 3 : 2, 0, Math.PI * 2);
      map.fill();
      map.fillStyle = '#35473b';
      map.font = '6px sans-serif';
      map.fillText(String(i + 1), mx(stop.x) + 2.5, mz(stop.z) - 1.5);
    });
    const px = mx(player.root.position.x),
      pz = mz(player.root.position.z);
    map.save();
    map.translate(px, pz);
    map.rotate(-yaw);
    map.fillStyle = '#42675125';
    map.beginPath();
    map.moveTo(0, 0);
    map.arc(0, 0, 17, -Math.PI * 0.72, -Math.PI * 0.28);
    map.closePath();
    map.fill();
    map.restore();
    map.fillStyle = '#ac4e37';
    map.strokeStyle = '#fffdf0';
    map.lineWidth = 2;
    map.beginPath();
    map.arc(px, pz, 4, 0, Math.PI * 2);
    map.fill();
    map.stroke();
    map.restore();
  }
  function positionCamera(dt: number, instant = false) {
    target.copy(player.root.position).add(V(0, sitting ? 0.85 : 1.35, 0));
    let d = overview ? 34 : distance;
    const p = overview ? 0.84 : pitch;
    const horizontal = Math.cos(p) * d;
    desiredCamera
      .set(
        Math.sin(yaw) * horizontal,
        Math.sin(p) * d,
        Math.cos(yaw) * horizontal,
      )
      .add(target);
    if (!overview) {
      // Shorten the follow camera before it intersects a building or market stall.
      for (let s = 0.5; s < d; s += 0.25) {
        const candidate = cameraProbe.copy(target).lerp(desiredCamera, s / d);
        if (
          nearbyObstacles(world.obstacles, candidate.x, candidate.z).some(
            (o) =>
              candidate.y > (o.bottom ?? 0) &&
              Math.abs(candidate.x - o.x) < o.halfX + 0.2 &&
              Math.abs(candidate.z - o.z) < o.halfZ + 0.2 &&
              candidate.y <
                roofHeight(
                  o,
                  Math.max(o.x - o.halfX, Math.min(o.x + o.halfX, candidate.x)),
                  Math.max(o.z - o.halfZ, Math.min(o.z + o.halfZ, candidate.z)),
                ) +
                  0.25,
          )
        ) {
          d = Math.max(0.65, s - 0.35);
          desiredCamera
            .copy(target)
            .add(
              V(
                Math.sin(yaw) * Math.cos(p) * d,
                Math.sin(p) * d,
                Math.cos(yaw) * Math.cos(p) * d,
              ),
            );
          break;
        }
      }
    }
    desiredCamera.y = Math.max(
      desiredCamera.y,
      groundHeight(desiredCamera.x, desiredCamera.z) + 0.5,
    );
    if (instant || reduced) camera.position.copy(desiredCamera);
    else camera.position.lerp(desiredCamera, 1 - Math.exp(-dt * 10));
    camera.lookAt(target);
  }
  let dialogue = '',
    speaker = '',
    dialogueUntil = 0,
    conversation = 0;
  function nearest() {
    const candidates = [
      ...npcs.map((n) => ({
        x: n.person.root.position.x,
        z: n.person.root.position.z,
        y: 0,
        name:
          n.role === 'child'
            ? '玩耍的孩子'
            : n.role === 'porter'
              ? '挑担货郎'
              : '街坊',
        lines:
          n.role === 'child'
            ? [
                '来追我呀！桥那边还有一片竹林。',
                '我刚刚看见有人翻上了屋顶，你也会吗？',
              ]
            : n.role === 'porter'
              ? [
                  '新鲜山货，挑了一早上才到镇里！',
                  '借过借过。前面听雨客栈可以进屋喝口茶。',
                ]
              : [
                  '姑娘，慢慢逛，山里的日头还早。',
                  '桃林在西边，过了茶田就是山间书院。',
                  '要看整个镇子，上阳台或登望山亭都好。',
                ],
        actor: n,
      })),
      ...vendors.map((v) => ({
        x: v.person.root.position.x,
        z: v.person.root.position.z,
        y: 0,
        name: ['food', 'pottery', 'fabric'].includes(v.kind)
          ? '摆摊商贩'
          : v.kind + '掌柜',
        lines: [
          '来看看，都是今天刚备好的货！',
          '给你介绍一下：鲜果、茶叶、土陶和扎染，沿街都有。',
          '不赶路就到屋里歇歇，喝杯热茶再逛。',
        ],
        actor: v,
      })),
      ...life.getInteractions().map((v) => ({ ...v, actor: null })),
      ...world.interactables.map((v) => ({ ...v, actor: null })),
    ];
    return candidates
      .filter((c) => Math.abs(body.y - c.y) < 1.5)
      .map((c) => ({ ...c, d: Math.hypot(c.x - body.x, c.z - body.z) }))
      .filter((c) => c.d < 3.2)
      .sort((a, b) => a.d - b.d)[0];
  }
  function interact() {
    const n = nearest();
    if (!n || paused) return;
    dialogue = n.lines[conversation++ % n.lines.length];
    speaker = n.name;
    dialogueUntil = elapsed + 7;
    if (n.actor) {
      n.actor.until = elapsed + 5;
      if ('role' in n.actor && n.actor.role === 'child') {
        playBalls.forEach((b) => {
          if (Math.hypot(b.x - body.x, b.z - body.z) < 8) b.kick = elapsed;
        });
      }
    }
  }
  function tick(now: number) {
    if (disposed) return;
    frame = requestAnimationFrame(tick);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (document.hidden) return;
    elapsed += dt;
    let moving = false;
    if (!paused) {
      forward.set(-Math.sin(yaw), 0, -Math.cos(yaw));
      right.set(Math.cos(yaw), 0, -Math.sin(yaw));
      wish.set(0, 0, 0);
      if (pressed.has('KeyW') || pressed.has('ArrowUp')) wish.add(forward);
      if (pressed.has('KeyS') || pressed.has('ArrowDown')) wish.sub(forward);
      if (pressed.has('KeyD') || pressed.has('ArrowRight')) wish.add(right);
      if (pressed.has('KeyA') || pressed.has('ArrowLeft')) wish.sub(right);
      if (wish.lengthSq() > 0.01 && sitting) setSitting(false);
      const running = pressed.has('ShiftLeft') || pressed.has('ShiftRight');
      if (wish.lengthSq() > 0.01)
        wish
          .normalize()
          .multiplyScalar(
            (running ? 6.8 : 3.55) * dt * (body.grounded ? 1 : 1.18),
          );
      const oldX = body.x,
        oldZ = body.z;
      const clear = moveAroundPeople(
        body.x,
        body.z,
        body.y,
        wish.x,
        wish.z,
        people,
      );
      stepBody(
        body,
        clear.x - body.x,
        clear.z - body.z,
        dt,
        world.obstacles,
        people,
      );
      player.root.position.set(body.x, body.y, body.z);
      const walked = Math.hypot(body.x - oldX, body.z - oldZ);
      distanceWalked += walked;
      moving = walked > 0.0001;
      if (moving) {
        const angle = Math.atan2(wish.x, wish.z),
          difference = Math.atan2(
            Math.sin(angle - player.root.rotation.y),
            Math.cos(angle - player.root.rotation.y),
          );
        player.root.rotation.y += difference * Math.min(1, dt * 14);
      }
      player.animate(
        elapsed,
        moving ? (running ? 1.2 : 0.75) : 0,
        !body.grounded,
        reduced ? 0 : weather === 'rain' ? 1.65 : 1,
        dt,
      );
    }
    atmosphere.update(elapsed, dt, player.root.position, reduced);
    if (!reduced) life.update(elapsed, dt, player.root.position, dusk);
    fireworks.update(elapsed, dusk, reduced);
    takeoffAge += dt;
    takeoff.visible = takeoffAge < 0.6;
    takeoffMaterial.opacity = Math.max(0, 0.55 - takeoffAge);
    takeoff.scale.setScalar(1 + takeoffAge * 2.7);
    world.wind.value = reduced ? 0 : elapsed;

    if (!reduced) {
      playBalls.forEach((b, i) => {
        const t = elapsed - b.kick;
        const kicked = b.kick > 0 && t < 2;
        const a = kicked ? t * 5 : elapsed * 1.5 + i;
        b.ball.position.set(
          b.x + Math.sin(a) * 0.75,
          0.2 + Math.abs(Math.sin(a * 2)) * (kicked ? 0.5 : 0.12),
          b.z + Math.cos(a) * 0.6,
        );
        b.ball.rotation.x = a;
        b.ball.rotation.z = a * 0.7;
      });
      npcs.forEach((n, i) => {
        const greeting = n.until > elapsed;
        const a = elapsed * (n.role === 'child' ? 0.8 : 0.32) + i * 2,
          speed = n.role === 'child' ? 1.5 : n.role === 'porter' ? 0.65 : 0.5;
        const dx = greeting ? 0 : Math.cos(a) * speed * dt,
          dz = greeting ? 0 : -Math.sin(a) * speed * dt;
        const at = n.person.root.position;
        const clear = moveAroundPeople(
          at.x,
          at.z,
          0,
          dx,
          dz,
          blockers,
          n.person.radius,
          npcColliders[i],
        );
        const p = moveWithCollision(
          at.x,
          at.z,
          clear.x - at.x,
          clear.z - at.z,
          world.obstacles,
        );
        const moved = Math.hypot(p.x - at.x, p.z - at.z) > 1e-5;
        at.set(
          p.x,
          groundHeight(p.x, p.z) +
            (n.role === 'child' && !greeting
              ? Math.max(0, Math.sin(elapsed * 4 + i)) * 0.18
              : 0),
          p.z,
        );
        n.person.root.rotation.y = greeting
          ? Math.atan2(body.x - at.x, body.z - at.z)
          : Math.atan2(dx, dz);
        n.person.animateRole(
          elapsed + i,
          moved ? 0.5 : 0,
          greeting ||
            (n.role === 'walker' && Math.sin(elapsed * 0.35 + i) > 0.97),
        );
      });
      vendors.forEach((v, i) => {
        const greeting = v.until > elapsed;
        v.person.animate(elapsed * 0.3 + i, 0);
        v.person.arms[0].rotation.x = -0.65 + Math.sin(elapsed * 1.7 + i) * 0.2;
        v.person.arms[1].rotation.x = greeting
          ? -1.3 + Math.sin(elapsed * 7) * 0.2
          : -0.25 + Math.sin(elapsed * 0.9 + i) * 0.13;
        v.person.root.rotation.y = greeting
          ? Math.atan2(
              body.x - v.person.root.position.x,
              body.z - v.person.root.position.z,
            )
          : v.yaw + Math.sin(elapsed * 0.4 + i) * 0.12;
      });
      world.updateWater(elapsed, weather === 'rain');
      motes.rotation.y = Math.sin(elapsed * 0.02) * 0.1;
    }
    const focus = player.root.position;
    sun.position.copy(solarDirection).multiplyScalar(52).add(focus);
    sun.target.position.set(focus.x, 0, focus.z);
    positionCamera(dt);
    atmosphere.sky.position.copy(camera.position);
    renderer.render(scene, camera);
    if (now > nextReport) {
      drawMap();
      onState({
        region: regionAt(focus.x, focus.z),
        position: { x: focus.x, z: focus.z },
        steps: Math.floor(distanceWalked / 0.65),
        moving,
        sitting,
        jumps: body.jumps,
        airborne: !body.grounded,
        altitude: body.y,
        nearby: nearest()?.name ?? '',
        dialogue: elapsed < dialogueUntil ? dialogue : '',
        speaker,
      });
      nextReport = now + 220;
    }
  }
  function V(x: number, y: number, z: number) {
    return new T.Vector3(x, y, z);
  }
  function applyEnvironment() {
    atmosphere.set(weather, dusk);
    world.setWet(weather === 'rain');
    const fog = scene.fog as T.FogExp2;
    fog.color.set(
      dusk ? '#293d49' : weather === 'clear' ? '#c1cdb7' : '#c5ceca',
    );
    fog.density =
      weather === 'mist' ? 0.025 : weather === 'rain' ? 0.017 : 0.0095;
    ambient.intensity = weather === 'rain' ? 0.55 : dusk ? 0.3 : 0.65;
    ambient.color.set(dusk ? '#b6c7df' : '#e1eee3');
    sun.intensity = weather === 'rain' ? 0.5 : dusk ? 0.18 : 2.7;
    sun.color.set(dusk ? '#ffb481' : '#fff0c5');
    world.glow.emissiveIntensity = dusk ? 2.8 : 0.28;
    scene.environmentIntensity = dusk ? 0.2 : 0.65;
    renderer.toneMappingExposure = dusk ? 0.95 : 1.0;
  }
  positionCamera(0, true);
  renderer.render(scene, camera);
  drawMap();
  frame = requestAnimationFrame(tick);
  function travelTo(index: number) {
    const p = STOPS[index];
    setSitting(false);
    if (!p) return;
    pressed.clear();
    Object.assign(body, createBody(p.x, p.z));
    player.root.position.set(body.x, body.y, body.z);
    player.root.rotation.y = p.yaw + Math.PI;
    yaw = p.yaw;
    pitch = 0.39;
    overview = false;
    positionCamera(0, true);
    drawMap();
    onState({
      region: index,
      position: { x: body.x, z: body.z },
      steps: Math.floor(distanceWalked / 0.65),
      moving: false,
      sitting: false,
      jumps: 0,
      airborne: false,
      altitude: 0,
      nearby: '',
      dialogue: '',
      speaker: '',
    });
  }
  return {
    mapData: {
      places,
      roads: world.routes,
      buildings: world.obstacles
        .filter((o) => o.roof)
        .map((o) => ({ x: o.x, z: o.z, halfX: o.halfX, halfZ: o.halfZ })),
    },
    visitPlace(place: MapPlace) {
      const target = places.find((p) => p.id === place.id);
      if (!target) return;
      pressed.clear();
      setSitting(false);
      Object.assign(body, createBody(target.x, target.z));
      player.root.position.set(body.x, body.y, body.z);
      yaw = target.yaw;
      player.root.rotation.y = yaw + Math.PI;
      overview = false;
      positionCamera(0, true);
      drawMap();
    },
    travel: travelTo,
    setDusk(value: boolean) {
      dusk = value;
      applyEnvironment();
    },
    interact() {
      interact();
    },
    jump() {
      tryJump();
    },
    toggleSit() {
      toggleSit();
    },
    inspectCharacter() {
      yaw = player.root.rotation.y;
      pitch = 0.1;
      distance = 2.4;
      overview = false;
    },
    setWeather(value: Weather) {
      weather = value;
      applyEnvironment();
    },
    setKey(key: string, down: boolean) {
      if (down && !paused) pressed.add(key);
      else pressed.delete(key);
    },
    setPaused(value: boolean) {
      paused = value;
      pressed.clear();
    },
    setOverview(value: boolean) {
      overview = value;
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      listeners.forEach((fn) => fn());
      const geometries = new Set<T.BufferGeometry>(),
        materials = new Set<T.Material>(),
        textures = new Set<T.Texture>();
      scene.traverse((o) => {
        if (
          o instanceof T.Mesh ||
          o instanceof T.Points ||
          o instanceof T.LineSegments
        ) {
          geometries.add(o.geometry);
          const m = Array.isArray(o.material) ? o.material : [o.material];
          m.forEach((v) => materials.add(v));
        }
      });
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => {
        for (const value of Object.values(m))
          if (value instanceof T.Texture) textures.add(value);
        m.dispose();
      });
      textures.forEach((t) => t.dispose());
      world.disposeWater();
      environment?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
