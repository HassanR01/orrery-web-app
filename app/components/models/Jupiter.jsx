import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Jupiter(props) {
    const { nodes, materials } = useGLTF('/realistic_jupiter.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere_Material_0.geometry}
                        material={materials.Material}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/realistic_jupiter.glb')