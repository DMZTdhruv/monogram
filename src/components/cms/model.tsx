"use client";

import { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
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
  // Load the GLTF model and extract nodes and materials
  const { nodes, materials } = useGLTF("/medias/cms.glb") as GLTFResult;

  // Ref for storing shader uniforms
  const uniforms = useRef<{
    [uniform: string]: THREE.IUniform<number | THREE.Color>;
  }>({
    time: { value: 0 },
    colorA: { value: new THREE.Color("#01A6DC") },
    colorB: { value: new THREE.Color("#8801E4") },
    colorC: { value: new THREE.Color("#F5CBE1") },
  });

  // Ref for the group to apply rotation
  const groupRef = useRef<THREE.Group>(null);

  // Use useFrame to apply continuous rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Adjust rotation speed as needed
    }
  });

  return (
    // <group ref={groupRef} scale={[3, 3, 3]} dispose={null} rotation={[THREE.MathUtils.degToRad(-23), 0, 0]}>
    //   {/* Main sphere with custom shader material */}
    //   <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry}>
    //     <shaderMaterial uniforms={uniforms.current} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    //   </mesh>

    //   {/* Various curves with predefined materials and positions */}
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Curve.geometry}
    //     material={materials.SVGMat}
    //     position={[0.678, -0.142, -1.169]}
    //     rotation={[-Math.PI / 2, 0, 0]}
    //     scale={-9.222}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Curve002.geometry}
    //     material={materials["SVGMat.003"]}
    //     rotation={[-Math.PI / 2, 0, 3.138]}
    //     scale={-9.222}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Curve003.geometry}
    //     material={materials["SVGMat.004"]}
    //     rotation={[Math.PI / 2, 0, 1.602]}
    //     scale={8.712}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Curve001.geometry}
    //     material={materials["SVGMat.002"]}
    //     position={[1.276, -0.13, 0.754]}
    //     rotation={[Math.PI / 2, 0, -Math.PI / 2]}
    //     scale={8.712}
    //   />
    // </group>

    <group dispose={null} ref={groupRef} scale={[10, 10, 10]} rotation={[THREE.MathUtils.degToRad(-23), 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.008"]}
        rotation={[Math.PI / 2, 0, 3.13]}
        scale={1.566}
      >
        <MeshTransmissionMaterial/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.009"]}
        rotation={[Math.PI / 2, 0, 1.564]}
        scale={1.385}
      >
        <MeshTransmissionMaterial/>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} scale={0.307}>
        <shaderMaterial uniforms={uniforms.current} vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, -1.567]}
        scale={1.385}
      >
        <MeshTransmissionMaterial/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={materials["SVGMat.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.566}
      >
        <MeshTransmissionMaterial/>
      </mesh>
    </group>
  );
};

// Preload the GLTF model for faster loading
useGLTF.preload("/medias/cms.glb");
