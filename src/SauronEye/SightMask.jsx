import PubSub from 'pubsub-js';
import { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

import fragmentShader from '@/shaders/SightMask/frag.frag';
import vertexShader from '@/shaders/SightMask/vert.vert';

const SightMask = () => {
  const mesh = useRef();
	const [clicked, setClicked] = useState(false);
	const [YScale, setYScale] = useState([0.35,0.25,1]);
  const [clickedTime, setClickedTime] = useState(0)

  useEffect(() => {
		PubSub.subscribe('clickFire', (msg, params) => {
			setClicked(params.status);
      setClickedTime(params.time);
		});
	}, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
		if (clicked) {
      if(time < clickedTime + 1.5) {
        setYScale([0.35, -(time-clickedTime)/15+0.25, 1]);
      } else {
			  setYScale([0.45,0.58,1]);
      }
		}
	});

	return (
		<mesh ref={mesh} position={[0,0,0.01]} scale={YScale} rotation={[0,0,Math.PI/2]}>
			<planeGeometry args={[4, 4, 60, 60]} />
			<shaderMaterial 
        fragmentShader={fragmentShader} 
        vertexShader={vertexShader} 
        transparent
      />
		</mesh>
	);
};

export default SightMask;
