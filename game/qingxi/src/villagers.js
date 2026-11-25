import * as T from "three";
import { choreRig } from "./choreography.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// Each articulated joint has a single painted mesh and an optional dyeable garment.
export function villager(scene, x, z, shirt, role = "lin", scale = 1) {
  const obj = new T.Group();
  scene.add(obj);
  obj.position.set(x, 0, z);
  obj.scale.setScalar(scale);
  const painted = new T.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
    }),
    dyed = new T.MeshStandardMaterial({ color: shirt, roughness: 0.98 });
  const parts = new Map(),
    ell = new T.SphereGeometry(1, 12, 10),
    rod = new T.CylinderGeometry(1, 1, 1, 10),
    taper = new T.CylinderGeometry(0.86, 1, 1, 12);
  function joint(p, x, y, z) {
    const g = new T.Group();
    p.add(g);
    g.position.set(x, y, z);
    return g;
  }
  function draw(node, g, x, y, z, w, h, d, color, rx = 0, ry = 0, rz = 0) {
    let mesh = g.index ? g.toNonIndexed() : g.clone();
    mesh.deleteAttribute("uv");
    let m = new T.Object3D();
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    m.scale.set(w, h, d);
    m.updateMatrix();
    mesh.applyMatrix4(m.matrix);
    if (!parts.has(node)) parts.set(node, [[], []]);
    if (color) {
      const c = new T.Color(color),
        v = new Float32Array(mesh.attributes.position.count * 3);
      for (let i = 0; i < v.length; i += 3) c.toArray(v, i);
      mesh.setAttribute("color", new T.BufferAttribute(v, 3));
    }
    parts.get(node)[color ? 0 : 1].push(mesh);
  }
  const skin = role === "zhou" ? "#c98f68" : "#edbd96",
    hair = role === "zhou" ? "#676457" : "#363430",
    navy = "#3e5260",
    linen = "#e3d7b3",
    shoe = "#474940";
  const pelvis = joint(obj, 0, 0.88, 0),
    chest = joint(pelvis, 0, 0.04, 0),
    head = joint(chest, 0, 0.69, 0);
  const E = (n, ...args) => draw(n, ell, ...args),
    C = (n, ...args) => draw(n, rod, ...args);
  E(pelvis, 0, 0, 0, 0.26, 0.16, 0.19, navy);
  draw(chest, taper, 0, 0.28, 0, 0.29, 0.61, 0.22, null);
  E(chest, 0, 0.56, 0, 0.31, 0.12, 0.2, null);
  C(chest, 0, 0.6, 0, 0.115, 0.17, 0.11, skin);
  E(chest, -0.067, 0.56, 0.17, 0.056, 0.17, 0.032, linen, 0, 0, -0.53);
  E(chest, 0.083, 0.56, 0.17, 0.05, 0.15, 0.03, linen, 0, 0, 0.65);
  for (let i = 0; i < 3; i++) {
    E(chest, 0.07, 0.42 - i * 0.11, 0.206, 0.061, 0.013, 0.022, "#e0cfaa");
    E(chest, 0.128, 0.42 - i * 0.11, 0.206, 0.018, 0.022, 0.019, "#75654d");
  }
  E(head, 0, 0.17, 0, 0.263, 0.31, 0.235, skin);
  E(head, 0, 0.32, -0.027, 0.268, 0.216, 0.239, hair);
  for (let sign of [-1, 1]) {
    E(head, sign * 0.25, 0.15, -0.003, 0.047, 0.072, 0.04, skin);
    E(head, sign * 0.103, 0.196, 0.211, 0.03, 0.037, 0.014, "#3c342e");
    E(
      head,
      sign * 0.105,
      0.255,
      0.203,
      0.055,
      0.012,
      0.013,
      hair,
      0,
      0,
      -sign * 0.08,
    );
    E(head, sign * 0.15, 0.119, 0.177, 0.048, 0.019, 0.018, "#dfa38a");
  }
  E(head, 0, 0.146, 0.224, 0.027, 0.034, 0.026, skin);
  E(head, 0.008, 0.063, 0.208, 0.044, 0.009, 0.012, "#ad765f");
  for (let i = 0; i < 5; i++)
    E(
      head,
      -0.18 + i * 0.083,
      0.35 - Math.sin(i) * 0.015,
      0.152,
      0.092,
      0.11,
      0.056,
      hair,
      0,
      0,
      -0.38,
    );
  if (role === "tang" || role === "xu") {
    E(head, 0, 0.3, -0.2, 0.18, 0.18, 0.15, hair);
    E(head, 0.09, 0.36, -0.28, 0.095, 0.1, 0.09, "#ac7360");
    if (role === "tang")
      E(head, -0.22, 0.28, 0.06, 0.055, 0.052, 0.045, "#ebbb7b");
  }
  const hat =
    role === "lin"
      ? joint(chest, 0, 0.29, -0.22)
      : role === "zhou" || role === "xu"
        ? joint(head, 0, 0.42, 0)
        : null;
  if (hat) {
    if (role === "lin") hat.rotation.x = -1.13;
    C(hat, 0, 0, 0, 0.39, 0.042, 0.37, "#c49956");
    draw(
      hat,
      new T.ConeGeometry(1, 1, 20),
      0,
      0.097,
      0,
      0.376,
      0.19,
      0.356,
      "#dbb974",
    );
    for (let j = 1; j < 4; j++)
      C(
        hat,
        0,
        0.04 * j,
        0,
        0.37 - j * 0.074,
        0.012,
        0.35 - j * 0.071,
        "#b89458",
      );
  }
  if (role === "lin") {
    E(chest, -0.025, 0.28, 0.205, 0.032, 0.37, 0.024, "#9a744e", 0, 0, -0.58);
    E(chest, -0.247, 0.025, 0.11, 0.12, 0.145, 0.084, "#ad8051");
  }
  const limbs = [];
  for (let sign of [-1, 1]) {
    let thigh = joint(pelvis, sign * 0.137, 0, 0),
      knee = joint(thigh, 0, -0.39, 0),
      foot = joint(knee, 0, -0.38, 0);
    E(thigh, 0, -0.18, 0, 0.129, 0.245, 0.137, navy);
    E(knee, 0, -0.16, 0, 0.099, 0.218, 0.11, navy);
    C(knee, 0, -0.298, 0, 0.099, 0.076, 0.105, "#859490");
    E(foot, 0, -0.028, 0.063, 0.116, 0.073, 0.183, shoe);
    E(foot, 0, -0.079, 0.066, 0.116, 0.021, 0.179, "#c1ac84");
    let shoulder = joint(chest, sign * 0.295, 0.51, 0),
      elbow = joint(shoulder, 0, -0.255, 0);
    shoulder.rotation.z = sign * 0.115;
    E(shoulder, 0, -0.11, 0, 0.105, 0.191, 0.12, null);
    C(elbow, 0, -0.026, 0, 0.099, 0.088, 0.1, linen);
    E(elbow, 0, -0.148, 0, 0.07, 0.145, 0.075, skin);
    E(elbow, 0, -0.255, 0.006, 0.072, 0.088, 0.069, skin);
    limbs.push({ sign, thigh, knee, foot, shoulder, elbow });
  }
  for (let [node, groups] of parts) {
    groups.forEach((geos, i) => {
      if (!geos.length) return;
      let merged = mergeGeometries(geos);
      let mesh = new T.Mesh(merged, i ? dyed : painted);
      node.add(mesh);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      geos.forEach((g) => g.dispose());
    });
  }
  let phase = 0,
    blend = 0;
  function animate(distance, dt, time) {
    const moving = distance > 0.0001;
    blend += ((moving ? 1 : 0) - blend) * (1 - Math.exp(-dt * 15));
    phase += (distance / (scale * 1.58)) * Math.PI * 2;
    const stride = Math.cos(phase),
      beat = Math.cos(phase * 2);
    pelvis.position.y = 0.858 + (0.011 - 0.017 * beat) * blend;
    pelvis.position.x = 0.025 * stride * blend;
    chest.rotation.set(
      0.055 * blend,
      0.105 * stride * blend,
      0.024 * stride * blend,
    );
    head.rotation.y =
      -0.075 * stride * blend + 0.045 * Math.sin(time * 0.69) * (1 - blend);
    head.position.y = 0.69 + 0.006 * Math.sin(time * 2);
    for (let [i, l] of limbs.entries()) {
      let a = phase + i * Math.PI;
      const swing = Math.sin(a),
        fore = 0.337 * Math.cos(a) * blend,
        up = 0.155 * Math.max(0, -swing) * blend;
      // Solve two-link leg against a planted sole; swing phase lifts the same target.
      let down = pelvis.position.y - 0.1 - up,
        reach = T.MathUtils.clamp(Math.hypot(fore, down), 0.1, 0.7698);
      let bend = Math.acos(
        T.MathUtils.clamp(
          (reach * reach - 0.39 ** 2 - 0.38 ** 2) / (2 * 0.39 * 0.38),
          -1,
          1,
        ),
      );
      l.thigh.rotation.x =
        -Math.atan2(fore, down) -
        Math.atan2(0.38 * Math.sin(bend), 0.39 + 0.38 * Math.cos(bend));
      l.knee.rotation.x = bend;
      l.foot.rotation.x =
        -l.thigh.rotation.x - bend - 0.14 * Math.cos(a) * blend;
      l.shoulder.rotation.x =
        0.55 * Math.cos(a) * blend + (role === "zhou" && i === 0 ? -0.5 : 0);
      l.elbow.rotation.x = -0.19 - 0.19 * Math.max(0, -Math.cos(a)) * blend;
    }
  }
  animate(0, 1, 0);
  return {
    obj,
    animate,
    chores:
      role === "lin" ? choreRig(scene, obj, pelvis, chest, head, limbs) : null,
    dye: (c) => dyed.color.set(c),
  };
}
