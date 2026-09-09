// Navigation uses plan coordinates; rendered horizontal distances are in metres.
export const PLAN_SCALE=Math.SQRT2*1.15;
export const DEFAULT_VIEW=0;
export const DEFAULT_QUALITY='flow';
export function excludeWildPlants(x,z){return x>-25.5&&x<-10.5&&z>-20&&z< -6||x>-21.5&&x<-12.5&&z>15&&z<25;}

export const ROOM_DOOR_WIDTH=2.1/PLAN_SCALE;
export const BALCONY_DOOR_WIDTH=2.4/PLAN_SCALE;
