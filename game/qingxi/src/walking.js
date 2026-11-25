// Visibility graph over building corners, riverbanks and bridge approaches.
// Ordinary clicks in open ground need only a single segment check.
export function walkingRoute(legal, anchors) {
  const distance = (a, b) => Math.hypot(b.x - a.x, b.z - a.z);
  function clear(a, b) {
    const n = Math.max(1, Math.ceil(distance(a, b) / 0.18));
    for (let j = 1; j <= n; j++) {
      const t = j / n;
      if (!legal(a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t)) return false;
    }
    return true;
  }
  const nodes = anchors.filter((p) => legal(p.x, p.z));
  let network;
  function links() {
    const edges = nodes.map(() => []);
    for (let i = 0; i < nodes.length; i++)
      for (let j = i + 1; j < nodes.length; j++) {
        if (clear(nodes[i], nodes[j])) {
          edges[i].push(j);
          edges[j].push(i);
        }
      }
    return edges;
  }
  return (start, end) => {
    if (!legal(end.x, end.z)) return null;
    if (clear(start, end)) return [end];
    network ??= links();
    const points = [...nodes, start, end],
      src = nodes.length,
      dst = src + 1;
    const costs = points.map(() => Infinity),
      prev = points.map(() => -1),
      visited = new Set();
    const fromStart = nodes.flatMap((p, i) => (clear(start, p) ? [i] : []));
    costs[src] = 0;
    while (true) {
      let best = -1,
        score = Infinity;
      for (let i = 0; i < points.length; i++) {
        let f = costs[i] + distance(points[i], end);
        if (!visited.has(i) && f < score) {
          best = i;
          score = f;
        }
      }
      if (best < 0) return null;
      if (best === dst) {
        let result = [];
        for (let i = dst; i !== src; i = prev[i]) result.push(points[i]);
        return result.reverse();
      }
      visited.add(best);
      const next = best === src ? fromStart : network[best];
      for (let i of best !== src && clear(points[best], end)
        ? [...next, dst]
        : next) {
        const d = costs[best] + distance(points[best], points[i]);
        if (d < costs[i]) {
          costs[i] = d;
          prev[i] = best;
        }
      }
    }
  };
}
