export const fragmentShader = `
    uniform vec3 colorA;
    uniform vec3 colorB;
    uniform vec3 colorC;
    varying vec3 vPosition;
    
    void main() {
      vec3 normalized = normalize(vPosition);
      float t = (normalized.x + 1.0) / 2.0;
      
      // Define the boundaries for each color region
      float boundaryAB = 0.33;
      float boundaryBC = 0.67;
      
      // Define the width of the transition zones
      float transitionWidth = 0.3;
      
      // Calculate smooth transitions using built-in smoothstep
      float mixAB = smoothstep(boundaryAB - transitionWidth, boundaryAB + transitionWidth, t);
      float mixBC = smoothstep(boundaryBC - transitionWidth, boundaryBC + transitionWidth, t);
      
      // Mix the colors
      vec3 colorAB = mix(colorA, colorB, mixAB);
      vec3 color = mix(colorAB, colorC, mixBC);
      
      gl_FragColor = vec4(color, 1.0);
    }
`

export const vertexShader = `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`