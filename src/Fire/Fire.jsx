import { useFrame, useLoader } from '@react-three/fiber';
import { useLayoutEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

import fragmentShader from '@/shaders/Fire/frag.frag';
import vertexShader from '@/shaders/Fire/vert.vert';

const Fire = () => {
	const ref = useRef();
	const texture = useLoader(THREE.TextureLoader, './fire.png');

	useFrame((state) => {
		const invModelMatrix = ref.current.material.uniforms.invModelMatrix.value;
		ref.current.updateMatrixWorld();
		invModelMatrix.copy(ref.current.matrixWorld).invert();
		ref.current.material.uniforms.time.value = state.clock.elapsedTime;
		ref.current.material.uniforms.invModelMatrix.value = invModelMatrix;
		ref.current.material.uniforms.scale.value = ref.current.scale;
	});

	const uniforms = useMemo(
		() => ({
			fireTex: {
				value: texture,
			},
			color: {
				value: new THREE.Color(0xeeeeee),
			},
			invModelMatrix: {
				value: new THREE.Matrix4(),
			},
			scale: {
				value: new THREE.Vector3(1, 1, 1),
			},
			seed: {
				value: Math.random() * 19.19,
			},
			time: {
				value: 0,
			},
			noiseScale: {
				value: new THREE.Vector4(1, 2, 1, 0.3),
			},
			magnitude: {
				value: 2.5,
			},
			lacunarity: {
				value: 3.5,
			},
			gain: {
				value: 0.6,
			},
		}),
		[]
	);

	useLayoutEffect(() => {
		texture.magFilter = texture.minFilter = THREE.LinearFilter;
		texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
	}, []);
	return (
		<mesh ref={ref} scale={[2.8, 4, 2.8]} rotation-z={Math.PI} position={[0, -2.5, 0.3]}>
			<boxGeometry />
			<shaderMaterial
				fragmentShader={fragmentShader}
				vertexShader={vertexShader}
				transparent
        alphaTest={false}
        depthWrite={false}
				uniforms={uniforms}
				side={THREE.DoubleSide}
			/>
		</mesh>
	);
};

export default Fire;
