import { Cloud, Clouds, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { random } from 'maath';
import { useControls } from 'leva';

const CloudsLight = () => {
	const light = useRef();
	const [flash] = useState(() => new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 }));
  const cloud = './cloud.png';

  // const config = useControls({
  //   seed: { value: 16, min: 1, max: 100, step: 1 },
  //   speed: { value: 0.2, min: 0, max: 10, step: 0.1 },
  //   growth: { value: 7, min: 0, max: 20, step: 1 },
  //   segments: { value: 80, min: 1, max: 80, step: 1 },
  //   opacity: { value: 0.3, min: 0, max: 1, step: 0.01 },
  //   volume: { value: 5, min: 0, max: 100, step: 0.1 },
  //   fade: { value: 35, min: 0, max: 400, step: 1 },
  //   color: "white",
  // })

	useFrame((state, delta) => {
		const impulse = flash.update(state.clock.elapsedTime, delta);
		light.current.intensity = impulse * 15000;
	});

	return (
		<Clouds material={THREE.MeshLambertMaterial} limit={800} >
			<Cloud
        scale={0.15}
        position={[0,1,0]}
        bounds={[5, 2, 2]}
        texture={cloud}
				seed={16}
				speed={0.2}
				growth={7}
				segments={80}
				opacity={0.4}
				volume={2.6}
				fade={58}
        color='white'
			/>
      <Cloud
        scale={0.15}
        position={[3.8, -0.9, -2]}
        bounds={[3, 5, 2]}
        texture={cloud}
				seed={16}
				speed={0.5}
				growth={10}
				segments={80}
				opacity={0.2}
				volume={1}
				fade={58}
        color='white'
			/>
      <Cloud
        scale={0.12}
        position={[-6, -2, -2.3]}
        bounds={[4, 5, 4]}
        texture={cloud}
				seed={16}
				speed={0.5}
				growth={7}
				segments={80}
				opacity={0.1}
				volume={4.6}
				fade={58}
        color='white'
			/>
		  <pointLight ref={light} color="blue" />
		</Clouds>
	);
};

export default CloudsLight;
