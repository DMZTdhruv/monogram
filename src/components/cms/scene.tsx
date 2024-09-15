"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./model";
import { Canvas } from "@react-three/fiber";
const CmsScene = () => {
  return (
    <Canvas className="z-[10]">
      <Model />
      <directionalLight color={"#fff"} position={[0, 5, 0]} intensity={0} />

      <OrbitControls enablePan={false} enableZoom={false} />
      <Environment preset="studio" />
    </Canvas>
  );
};

export default CmsScene;
