import { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PubSub from 'pubsub-js';

import fragmentShader1 from '@/shaders/Lightning1/frag.frag';
import vertexShader1 from '@/shaders/Lightning1/vert.vert';
import fragmentShader2 from '@/shaders/Lightning2/frag.frag';
import vertexShader2 from '@/shaders/Lightning2/vert.vert';

const Lightning1 = ({ position, rotation, scale, initTime }) => {
	const mesh = useRef();
	const [clicked, setClicked] = useState(false);
	const [iscale, setIScale] = useState(scale);
  const [clickedTime, setClickedTime] = useState(0)

	const uniforms = useMemo(
		() => ({
			uTime: {
				value: 0,
			},
			uColor: {
				value: new THREE.Vector3(0.9608, 0.6216, 0.3275),
			},
			uBackColor: {
				value: new THREE.Vector3(1, 1, 1),
			},
			uStrength: {
				value: 0.85,
			},
			uWave: {
				value: 2,
			},
		}),
		[]
	);

	useEffect(() => {
		PubSub.subscribe('clickFire', (msg, params) => {
			setClicked(params.status);
      setClickedTime(params.time);
		});
	}, []);

	useFrame((state) => {
		const { clock } = state;
    const time = clock.getElapsedTime();
		mesh.current.material.uniforms.uTime.value = initTime + 0.4 * time;
		if (clicked && time > clickedTime+1.5) {
			mesh.current.material.uniforms.uBackColor.value = new THREE.Vector3(0.9255, 1.0, 0.4902);
			mesh.current.material.uniforms.uColor.value = new THREE.Vector3(0.9803, 1.0, 0.65);
			mesh.current.material.uniforms.uStrength.value = 0.7;
			mesh.current.material.uniforms.uWave.value = 2.2;
			setIScale(1.3);
		}
	});

	return (
		<mesh ref={mesh} position={position} rotation={rotation} scale={iscale} renderOrder={1}>
			<planeGeometry args={[1.2, 1.2, 60, 60]} />
			<shaderMaterial
				fragmentShader={fragmentShader1}
				vertexShader={vertexShader1}
				uniforms={uniforms}
				transparent
				depthWrite={false}
				depthTest={false}
				side={THREE.DoubleSide}
			/>
		</mesh>
	);
};

const Lightning2 = ({ position, rotation, scale, initTime }) => {
	const mesh = useRef();
	const [clicked, setClicked] = useState(false);
	const [iscale, setIScale] = useState(scale);
  const [clickedTime, setClickedTime] = useState(0)

	const uniforms = useMemo(
		() => ({
			uTime: {
				value: 0,
			},
      uColor: {
        value: new THREE.Vector3(0.9765, 0.5569, 0.3137)
      },
      uStrength: {
        value: 0.25
      },
      uWave: {
        value: 0.06
      }
		}),
		[]
	);

  useEffect(() => {
		PubSub.subscribe('clickFire', (msg, params) => {
			setClicked(params.status);
      setClickedTime(params.time);
		});
	}, []);

	useFrame((state) => {
		const { clock } = state;
    const time = clock.getElapsedTime();
		mesh.current.material.uniforms.uTime.value = initTime + 0.4 * time;
    if(clicked && time > clickedTime+1.5) {
      mesh.current.material.uniforms.uColor.value = new THREE.Vector3(0.6667, 0.698, 1.0)
      mesh.current.material.uniforms.uStrength.value = 0.2
      mesh.current.material.uniforms.uWave.value = 0.08
      setIScale(2);
    }
	});
	return (
		<mesh ref={mesh} position={position} rotation={rotation} scale={iscale} renderOrder={1}>
			<planeGeometry args={[1, 1, 60, 60]} />
			<shaderMaterial
				fragmentShader={fragmentShader2}
				vertexShader={vertexShader2}
				uniforms={uniforms}
				transparent
				depthWrite={false}
				depthTest={false}
				side={THREE.DoubleSide}
			/>
		</mesh>
	);
};

const Lightning = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedTime, setClickedTime] = useState(0)

  const [l1PosXoffset, setL1PosXoffset] = useState(0)
  const [l1PosYoffset, setL1PosYoffset] = useState(0)
  const [l2PosXoffset, setL2PosXoffset] = useState(0)
  const [l2PosYoffset, setL2PosYoffset] = useState(0)

  useEffect(() => {
		PubSub.subscribe('clickFire', (msg, params) => {
			setClicked(params.status);
      setClickedTime(params.time);
		});
	}, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    if(clicked && time > clickedTime+1.5) {
      setL2PosXoffset(0.2)
      setL2PosYoffset(-0.1)
      setL1PosXoffset(0.2)
      setL1PosYoffset(0.1)
    }
	});

	return (
		<group>
			{/* 右上 */}
			<Lightning1 position={[1.2+l1PosXoffset, l1PosYoffset, 0.01]} rotation={[0, 0, 0]} initTime={4.9} scale={0.9} />
			<Lightning1 position={[1.2+l1PosXoffset, 0.3+l1PosYoffset, 0.01]} rotation={[0, 0, 0.4]} initTime={4.8} scale={0.8} />
			<Lightning1 position={[1+l1PosXoffset, 0.5+l1PosYoffset, 0.01]} rotation={[0, 0, 0]} initTime={4.7} scale={0.7} />
			{/* 左上 */}
			<Lightning1 position={[-1.2-l1PosXoffset, l1PosYoffset, 0.01]} rotation={[0, 0, -Math.PI]} initTime={4.6} scale={0.9} />
			<Lightning1 position={[-1.2-l1PosXoffset, 0.3+l1PosYoffset, 0.01]} rotation={[0, 0, -Math.PI - 0.4]} initTime={4.5} scale={0.8} />
			<Lightning1 position={[-1-l1PosXoffset, 0.5+l1PosYoffset, 0.01]} rotation={[0, 0, -Math.PI]} initTime={4.4} scale={0.7} />
			{/* 右下 */}
			<Lightning2
				position={[0.6+l2PosXoffset, -0.5+l2PosYoffset, 0.02]}
				rotation={[0, 0, Math.PI * 1.5 + 0.2]}
				scale={[0.9, 1.5, 1.5]}
				initTime={3.9}
			/>
			{/* 左下 */}
			<Lightning2
				position={[-0.6-l2PosXoffset, -0.55+l2PosYoffset, 0.02]}
				rotation={[0, 0, -Math.PI * 1.5 - 0.2]}
				scale={[0.9, 1.5, 1.5]}
				initTime={3.7}
			/>
		</group>
	);
};

export default Lightning;
