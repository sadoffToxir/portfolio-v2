import { useEffect, useMemo,useRef } from 'react'
import * as THREE from 'three'

import { useAnimations,useGLTF } from '@react-three/drei'
import { useLoader, useThree } from '@react-three/fiber'

import type { GLTFResult } from 'Astronaut'

function GreetingAstronaut(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, animations, materials } = useGLTF('/models/greeting_astronaut/scene.gltf') as GLTFResult
  const { actions, names } = useAnimations(animations, group)

  const [ diffuse, normal, occlusion ] = useLoader(THREE.TextureLoader, [
    '/models/greeting_astronaut/textures/material_0_diffuse.png',
    '/models/greeting_astronaut/textures/material_0_normal.png',
    '/models/greeting_astronaut/textures/material_0_occlusion.png',
  ])
  const [ diffuse2, normal2, occlusion2 ] = useLoader(THREE.TextureLoader, [
    '/models/greeting_astronaut/textures/material_2_diffuse.png',
    '/models/greeting_astronaut/textures/material_2_normal.png',
    '/models/greeting_astronaut/textures/material_2_occlusion.png',
  ])

  useMemo(() => {
    [ diffuse, normal, occlusion, diffuse2, normal2, occlusion2 ].forEach(texture => (texture.flipY = false))
  }, [ diffuse, normal, occlusion, diffuse2, normal2, occlusion2 ])

  const material0 = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: diffuse,
      normalMap: normal,
      aoMap: occlusion,
      aoMapIntensity: 0,
      roughness: 1,
      metalness: 1,
    })
  }, [ diffuse, normal, occlusion ])

  const material2 = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: diffuse2,
      normalMap: normal2,
      aoMap: occlusion2,
      aoMapIntensity: 0,
      roughness: 1,
      metalness: 1,
    })
  }, [ diffuse2, normal2, occlusion2 ])

  useEffect(() => {
    let isCancelled = false;
    const timeouts: NodeJS.Timeout[] = [];
  
    const action0 = actions[ names[ 0 ] ];
    const action2 = actions[ names[ 2 ] ];
  
    const playSequence = () => {
      if (isCancelled) return;
  
      action0?.reset().fadeIn(0.5).play();

      const timeout1 = setTimeout(() => {
        if (isCancelled) return;
  
        action0?.fadeOut(0.5);
        action2?.reset().fadeIn(0.5).play();
  
        const timeout2 = setTimeout(() => {
          if (isCancelled) return;
  
          action2?.fadeOut(0.5);

          playSequence();
        }, 10 * 1000);
  
        timeouts.push(timeout2);
      }, 3 * 1000); 
  
      timeouts.push(timeout1);
    };
  
    playSequence();
  
    return () => {
      isCancelled = true;
      timeouts.forEach(clearTimeout);
      action0?.stop();
      action2?.stop();
    };
  }, [ actions, names ]);
  
  useThree(({ camera }) => {
    camera.rotation.set(THREE.MathUtils.degToRad(0), 0, 0)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[ -Math.PI / 2, 0, -0.4 ]}
          scale={1}
          position={[ 0, -3, 0 ]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[ Math.PI / 1.9, 0.2, 0 ]}>
              <group name="RootNode0_0" scale={0.025}>
                <group name="skeletal3_6">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={material0} 
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name="Object_100"
                      geometry={nodes.Object_100.geometry}
                      material={material0}
                      skeleton={nodes.Object_100.skeleton}
                    />
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials[ 'material_1' ]}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_106"
                      geometry={nodes.Object_106.geometry}
                      material={material2}
                      skeleton={nodes.Object_106.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/greeting_astronaut/scene.gltf')

export default GreetingAstronaut
