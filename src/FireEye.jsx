import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import fragmentShader from './shaders/FireEye/frag.frag';
import vertexShader from './shaders/FireEye/vert.vert';

const FireEye = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0
      }
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.uTime.value = 0.4 * clock.getElapsedTime();
  })
	return (
		<mesh ref={mesh}>
			<planeGeometry args={[4, 4, 60, 60]} />
			<shaderMaterial 
        fragmentShader={fragmentShader} 
        vertexShader={vertexShader} 
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
		</mesh>
	);
};

export default FireEye;
