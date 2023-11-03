import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const gety = (x1, y1, x2, y2) => {
	const k = (y2 - y1) / (x2 - x1);
	const b = y1 - k * x1;
	return [k, b];
};

export default function Dragon({ scroll }) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF('./demon_dragon_full_texture.glb');
	const { actions } = useAnimations(animations, group);

	const far = -5;
	const start = 2;
	const [position, setPosition] = useState(far);

	useEffect(() => {
		const flying = actions['flying_skeletal.3'];
		flying.reset().setEffectiveTimeScale(2.5).fadeIn(0.5).play();
	}, []);

	useFrame(() => {
		const o = scroll.offset;
		console.log(o);
		if (o < 0.39) {
			const [k, b] = gety(0, far, 0.39, start);
			setPosition(k * o + b);
		}
	});

	return (
		<group ref={group} scale={0.7} position={[position, -0.25, 2]} rotation={[0, -Math.PI * 1.1, 0]} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={3.829}>
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

useGLTF.preload('./demon_dragon_full_texture.glb');
