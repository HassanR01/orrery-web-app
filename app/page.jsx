'use client'
import Image from "next/image";
import StarsCanvas from "./components/main/StarBackground";
import { Canvas } from "@react-three/fiber";
import { Environment, Line, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Sun } from "./components/models/Sun";
import { Suspense } from "react";
import { Mercury } from "./components/models/mercury";
import { Venus } from "./components/models/Venus";
import { Earth } from "./components/models/Earth";
import { Mars } from "./components/models/Mars";
import { Jupiter } from "./components/models/Jupiter";
import { Saturn } from "./components/models/Saturn";
import { Uranus } from "./components/models/Uranus";
import { Nepton } from "./components/models/Nepton";
import OrbitingPlanet from "./components/functions/RotationFunction";
import { motion } from "framer-motion";

export default function Home() {

  // Function to draw circular orbits
  const Orbit = ({ radius }) => {
    const points = [];
    for (let i = 0; i < 70; i++) {
      const angle = (i / 65) * Math.PI * 2;
      points.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
    }
    return <Line points={points} color="white" lineWidth={1} />;
  };

  const scaleFactor = 0.05;  // Adjust this factor for the overall scale

  // Dynamic scaling of planet radii and orbit distances
  const planetData = [
    { name: Mercury, orbitRadius: 20, planetRadius: 2.4 , speed: 0.02},  // Mercury
    { name: Venus, orbitRadius: 35, planetRadius: 6.05 , speed: 0.015 },   // Venus
    { name: Earth, orbitRadius: 50, planetRadius: 6.37 , speed: 0.01},   // Earth
    { name: Mars, orbitRadius: 75, planetRadius: 3.39 , speed: 0.008},    // Mars
    { name: Jupiter, orbitRadius: 150, planetRadius: 20 , speed: 0.005}, // Jupiter
    { name: Saturn, orbitRadius: 250, planetRadius: 15 , speed: 0.003}, // Saturn
    { name: Uranus, orbitRadius: 380, planetRadius: 13 , speed: 0.002}, // Uranus
    { name: Nepton, orbitRadius: 450, planetRadius: 12 , speed: 0.001}, // Neptune
  ];


  return (
    <>
      <StarsCanvas />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{duration: 0.5}}
        className="title my-10 flex items-center justify-center flex-col w-full text-center"
      >
        <h1 className="text-textColor text-8xl text-outline text-center font-bold mb-4">Rock Simulator</h1>
        <p className="text-5xl font-semibold text-white max-w-4xl">Bridging the gap between theoretical and practical education</p>
      </motion.div>
      {/* Solar System Canvas */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="image cursor-grab w-full h-[50vh] z-0 flex flex-col items-center justify-center"
      >
        <Canvas shadows style={{ zIndex: 0, position: "relative" }}>
          <PerspectiveCamera makeDefault position={[20, 0, 20]} />
          <OrbitControls enableZoom={false} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <Sun />
          </Suspense>
        </Canvas>
      </motion.section>

      {/* Simulator */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="simulator w-full h-[100vh]"
      >
        <Canvas camera={{ position: [0, 500, 400], fov: 75 }}>

          <ambientLight intensity={10.5} />


          <OrbitControls minDistance={100} maxDistance={550}/>

          {/* The Sun (Scaled with scaleFactor) */}
          <Suspense fallback={null}>
            <Sun position={[0, 0, 0]} scale={10 * scaleFactor} />
          </Suspense>

          {/* Draw Orbits and Planets */}
          {planetData.map((planet, index) => (
            <Suspense key={index} fallback={null}>
              {/* Draw each planet's orbit with dynamic scaling */}
              <Orbit radius={planet.orbitRadius + 1} />

              {/* Position each planet in its orbit with dynamic scaling */}
              <OrbitingPlanet
                model={planet.name}
                radius={planet.orbitRadius}
                speed={planet.speed}
                scale={planet.planetRadius * scaleFactor * 10}
              />
            </Suspense>
          ))}
          
        </Canvas>
      </motion.section>

      {/* Analysis for Objects */}





      {/* what's our objectives */}





    </>
  );
}
