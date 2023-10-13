import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import fragmentShader1 from '@/shaders/Lightning1/frag.frag';
import vertexShader1 from '@/shaders/Lightning1/vert.vert';
import fragmentShader2 from '@/shaders/Lightning2/frag.frag';
import vertexShader2 from '@/shaders/Lightning2/vert.vert';

const Lightning1 = ({ position, rotation, scale, initTime }) => {
	const mesh = useRef();

	const uniforms = useMemo(
		() => ({
			uTime: {
				value: 0,
			},
		}),
		[]
	);

	useFrame((state) => {
		const { clock } = state;
		mesh.current.material.uniforms.uTime.value = initTime + 0.4 * clock.getElapsedTime();
	});

	return (
		<mesh ref={mesh} position={position} rotation={rotation} scale={scale} renderOrder={1}>
			<planeGeometry args={[1.2, 1.2, 60, 60]} />
			<shaderMaterial
				fragmentShader={fragmentShader1}
				vertexShader={vertexShader1}
				uniforms={uniforms}
				transparent
				depthWrite={false}
				depthTest={false}
				side={THREE.DoubleSide}
			/>
		</mesh>
	);
};

const Lightning2 = ({ position, rotation, scale, initTime }) => {
	const mesh = useRef();

	const uniforms = useMemo(
		() => ({
			uTime: {
				value: 0,
			},
		}),
		[]
	);

	useFrame((state) => {
		const { clock } = state;
		mesh.current.material.uniforms.uTime.value = initTime + 0.4 * clock.getElapsedTime();
	});
	return (
		<mesh ref={mesh} position={position} rotation={rotation} scale={scale} renderOrder={1}>
			<planeGeometry args={[1, 1, 60, 60]} />
			<shaderMaterial
				fragmentShader={fragmentShader2}
				vertexShader={vertexShader2}
				uniforms={uniforms}
				transparent
				depthWrite={false}
				depthTest={false}
				side={THREE.DoubleSide}
			/>
		</mesh>
	);
};

const Lightning = () => {
	return (
		<group>
			{/* 右上 */}
			<Lightning1 position={[1.2, 0, 0.01]} rotation={[0, 0, 0]} initTime={4.9} scale={0.9} />
			<Lightning1 position={[1.2, 0.3, 0.01]} rotation={[0, 0, 0.4]} initTime={4.8} scale={0.8} />
			<Lightning1 position={[1, 0.5, 0.01]} rotation={[0, 0, 0]} initTime={4.7} scale={0.7} />
			{/* 左上 */}
			<Lightning1 position={[-1.2, 0, 0.01]} rotation={[0, 0, -Math.PI]} initTime={4.6} scale={0.9} />
			<Lightning1 position={[-1.2, 0.3, 0.01]} rotation={[0, 0, -Math.PI - 0.4]} initTime={4.5} scale={0.8} />
			<Lightning1 position={[-1, 0.5, 0.01]} rotation={[0, 0, -Math.PI]} initTime={4.4} scale={0.7} />
			{/* 右下 */}
			<Lightning2
				position={[0.6, -0.5, 0.02]}
				rotation={[0, 0, Math.PI * 1.5 + 0.2]}
				scale={[0.9, 1.5, 1.5]}
				initTime={3.9}
			/>
			{/* 左下 */}
			<Lightning2
				position={[-0.6, -0.55, 0.02]}
				rotation={[0, 0, -Math.PI * 1.5 - 0.2]}
				scale={[0.9, 1.5, 1.5]}
				initTime={3.7}
			/>
		</group>
	);
};

export default Lightning;
