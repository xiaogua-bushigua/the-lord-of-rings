import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useScroll, ScrollControls } from '@react-three/drei';
import { Suspense } from 'react';

import SauronEye from './SauronEye/SauronEye';
import Tower from './Tower/Tower';
import Dragon from './Dragon/Dragon';
import CloudsLight from './CloudsLight/CloudsLight';
import Island from './Island/Island';
import Sparkles from './Sparks/Sparkles';
import Fire from './Fire/Fire';

const Scene = () => {
	const scroll = useScroll();

	useFrame((state) => {
		const camera = state.camera;

		let o = scroll.offset;
		const pi = Math.PI;

		if (o < 0.8) {
			const x = (o + 4 * Math.sqrt(o) + 1) * Math.cos(o * pi * 2.5 * 1.25) - 0.2;
			const z = (o + 4 * Math.sqrt(o)) * Math.sin(o * pi * 2.5 * 1.25) + 0.6;
			const y = Math.pow(Math.E, o) - 1 + 0.4;
			camera.position.set(x, y, z);
			camera.lookAt(0, 0, 0);
		} else {
			const x0 = (0.8 + 4 * Math.sqrt(0.8) + 1) * Math.cos(0.8 * pi * 2.5 * 1.25) - 0.2;
			const z0 = (0.8 + 4 * Math.sqrt(0.8)) * Math.sin(0.8 * pi * 2.5 * 1.25) + 0.6;
			const y0 = Math.pow(Math.E, 0.8) - 1 + 0.4;

			const x1 = ((0.2 - x0) / 0.2) * o + 0.2 - (0.2 - x0) / 0.2;
			const z1 = ((1.4 - z0) / 0.2) * o + 1.4 - (1.4 - z0) / 0.2;
			const y1 = ((1.8 - y0) / 0.2) * o + 1.8 - (1.8 - y0) / 0.2;

			camera.position.set(x1, y1, z1);
			camera.lookAt(o - 0.8, 9 * o - 7.2, 0);
		}
    camera.updateProjectionMatrix();
	});

	return (
		<group position={[0.25, -0.25, 0]}>
			<directionalLight intensity={5} color={'#fe6f6f'} position={[-1, 0, 0]} />
			<ambientLight intensity={1} />
			<Environment files={'./circus_arena_1k.hdr'} />
			<Environment files={'./satara_night_no_lamps_1k.hdr'} background={'only'} blur={0.4} />
			<Tower />
			<SauronEye />
			{/* <Dragon scroll={scroll} /> */}
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
			<Canvas camera={{ position: [0, 0, 0], fov: 60 }}>
				<ScrollControls maxSpeed={0.05} pages={1}>
					<Scene />
				</ScrollControls>
			</Canvas>
		</Suspense>
	);
}

export default App;
