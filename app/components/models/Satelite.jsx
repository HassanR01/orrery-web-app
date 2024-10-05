
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Satelite(props) {
    const { nodes, materials } = useGLTF('/satelite.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Material}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/satelite.glb')