"use client";

import { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./shaders";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve009: THREE.Mesh;
    Sphere: THREE.Mesh;
    Curve: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve002: THREE.Mesh;
  };
  materials: {
    SVGMat: THREE.Material;
    "SVGMat.008": THREE.Material;
    "SVGMat.009": THREE.Material;
    "SVGMat.001": THREE.Material;
  };
};

export const Model = () => {
  const { nodes } = useGLTF("/medias/cms.glb") as GLTFResult;

  const uniforms = useRef<{
    [uniform: string]: THREE.IUniform<number | THREE.Color>;
  }>({
    time: { value: 0 },
    colorA: { value: new THREE.Color("#01A6DC") },
    colorB: { value: new THREE.Color("#b461ed") },
    colorC: { value: new THREE.Color("#F5CBE1") },
  });

  

  const groupRef = useRef<THREE.Group>(null);

  const BlendMaterial = ({ color }: { color: string }) => (
    <MeshTransmissionMaterial
      color={new THREE.Color(color)}
      transparent={true}
      opacity={0.3}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  );

  return (
    <group dispose={null} ref={groupRef} scale={[10, 10, 10]} rotation={[0, 0, THREE.MathUtils.degToRad(23)]}>
      <directionalLight color={"#fff"} position={[-90, 5, 0]} intensity={1.0} />

      <mesh castShadow receiveShadow geometry={nodes.Curve001.geometry} rotation={[Math.PI / 2, 0, 3.13]} scale={1.566}>
        <BlendMaterial color="#01A6DC" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        rotation={[Math.PI / 2, 0, 1.564]}
        scale={1.385}
      >
        <BlendMaterial color="#8801E4" />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} scale={0.307}>
        <shaderMaterial uniforms={uniforms.current} vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Curve.geometry} rotation={[Math.PI / 2, 0, -1.567]} scale={1.385}>
        <BlendMaterial color="#F5CBE1" />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Curve009.geometry} rotation={[Math.PI / 2, 0, 0]} scale={1.566}>
        <BlendMaterial color="#01A6DC" />
      </mesh>
    </group>
  );
};

useGLTF.preload("/medias/cms.glb");
