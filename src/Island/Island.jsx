import React from 'react';
import { useGLTF, Instances, Instance, Float } from '@react-three/drei';

const Island = () => {
	const { nodes, materials } = useGLTF('./floating_island_oculuskitbashchallenge.glb');
	const pos = [
		{
			model: { position: [3.5, 1, -3], scale: 0.008, rotation: [-2.361, 0.105, 1.2] },
			float: { speed: 1, rotationIntensity: 1.6 },
		},
		{
			model: { position: [-5, -1, -3], scale: 0.006, rotation: [-1.761, 0.855, 0] },
			float: { speed: 1.5, rotationIntensity: 2 },
		},
	];

	return (
		<group>
			<Instances material={materials['material_0']} geometry={nodes.Object_2.geometry}>
				<group>
					{pos.map((item, index) => (
						<Block key={'island' + index} model={item.model} float={item.float} />
					))}
				</group>
			</Instances>
			<Instances range={16} material={materials['材质']} geometry={nodes.Object_3.geometry}>
				<group>
					{pos.map((item, index) => (
						<Block key={'island' + index} model={item.model} float={item.float} />
					))}
				</group>
			</Instances>
		</group>
	);
};

const Block = ({ model, float }) => {
	return (
		<group {...model}>
			<Float {...float}>
				<Instance />
			</Float>
		</group>
	);
};

export default Island;
