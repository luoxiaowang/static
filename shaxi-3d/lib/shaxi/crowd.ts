import * as T from 'three';
import { createPerson } from './world';
export type Role = 'walker' | 'child' | 'porter';
export function createResident(role: Role, color: string, index: number) {
  const scale = role === 'child' ? 0.5 : 0.83 + (index % 4) * 0.025;
  const person = createPerson(color, '#ded0ad', scale);
  const load = new T.Group();
  person.root.add(load);
  const wood = new T.MeshStandardMaterial({ color: '#82603f', roughness: 0.9 }),
    basket = new T.MeshStandardMaterial({ color: '#b59a64', roughness: 0.9 });
  function part(
    geo: T.BufferGeometry,
    mat: T.Material,
    x: number,
    y: number,
    z: number,
  ) {
    const m = new T.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    load.add(m);
    return m;
  }
  if (role === 'porter') {
    part(new T.BoxGeometry(2.5, 0.055, 0.065), wood, 0, 1.6, 0);
    for (const side of [-1, 1]) {
      part(
        new T.CylinderGeometry(0.012, 0.012, 0.78, 5),
        wood,
        side * 1.1,
        1.19,
        0,
      );
      part(
        new T.CylinderGeometry(0.32, 0.25, 0.42, 12, 1, true),
        basket,
        side * 1.1,
        0.69,
        0,
      );
      for (let j = 0; j < 7; j++)
        part(
          new T.SphereGeometry(0.09, 8, 6),
          new T.MeshStandardMaterial({
            color: ['#bf743c', '#7f8c50', '#b99d57'][j % 3],
          }),
          side * 1.1 + Math.sin(j * 3) * 0.17,
          0.85,
          Math.cos(j * 3) * 0.17,
        );
    }
  }
  return {
    ...person,
    role,
    scale,
    radius: role === 'child' ? 0.22 : role === 'porter' ? 0.56 : 0.32,
    load,
    animateRole(t: number, speed: number, gesture: boolean) {
      person.animate(t, role === 'child' ? speed * 1.2 : speed);
      load.rotation.z = role === 'porter' ? Math.sin(t * 6) * 0.05 : 0;
      if (role === 'porter') {
        person.arms[0].rotation.x = -1.25;
        person.arms[1].rotation.x = -0.35;
      }
      if (gesture) {
        person.arms[1].rotation.z = -1.1;
        person.arms[1].rotation.x = Math.sin(t * 8) * 0.3 - 0.9;
      } else person.arms[1].rotation.z = 0.15;
      if (role === 'child' && gesture) {
        person.arms[0].rotation.z = 0.8;
        person.arms[1].rotation.z = -0.8;
      }
    },
  };
}
