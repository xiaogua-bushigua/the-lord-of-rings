import { useMemo, useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PubSub from 'pubsub-js';

import fragmentShader from '@/shaders/Sight/frag.frag';
import vertexShader from '@/shaders/Sight/vert.vert';

const Sight = () => {
  const mesh = useRef();
	const [clicked, setClicked] = useState(false);
	const [YScale, setYScale] = useState([0.35,0.15,1]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0
      },
      uColor: {
        value: 0.4
      },
      uPower: {
        value: 1.5
      },
      uResolution: {
        value: 16
      },
      uWave: {
        value: 6.2832
      },
      uDirection: {
        value: 1
      },
      uFrequency: {
        value: 0.05
      }
    }), []
  );

  useEffect(() => {
		PubSub.subscribe('clickFire', (msg, params) => {
			setClicked(params.status);
		});
	}, []);

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.uTime.value = 0.4 * clock.getElapsedTime();
    if (clicked) {
			setYScale([0.42,0.35,1]);
      mesh.current.material.uniforms.uColor.value = 0.55
      mesh.current.material.uniforms.uPower.value = 2.0
      mesh.current.material.uniforms.uResolution.value = 24
      mesh.current.material.uniforms.uWave.value = 3.2832
      mesh.current.material.uniforms.uDirection.value = -1
      mesh.current.material.uniforms.uFrequency.value = 0.15
		}
  })
	return (
		<mesh ref={mesh} position={[0,0,0.015]} scale={YScale} rotation={[0,0,Math.PI/2]}>
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
