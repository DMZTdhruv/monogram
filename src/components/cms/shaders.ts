export const fragmentShader = `
    uniform float time;
    uniform vec3 colorA;
    uniform vec3 colorB;
    uniform vec3 colorC;
    varying vec3 vPosition;
    
    void main() {
      vec3 normalized = normalize(vPosition);
      float t1 = (normalized.x + 1.0) / 2.0;
      float t2 = (normalized.y + 1.0) / 2.0;
      
      vec3 color = mix(colorA, colorB, t1);
      color = mix(color, colorC, t2);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

export const vertexShader = `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
