import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import fragmentShader from './shaders/Sight/frag.frag';
import vertexShader from './shaders/Sight/vert.vert';

const Sight = () => {
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
		<mesh ref={mesh} position={[0,0,0.015]} scale={[0.35,0.15,1]} rotation={[0,0,Math.PI/2]}>
			<planeGeometry args={[4, 4, 60, 60]} />
			<shaderMaterial 
        fragmentShader={fragmentShader} 
        vertexShader={vertexShader} 
        uniforms={uniforms}
        transparent
      />
		</mesh>
	);
};

export default Sight;
