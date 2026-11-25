import { createWorld, places } from "./world.js";
import { icon, art, drawMap } from "./art.js";
const $ = (s) => document.querySelector(s),
  key = "qingxi-life-v1",
  china = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }),
  date = () => china.format(new Date()),
  day = () => date().slice(0, 10),
  fresh = () => ({ water: false, tilled: false, kind: "", end: 0 });
const defaults = {
  v: 1,
  money: 120,
  xp: 0,
  energy: 86,
  regen: Date.now(),
  outfit: 0,
  owned: [0],
  repairs: 0,
  bond: 0,
  family: 0,
  care: 0,
  birth: 0,
  visit: 0,
  talk: 0,
  tea: 3,
  fish: 0,
  flowers: 0,
  veg: 0,
  seed: 4,
  flowerSeed: 3,
  plots: Array.from({ length: 6 }, fresh),
  log: [],
  today: "",
  tasks: [],
  claims: false,
  area: 0,
  weather: null,
};
let s = structuredClone(defaults),
  saveIssue = false;
try {
  Object.assign(s, JSON.parse(localStorage.getItem(key) || "{}"));
} catch {
  saveIssue = true;
}
let world,
  active = "",
  tool = 0,
  seedType = "青菜",
  gardenMode = "耕作",
  message = "",
  muted = true,
  audioCtx,
  timer,
  delay,
  area = s.area,
  weather = s.weather,
  pendingWeather = true;
const levels = () => 1 + Math.floor(Math.sqrt(s.xp / 24)),
  items = [
    ["walk", "行走"],
    ["hoe", "锄头"],
    ["water", "水壶"],
    ["seed", "种袋"],
    ["tea", "茶壶"],
    ["bag", "背包"],
  ],
  clothes = [
    ["青苎布衫", "#758d81", 0],
    ["靛蓝长衫", "#647a99", 45],
    ["柿染秋衣", "#a26d52", 65],
    ["烟紫春衫", "#80728c", 80],
  ];
const goals = [
  ["plant", "播下一颗种子"],
  ["tea", "沏一盏家乡茶"],
  ["talk", "与阿棠聊聊天"],
];
function save() {
  try {
    localStorage.setItem(key, JSON.stringify(s));
  } catch {
    saveIssue = true;
  }
  if (saveIssue) $(".online").innerHTML = "<i></i>存档不可用";
}
function log(t) {
  s.log.unshift(date().slice(5) + "　" + t);
  s.log = s.log.slice(0, 36);
}
function mark(id) {
  if (!s.tasks.includes(id)) s.tasks.push(id);
}
function daily() {
  if (s.today !== day()) {
    s.today = day();
    s.tasks = [];
    s.claims = false;
    save();
  }
}
function recover() {
  let n = Math.max(0, Math.floor((Date.now() - s.regen) / 60000));
  if (n) {
    s.regen += n * 60000;
    s.energy = Math.min(100, s.energy + n);
    save();
  }
}
function hud() {
  daily();
  $("#wallet").innerHTML = icon("coin") + s.money + " 文";
  $("#level").textContent = "等级 " + levels();
  $(".energy i").style.width = s.energy + "%";
  $("#count").textContent = s.tasks.length + " / 3";
  $("#tasks").innerHTML = goals
    .map(
      ([id, n]) =>
        '<div class="todo ' +
        (s.tasks.includes(id) ? "done" : "") +
        '"><i></i>' +
        n +
        "</div>",
    )
    .join("");
  $("#place").textContent = places[area]?.name || places[0].name;
}
function hint(t) {
  $("#toast").textContent = t;
  $("#toast").classList.add("show");
  clearTimeout(delay);
  delay = setTimeout(() => $("#toast").classList.remove("show"), 2700);
}
function doAction(cost, fn, exp = 2) {
  recover();
  if (s.energy < cost) return feedback("体力不足，喝茶或回屋小憩就能恢复。");
  s.energy -= cost;
  let msg = fn();
  s.xp += exp;
  log(msg);
  save();
  hud();
  world?.crops(s.plots);
  feedback(msg);
}
function feedback(t) {
  message = t;
  if (active) render();
  else hint(t);
}
function buy(n, fn) {
  if (s.money < n)
    return feedback("钱袋里还差 " + (n - s.money) + " 文，可以卖出收成。");
  s.money -= n;
  doAction(0, fn, 0);
}
function btn(t, action) {
  return '<button class="act" data-act="' + action + '">' + t + "</button>";
}
function row(title, desc, label, action) {
  return (
    '<div class="row"><div><b>' +
    title +
    "</b><small>" +
    desc +
    "</small></div>" +
    (label ? btn(label, action) : "") +
    "</div>"
  );
}
function tabs(arr) {
  return (
    '<div class="tabs">' +
    arr
      .map(
        ([id, n, sel]) =>
          '<button class="act ' +
          (sel ? "active" : "") +
          '" data-act="' +
          id +
          '">' +
          n +
          "</button>",
      )
      .join("") +
    "</div>"
  );
}
function open(id) {
  world?.cancelChore();
  active = id;
  message = "";
  world?.pause(true);
  render();
  if (!$("#dialog").open) $("#dialog").showModal();
}
function close() {
  if ($("#dialog").open) $("#dialog").close();
  active = "";
  world?.pause(false);
}
$("#dialog").onclose = () => {
  if (!$("#dialog").open) {
    active = "";
    world?.pause(false);
  }
};
$("#close").onclick = close;
$("#dialog").onclick = (e) => {
  if (e.target === $("#dialog")) {
    let b = e.target.getBoundingClientRect();
    if (
      e.clientX < b.left ||
      e.clientX > b.right ||
      e.clientY < b.top ||
      e.clientY > b.bottom
    )
      close();
  }
};
const titles = {
  map: "村落地图",
  journal: "今日手记",
  profile: "归乡人的手记",
  garden: "自家菜畦",
  tea: "一席清茶",
  house: "林家老宅",
  neighbor: "邻里人家",
  rice: "禾场晒谷",
  bamboo: "竹匠歇脚处",
  river: "柳溪钓台",
  leaves: "南山茶园",
  bag: "随身背包",
  shop: "村口小铺",
  clothes: "四季衣橱",
  settings: "游戏设置",
  help: "游玩指南",
};
function render() {
  if (!active) return;
  let h = "";
  $("#title").textContent = titles[active];
  switch (active) {
    case "map":
      h =
        '<canvas class="village-map" aria-label="青溪村六处地点与连通村路"></canvas><p>点地图上的地名，林舟会步行过去。下方的「前往」可直接抵达。</p>' +
        places
          .map((p, i) =>
            row(
              p.name,
              p.brief,
              i === area ? "回到路口" : "前往",
              "travel" + i,
            ),
          )
          .join("");
      break;
    case "journal":
      h =
        goals
          .map(([k, n]) =>
            row(n, s.tasks.includes(k) ? "今日已完成" : "今日待办"),
          )
          .join("") +
        row(
          "归乡小赏",
          "完成三件日常，领取 30 文",
          s.claims ? "已领取" : "领取",
          "claim",
        ) +
        "<p>村中记事</p>" +
        s.log
          .slice(0, 6)
          .map((t) => "<p>" + t + "</p>")
          .join("");
      break;
    case "profile":
      h =
        "<p>林舟，24 岁。离开城市后，你带着一只旧背包回到青溪村，住进了祖父留下的老宅。</p>" +
        row(
          "乡居等级 " + levels(),
          "阅历 " + s.xp + " · 下一级需要 " + 24 * levels() ** 2 + " 点",
        ) +
        row(
          "体力 " + s.energy + " / 100",
          "每分钟恢复 1 点，饮茶与小憩也可恢复。",
        ) +
        row("耕作手艺", "乡居等级达到 3 级、6 级时，每畦分别增产一份。") +
        row("家中近况", familyText()) +
        tabs([
          ["open:clothes", "更换衣服"],
          ["open:journal", "翻看手记"],
        ]);
      break;
    case "garden":
      h =
        "<p>选农具和田块，林舟会走到田边劳作。浇过水的作物会提早成熟。</p>" +
        tabs(
          ["耕作", "播种", "浇水", "收获"].map((n) => [
            "mode:" + n,
            n,
            gardenMode === n,
          ]),
        ) +
        (gardenMode === "播种"
          ? tabs(
              ["青菜", "菊花"].map((n) => [
                "seed:" + n,
                n + " ×" + (n === "青菜" ? s.seed : s.flowerSeed),
                seedType === n,
              ]),
            )
          : "") +
        '<div class="plot-grid">' +
        s.plots
          .map((p, i) => {
            const ready = p.kind && p.end <= Date.now(),
              state = p.kind
                ? ready
                  ? "ready"
                  : "growing"
                : p.tilled
                  ? "tilled"
                  : "bare";
            return (
              '<button class="parcel ' +
              state +
              '" data-act="plot' +
              i +
              '"><span class="field-art" aria-hidden="true"><i></i><i></i><i></i></span><strong>第' +
              (i + 1) +
              "畦 · " +
              (p.kind || "空地") +
              '</strong><small data-plot-status="' +
              i +
              '">' +
              plotStatus(p) +
              '</small><span class="parcel-action">' +
              gardenMode +
              "</span></button>"
            );
          })
          .join("") +
        "</div>";
      break;
    case "tea":
      h =
        "<p>洗盏、投茶，等山泉水慢慢舒开茶叶。</p>" +
        row(
          "黄山毛峰",
          "茶叶 ×" + s.tea + " · 每盏恢复 24 点体力",
          "沏一盏",
          "brew",
        ) +
        row("南山茶坞", "沿山路采茶，补充家中茶叶。", "看地图", "open:map");
      break;
    case "house":
      h =
        row(
          "祖屋修缮 · " + s.repairs + " / 3",
          [
            "先修补屋檐，再添花盆和院中木桌。",
            "屋檐已修好，下一步添置花盆。",
            "院子有了花色，可以再添一张木桌。",
            "屋檐、盆花与庭院木桌都已置办。",
          ][s.repairs],
          s.repairs < 3 ? "修缮 " + (40 + s.repairs * 35) + " 文" : "",
          "repair",
        ) +
        row("竹榻小憩", "歇一会儿，恢复 35 点体力。", "歇脚", "rest") +
        row(
          "家里人",
          familyText(),
          s.family === 2
            ? "商量添丁"
            : s.family === 3
              ? "查看近况"
              : s.family === 4
                ? "陪孩子玩"
                : "探望阿棠",
          s.family >= 2 ? "family" : "visit",
        ) +
        row("旧木衣柜", "换上喜欢的衣裳。", "打开", "open:clothes");
      break;
    case "neighbor":
      h =
        "<p>阿棠，25 岁，在村里照料花圃。" +
        [
          "“刚回来？菜种我替你留着呢。”",
          "“溪边的菊花开了，一起去看看吧。”",
          "“今晚回家吃饭，我泡了你喜欢的茶。”",
        ][Math.min(2, s.family)] +
        "</p>" +
        row("亲密度 " + s.bond + " / 100", familyText()) +
        row("说说近况", "每 30 秒可以再聊一次，好感 +8。", "闲聊", "talk") +
        row(
          "送一枝菊花",
          "菊花 ×" + s.flowers + " · 好感 +18",
          "赠花",
          "gift",
        ) +
        (s.family < 2
          ? row(
              s.family ? "成家" : "表达心意",
              s.family
                ? "好感达到 80，修缮一次祖屋，备好 60 文。"
                : "好感达到 40，可以邀请阿棠交往。",
              s.family ? "结为伴侣" : "表白",
              "romance",
            )
          : "");
      break;
    case "rice":
      h =
        "<p>把场上的稻谷摊匀，翻过来晒一晒。收工时，农户会给你一份工钱。</p>" +
        row("翻晒稻谷", "体力 −5 · 工钱 8 文", "搭把手", "dryRice");
      break;
    case "bamboo":
      h =
        "<p>竹匠留了一捆青竹，正等人帮忙分拣做篾条的料。</p>" +
        row("拣选竹料", "体力 −4 · 工钱 6 文", "帮忙选竹", "sortBamboo");
      break;
    case "river":
      h =
        "<p>撑船的周伯在岸边给你让了个位子。</p>" +
        row("溪边的周伯", "船夫 · 青溪村老住户", "聊两句", "boatTalk") +
        row("溪边垂钓", "体力 −6 · 收获溪鱼，可在小铺出售。", "抛竿", "fish");
      break;
    case "leaves":
      h =
        "<p>茶农许姨正沿垄拣叶，招呼你过去。</p>" +
        row("茶农许姨", "茶坞主人 · 青溪村老住户", "聊两句", "leafTalk") +
        row("采摘茶叶", "体力 −5 · 收获 2 份茶叶。", "采茶", "pick");
      break;
    case "bag":
      h =
        [
          ["青菜种子", s.seed],
          ["菊花种子", s.flowerSeed],
          ["茶叶", s.tea],
          ["青菜", s.veg],
          ["菊花", s.flowers],
          ["溪鱼", s.fish],
        ]
          .map(([n, v]) => row(n, "现有 " + v + " 份"))
          .join("") +
        tabs([
          ["open:shop", "去小铺买卖"],
          ["open:clothes", "打开衣橱"],
        ]);
      break;
    case "shop":
      h =
        "<p>钱袋里有 " +
        s.money +
        " 文。</p>" +
        [
          ["青菜种子", 4, "seed"],
          ["菊花种子", 6, "flowerSeed"],
          ["茶叶", 5, "tea"],
        ]
          .map(([n, c, k]) => row(n, c + " 文一份", "买入", "buy:" + k))
          .join("") +
        [
          ["青菜", 12, "veg"],
          ["菊花", 18, "flowers"],
          ["溪鱼", 10, "fish"],
        ]
          .map(([n, c, k]) =>
            row(
              n,
              "库存 " + s[k] + " · 每份 " + c + " 文",
              "卖一份",
              "sell:" + k,
            ),
          )
          .join("");
      break;
    case "clothes":
      h = clothes
        .map(([n, c, price], i) =>
          row(
            n,
            s.owned.includes(i) ? "已收入衣橱" : price + " 文",
            i === s.outfit
              ? "穿着中"
              : s.owned.includes(i)
                ? "换上"
                : "购买穿上",
            "wear" + i,
          ),
        )
        .join("");
      break;
    case "settings":
      h =
        row(
          "天气地点",
          "安徽黄山 · Open-Meteo · 每 15 分钟同步一次",
          "刷新",
          "refresh",
        ) +
        row("环境声", "循环的轻柔五声音阶", muted ? "开启" : "关闭", "audio") +
        row(
          "本机存档",
          saveIssue ? "当前浏览器未允许存储" : "操作后自动保存，可刷新继续。",
        ) +
        row("操作方式", "键盘、鼠标与触屏均可游玩。", "查看", "open:help");
      break;
    case "help":
      h =
        "<p>点击空地，或使用 WASD、方向键行走。横向拖动画面可转动视角，滚轮和画面右下角的加减按钮可缩放。点击地名会走向目的地，到达后互动。按 E 可与近处的人或物互动。</p><p>点田里的六块菜畦可按生长状态翻土、播种、浇水或收获，也可先选农具。选种袋后可切换青菜或菊花。点茶桌就会落座饮茶。作物在离开游戏后也会继续生长。卖出收成可换钱，用来添置衣物、修缮老宅。</p><p>拜访阿棠、聊天和赠花能培养感情。结为伴侣后，在老宅商量添丁、照料孩子。</p><p>数字键 1–6 选择工具，M 打开地图，Esc 合上手记。日期与季节按北京时间计算，村庄天气取自黄山。</p>";
      break;
  }
  $("#content").innerHTML =
    (message
      ? '<div class="feedback" role="status">' + message + "</div>"
      : "") + h;
  $("#dialog").classList.toggle("map-open", active === "map");
  if (active === "map")
    drawMap($(".village-map"), area, world?.position(), (i) => {
      close();
      world?.walkTo(i);
      hint("步行前往" + places[i].name);
    });
}
function familyText() {
  return [
    "独居在归家小院",
    "与阿棠相恋中",
    "已与阿棠结为伴侣",
    "全家正等着新生命到来",
    "一家三口 · " +
      (s.care >= 10
        ? "孩子学会了走路"
        : s.care >= 4
          ? "孩子会叫爹娘了"
          : "孩子正在襁褓里"),
  ][s.family];
}
function plotStatus(p) {
  if (!p.kind) return p.tilled ? "已翻土，可播种" : "待开垦";
  const seconds = Math.ceil((p.end - Date.now()) / 1000);
  return seconds <= 0
    ? "可以收获"
    : seconds + " 秒后成熟" + (p.water ? " · 已浇水" : "");
}
function sceneAction(kind, index, cost, finish, exp = 2) {
  recover();
  if (s.energy < cost) return feedback("体力不足，喝茶或回屋小憩就能恢复。");
  close();
  if (world?.perform(kind, index, () => doAction(cost, finish, exp)))
    hint(
      kind === "饮茶" ? "去茶席坐一会儿" : "前往第" + (index + 1) + "畦" + kind,
    );
}
function drink(index) {
  if (!s.tea) return feedback("茶叶用完了，去南山茶坞采一些吧。");
  sceneAction("饮茶", index, 0, () => {
    s.tea--;
    s.energy = Math.min(100, s.energy + 24);
    mark("tea");
    return "饮下一盏毛峰，体力恢复到 " + s.energy + " 点。";
  });
}
function scenePlot(i) {
  const p = s.plots[i];
  const kind =
    tool === 1
      ? "耕作"
      : tool === 2
        ? "浇水"
        : tool === 3
          ? "播种"
          : !p.tilled
            ? "耕作"
            : !p.kind
              ? "播种"
              : Date.now() >= p.end
                ? "收获"
                : "浇水";
  plot(i, kind);
}
function plot(i, mode = gardenMode) {
  let p = s.plots[i];
  if (mode === "耕作") {
    if (p.tilled) return feedback("这块地已经翻过土了。");
    return sceneAction(mode, i, 3, () => {
      p.tilled = true;
      return "翻松了第" + (i + 1) + "畦泥土。";
    });
  }
  if (mode === "播种") {
    if (!p.tilled || p.kind) return feedback("请先选一块翻好土的空地。");
    const crop = seedType;
    let k = crop === "青菜" ? "seed" : "flowerSeed";
    if (!s[k]) return feedback("种子用完了，背包里的村口小铺有售。");
    return sceneAction(mode, i, 2, () => {
      s[k]--;
      p.kind = crop;
      p.end = Date.now() + (k === "seed" ? 90000 : 150000);
      mark("plant");
      return "播下了" + p.kind + "，记得浇水。";
    });
  }
  if (!p.kind) return feedback("这块地还没有作物。");
  if (mode === "浇水") {
    if (p.water) return feedback("土壤已经湿润了。");
    return sceneAction(mode, i, 2, () => {
      p.water = true;
      p.end -= 35000;
      return "浇透了泥土，成熟时间缩短了。";
    });
  }
  if (p.end > Date.now())
    return feedback(
      "再等 " + Math.ceil((p.end - Date.now()) / 1000) + " 秒就能收获。",
    );
  sceneAction(
    mode,
    i,
    2,
    () => {
      let k = p.kind === "青菜" ? "veg" : "flowers";
      const harvest = 2 + Number(levels() >= 3) + Number(levels() >= 6);
      s[k] += harvest;
      s.plots[i] = fresh();
      return "收获了 " + harvest + " 份" + p.kind + "。";
    },
    8,
  );
}
function village(id) {
  close();
  let dest = id === "river" ? 1 : id === "leaves" ? 2 : 0;
  world.travel(dest);
  open(id);
}
function action(a) {
  if (a.startsWith("open:")) return open(a.slice(5));
  if (a.startsWith("travel")) {
    world.travel(Number(a.slice(6)));
    close();
    return hint("已抵达" + places[area].name);
  }
  if (a.startsWith("mode:")) {
    gardenMode = a.slice(5);
    message = "";
    return render();
  }
  if (a.startsWith("seed:")) {
    selectSeed(a.slice(5));
    return render();
  }
  if (a.startsWith("plot")) return plot(+a.slice(4));
  if (a.startsWith("buy:")) {
    let k = a.slice(4);
    return buy({ seed: 4, flowerSeed: 6, tea: 5 }[k], () => {
      s[k]++;
      return "已买入一份，放入背包。";
    });
  }
  if (a.startsWith("sell:")) {
    let k = a.slice(5),
      price = { veg: 12, flowers: 18, fish: 10 }[k];
    if (!s[k]) return feedback("背包里暂时没有可售的存货。");
    return doAction(
      0,
      () => {
        s[k]--;
        s.money += price;
        return "卖出一份，收入 " + price + " 文。";
      },
      1,
    );
  }
  if (a.startsWith("wear")) {
    let i = +a.slice(4);
    if (s.outfit === i) return feedback("已经穿着这套衣服。");
    return buy(s.owned.includes(i) ? 0 : clothes[i][2], () => {
      if (!s.owned.includes(i)) s.owned.push(i);
      s.outfit = i;
      world.outfit(clothes[i][1]);
      return "换上了" + clothes[i][0] + "。";
    });
  }
  switch (a) {
    case "brew":
      return drink(area === 2 ? 1 : 0);
    case "dryRice":
      return doAction(
        5,
        () => {
          s.money += 8;
          return "翻晒了一垄新谷，收到 8 文工钱。";
        },
        4,
      );
    case "sortBamboo":
      return doAction(
        4,
        () => {
          s.money += 6;
          return "帮竹匠选好了竹料，收到 6 文工钱。";
        },
        3,
      );
    case "boatTalk":
      return feedback(
        "周伯笑道：“站桥上看水纹，水动得碎的地方，底下多半有鱼。”",
      );
    case "leafTalk":
      return feedback(
        "许姨说：“芽叶要轻轻提，别使劲掐。等回家泡开了，你就闻见山里的香了。”",
      );
    case "pick":
      return doAction(
        5,
        () => {
          s.tea += 2;
          return "采下了两份山茶。";
        },
        4,
      );
    case "fish":
      return doAction(
        6,
        () => {
          s.fish++;
          return "一尾溪鱼入篓了。";
        },
        4,
      );
    case "repair":
      if (s.repairs < 3)
        return buy(40 + s.repairs * 35, () => {
          s.repairs++;
          s.xp += 12;
          world.repair(s.repairs);
          return "老宅修缮完成，回院里看看。";
        });
      break;
    case "rest":
      return doAction(
        0,
        () => {
          s.energy = Math.min(100, s.energy + 35);
          return "在竹榻上小憩，体力恢复到 " + s.energy + " 点。";
        },
        0,
      );
    case "visit":
      return village("neighbor");
    case "talk":
      if (Date.now() - s.talk < 30000)
        return feedback(
          "阿棠正忙，" +
            Math.ceil((s.talk + 30000 - Date.now()) / 1000) +
            " 秒后再聊。",
        );
      return doAction(1, () => {
        s.talk = Date.now();
        s.bond = Math.min(100, s.bond + 8);
        mark("talk");
        return "和阿棠聊起旧日的村子，好感增加了。";
      });
    case "gift":
      if (!s.flowers) return feedback("先在菜畦种些菊花，成熟后就能赠花。");
      return doAction(0, () => {
        s.flowers--;
        s.bond = Math.min(100, s.bond + 18);
        return "阿棠接过菊花，笑着道了谢。";
      });
    case "romance":
      if (!s.family) {
        if (s.bond < 40)
          return feedback("再多相处些日子，好感达到 40 就能表白。");
        return doAction(
          0,
          () => {
            s.family = 1;
            return "阿棠牵起你的手，你们开始交往了。";
          },
          10,
        );
      }
      if (s.family === 1) {
        if (s.bond < 80 || !s.repairs)
          return feedback("需要 80 点好感，并至少修缮一次祖屋。");
        return buy(60, () => {
          s.family = 2;
          return "红灯挂上屋檐，你和阿棠成家了。";
        });
      }
      break;
    case "family":
      if (s.family === 2)
        return doAction(
          0,
          () => {
            s.family = 3;
            s.birth = Date.now() + 86400000;
            return "你们决定迎接孩子，现实一天后回家看看。";
          },
          8,
        );
      if (s.family === 3) {
        if (Date.now() < s.birth)
          return feedback(
            "距迎接孩子还有约 " +
              Math.ceil((s.birth - Date.now()) / 3600000) +
              " 小时。",
          );
        return doAction(
          0,
          () => {
            s.family = 4;
            world.family(4);
            return "孩子平安降生，村里又多了一位小住客。";
          },
          20,
        );
      }
      if (s.family === 4)
        return doAction(4, () => {
          s.care++;
          return "陪孩子玩了一会儿。" + familyText();
        });
      break;
    case "claim":
      if (s.claims || s.tasks.length !== 3)
        return feedback(
          s.claims ? "今天的奖励已经领取了。" : "完成今日三件日常后即可领取。",
        );
      return doAction(
        0,
        () => {
          s.money += 30;
          s.claims = true;
          return "领取了今日小赏 30 文。";
        },
        8,
      );
    case "audio":
      sound();
      return render();
    case "refresh":
      fetchSky();
      return feedback("正在同步黄山天气。");
  }
}
$("#content").onclick = (e) => {
  let b = e.target.closest("[data-act]");
  if (b) action(b.dataset.act);
};
function choose(i) {
  world?.cancelChore();
  tool = i;
  $("#seeds").hidden = i !== 3;
  [...$(".tools").children].forEach((b, j) =>
    b.classList.toggle("selected", j === i),
  );
  if (i === 0) {
    close();
    hint("点选地面，或用方向键漫步");
    return;
  }
  if (i <= 3) {
    gardenMode = ["", "耕作", "浇水", "播种"][i];
    close();
    hint("点场景里的一块菜畦" + gardenMode);
    return;
  }
  if (i === 4) return drink(area === 2 ? 1 : 0);
  open("bag");
}
function selectSeed(name) {
  seedType = name;
  for (const el of $("#seeds").children)
    el.setAttribute("aria-pressed", el.dataset.seed === name);
}
$("#seeds").onclick = (e) => {
  const b = e.target.closest("[data-seed]");
  if (b) selectSeed(b.dataset.seed);
};
$("#tools").innerHTML = items
  .map(
    ([k, t], i) =>
      '<button class="tool ' +
      (i ? "" : "selected") +
      '" aria-label="' +
      t +
      '"><small>' +
      (i + 1) +
      "</small>" +
      art(k) +
      "<span>" +
      t +
      "</span></button>",
  )
  .join("");
[...$(".tools").children].forEach((b, i) => (b.onclick = () => choose(i)));
$(".avatar").innerHTML = art("portrait");
$("#map").innerHTML = art("map") + "村落地图" + icon("arrow");
document
  .querySelectorAll("[data-icon]")
  .forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
for (let [id, a] of [
  ["map", "map"],
  ["profile", "profile"],
  ["settings", "settings"],
  ["journal", "journal"],
  ["help", "help"],
  ["wallet", "shop"],
])
  $("#" + id).onclick = () => open(a);
function sound() {
  if (!audioCtx) audioCtx = new AudioContext();
  audioCtx.resume();
  muted = !muted;
  clearInterval(timer);
  if (!muted) {
    let ix = 0;
    function note() {
      let f = [293.66, 369.99, 440, 493.88, 554.37, 440, 369.99, 329.63][
          ix++ % 8
        ],
        o = audioCtx.createOscillator(),
        g = audioCtx.createGain(),
        t = audioCtx.currentTime;
      o.type = "sine";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.045, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.7);
      o.connect(g).connect(audioCtx.destination);
      o.start();
      o.stop(t + 1.8);
    }
    note();
    timer = setInterval(note, 1750);
  } else audioCtx.suspend();
  $("#audio").innerHTML = icon(muted ? "mute" : "sound");
  $("#audio").ariaLabel = muted ? "开启环境声" : "关闭环境声";
}
$("#audio").innerHTML = icon("mute");
$("#audio").onclick = sound;
$("#settings").innerHTML = icon("settings");
$("#nearby").onclick = () => world?.near();
$("#less").onclick = () => world?.zoom(-0.12);
$("#more").onclick = () => world?.zoom(0.12);
const wName = (c) =>
  c === 0
    ? "晴天"
    : c <= 2
      ? "多云"
      : c === 3
        ? "阴天"
        : c <= 48
          ? "雾天"
          : c >= 95
            ? "雷雨"
            : (c >= 71 && c <= 77) || c === 85 || c === 86
              ? "雪天"
              : "雨天";
function tick() {
  recover();
  hud();
  let stamp = date(),
    hour = +stamp.slice(11, 13),
    min = hour * 60 + +stamp.slice(14, 16),
    month = +stamp.slice(5, 7),
    season = ["冬", "春", "夏", "秋"][Math.floor((month % 12) / 3)],
    valid = weather && Date.now() - weather.at < 3600000,
    solar = valid && weather.day === day(),
    rise = solar ? weather.rise : 390,
    set = solar ? weather.set : 1060;
  let ph =
      min < rise - 65 || min > set + 35
        ? "夜晚"
        : min < rise - 10
          ? "清晨"
          : min < rise + 40
            ? "日出"
            : min < 780
              ? "白天"
              : min < set - 50
                ? "下午"
                : "夕阳",
    we = valid ? wName(weather.code) : "未知";
  $("#clock").innerHTML =
    icon(ph === "夜晚" ? "moon" : "clock") + ph + " " + stamp.slice(11, 16);
  $("#weather").innerHTML =
    icon(we === "晴天" ? "sun" : "cloud") +
    (valid
      ? we + " " + Math.round(weather.temp) + "°"
      : pendingWeather
        ? "同步天气中"
        : "天气未同步");
  $("#date").textContent =
    stamp.slice(0, 10).replace("-", "年").replace("-", "月") +
    "日 · " +
    season +
    "季 · 北京时间";
  world?.sky(ph, we, season);
  if (active === "garden")
    document.querySelectorAll("[data-plot-status]").forEach((el) => {
      const p = s.plots[Number(el.dataset.plotStatus)],
        status = plotStatus(p);
      if (el.textContent !== status) el.textContent = status;
      if (p.kind && p.end <= Date.now()) {
        el.parentElement.classList.remove("growing");
        el.parentElement.classList.add("ready");
      }
    });
}
let fetching = false;
async function fetchSky() {
  if (fetching) return;
  fetching = true;
  pendingWeather = true;
  tick();
  try {
    let res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=29.71&longitude=118.34&current=temperature_2m,weather_code&daily=sunrise,sunset&timezone=Asia%2FShanghai&forecast_days=1",
      { signal: AbortSignal.timeout(10000) },
    );
    if (!res.ok) throw Error();
    let d = await res.json(),
      minutes = (t) => Number(t.slice(11, 13)) * 60 + Number(t.slice(14, 16));
    if (
      !Number.isFinite(d.current.temperature_2m) ||
      !Number.isFinite(d.current.weather_code)
    )
      throw Error();
    weather = s.weather = {
      at: Date.now(),
      day: d.daily.time[0],
      rise: minutes(d.daily.sunrise[0]),
      set: minutes(d.daily.sunset[0]),
      temp: d.current.temperature_2m,
      code: d.current.weather_code,
    };
    save();
  } catch {
  } finally {
    fetching = false;
    pendingWeather = false;
    tick();
    if (active === "settings")
      feedback(
        weather && Date.now() - weather.at < 3600000
          ? "已显示最近同步的黄山天气。"
          : "天气服务暂时未连通，可稍后刷新。",
      );
  }
}
try {
  let savedArea = area;
  world = createWorld($("#world"), {
    area(i) {
      area = s.area = i;
      hud();
      save();
    },
    hint,
    nearby(spot) {
      const b = $("#nearby");
      b.hidden = !spot;
      if (spot) {
        b.innerHTML =
          icon("leaf") +
          " " +
          ({
            house: "进屋看看",
            neighbor: "和阿棠说话",
            tea: "坐下喝茶",
            garden: "照料菜畦",
            river: "溪边垂钓",
            leaves: "采摘山茶",
            rice: "翻晒稻谷",
            bamboo: "帮忙选竹",
            shop: "逛山货摊",
          }[spot.id] || spot.name) +
          " <kbd>E</kbd>";
      }
    },
    plot: scenePlot,
    tea: drink,
    use(id) {
      if (id === "tea") drink(0);
      else open(id);
    },
  });
  world.travel(places[savedArea] ? savedArea : 0);
  world.family(s.family);
  world.outfit(clothes[s.outfit][1]);
  world.repair(s.repairs);
  world.crops(s.plots);
} catch (e) {
  console.error(e);
  $("#world").innerHTML =
    '<p style="margin:22vh auto;text-align:center">三维场景未能启动，请用支持 WebGL 2 的浏览器打开，并启用图形加速。</p>';
}
window.addEventListener("keydown", (e) => {
  if (active || !world) return;
  let k = e.key.toLowerCase();
  if (
    [
      "w",
      "a",
      "s",
      "d",
      "arrowup",
      "arrowdown",
      "arrowleft",
      "arrowright",
    ].includes(k)
  ) {
    e.preventDefault();
    world.key(k, true);
  } else if (!e.repeat) {
    if (k === "e") world.near();
    if (k === "m") open("map");
    if (/^[1-6]$/.test(k)) choose(+k - 1);
  }
});
window.addEventListener("keyup", (e) => world?.key(e.key.toLowerCase(), false));
window.addEventListener("blur", () => world?.pause(true));
window.addEventListener("focus", () => world?.pause(Boolean(active)));
tick();
fetchSky();
setInterval(fetchSky, 900000);
setInterval(tick, 1000);
let cropMask = "";
setInterval(() => {
  let m = s.plots
    .map((p) => (p.kind && Date.now() >= p.end ? "1" : "0"))
    .join("");
  if (m !== cropMask) {
    world?.crops(s.plots);
    cropMask = m;
  }
}, 1500);
