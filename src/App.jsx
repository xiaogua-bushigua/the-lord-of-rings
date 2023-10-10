import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

import FireEye from './FireEye';
import Lightning from './Lightning';
import Sight from './Sight';
import SightMask from './SightMask';
function App() {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <color attach={'background'} args={['black']} />
				<ambientLight intensity={2} />
				<directionalLight intensity={2} position={[1, 1, 1]} />
				<OrbitControls/>
        <FireEye />
        <Lightning />
        <Sight />
        <SightMask />
			</Canvas>
		</Suspense>
	);
}

export default App;
