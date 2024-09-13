export const fragmentShader = `
    uniform vec3 colorA;
    uniform vec3 colorB;
    uniform vec3 colorC;
    varying vec3 vPosition;
    
    void main() {
      //normalize to ensure all the vertexes are of same length from the center
      vec3 normalized = normalize(vPosition);
      // -1 to 1 to 0 and 1
      float t1 = (normalized.x + 1.0) / 2.0;
      float t2 = (normalized.y + 1.0) / 2.0;
      
      // to mix the color ( mix is like a lerp )
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
