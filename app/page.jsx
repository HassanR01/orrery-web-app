'use client'
import Image from "next/image";
import StarsCanvas from "./components/main/StarBackground";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Sun } from "./components/models/Sun";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <div className="title my-10 flex items-center justify-center flex-col w-full text-center">
        <h1 className="text-textColor text-8xl text-outline text-center font-bold mb-4">Rock Simulator</h1>
        <p className="text-5xl font-semibold text-white max-w-4xl">Bridging the gap between theoretical and practical education</p>
      </div>
      {/* Solar System Canvas */}
      <section className="image cursor-grab w-full h-[50vh] z-0 flex flex-col items-center justify-center">
        <Canvas shadows style={{ zIndex: 0, position: "relative" }}>
          <PerspectiveCamera makeDefault position={[20, 0, 20]} />
          <OrbitControls enableZoom={false} />
          <Environment preset="city" />
          <Sun />
        </Canvas>
      </section>
      {/* Analysis for Objects */}





      {/* what's our objectives */}





    </>
  );
}
