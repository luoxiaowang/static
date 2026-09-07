import * as T from 'three';
export function createFireworks() {
  const count = 360,
    positions = new Float32Array(count * 3),
    colors = new Float32Array(count * 3),
    alpha = new Float32Array(count);
  const geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.BufferAttribute(positions, 3));
  geo.setAttribute('color', new T.BufferAttribute(colors, 3));
  geo.setAttribute('aAlpha', new T.BufferAttribute(alpha, 1));
  const material = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    vertexShader:
      'attribute vec3 color;attribute float aAlpha;varying vec3 vColor;varying float vAlpha;void main(){vColor=color;vAlpha=aAlpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(180./max(1.,-p.z),2.,8.);}',
    fragmentShader:
      'varying vec3 vColor;varying float vAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(vColor,pow(1.-r,1.4)*vAlpha);}',
  });
  const points = new T.Points(geo, material);
  points.frustumCulled = false;
  points.visible = false;
  points.name = '夜空烟花';
  const root = new T.Group();
  root.add(points);
  const flash = new T.PointLight('#ffd7a0', 0, 65, 2);
  root.add(flash);
  return {
    root,
    update(t: number, night: boolean, reduced: boolean) {
      root.visible = night;
      points.visible = night && !reduced;
      flash.intensity = 0;
      if (!night || reduced) return;
      for (let j = 0; j < 4; j++) {
        const age = (t + j * 1.73) % 7,
          x = [49, -22, 63, -61][j],
          z = [47, -12, -43, 57][j],
          base = 23 + j * 3;
        const tint = new T.Color(
          ['#ffe2a1', '#ef9676', '#b2dfb7', '#d2b6fa'][j],
        );
        for (let i = 0; i < 90; i++) {
          const k = j * 90 + i,
            v = k * 3,
            theta = i * 2.39996,
            ny = 1 - (2 * (i + 0.5)) / 90,
            rad = Math.sqrt(1 - ny * ny),
            flight = Math.max(0, age - 1.2),
            burst = flight < 2.7 && age >= 1.2;
          if (age < 1.2) {
            positions[v] = x;
            positions[v + 1] = (age / 1.2) * base - i * 0.04;
            positions[v + 2] = z;
            alpha[k] = i < 12 ? 0.7 * (1 - i / 12) : 0;
          } else {
            const radius = flight * (5 + j * 0.4);
            positions[v] = x + Math.cos(theta) * rad * radius;
            positions[v + 1] = base + ny * radius - flight * flight * 1.1;
            positions[v + 2] = z + Math.sin(theta) * rad * radius;
            alpha[k] = burst ? Math.pow(1 - flight / 2.7, 1.6) : 0;
          }
          colors.set([tint.r, tint.g, tint.b], v);
        }
        if (age > 1.2 && age < 1.5) {
          flash.position.set(x, base, z);
          flash.color.copy(tint);
          flash.intensity = (1 - (age - 1.2) / 0.3) * 30;
        }
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      geo.attributes.aAlpha.needsUpdate = true;
    },
  };
}
