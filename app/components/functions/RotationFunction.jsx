import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const OrbitingPlanet = ({ model: Model, radius, speed, scale }) => {
    const ref = useRef();
    let angle = 0;

    useFrame(() => {
        angle += speed;  // Speed determines orbit velocity
        ref.current.position.x = Math.cos(angle) * radius;
        ref.current.position.z = Math.sin(angle) * radius;
    });

    return (
        <mesh ref={ref}>
            <Model scale={scale} />
        </mesh>
    );
};

export default OrbitingPlanet;