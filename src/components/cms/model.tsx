"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
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

interface ICmsGlobeUniform {
  time: number;
  colorA: THREE.Color;
  colorB: THREE.Color;
  colorC: THREE.Color;
}

export const Model = () => {
  const { nodes, materials } = useGLTF("/medias/cmsUltra.glb") as GLTFResult;
  const materialRef = useRef<ICmsGlobeUniform | null>(null);

  const uniforms = useRef<
    | {
        [uniform: string]: THREE.IUniform<number | THREE.Color>;
      }
    | undefined
  >({
    time: { value: 0 },
    colorA: { value: new THREE.Color("#00ffff") },
    colorB: { value: new THREE.Color("#ff00ff") },
    colorC: { value: new THREE.Color("#ffafaf") },
  });

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.getElapsedTime();
    }
  });

  return (
    <group scale={[3, 3, 3]} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry}>
        <shaderMaterial uniforms={uniforms.current} vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </mesh>
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

useGLTF.preload("/medias/cmsUltra.glb");
