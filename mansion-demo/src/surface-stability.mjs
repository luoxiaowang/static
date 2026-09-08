import * as T from 'three';
export function stableTexture(texture,anisotropy=4){
 texture.generateMipmaps=true;texture.minFilter=T.LinearMipmapLinearFilter;texture.magFilter=T.LinearFilter;texture.anisotropy=anisotropy;texture.needsUpdate=true;
}
export function stabilizeModelTextures(root,renderer){const seen=new Set(),limit=Math.min(4,renderer.capabilities.getMaxAnisotropy());root.traverse(o=>{if(!o.isMesh)return;for(const material of(Array.isArray(o.material)?o.material:[o.material]))for(const key of ['map','normalMap','roughnessMap','metalnessMap','aoMap','alphaMap']){const texture=material[key];if(!texture||seen.has(texture))continue;seen.add(texture);stableTexture(texture,limit);}});}
