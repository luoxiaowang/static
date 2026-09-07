'use client';
import { TownMap } from './town-map';
import type { TownMapData } from '@/lib/shaxi/map-data';
import { useEffect, useRef, useState } from 'react';
import {
  Sun,
  Moon,
  Maximize,
  Minimize,
  HelpCircle,
  MapPin,
  TreeDeciduous,
  Footprints,
  Mouse,
  Eye,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoveUpRight,
  CloudSun,
  CloudFog,
  CloudRain,
  UserRound,
  ArrowUp,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { STOPS } from '@/lib/shaxi/navigation';
import type { WorldEngine, SceneState } from '@/lib/shaxi/engine';
import type { Weather } from '@/lib/shaxi/atmosphere';

export default function Home() {
  const container = useRef<HTMLDivElement>(null),
    map = useRef<HTMLCanvasElement>(null),
    engine = useRef<WorldEngine | null>(null);
  const [ready, setReady] = useState(false),
    [error, setError] = useState(''),
    [dusk, setDusk] = useState(false),
    [help, setHelp] = useState(false),
    [quiet, setQuiet] = useState(false),
    [fullscreen, setFullscreen] = useState(false),
    [mapOpen, setMapOpen] = useState(false);
  const [mapData, setMapData] = useState<TownMapData | null>(null);
  const [state, setState] = useState<SceneState>({
    region: 0,
    position: { x: 0, z: 18 },
    steps: 0,
    moving: false,
    sitting: false,
    jumps: 0,
    airborne: false,
    altitude: 0,
    nearby: '',
    dialogue: '',
    speaker: '',
  });
  useEffect(() => {
    let cancelled = false;
    import('@/lib/shaxi/engine')
      .then(async ({ mountWorld }) => {
        const { preloadSceneAssets } = await import('@/lib/shaxi/surfaces');
        await preloadSceneAssets();
        if (cancelled || !container.current || !map.current) return;
        try {
          engine.current = mountWorld(
            container.current,
            map.current,
            setState,
            setError,
          );
          setMapData(engine.current.mapData);
          setReady(true);
        } catch (e) {
          console.error(e);
          setError(
            '无法启动三维场景，请开启浏览器硬件加速，或使用支持 WebGL 2 的浏览器重试。',
          );
        }
      })
      .catch(() => setError('场景或材质加载失败，请检查本地服务后重试。'));
    return () => {
      cancelled = true;
      engine.current?.dispose();
      engine.current = null;
    };
  }, []);
  useEffect(() => {
    engine.current?.setPaused(help || mapOpen || !!error);
  }, [help, mapOpen, error]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') setQuiet(false);
      if (
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        (e.target instanceof HTMLElement &&
          (e.target.matches('input,textarea,select') ||
            e.target.isContentEditable))
      )
        return;
      if (e.code === 'KeyM' && !e.repeat) setMapOpen((v) => !v);
      if (e.code === 'KeyH' && !e.repeat && !help) setQuiet((v) => !v);
    };
    const full = () => setFullscreen(!!document.fullscreenElement);
    window.addEventListener('keydown', handler);
    document.addEventListener('fullscreenchange', full);
    return () => {
      window.removeEventListener('keydown', handler);
      document.removeEventListener('fullscreenchange', full);
    };
  }, [help]);
  const [placesOpen, setPlacesOpen] = useState(false);
  const [weather, setWeather] = useState<Weather>('clear');
  const stop = STOPS[state.region];
  const toggleTime = (value: boolean) => {
    setDusk(value);
    engine.current?.setDusk(value);
  };
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      setQuiet(true);
    }
  }
  return (
    <main className={`world ${dusk ? 'night' : ''} ${quiet ? 'quiet' : ''}`}>
      <div ref={container} className="viewport" />
      <div className="vignette" />
      <div className="hud">
        <header className="masthead">
          <span className="seal" aria-hidden="true">
            旧时游
          </span>
          <div className="brand">
            <h1>沙溪</h1>
            <p>云南 · 茶马古道上的慢时光</p>
          </div>
        </header>
        <div className="top-actions">
          <fieldset className="time-switch glass" aria-label="场景时光">
            <button
              className={!dusk ? 'selected' : ''}
              aria-pressed={!dusk}
              aria-label="午后"
              onClick={() => toggleTime(false)}
              disabled={!ready}
            >
              <Sun size={16} />
              <span>午后</span>
            </button>
            <button
              className={dusk ? 'selected' : ''}
              aria-pressed={dusk}
              aria-label="夜色"
              onClick={() => toggleTime(true)}
              disabled={!ready}
            >
              <Moon size={16} />
              <span>夜色</span>
            </button>
          </fieldset>
          <button
            className="round-button glass help-button"
            aria-label="查看漫游指南"
            onClick={() => setHelp(true)}
          >
            <HelpCircle size={18} />
          </button>
          <button
            className="round-button glass"
            aria-label={fullscreen ? '退出全屏' : '全屏漫游'}
            onClick={toggleFullscreen}
          >
            {fullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
          </button>
        </div>
        <section className="chapter" aria-live="polite">
          <span className="chapter-line" />
          <div>
            <small>此刻，行至</small>
            <strong>{stop.name}</strong>
            <p>{stop.caption}</p>
          </div>
        </section>
        <div
          className="weather-actions glass"
          role="toolbar"
          aria-label="天气与人物"
        >
          {(
            [
              ['clear', '晴日', CloudSun],
              ['mist', '山雾', CloudFog],
              ['rain', '细雨', CloudRain],
            ] as const
          ).map(([id, label, Icon]) => (
            <button
              key={id}
              disabled={!ready}
              aria-pressed={weather === id}
              className={weather === id ? 'selected' : ''}
              onClick={() => {
                setWeather(id);
                engine.current?.setWeather(id);
              }}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
          <button
            disabled={!ready}
            onClick={() => engine.current?.inspectCharacter()}
          >
            <UserRound size={15} />
            看人物
          </button>
          <button
            onClick={() => engine.current?.toggleSit()}
            disabled={!ready || state.airborne}
            aria-pressed={state.sitting}
          >
            <span aria-hidden="true">R</span>
            {state.sitting ? '起身' : '坐下'}
          </button>
        </div>
        <div
          className="qinggong glass"
          aria-label={`轻功已使用${state.jumps}段，当前高度${state.altitude.toFixed(1)}米`}
        >
          <span>轻功</span>
          <span className="jump-pips">
            {[1, 2, 3].map((n) => (
              <i key={n} className={state.jumps >= n ? 'spent' : ''} />
            ))}
          </span>
          <span>
            {state.airborne
              ? ['', '一段 · 踏风', '二段 · 凌空', '三段 · 飞檐'][
                  state.jumps
                ] || '落下'
              : state.altitude > 3
                ? '屋顶 · 观景'
                : '空格 · 三段'}
          </span>
          <small>
            {state.altitude > 1 ? `${state.altitude.toFixed(1)} 米` : ''}
          </small>
        </div>
        <Collapsible
          open={placesOpen}
          onOpenChange={setPlacesOpen}
          className="places-panel"
        >
          <CollapsibleTrigger className="places-toggle glass">
            古镇地点 · {STOPS.length} 处{' '}
            <span>{placesOpen ? '收起 ▾' : '展开 ▴'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <nav className="destinations" aria-label="前往古镇景点">
              {STOPS.map((p, i) => {
                const Icon = [MapPin, TreeDeciduous, MoveUpRight][i % 3];
                return (
                  <button
                    key={p.id}
                    disabled={!ready}
                    aria-current={state.region === i ? 'location' : undefined}
                    onClick={() => {
                      engine.current?.travel(i);
                      setPlacesOpen(false);
                    }}
                    className={`destination glass ${state.region === i ? 'active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>
                      {i + 1}. {p.name}
                    </span>
                    <small>前往</small>
                  </button>
                );
              })}
            </nav>
          </CollapsibleContent>
        </Collapsible>
        {ready && state.nearby && (
          <button
            className="interact-button glass"
            onClick={() => engine.current?.interact()}
          >
            <kbd>E</kbd> {state.nearby} · 互动
          </button>
        )}
        {state.dialogue && (
          <section className="speech glass" aria-live="polite">
            <strong>{state.speaker}</strong>
            <p>{state.dialogue}</p>
            <button onClick={() => engine.current?.interact()}>
              再聊一句 <span aria-hidden="true">↗</span>
            </button>
          </section>
        )}
        {ready && state.steps < 6 && !error && (
          <div className="intro-hint">
            空格轻功 · 再按可连跳，共三段 <span aria-hidden="true">↗</span>
          </div>
        )}
        <footer className="bottom-bar">
          <div className="controls glass">
            <div className="key-group">
              <span className="keys">
                <kbd>W</kbd>
                <kbd>A</kbd>
                <kbd>S</kbd>
                <kbd>D</kbd>
              </span>
              <span>行走</span>
            </div>
            <div className="key-group">
              <Mouse size={16} />
              <span>拖动环顾</span>
            </div>
            <div className="key-group extra-control">
              <kbd>Shift</kbd>
              <span>快走</span>
            </div>
            <div className="key-group">
              <kbd>空格</kbd>
              <span>三段轻功</span>
            </div>
            <div className="key-group">
              <kbd>R</kbd>
              <span>坐下 / 起身</span>
            </div>
            <button className="mode-button" onClick={() => setQuiet(true)}>
              <Eye size={16} />
              沉浸模式
            </button>
            <button
              className="mode-button"
              onClick={() => setHelp(true)}
              aria-label="操作指南"
            >
              <HelpCircle size={16} />
            </button>
          </div>
          <div className="journey">
            <span className="journey-dot" />
            <Footprints size={14} />
            <span>已漫步 {state.steps} 步</span>
          </div>
        </footer>
        <aside
          className="map-card glass"
          aria-label="古镇地图，红点为当前位置，点击标注前往"
        >
          <div className="map-heading">
            <span>古镇舆图</span>
            <small>北 ↑</small>
          </div>
          <button
            className="map-open-button"
            onClick={() => setMapOpen(true)}
            disabled={!ready}
            aria-label="放大古镇地图"
          >
            <canvas ref={map} />
          </button>
          <p className="map-caption">点击放大 · M 键打开</p>
        </aside>
        <button
          className="mobile-jump glass"
          aria-label="轻功起跳，最多连续三段"
          onPointerDown={(e) => {
            e.preventDefault();
            engine.current?.jump();
          }}
        >
          <ArrowUp size={23} />
          <span>轻功</span>
        </button>
        <div className="mobile-controls" aria-label="触屏行走方向">
          {(['KeyW', 'KeyA', 'KeyS', 'KeyD'] as const).map((key, i) => {
            const Icon = [ChevronUp, ChevronLeft, ChevronDown, ChevronRight][i];
            return (
              <button
                key={key}
                className="glass"
                aria-label={['向前行走', '向左行走', '向后行走', '向右行走'][i]}
                onPointerDown={(e) => {
                  e.preventDefault();
                  e.currentTarget.setPointerCapture(e.pointerId);
                  engine.current?.setKey(key, true);
                }}
                onPointerUp={() => engine.current?.setKey(key, false)}
                onPointerCancel={() => engine.current?.setKey(key, false)}
                onLostPointerCapture={() => engine.current?.setKey(key, false)}
              >
                <Icon size={22} />
              </button>
            );
          })}
        </div>
      </div>
      {quiet && (
        <button className="return-ui glass" onClick={() => setQuiet(false)}>
          显示界面 <span aria-hidden="true">↗</span>
        </button>
      )}
      {(!ready || error) && (
        <output className="loading">
          {!error && <div className="loading-orbit" />}
          <h2>山间有沙溪</h2>
          <p>{error || '正为你铺开一段旧时光…'}</p>
          {error && (
            <button className="retry" onClick={() => window.location.reload()}>
              重新加载
            </button>
          )}
        </output>
      )}
      <TownMap
        open={mapOpen}
        onOpenChange={setMapOpen}
        data={mapData}
        position={state.position}
        onTravel={(p) => engine.current?.visitPlace(p)}
      />
      <Dialog open={help} onOpenChange={setHelp}>
        <DialogContent showCloseButton={false} className="p-7 sm:max-w-md">
          <DialogTitle
            className="text-2xl"
            style={{ fontFamily: 'var(--serif)', letterSpacing: 3 }}
          >
            古镇漫游指南
          </DialogTitle>
          <DialogDescription>
            以云南沙溪为灵感的风格化古镇，自由走进青石巷与河畔山色。
          </DialogDescription>
          <div className="help-body">
            <div className="help-row">
              <span>行走</span>
              <span>W A S D / 方向键</span>
            </div>
            <div className="help-row">
              <span>加快脚步</span>
              <kbd>Shift</kbd>
            </div>
            <div className="help-row">
              <span>三段轻功</span>
            </div>
            <div className="key-group">
              <kbd>R</kbd>
              <span>坐下 / 起身</span>
              <span>空格 · 每次按下一段</span>
            </div>
            <div className="help-row">
              <span>坐下 / 起身</span>
              <span>R / 点击坐下按钮</span>
            </div>
            <div className="help-row">
              <span>街坊互动</span>
              <span>E / 点击互动按钮</span>
            </div>
            <div className="help-row">
              <span>室内与阳台</span>
              <span>从敞开的门进入，轻功登阳台</span>
            </div>
            <div className="help-row">
              <span>转动视角</span>
              <span>按住画面拖动</span>
            </div>
            <div className="help-row">
              <span>拉近 / 拉远</span>
              <span>鼠标滚轮</span>
            </div>
            <div className="help-row">
              <span>鸟瞰 / 跟随</span>
              <kbd>V</kbd>
            </div>
            <div className="help-row">
              <span>隐藏 / 显示界面</span>
              <kbd>H</kbd>
            </div>
            <p>
              手机用方向键行走，点击「轻功」起跳，滑动画面环顾。空中再次按空格可接第二、第三段旋身，落地后恢复；可以登上屋顶，再从屋檐跳回街道。所有景点都有连续道路，走街巷也能抵达，玉津桥通往对岸。
            </p>
            <p>
              <a href="https://polyhaven.com" target="_blank" rel="noreferrer">
                实景材质与天空 · Powered by Poly Haven
              </a>
            </p>
          </div>
          <DialogClose className="rounded-lg bg-primary px-5 py-3 text-primary-foreground">
            继续漫游
          </DialogClose>
        </DialogContent>
      </Dialog>
    </main>
  );
}
