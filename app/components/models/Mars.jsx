
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mars(props) {
    const { nodes, materials } = useGLTF('/mars.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pSphere1_lambert3_0.geometry}
                material={materials.lambert3}
            />
        </group>
    )
}

useGLTF.preload('/mars.glb')