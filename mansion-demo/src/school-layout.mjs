export const SCHOOL_BUILDINGS=['知行楼','启智楼','明德楼','博雅楼','求真楼','致远楼','向阳楼','星河楼'].map((name,i)=>({name,x:99+(i%2)*56,z:-65+Math.floor(i/2)*19}));
export const SCHOOL_ROOMS=SCHOOL_BUILDINGS.flatMap((b,building)=>Array.from({length:4},(_,floor)=>Array.from({length:6},(_,room)=>({id:`${building+1}-${floor+1}-${room+1}`,building,floor,room,x:b.x-20+room*8,y:floor*3.6,z:b.z,name:`${b.name} · ${floor+1}层 · ${floor+1}0${room+1}教室`,students:30,teachers:1}))).flat());
export const STUDENT_SEATS=Array.from({length:30},(_,i)=>({x:(i%5-2)*1.25,z:-1.9+Math.floor(i/5)*1.03}));
export function roomAt(building,floor,room){return SCHOOL_ROOMS.find(r=>r.building===building&&r.floor===floor&&r.room===room);}
