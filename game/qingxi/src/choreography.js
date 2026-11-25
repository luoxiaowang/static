import * as T from "three";

// Accessories follow the working hand. Their orientation is expressed relative to
// the actor so the pot stays upright as the shoulder and elbow bend.
export function choreRig(scene, actor, pelvis, chest, head, limbs) {
  const hand = new T.Group();
  limbs[1].elbow.add(hand);
  hand.position.set(0, -0.25, 0.025);
  const tools = {};
  function prop(name) {
    const g = new T.Group();
    g.visible = false;
    hand.add(g);
    tools[name] = g;
    return g;
  }
  function part(parent, geometry, color, x, y, z) {
    const m = new T.Mesh(
      geometry,
      new T.MeshStandardMaterial({ color, roughness: 0.88 }),
    );
    m.position.set(x, y, z);
    m.castShadow = true;
    parent.add(m);
    return m;
  }
  const can = prop("浇水");
  can.scale.setScalar(1.15);
  const body = part(
    can,
    new T.CylinderGeometry(0.165, 0.155, 0.31, 14),
    "#759c96",
    0,
    -0.17,
    0.045,
  );
  body.scale.z = 1.25;
  const handle = part(
    can,
    new T.TorusGeometry(0.135, 0.025, 6, 20),
    "#9fbcab",
    0,
    -0.008,
    0.03,
  );
  handle.rotation.y = Math.PI / 2;
  const spout = part(
    can,
    new T.CylinderGeometry(0.036, 0.066, 0.34, 10),
    "#86a9a2",
    0,
    -0.11,
    0.315,
  );
  spout.rotation.x = 1.04;
  const tip = part(
    can,
    new T.CylinderGeometry(0.076, 0.06, 0.055, 10),
    "#bfd0b9",
    0,
    -0.01,
    0.46,
  );
  tip.rotation.x = 1.04;
  const hoe = prop("耕作");
  const shaft = part(
    hoe,
    new T.CylinderGeometry(0.027, 0.032, 1.09, 9),
    "#a38352",
    0,
    -0.14,
    0.32,
  );
  shaft.rotation.x = -0.98;
  part(
    hoe,
    new T.BoxGeometry(0.22, 0.22, 0.065),
    "#728078",
    0,
    -0.495,
    0.76,
  ).rotation.x = -0.4;
  const cup = prop("饮茶");
  cup.scale.setScalar(1.15);
  part(
    cup,
    new T.CylinderGeometry(0.104, 0.064, 0.132, 16),
    "#f3e8cd",
    0,
    0.045,
    0.035,
  );
  part(
    cup,
    new T.CylinderGeometry(0.087, 0.087, 0.007, 16),
    "#9b753e",
    0,
    0.114,
    0.035,
  );
  const specks = new T.InstancedMesh(
    new T.SphereGeometry(1, 6, 5),
    new T.MeshBasicMaterial({ color: 0xb8e2df }),
    23,
  );
  specks.frustumCulled = false;
  specks.visible = false;
  scene.add(specks);
  const source = new T.Vector3(),
    landing = new T.Vector3(),
    m = new T.Object3D(),
    localQ = new T.Quaternion(),
    baseQ = new T.Quaternion(),
    tiltQ = new T.Quaternion();
  const smooth = (a, b, t) => T.MathUtils.smoothstep(t, a, b);
  function clear() {
    for (const g of Object.values(tools)) g.visible = false;
    specks.visible = false;
    head.rotation.x = 0;
    for (let l of limbs) {
      l.shoulder.rotation.z = l.sign * 0.115;
      l.shoulder.rotation.y = 0;
    }
  }
  function pose(kind, t, look) {
    clear();
    const settle = smooth(0, 0.23, t) * (1 - smooth(0.81, 1, t));
    const swing = Math.sin(
      Math.PI * T.MathUtils.clamp((t - 0.26) / 0.51, 0, 1),
    );
    const drink = kind === "饮茶",
      water = kind === "浇水",
      dig = kind === "耕作",
      low = kind === "播种" || kind === "收获";
    const seated = drink ? 0.51 : low ? 0.365 : dig ? 0.72 : 0.79;
    pelvis.position.y = T.MathUtils.lerp(0.86, seated, settle);
    chest.rotation.x =
      settle * (drink ? 0.04 : low ? 0.64 : dig ? 0.27 + 0.28 * swing : 0.17);
    head.rotation.x = settle * (drink ? -0.09 * swing : 0.16);
    for (let [i, l] of limbs.entries()) {
      const bend = drink ? 1.47 : low ? 2.18 : dig ? 0.78 : 0.53;
      const thigh = drink ? -1.46 : low ? -1.16 : dig ? -0.4 : -0.26;
      l.thigh.rotation.x = T.MathUtils.lerp(l.thigh.rotation.x, thigh, settle);
      l.knee.rotation.x = T.MathUtils.lerp(l.knee.rotation.x, bend, settle);
      l.foot.rotation.x = -l.thigh.rotation.x - l.knee.rotation.x;
      let shoulder, elbow;
      if (drink) {
        shoulder = i ? -0.65 - 0.55 * swing : -0.62;
        elbow = i ? -1.05 - 0.91 * swing : -0.7;
      } else if (water) {
        shoulder = i ? -0.92 - 0.2 * swing : -0.64;
        elbow = i ? -0.51 : -0.87;
      } else if (dig) {
        shoulder = i ? -1.1 + 0.95 * swing : -0.72 + 0.55 * swing;
        elbow = -0.5 + 0.29 * swing;
      } else {
        shoulder = i ? -0.53 - 0.31 * swing : -0.8;
        elbow = i ? -0.24 - 0.28 * (1 - swing) : -0.8;
      }
      l.shoulder.rotation.x = T.MathUtils.lerp(
        l.shoulder.rotation.x,
        shoulder,
        settle,
      );
      l.elbow.rotation.x = T.MathUtils.lerp(l.elbow.rotation.x, elbow, settle);
      if (drink && i) l.shoulder.rotation.y = -0.43 * settle;
    }
    const item = tools[kind];
    if (item && settle > 0.04) {
      item.visible = true;
      hand.getWorldQuaternion(localQ);
      actor.getWorldQuaternion(baseQ);
      tiltQ.setFromEuler(
        new T.Euler(
          water
            ? 0.65 * swing
            : drink
              ? -0.65 * swing
              : dig
                ? -0.65 + 0.95 * swing
                : 0,
          0,
          0,
        ),
      );
      item.quaternion.copy(localQ.invert()).multiply(baseQ).multiply(tiltQ);
    }
    if ((water || kind === "播种") && t > 0.32 && t < 0.77) {
      specks.visible = true;
      specks.count = water ? 23 : 6;
      specks.material.color.set(water ? 0xbce8ed : 0xc99f57);
      (water ? tip : hand).getWorldPosition(source);
      landing.set(look.x, 0.26, look.z);
      for (let i = 0; i < specks.count; i++) {
        let f = ((t - 0.32) * (water ? 4 : 3) + i / specks.count) % 1,
          side = Math.sin(i * 8.13) * 0.14 * f;
        m.position.lerpVectors(source, landing, f);
        m.position.x += side;
        m.position.z += Math.cos(i * 4.2) * 0.13 * f;
        m.position.y += (water ? 0.07 : 0.21) * Math.sin(Math.PI * f);
        m.scale.set(0.025, water ? 0.055 : 0.022, 0.025);
        m.updateMatrix();
        specks.setMatrixAt(i, m.matrix);
      }
      specks.instanceMatrix.needsUpdate = true;
    }
  }
  return { pose, clear };
}
