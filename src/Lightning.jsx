import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import fragmentShader1 from './shaders/Lightning1/frag.frag';
import vertexShader1 from './shaders/Lightning1/vert.vert';
import fragmentShader2 from './shaders/Lightning2/frag.frag';
import vertexShader2 from './shaders/Lightning2/vert.vert';

const Lightning1 = () => {
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
		<mesh ref={mesh} position={[0,0,0.5]}>
			<planeGeometry args={[1, 1, 60, 60]} />
			<shaderMaterial 
        fragmentShader={fragmentShader1} 
        vertexShader={vertexShader1} 
        uniforms={uniforms}
        transparent
      />
		</mesh>
	);
};

const Lightning2 = () => {
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
		<mesh ref={mesh} position={[0,0,0.25]}>
			<planeGeometry args={[1, 1, 60, 60]} />
			<shaderMaterial 
        fragmentShader={fragmentShader2} 
        vertexShader={vertexShader2} 
        uniforms={uniforms}
        transparent
      />
		</mesh>
	);
}

const Lightning = () => {
  return (
    <group>
      <Lightning1 />
      <Lightning2 />
    </group>
  )
}

export default Lightning;
