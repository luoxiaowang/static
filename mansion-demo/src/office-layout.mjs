// 公司坐落于庭院东侧，入口朝西；尺寸与庭院共享逻辑坐标。
export const OFFICE={x1:46,x2:70,z1:4,z2:26,height:3.6,roof:18};
export const OFFICE_FLOORS=Array.from({length:6},(_,i)=>({y:i*OFFICE.height,name:i===5?'公司屋顶天台':`公司${['一','二','三','四','五'][i]}楼`}));
export const OFFICE_LIFT={x:65,z:7,exitX:65,exitZ:9.4,x1:64,x2:66,z1:6,z2:8};
export const OFFICE_STAIRS=Array.from({length:5},(_,i)=>({x1:i%2===0?68:66,x2:i%2===0?69.4:67.4,z1:10,z2:22,base:i*OFFICE.height,height:OFFICE.height,reverse:i%2===0}));
export function inOffice(x,z){return x>46&&x<70&&z>4&&z<26;}
export function inOfficeDistrict(x,z){return x>34&&x<73&&z>2&&z<35||x>=0&&x<=43&&z>31&&z<33;}
export function officeShaft(x,z){return x>63.85&&x<66.15&&z>5.85&&z<8.15;}
export function officeGround(x,z,previous){
 if(!inOffice(x,z))return Math.abs(previous)<.1?0:NaN;
 if(officeShaft(x,z))return NaN;
 const candidates=OFFICE_STAIRS.filter(s=>x>=s.x1&&x<=s.x2&&z>=s.z1&&z<=s.z2).map(s=>s.base+(s.reverse?(z-s.z1):(s.z2-z))/(s.z2-s.z1)*s.height);
 if(candidates.length){const height=candidates.find(y=>Math.abs(y-previous)<.25);return height??NaN;}
 const floor=OFFICE_FLOORS.find(f=>Math.abs(f.y-previous)<.12);
 return floor?.y??NaN;
}
// 同一楼梯井上下叠置，所有楼板都留出真实洞口。
export function officeFloorPanels(){
 let panels=[{x1:46,x2:70,z1:4,z2:26}];
 for(const hole of [OFFICE_LIFT,...OFFICE_STAIRS.slice(0,2)])panels=panels.flatMap(p=>{
  const l=Math.max(p.x1,hole.x1),r=Math.min(p.x2,hole.x2),n=Math.max(p.z1,hole.z1),s=Math.min(p.z2,hole.z2);
  if(l>=r||n>=s)return[p];
  return[{x1:p.x1,x2:l,z1:p.z1,z2:p.z2},{x1:r,x2:p.x2,z1:p.z1,z2:p.z2},{x1:l,x2:r,z1:p.z1,z2:n},{x1:l,x2:r,z1:s,z2:p.z2}].filter(a=>a.x2>a.x1&&a.z2>a.z1);
 });return panels;
}
export const OFFICE_DESKS=OFFICE_FLOORS.slice(0,5).flatMap((f,floor)=>[50,55,60].flatMap(x=>[12,21].map(z=>({x,z,y:f.y,floor}))));
