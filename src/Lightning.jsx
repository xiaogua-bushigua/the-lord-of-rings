import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import fragmentShader1 from './shaders/Lightning1/frag.frag';
import vertexShader1 from './shaders/Lightning1/vert.vert';
import fragmentShader2 from './shaders/Lightning2/frag.frag';
import vertexShader2 from './shaders/Lightning2/vert.vert';
import fragmentShader3 from './shaders/Lightning3/frag.frag';
import vertexShader3 from './shaders/Lightning3/vert.vert';

const Lightning1 = ({position, rotation, scale, initTime}) => {
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
    mesh.current.material.uniforms.uTime.value = initTime + 0.4 * clock.getElapsedTime();
  })
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

const Lightning2 = ({position, rotation, scale, initTime}) => {
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
    mesh.current.material.uniforms.uTime.value = initTime + 0.4 * clock.getElapsedTime();
  })
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
}

const Lightning3 = ({position, rotation, scale, initTime}) => {
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
    mesh.current.material.uniforms.uTime.value = initTime + 0.4 * clock.getElapsedTime();
  })

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
}

const Lightning = () => {
  return (
    <group>
      {/* 右上 */}
      <Lightning1 position={[0.9,0.3,0.1]} rotation={[0,0,Math.PI-0.25]} initTime={0} scale={0.6}/>
      <Lightning1 position={[1,0.3,0.2]} rotation={[0,0,Math.PI+0.5]} initTime={5} scale={1}/>
      {/* 左上 */}
      <Lightning1 position={[-0.9,0.3,0.03]} rotation={[0,0,0.25]} initTime={10} scale={0.6}/>
      <Lightning1 position={[-1,0.3,0.035]} rotation={[0,0,-0.5]} initTime={15} scale={1}/>
      {/* 右下 */}
      <Lightning1 position={[0.9,-0.3,0.045]} rotation={[0,0,Math.PI+0.25]} initTime={20} scale={0.6}/>
      <Lightning1 position={[1,-0.3,0.04]} rotation={[0,0,Math.PI-0.5]} initTime={25} scale={1}/>
      {/* 左下 */}
      <Lightning1 position={[-0.9,-0.3,0.055]} rotation={[0,0,-0.25]} initTime={30} scale={0.6}/>
      <Lightning1 position={[-1,-0.3,0.06]} rotation={[0,0,0.5]} initTime={35} scale={1}/>
      {/* lightning2 */}
      <Lightning2 position={[1.1,0,0.065]} rotation={[0,0,-Math.PI/2]} scale={[0.9,1.5,1.5]} initTime={5}/>
      <Lightning2 position={[-1.1,0,0.07]} rotation={[0,0,Math.PI/2]} scale={[0.9,1.5,1.5]} initTime={10}/>
    </group>
  )
}

export default Lightning;
