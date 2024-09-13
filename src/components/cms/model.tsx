"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./shaders";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
    Curve: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve002: THREE.Mesh;
    Curve003: THREE.Mesh;
  };
  materials: {
    SVGMat: THREE.Material;
    "SVGMat.002": THREE.Material;
    "SVGMat.003": THREE.Material;
    "SVGMat.004": THREE.Material;
  };
};

export const Model = () => {
  // Load the GLTF model and extract nodes and materials
  const { nodes, materials } = useGLTF("/medias/cmsUltra.glb") as GLTFResult;

  // Ref for storing shader uniforms
  const uniforms = useRef<{
    [uniform: string]: THREE.IUniform<number | THREE.Color>;
  }>({
    time: { value: 0 },
    colorA: { value: new THREE.Color("#00ffff") },
    colorB: { value: new THREE.Color("#ff00ff") },
    colorC: { value: new THREE.Color("#ffafaf") },
  });

  return (
    <group scale={[3, 3, 3]} dispose={null}>
      {/* Main sphere with custom shader material */}
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry}>
        <shaderMaterial uniforms={uniforms.current} vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </mesh>

      {/* Various curves with predefined materials and positions */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
        position={[0.678, -0.142, -1.169]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-9.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.003"]}
        rotation={[-Math.PI / 2, 0, 3.138]}
        scale={-9.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials["SVGMat.004"]}
        rotation={[Math.PI / 2, 0, 1.602]}
        scale={8.712}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.002"]}
        position={[1.276, -0.13, 0.754]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={8.712}
      />
    </group>
  );
};

// Preload the GLTF model for faster loading
useGLTF.preload("/medias/cmsUltra.glb");
