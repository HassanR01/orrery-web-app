
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Uranus(props) {
    const { nodes, materials } = useGLTF('/uranus.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.moon}
                    position={[0, -1.924, -0.169]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/uranus.glb')
