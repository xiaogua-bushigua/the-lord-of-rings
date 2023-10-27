import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, SpotLight, useDepthBuffer } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { EffectComposer, Bloom, LUT, Vignette  } from '@react-three/postprocessing';
import { LUTCubeLoader, BlendFunction, Resizer, KernelSize } from 'postprocessing';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'

import SauronEye from './SauronEye/SauronEye';
import Tower from './Tower/Tower';
import Dragon from './Dragon/Dragon';
import CloudsLight from './CloudsLight/CloudsLight';
import Island from './Island/Island';
import Sparkles from './Sparks/Sparkles';
import Fire from './Fire/Fire';

const Scene = () => {
	return (
		<>
			<directionalLight intensity={5} color={'#fe6f6f'} position={[-1,0,0]} />
      <ambientLight intensity={1} />
			<OrbitControls />
			<Environment files={'./circus_arena_1k.hdr'} />
			<Environment files={'./satara_night_no_lamps_1k.hdr'} background={'only'} blur={0.4} />
			<Tower />
      <SauronEye />
      <Dragon />
      <CloudsLight />
      <Island />
      <Sparkles />
      <Fire />
		</>
	);
};

function App() {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 3, 1], fov: 50 }} gl={{ sortObjects: true }}>
				<Scene />
			</Canvas>
		</Suspense>
	);
}

export default App;
