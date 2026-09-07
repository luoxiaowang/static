'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { TownMapData, MapPlace } from '@/lib/shaxi/map-data';
export function TownMap({
  open,
  onOpenChange,
  data,
  position,
  onTravel,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  data: TownMapData | null;
  position: { x: number; z: number };
  onTravel: (p: MapPlace) => void;
}) {
  const [search, setSearch] = useState(''),
    [zoom, setZoom] = useState(1);
  const scroll = useRef<HTMLDivElement>(null);
  const mx = (x: number) => 40 + (x + 100) * 4.6,
    mz = (z: number) => 40 + (z + 105) * 4.6;
  useEffect(() => {
    if (open && scroll.current) {
      scroll.current.scrollLeft =
        mx(position.x) * zoom - scroll.current.clientWidth / 2;
      scroll.current.scrollTop =
        mz(position.z) * zoom - scroll.current.clientHeight / 2;
    }
  }, [open, zoom, position.x, position.z]);
  const places = data?.places.filter((p) => p.name.includes(search)) ?? [];
  const travel = (p: MapPlace) => {
    onTravel(p);
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="town-map-dialog">
        <DialogTitle>沙溪舆图 · 自在漫游</DialogTitle>
        <DialogDescription>
          红点是你的位置。点击地图上的地点名称或右侧列表，即可传送；拖动滚动条浏览，使用按钮缩放。
        </DialogDescription>
        <div className="map-tools">
          <button
            onClick={() => setZoom((z) => Math.max(0.7, z - 0.2))}
            aria-label="缩小地图"
          >
            −
          </button>
          <span>{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom((z) => Math.min(2, z + 0.2))}
            aria-label="放大地图"
          >
            ＋
          </button>
          <button
            onClick={() => {
              if (scroll.current) {
                scroll.current.scrollLeft =
                  mx(position.x) * zoom - scroll.current.clientWidth / 2;
                scroll.current.scrollTop =
                  mz(position.z) * zoom - scroll.current.clientHeight / 2;
              }
            }}
          >
            定位自己
          </button>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索客栈、茶室、街巷…"
            aria-label="搜索地图地点"
          />
        </div>
        <div className="town-map-layout">
          <div className="town-map-scroll" ref={scroll}>
            <svg
              width={1000 * zoom}
              height={1050 * zoom}
              viewBox="0 0 1000 1050"
              aria-label="古镇全图"
            >
              <rect width="1000" height="1050" fill="#e2e6ce" />
              <path
                d={`M${mx(25)},0h${mx(41) - mx(25)}v1050h-${mx(41) - mx(25)}Z`}
                fill="#9ebeb4"
              />
              <text
                x={mx(33)}
                y="95"
                fill="#50746e"
                fontSize="18"
                textAnchor="middle"
                style={{ writingMode: 'vertical-rl' }}
              >
                黑潓江
              </text>
              {data?.roads.map((r, i) => (
                <line
                  key={'r' + i}
                  x1={mx(r.ax)}
                  y1={mz(r.az)}
                  x2={mx(r.bx)}
                  y2={mz(r.bz)}
                  stroke="#f5ecd8"
                  strokeWidth={r.width * 4.6}
                />
              ))}
              {data?.buildings.map((b, i) => (
                <rect
                  key={'b' + i}
                  x={mx(b.x - b.halfX)}
                  y={mz(b.z - b.halfZ)}
                  width={b.halfX * 9.2}
                  height={b.halfZ * 9.2}
                  fill="#a6a58c"
                  stroke="#7e856e"
                  strokeWidth="1"
                />
              ))}
              {places.map((p) => (
                <a
                  key={p.id}
                  href={'#' + p.id}
                  tabIndex={0}
                  aria-label={'传送到' + p.name}
                  onClick={(e) => {
                    e.preventDefault();
                    travel(p);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      travel(p);
                    }
                  }}
                  className="map-place"
                >
                  <circle cx={mx(p.x)} cy={mz(p.z)} r="5" fill="#517760" />
                  <text
                    x={mx(p.x) + 7}
                    y={mz(p.z) - 7}
                    fontSize="11"
                    fill="#283e2c"
                    stroke="#f4efdf"
                    strokeWidth="3"
                    paintOrder="stroke"
                  >
                    {p.name}
                  </text>
                  <title>{p.name} · 点击传送</title>
                </a>
              ))}
              <g pointerEvents="none">
                <circle
                  cx={mx(position.x)}
                  cy={mz(position.z)}
                  r="14"
                  fill="#b84f3740"
                />
                <circle
                  cx={mx(position.x)}
                  cy={mz(position.z)}
                  r="6"
                  fill="#b84f37"
                  stroke="white"
                  strokeWidth="2"
                />
                <text
                  x={mx(position.x) + 14}
                  y={mz(position.z) + 18}
                  fontSize="15"
                  fill="#9e402e"
                >
                  我在这里
                </text>
              </g>
              <text x="945" y="45" fontSize="20" fill="#42664e">
                北 ↑
              </text>
            </svg>
          </div>
          <nav className="map-place-list" aria-label="地图地点列表">
            <p>{places.length} 处可前往</p>
            {places.map((p) => (
              <button key={p.id} onClick={() => travel(p)}>
                {p.name}
                <span>传送 ↗</span>
              </button>
            ))}
            {places.length === 0 && <p>没有找到地点，试试“客栈”或“茶”。</p>}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}
