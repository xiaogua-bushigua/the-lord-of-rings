import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Dragon({scroll}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./demon_dragon_full_texture.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const flying = actions['flying_skeletal.3'];
    flying.reset().setEffectiveTimeScale(2.5).fadeIn(0.5).play();
  }, [])

  useFrame(() => {
    console.log(scroll.offset);
  })

  return (
    <group ref={group} scale={0.7} position={[0,0.5,2]} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.829}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_222" scale={0.01}>
                <group name="skeletal3_221">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Material_0}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Material_0}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.Material_0}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <group name="dragon_wings22_220" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./demon_dragon_full_texture.glb");