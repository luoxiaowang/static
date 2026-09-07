import { STOPS } from './navigation.ts';
export type MapPlace = {
  id: string;
  name: string;
  x: number;
  z: number;
  yaw: number;
};
export type TownMapData = {
  places: MapPlace[];
  roads: { ax: number; az: number; bx: number; bz: number; width: number }[];
  buildings: { x: number; z: number; halfX: number; halfZ: number }[];
};
export function mapPlaces(
  rooms: { x: number; z: number; name: string; yaw: number }[],
): MapPlace[] {
  const places: MapPlace[] = STOPS.map((p) => ({ ...p }));
  rooms.forEach((r, i) => {
    if (!places.some((p) => Math.hypot(p.x - r.x, p.z - r.z) < 0.1))
      places.push({
        id: 'house-' + i,
        name: r.name.replaceAll(' ', ''),
        x: r.x,
        z: r.z,
        yaw: r.yaw,
      });
  });
  return places;
}
