import * as T from 'three';
export function kitchenMaterials(){
 const n=256,data=new Uint8Array(n*n*4);
 for(let y=0;y<n;y++)for(let x=0;x<n;x++){const a=x/n*Math.PI*2,b=y/n*Math.PI*2;const flow=Math.sin(a+Math.sin(b)*1.2)+.4*Math.sin(3*b+2*a);const vein=Math.pow(Math.abs(Math.sin(flow*6+Math.sin(b*4))),18);const grain=Math.sin(x*12.9898+y*78.233)*43758.5453;const c=110+32*Math.sin(a+b*2)+35*vein+9*(grain-Math.floor(grain));const i=(y*n+x)*4;data[i]=c+7;data[i+1]=c+5;data[i+2]=c;data[i+3]=255;}
 const tex=new T.DataTexture(data,n,n);tex.colorSpace=T.SRGBColorSpace;tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.generateMipmaps=true;tex.minFilter=T.LinearMipmapLinearFilter;tex.magFilter=T.LinearFilter;tex.anisotropy=4;tex.needsUpdate=true;
 const make=(name,color,extra={})=>new T.MeshStandardMaterial({name,color,roughness:.7,...extra});
 return{'厨房柜体':make('厨房柜体',0x343936,{roughness:.62}),'厨房石材':make('厨房石材',0xb9b6af,{map:tex,roughness:.38}),'厨房地砖':make('厨房地砖',0xd9d5c9,{roughness:.62}),'厨房顶面':make('厨房顶面',0x555851,{roughness:.95})};
}
export function addKitchenArchitecture({box,mat,dark,lightmat}){
 const cabinet=mat('厨房柜体'),stone=mat('厨房石材'),tile=mat('厨房地砖'),ceiling=mat('厨房顶面');
 // Ground finishes sit above the timber substrate with a deliberate height separation.
 box(-6.8,.012,-12.8,8,.018,10,mat('瓷砖缝',0xaaa99f));
 for(let i=0;i<5;i++)for(let j=0;j<6;j++)box(-10.8+.8+i*1.6,.026,-17.8+.833+j*1.666,1.59,.018,1.656,tile);
 box(-6.4,1.62,-17.65,7.7,3.24,.10,cabinet);
 box(-6.4,1.5,-17.57,5.7,1.05,.06,stone);
 for(const x of [-7.65,-6.35,-5.05]){box(x,2.5,-17.19,1.27,1.2,.68,cabinet);box(x,1.895,-16.88,1.22,.024,.025,lightmat);}
 // Tall oven housing and integrated fridge retain a clear route around the island.
 box(-3.45,1.52,-16.9,1.15,3.04,1.3,cabinet,true);
 box(-3.45,1.47,-16.226,.88,.74,.035,dark);box(-3.45,1.47,-16.20,.72,.52,.014,mat('电器面板',0x151d20));box(-3.45,1.74,-16.17,.63,.024,.03,dark);
 box(-9.3,1.5,-16.9,1.4,3,1.3,cabinet,true);for(const x of [-9.65,-8.95])box(x,1.6,-16.229,.68,2.35,.035,cabinet);box(-9.3,1.6,-16.19,.018,1,.028,dark);
 box(-6.5,3.28,-12.7,8.7,.12,10.5,ceiling);
 for(const x of [-10.72,-2.28])box(x,3.205,-12.7,.025,.018,10.25,lightmat);
 for(const z of [-17.78,-7.62])box(-6.5,3.205,z,8.4,.018,.025,lightmat);
 box(-6.5,3.205,-10.3,7.8,.02,.06,dark);for(const x of [-9,-7,-5,-3])box(x,3.188,-10.3,.09,.012,.08,lightmat);
}
