import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PubSub from "pubsub-js";

import fragmentShader from '@/shaders/FireEye/frag.frag';
import vertexShader from '@/shaders/FireEye/vert.vert';

const FireEye = () => {
  const mesh = useRef();
  const [clicked, setClicked] = useState(false)
  const [clickedTime, setClickedTime] = useState(0)
  const [eyeScale, setEyeScale] = useState(1.0)

  const [ctime, setctime] = useState(0)

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0
      },
      uFireDirection: {
        value: 1.0
      },
      uAmount: {
        value: 2.0
      },
      uResolution: {
        value: 1.0
      },
      uFrequency1: {
        value: 0.05
      },
      uFrequency2: {
        value: 0.05
      },
      uRed: {
        value: 1.0
      }
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    setClickedTime(time);
    mesh.current.material.uniforms.uTime.value = 0.4 * time;
    if(clicked) {
      if(time > ctime+1.5) {
        mesh.current.material.uniforms.uFireDirection.value = -1.0
        mesh.current.material.uniforms.uAmount.value = 2.5
        mesh.current.material.uniforms.uResolution.value = 1.3
        mesh.current.material.uniforms.uFrequency1.value = 0.2
        mesh.current.material.uniforms.uFrequency2.value = 0.01
        mesh.current.material.uniforms.uRed.value = 1.5
        setEyeScale(1.3)
      }
    }
  })

  const handleClickFire = () => {
    setClicked(true)
    setctime(clickedTime)
    if(eyeScale === 1.0) {
      PubSub.publish('clickFire',{
        status: true,
        time: clickedTime
      })
    }
  }
	return (
		<mesh ref={mesh} onClick={handleClickFire} scale={eyeScale}>
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
