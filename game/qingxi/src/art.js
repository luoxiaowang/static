import { places, roads, riverX, bridgeZ } from "./landscape.js";
const ink = "#504d39";
const drawings = {
  walk: '<path fill="#b28e66" d="m12 25 7-4 6 2 5 6 8 3q3 5-3 6l-12-2-13-5z"/><path fill="#d6bf95" d="m12 25 5-9 6 2-1 9-5 2z"/><path fill="#c1a07c" d="m21 18 5-10 6 2-1 10 5 5 5 2q2 5-5 4l-10-4-5-5z"/><path d="m13 29 11 5 12 2m-9-11 6 3" fill="none"/>',
  hoe: '<path fill="#b38a55" d="m10 37 21-28 3 2-20 29q-2 2-4-3z"/><path fill="#99a29b" d="m23 10 5-3 12 7-2 3-6-2-5 9-6-3 7-10z"/><path d="m22 20 5 2" fill="none"/>',
  water:
    '<path fill="#9dbaad" d="m15 21 18-3 3 18-19 3z"/><path fill="#c1d1b8" d="m17 20-7-7-4 2 9 15 3-2z"/><ellipse fill="#a8bfae" cx="7.5" cy="13.5" rx="4.5" ry="2.7" transform="rotate(-26 7 13)"/><path fill="none" stroke-width="3" d="M29 20q2-14 9-10 7 5-4 18"/><ellipse fill="#c6d5bb" cx="24" cy="20" rx="9" ry="3" transform="rotate(-9 24 20)"/><path d="m21 27 1 7" stroke="#dce2c8"/>',
  seed: '<path fill="#d5b882" d="m13 12 21-2-2 7 5 18q-9 5-26 1l5-20z"/><path fill="#ebd5a2" d="m14 10 19-1 1 5-20 2z"/><path d="m15 34 15 1m-12-16 12-1" fill="none"/><path fill="#8da56d" d="M23 30q-8-3-6-8 7-1 7 6-1-9 6-8 2 6-6 10z"/>',
  tea: '<path fill="#aa8062" d="m15 23-6-6-4 2 9 12z"/><path fill="none" stroke-width="3" d="M31 20q13-5 9 7-2 4-7 4"/><path fill="#ba8969" d="M13 26q0-8 10-8t12 9q0 9-11 9t-11-10z"/><path fill="#cb9f79" d="M15 20q9-6 17-1l-2 2-14 1z"/><circle fill="#92694d" cx="23" cy="16" r="2"/><path fill="#e3d4af" d="m33 33 9-1-1 6-6 1z"/><path d="M19 10q-4-4 0-7m7 7q4-4 1-7" fill="none" stroke="#a79c80"/>',
  bag: '<path fill="#cfac78" d="M12 22q0-8 9-10l9 1q7 2 7 10v14q-11 5-25 0z"/><path fill="#ae865c" d="m12 22 12 4 13-5-3-7-16-1z"/><path d="M20 13q-1-9 6-7 4 1 3 7" fill="none" stroke-width="3"/><path fill="#dfbb83" d="m20 24 7 1-1 8-6-1z"/><path d="m15 31 1 4m15-6 1 6" fill="none"/>',
  map: '<path fill="#e4d2a6" d="m5 13 12-4 13 4 12-5 1 27-13 5-13-4-11 4z"/><path fill="#a9b784" d="m8 30 7-11 4 5 5-7 8 11 7-4 1 6-10 6-13-4-9 3z"/><path d="m17 10 1 25m12-21v24" stroke="#a28c62" fill="none"/><path d="M8 35q7-8 16-5t15-12" fill="none" stroke="#80a4a0" stroke-width="2"/>',
  book: '<path fill="#b59369" d="m6 11 14-2 5 3 15-2 1 26-16 3-5-3-14 1z"/><path fill="#ecdfbb" d="m8 9 12-1 5 4 13-3 1 24-14 3-5-4-12 2z"/><path d="m24 13 1 22m-13-19 7-1m-7 5 7-1m10-2 6-1m-6 6 6-2" fill="none"/>',
  portrait:
    '<circle cx="24" cy="24" r="23" fill="#dce1bc" stroke="none"/><path fill="#8b9d87" d="M4 46q2-13 16-15h8q12 1 16 15"/><path fill="#d9aa83" d="m19 27 2 8 5 2 4-6-2-5z"/><path fill="#eac29c" d="M12 17q1-10 14-9 11 1 11 15l-2 6-7 5-9-2-5-8-3-2z"/><path fill="#47463a" d="m11 23-2-9 5-8 9-3 10 3 6 8-2 7-4-6-3 2-2-5-6 6-1-4-6 7v5z"/><path d="m23 22 2-.5m6-1 2-.5m-7 8 4-.5" fill="none"/><path fill="#ced4b7" d="m18 32 8 5-5 5-5-8zm12 0-4 5 3 3 4-7z"/>',
};
export const art = (k) =>
  '<svg viewBox="0 0 48 48" aria-hidden="true" stroke="' +
  ink +
  '" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round">' +
  drawings[k] +
  "</svg>";
const paths = {
  sprout:
    "M11 21v-9M11 17C5 17 3 13 3 9c6 0 9 3 8 8ZM11 13c0-6 3-10 10-10 0 6-4 10-10 10Z",
  coin: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-9-2h4v4h-4z",
  sound: "m4 10 4 0 5-5v14l-5-5H4zM16 9q3 3 0 6m3-9q6 6 0 12",
  mute: "m4 10 4 0 5-5v14l-5-5H4zM17 10l4 4m0-4-4 4",
  settings: "M4 7h6m4 0h6M4 17h10m4 0h2M10 4v6m6 4v6",
  sun: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2",
  moon: "M19 16A8 8 0 0 1 9 5a8 8 0 1 0 10 11Z",
  cloud: "M7 17a4 4 0 1 1 0-8q3-7 9-3 2 1 2 4a3.8 3.8 0 0 1 0 7Z",
  pin: "M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Zm2-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  book: "M3 5q5-2 9 1 4-3 9-1v14q-5-2-9 1-4-3-9-1zM12 6v14",
  arrow: "m9 5 7 7-7 7",
  down: "m5 9 7 7 7-7",
  close: "m6 6 12 12M18 6 6 18",
  check: "m5 12 5 5L20 7",
  leaf: "M4 19Q3 4 20 4q0 15-13 13m-3 3L15 9",
  help: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 9q0-4 4-3 5 2 0 6l-1 2m0 3h.01",
  clock: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-5v5l4 2",
  save: "M4 4h13l3 3v13H4zM8 4v6h8V4M8 20v-6h8v6",
  home: "m2 11 10-8 10 8M5 10v10h14V10m-9 10v-6h4v6",
  flag: "M5 21V4m0 1q4-3 8 0t7 0v9q-4 3-8 0t-7 0",
  heart: "M12 20S2 14 3 8q1-7 9-2 8-5 9 2 1 6-9 12Z",
};
export const icon = (k) =>
  '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' +
  paths[k] +
  '"/></svg>';

export function drawMap(canvas, area, player, walk) {
  const ctx = canvas.getContext("2d");
  canvas.width = 760;
  canvas.height = 402;
  ctx.scale(2, 2);
  const X = (x) => 190 + x * 2.12,
    Y = (z) => 106 + z * 2.08;
  ctx.fillStyle = "#e6e5c9";
  ctx.fillRect(0, 0, 380, 201);
  function path(pts, col, w) {
    ctx.strokeStyle = col;
    ctx.lineWidth = w;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    pts.forEach(([x, z], i) =>
      i ? ctx.lineTo(X(x), Y(z)) : ctx.moveTo(X(x), Y(z)),
    );
    ctx.stroke();
  }
  for (let i = 0; i < 220; i++) {
    let x = (i * 79) % 380,
      y = (i * 61) % 201;
    ctx.fillStyle = i % 2 ? "#ccd8b5" : "#d8debd";
    ctx.beginPath();
    ctx.ellipse(x, y, 4, 1.5, -0.45, 0, Math.PI * 2);
    ctx.fill();
  }
  for (let i = 0; i < 22; i++) {
    let x = (i * 29) % 395;
    ctx.fillStyle = i % 2 ? "#b9ccaa" : "#c9d5b6";
    ctx.beginPath();
    ctx.moveTo(x - 22, 15);
    ctx.lineTo(x, 1 + ((i * 7) % 9));
    ctx.lineTo(x + 22, 20);
    ctx.fill();
  }
  let river = [];
  for (let z = -55; z < 55; z += 1) river.push([riverX(z), z]);
  path(river, "#a2beaa", 17);
  path(river, "#8cb8ad", 14);
  path(river, "#b1cdbb", 1);
  for (let j = 0; j < 6; j++)
    path(
      [
        [-71 + j * 2, 25],
        [-67 + j * 2, 16],
      ],
      "#bbc484",
      2.6,
    );
  for (let i = 0; i < 20; i++) {
    let x = -73 + ((i * 13) % 23),
      z = -44 + ((i * 7) % 17);
    path(
      [
        [x, z],
        [x + 0.2, z - 2.9],
      ],
      "#91a777",
      1,
    );
    path(
      [
        [x, z - 2],
        [x - 1.2, z - 3],
      ],
      "#91a777",
      1,
    );
  }
  let trunk = [];
  for (let x = -66; x < 67; x += 1)
    trunk.push([
      x,
      Math.abs(x - riverX(bridgeZ)) < 6
        ? bridgeZ
        : 4 + Math.sin(x * 0.16) * 1.15,
    ]);
  for (let r of [
    trunk,
    ...roads,
    [
      [23, 4],
      [25, -2],
      [23, -8],
    ],
  ]) {
    path(r, "#c2b58f", 4.6);
    path(r, "#f3deaf", 3.1);
  }
  path(
    [
      [riverX(bridgeZ) - 6, bridgeZ],
      [riverX(bridgeZ) + 6, bridgeZ],
    ],
    "#a5a390",
    4.8,
  );
  places.forEach(({ name, x, z }, i) => {
    let a = X(x),
      b = Y(z);
    ctx.fillStyle = i === area ? "#b36d4b" : "#617e61";
    ctx.beginPath();
    ctx.arc(a, b, i === area ? 4.5 : 3.2, 0, 7);
    ctx.fill();
    ctx.strokeStyle = "#fff5d8";
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.font = 'bold 10px "Songti SC",serif';
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#e6e5c9";
    let yy = b + (i === 1 ? -7 : 14);
    ctx.strokeText(name, a, yy);
    ctx.fillStyle = "#41533e";
    ctx.fillText(name, a, yy);
  });
  if (player) {
    const a = X(player.x),
      b = Y(player.z);
    ctx.beginPath();
    ctx.arc(a, b, 2.8, 0, 7);
    ctx.fillStyle = "#a04c31";
    ctx.fill();
    ctx.strokeStyle = "#fff9de";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  const wrap = document.createElement("div");
  wrap.className = "map-sheet";
  canvas.replaceWith(wrap);
  wrap.append(canvas);
  places.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "map-hit";
    b.setAttribute("aria-label", "步行前往" + p.name);
    b.title = "步行前往" + p.name;
    b.style.left = (X(p.x) / 380) * 100 + "%";
    b.style.top = ((Y(p.z) + (i === 1 ? -4 : 5)) / 201) * 100 + "%";
    b.onclick = () => walk(i);
    wrap.append(b);
  });
}
