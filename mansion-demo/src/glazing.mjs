// One neutral smoke-grey finish for architectural and imported glass.
export const GLASS_FINISH={color:0x596167,transparent:true,opacity:.38,roughness:.14,metalness:.12,depthWrite:false};
export function tintGlass(root){root.traverse(o=>{if(!o.isMesh)return;for(const m of Array.isArray(o.material)?o.material:[o.material]){if(!/glass|玻璃/i.test(m.name))continue;m.color.setHex(GLASS_FINISH.color);Object.assign(m,{transparent:true,opacity:.38,roughness:.14,metalness:.12,depthWrite:false});if('transmission' in m)m.transmission=0;m.needsUpdate=true;}});}
