"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./model";
import { Canvas } from "@react-three/fiber";

const CmsScene = () => {
  return (
    <Canvas className="z-[10]">
      <Model />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate />
      <Environment preset="studio" />
    </Canvas>
  );
};

export default CmsScene;
