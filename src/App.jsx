import { Canvas, useFrame } from '@react-three/fiber';
import {
	OrbitControls,
	Environment,
	SpotLight,
	useDepthBuffer,
	Center,
	useScroll,
	ScrollControls,
} from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { EffectComposer, Bloom, LUT, Vignette } from '@react-three/postprocessing';
import { LUTCubeLoader, BlendFunction, Resizer, KernelSize } from 'postprocessing';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import SauronEye from './SauronEye/SauronEye';
import Tower from './Tower/Tower';
import Dragon from './Dragon/Dragon';
import CloudsLight from './CloudsLight/CloudsLight';
import Island from './Island/Island';
import Sparkles from './Sparks/Sparkles';
import Fire from './Fire/Fire';

// 别转相机了，转物体

const Scene = () => {
	const scroll = useScroll();

	useFrame((state) => {
		const camera = state.camera;

    let o = scroll.offset;
    const pi = Math.PI;

    if(o < 0.8) {
      const x = (o+4*Math.sqrt(o)+1.2)*Math.cos(o*pi*2.5*1.25)-0.2
      const z = (o+4*Math.sqrt(o))*Math.sin(o*pi*2.5*1.25)+0.6
      const y = (o)*o+0.4
      camera.position.set(x, y, z)
    } else if (o > 0.9) {
      camera.position.lerp(new THREE.Vector3(0.2, 1.8, 1.4), 0.01);
      camera.lookAt(0.2, 1.8, 0);
			camera.updateProjectionMatrix();
    }
	});

	return (
		<group position={[0.25, -0.25, 0]}>
			<directionalLight intensity={5} color={'#fe6f6f'} position={[-1, 0, 0]} />
			<ambientLight intensity={1} />
			<OrbitControls enableZoom={false} />
			<Environment files={'./circus_arena_1k.hdr'} />
			<Environment files={'./satara_night_no_lamps_1k.hdr'} background={'only'} blur={0.4} />
			<Tower />
			<SauronEye />
			{/* <Dragon /> */}
			<CloudsLight />
			<Island />
			<Sparkles />
			<Fire />
		</group>
	);
};

function App() {
	return (
		<Suspense fallback={null}>
			{/* <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }} gl={{ sortObjects: true }}> */}
			<Canvas camera={{ position: [0, 0, 0], fov: 50 }}>
				<ScrollControls damping={0.1} maxSpeed={0.05} pages={1}>
					<Scene />
				</ScrollControls>
			</Canvas>
		</Suspense>
	);
}

export default App;
