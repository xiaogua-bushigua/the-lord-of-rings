import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, SpotLight, useDepthBuffer } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { EffectComposer, Bloom, LUT, Vignette  } from '@react-three/postprocessing';
import { LUTCubeLoader, BlendFunction, Resizer, KernelSize } from 'postprocessing';
import { useLoader } from '@react-three/fiber';

import SauronEye from './SauronEye/SauronEye';
import Tower from './Tower/Tower';

const Scene = () => {
	const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube');
	return (
		<>
			<color attach={'background'} args={['black']} />
			<directionalLight intensity={4} color={'#fe6f6f'} position={[-4, 3, 4]} />
			{/* <SpotLight
				castShadow
				penumbra={1}
				distance={7}
				angle={0.25}
				attenuation={5}
				anglePower={1.5}
				color="#024560"
				position={[3, 4, 0]}
			/> */}
			{/* <EffectComposer disableNormalPass={true}>
        <Vignette
          offset={.5} // vignette offset
          darkness={.55} // vignette darkness
          eskil={false} // Eskil's vignette technique
          blendFunction={BlendFunction.NORMAL} // blend mode
        />
				<Bloom mipmapBlur luminanceThreshold={1} />
				<LUT lut={texture} />
			</EffectComposer> */}
			<OrbitControls />
			<Environment files={'./circus_arena_1k.hdr'} />
			<Environment files={'./satara_night_no_lamps_1k.hdr'} background={'only'} blur={0.4} />
			<Tower />
      <SauronEye />
		</>
	);
};

function App() {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ sortObjects: true }}>
				<Scene />
			</Canvas>
		</Suspense>
	);
}

export default App;
