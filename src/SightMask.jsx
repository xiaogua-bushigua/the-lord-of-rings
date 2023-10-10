import fragmentShader from './shaders/SightMask/frag.frag';
import vertexShader from './shaders/SightMask/vert.vert';

const SightMask = () => {
	return (
		<mesh position={[0,0,0.01]} scale={[0.35,0.25,1]} rotation={[0,0,Math.PI/2]}>
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
