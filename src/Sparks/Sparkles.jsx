import { Sparkles } from '@react-three/drei';

const SparksBottom = () => {
	return (
		<>
			<object3D position={[-5, -2.3, -2.4]}>
				<Sparkles count={12} scale={[0.5, 1, 0.5]} color={'#c74337'} size={3} speed={0.3} noise={0.3} />
			</object3D>
			<object3D position={[4, -1.25, -2.5]}>
				<Sparkles count={12} scale={[0.75, 1.5, 0.75]} color={'#8276d2'} size={5} speed={0.3} noise={0.3} />
			</object3D>
		</>
	);
}

export default SparksBottom