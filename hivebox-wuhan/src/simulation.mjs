import {OBSTACLES, FIREWORK, RING_RADIUS, FUSE_DURATION, LAUNCH_DURATION, FESTIVAL_DURATION} from './config.mjs';
export const distance = (a,b) => Math.hypot(a.x-b.x,a.z-b.z);
export function canStand(x,z) {
  const r=.25;
  return x>-29&&x<29&&z>.15&&z<35&&!OBSTACLES.some(o=>x>o.x-r&&x<o.x+o.w+r&&z>o.z-r&&z<o.z+o.d+r);
}
export function moveWithCollision(position,dx,dz) {
  // 每步小于人物半径，防止低帧率下穿过柜体。
  const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.12));
  for(let i=0;i<steps;i++) {
    if(canStand(position.x+dx/steps,position.z)) {position.x+=dx/steps;}
    if(canStand(position.x,position.z+dz/steps)) {position.z+=dz/steps;}
  }
}
export function ringPosition(index) {
  const angle=index*Math.PI/4;
  return {x:FIREWORK.x+Math.sin(angle)*RING_RADIUS,z:FIREWORK.z+Math.cos(angle)*RING_RADIUS};
}
export function advanceFestival(state,dt,allGathered,allReturned) {
  const next={...state,elapsed:state.elapsed+dt};
  if(state.phase==='idle') {return state;}
  if(state.phase==='fuse'&&next.elapsed>=FUSE_DURATION) {return {phase:'gathering',elapsed:0};}
  if(state.phase==='gathering'&&allGathered) {return {phase:'launch',elapsed:0};}
  if(state.phase==='launch'&&next.elapsed>=LAUNCH_DURATION) {return {phase:'celebrating',elapsed:0};}
  if(state.phase==='celebrating'&&next.elapsed>=FESTIVAL_DURATION) {return {phase:'returning',elapsed:0};}
  if(state.phase==='returning'&&allReturned) {return {phase:'idle',elapsed:0};}
  return next;
}
export function canInteract(mode,phase,position,target,radius=2.6) {
  return mode==='explore'&&phase==='idle'&&distance(position,target)<=radius;
}
// 用可见性图绕过烟花桶；来回都检查每一段，避免单个中转点的第二段再次穿桶。
export function isSegmentClear(from,to) {
  const steps=Math.max(1,Math.ceil(distance(from,to)/.12));
  for(let i=0;i<=steps;i++) {
    const t=i/steps;
    if(!canStand(from.x+(to.x-from.x)*t,from.z+(to.z-from.z)*t)) {return false;}
  }
  return true;
}
function findRoute(from,to,waypoints) {
  if(isSegmentClear(from,to)) {return [to];}
  const nodes=[{x:from.x,z:from.z},{x:to.x,z:to.z},...waypoints];
  const costs=nodes.map(()=>Infinity),previous=nodes.map(()=>-1),visited=new Set();costs[0]=0;
  for(let step=0;step<nodes.length;step++) {
    let current=-1;
    nodes.forEach((_,i)=>{if(!visited.has(i)&&(current===-1||costs[i]<costs[current])) {current=i;}});
    if(current===-1||!Number.isFinite(costs[current])) {break;}
    if(current===1) {break;}
    visited.add(current);
    nodes.forEach((node,i)=>{
      if(visited.has(i)||!isSegmentClear(nodes[current],node)) {return;}
      const cost=costs[current]+distance(nodes[current],node);
      if(cost<costs[i]) {costs[i]=cost;previous[i]=current;}
    });
  }
  if(!Number.isFinite(costs[1])) {throw new Error('未找到可通行的集合路线');}
  const route=[];let cursor=1;
  while(cursor!==0) {route.unshift(nodes[cursor]);cursor=previous[cursor];}
  return route;
}

export function crowdRoute(from,to) {
  const waypoints=[-1.5,1.5].flatMap(dx=>[-1.5,1.5].map(dz=>({x:FIREWORK.x+dx,z:FIREWORK.z+dz})));
  return findRoute(from,to,waypoints);
}
export function navigationRoute(from,to) {
  const margin=.6;
  const waypoints=OBSTACLES.flatMap(o=>[o.x-margin,o.x+o.w+margin].flatMap(x=>[o.z-margin,o.z+o.d+margin].map(z=>({x,z})))).filter(p=>canStand(p.x,p.z));
  return findRoute(from,to,waypoints);
}
