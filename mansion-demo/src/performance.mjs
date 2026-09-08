export const PROFILES=Object.freeze({
 flow:{name:'流畅',pixelRatio:.85,shadowSize:1024,shadowInterval:200,reflectionInterval:Infinity,ao:false,bloom:false,near:7,medium:20,smallNear:4,smallMedium:12},
 balanced:{name:'均衡',pixelRatio:1,shadowSize:1536,shadowInterval:100,reflectionInterval:160,ao:false,bloom:false,near:12,medium:32,smallNear:7,smallMedium:20},
 high:{name:'精细',pixelRatio:1.25,shadowSize:2048,shadowInterval:66,reflectionInterval:80,ao:true,bloom:true,near:20,medium:45,smallNear:12,smallMedium:28}
});
export const TIERS=['flow','balanced','high'];
export function lodForDistance(distance,profile,small=false,current=-1){
 const thresholds=[small?profile.smallNear:profile.near,small?profile.smallMedium:profile.medium];
 if(current<0)return distance<thresholds[0]?0:distance<thresholds[1]?1:2;
 let next=current;
 // Different approach/retreat thresholds stop flicker during camera bob and small movements.
 while(next<2&&distance>thresholds[next]*1.15)next++;
 while(next>0&&distance<thresholds[next-1]*.85)next--;
 return next;
}
export function partitionPlaces(places,size=12){const map=new Map();for(const p of places){const key=Math.floor(p.x/size)+':'+Math.floor(p.z/size);if(!map.has(key))map.set(key,[]);map.get(key).push(p);}return [...map.values()];}
// Time-based hysteresis avoids flickering quality settings and ignores tab resumes/loading stalls.
export class AdaptiveQuality{
 constructor(){this.level=1;this.mode='auto';this.reset();}
 reset(){this.duration=0;this.frames=0;this.slow=0;this.fast=0;this.cooldown=4;this.fps=0;}
 setMode(mode){if(!['auto',...TIERS].includes(mode))throw Error('未知画质');this.mode=mode;if(mode!=='auto')this.level=TIERS.indexOf(mode);else this.level=1;this.reset();return TIERS[this.level];}
 sample(seconds){if(seconds<=0||seconds>1){this.reset();return null;}this.duration+=seconds;this.frames++;this.cooldown=Math.max(0,this.cooldown-seconds);if(this.duration<1)return null;
  this.fps=this.frames/this.duration;const window=this.duration;this.duration=0;this.frames=0;
  if(this.mode!=='auto'||this.cooldown>0)return null;
  this.slow=this.fps<38?this.slow+window:0;this.fast=this.fps>57?this.fast+window:0;
  let next=this.level;if(this.slow>=2&&next>0)next--;else if(this.fast>=14&&next<2)next++;
  if(next===this.level)return null;this.level=next;this.slow=0;this.fast=0;this.cooldown=8;return TIERS[next];
 }
}

// Mobile spends its budget on sharp pixels and nearby geometry, not post-processing.
export function resolveQuality(tier,device,width,height){
 const base=PROFILES[tier];if(!device.mobile)return {...base};
 const ratios={flow:1.35,balanced:1.6,high:1.85};
 const pixelBudget=Math.sqrt(2400000/Math.max(1,width*height));
 return {...base,pixelRatio:Math.min(ratios[tier],device.pixelCap,pixelBudget),
  near:Math.max(base.near,12),medium:Math.max(base.medium,28),
  smallNear:Math.max(base.smallNear,7),smallMedium:Math.max(base.smallMedium,18)};
}
